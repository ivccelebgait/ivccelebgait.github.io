#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageOps, ImageDraw


IMAGE_SUFFIXES = {".jpg", ".jpeg", ".png", ".bmp", ".webp"}


def natural_key(path: Path) -> list[object]:
    parts: list[object] = []
    token = ""
    is_digit = False

    for char in path.name:
        if char.isdigit():
            if token and not is_digit:
                parts.append(token.lower())
                token = ""
            token += char
            is_digit = True
        else:
            if token and is_digit:
                parts.append(int(token))
                token = ""
            token += char
            is_digit = False

    if token:
        parts.append(int(token) if is_digit else token.lower())

    return parts


def find_video_dirs(root: Path) -> list[Path]:
    video_dirs: list[Path] = []
    for person_dir in sorted((p for p in root.iterdir() if p.is_dir()), key=natural_key):
        for video_dir in sorted((p for p in person_dir.iterdir() if p.is_dir()), key=natural_key):
            video_dirs.append(video_dir)
    return video_dirs


def collect_frames(video_dir: Path) -> list[Path]:
    frames: list[Path] = []
    sequence_dirs = sorted((p for p in video_dir.iterdir() if p.is_dir()), key=natural_key)

    for sequence_dir in sequence_dirs:
        for image_path in sorted(
            (p for p in sequence_dir.iterdir() if p.is_file() and p.suffix.lower() in IMAGE_SUFFIXES),
            key=natural_key,
        ):
            frames.append(image_path)

    return frames


def sample_uniform(paths: list[Path], count: int) -> list[Path]:
    if not paths:
        return []
    if count <= 0:
        return []
    if len(paths) <= count:
        return paths[:]

    indices = [round(i * (len(paths) - 1) / (count - 1)) for i in range(count)] if count > 1 else [len(paths) // 2]
    return [paths[index] for index in indices]


def load_tile(
    image_path: Path,
    tile_width: int,
    tile_height: int,
    keep_aspect: bool,
    background_color: tuple[int, int, int],
) -> Image.Image:
    with Image.open(image_path) as image:
        image = image.convert("RGB")
        if keep_aspect:
            return ImageOps.pad(image, (tile_width, tile_height), color=background_color, method=Image.Resampling.LANCZOS)
        return image.resize((tile_width, tile_height), Image.Resampling.LANCZOS)


def build_grid(
    image_paths: list[Path],
    cols: int,
    rows: int,
    tile_width: int,
    tile_height: int,
    keep_aspect: bool,
    background_color: tuple[int, int, int],
    label: bool,
) -> Image.Image:
    canvas = Image.new("RGB", (cols * tile_width, rows * tile_height), background_color)
    draw = ImageDraw.Draw(canvas)

    for index, image_path in enumerate(image_paths):
        if index >= cols * rows:
            break

        tile = load_tile(image_path, tile_width, tile_height, keep_aspect, background_color)
        col = index % cols
        row = index // cols
        x = col * tile_width
        y = row * tile_height
        canvas.paste(tile, (x, y))

        if label:
            text = str(image_path.parent.parent.name) + "/" + str(image_path.parent.name) + "/" + image_path.name
            text_bg_height = 24
            draw.rectangle((x, y, x + tile_width, y + text_bg_height), fill=(0, 0, 0))
            draw.text((x + 6, y + 4), text, fill=(255, 255, 255))

    return canvas


def parse_color(raw: str) -> tuple[int, int, int]:
    stripped = raw.strip().lstrip("#")
    if len(stripped) != 6:
        raise argparse.ArgumentTypeError("背景颜色应为 6 位十六进制，例如 FFFFFF")
    try:
        return tuple(int(stripped[i : i + 2], 16) for i in range(0, 6, 2))  # type: ignore[return-value]
    except ValueError as exc:
        raise argparse.ArgumentTypeError("背景颜色应为合法十六进制") from exc


def flatten_samples(video_dirs: Iterable[Path], samples_per_video: int, max_images: int | None = None) -> list[Path]:
    selected: list[Path] = []

    for video_dir in video_dirs:
        frames = collect_frames(video_dir)
        sampled = sample_uniform(frames, samples_per_video)
        if not sampled:
            print(f"[WARN] 跳过空视频目录: {video_dir}")
            continue
        if max_images is None:
            selected.extend(sampled)
            continue

        remaining = max_images - len(selected)
        if remaining <= 0:
            break

        selected.extend(sampled[:remaining])
        if len(selected) >= max_images:
            break

    return selected


def main() -> None:
    parser = argparse.ArgumentParser(
        description="从 root/P*/V*/S* 目录结构中，每个视频目录均匀抽取 n 张图片并拼成 x*y 网格大图。"
    )
    parser.add_argument("--root", required=True, type=Path, help="数据根目录")
    parser.add_argument("--n", required=True, type=int, help="每个视频目录均匀抽取的图片数")
    parser.add_argument("--x", required=True, type=int, help="网格列数")
    parser.add_argument("--y", required=True, type=int, help="网格行数")
    parser.add_argument("--tile-width", type=int, default=256, help="每个小图宽度，默认 256")
    parser.add_argument("--tile-height", type=int, default=256, help="每个小图高度，默认 256")
    parser.add_argument("--output", type=Path, default=Path("video_grid.jpg"), help="输出大图路径")
    parser.add_argument("--background", type=parse_color, default=(255, 255, 255), help="背景颜色，如 FFFFFF")
    parser.add_argument("--stretch", action="store_true", help="直接拉伸到目标尺寸，默认保持纵横比并补边")
    parser.add_argument("--label", action="store_true", help="给每张小图叠加路径标签")
    args = parser.parse_args()

    if args.n <= 0 or args.x <= 0 or args.y <= 0 or args.tile_width <= 0 or args.tile_height <= 0:
        raise SystemExit("n、x、y、tile-width、tile-height 都必须是正整数")

    root = args.root.expanduser().resolve()
    if not root.exists() or not root.is_dir():
        raise SystemExit(f"root 不存在或不是目录: {root}")

    video_dirs = find_video_dirs(root)
    if not video_dirs:
        raise SystemExit(f"未在 {root} 下找到任何视频目录")

    total_cells = args.x * args.y
    sampled_images = flatten_samples(video_dirs, args.n, max_images=total_cells)
    if not sampled_images:
        raise SystemExit("没有找到可用图片")

    canvas = build_grid(
        image_paths=sampled_images,
        cols=args.x,
        rows=args.y,
        tile_width=args.tile_width,
        tile_height=args.tile_height,
        keep_aspect=not args.stretch,
        background_color=args.background,
        label=args.label,
    )

    args.output.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(args.output)

    print(f"视频目录数: {len(video_dirs)}")
    print(f"采样图片数: {len(sampled_images)}")
    print(f"输出文件: {args.output.resolve()}")


if __name__ == "__main__":
    main()
