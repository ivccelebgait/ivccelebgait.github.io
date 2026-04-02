document.addEventListener('DOMContentLoaded', () => {
  const images = [
    './static/images/P0000019_V0000001_00000001.jpg',
    './static/images/P0000019_V0000001_00000002.jpg',
    './static/images/P0000019_V0000001_00000007.jpg',
    './static/images/P0000019_V0000001_00000012.jpg',
    './static/images/P0000059_V0000001_00000001.jpg',
    './static/images/P0000059_V0000002_00000001.jpg',
    './static/images/P0000059_V0000002_00000003.jpg',
    './static/images/P0000059_V0000002_00000008.jpg',
    './static/images/P0002518_V0000001_00000002.jpg',
    './static/images/P0002518_V0000003_00000019.jpg',
    './static/images/P0002518_V0000003_00000175.jpg',
    './static/images/P0003086_V0000002_00000003.jpg',
    './static/images/P0003086_V0000004_00000002.jpg',
    './static/images/P0003086_V0000005_00000016.jpg'
  ];

  const carousel = document.getElementById('celebgait-carousel');
  if (!carousel || images.length === 0) {
    return;
  }

  const imageEl = document.getElementById('celebgait-carousel-image');
  const counterEl = document.getElementById('celebgait-carousel-counter');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');

  if (!imageEl || !prevBtn || !nextBtn) {
    return;
  }

  let index = 0;

  const update = () => {
    imageEl.src = images[index];
    if (counterEl) {
      counterEl.textContent = `${index + 1} / ${images.length}`;
    }
  };

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    update();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    update();
  });

  update();
});
