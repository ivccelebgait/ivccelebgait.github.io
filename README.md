# CelebGait

**CelebGait** is a large-scale, in-the-wild benchmark for **clothing-changing gait recognition**. It is designed to support research on identity matching under realistic long-term appearance changes, where people may wear very different clothes across time, while also appearing in diverse scenes, viewpoints, and motion patterns.

Unlike traditional gait datasets collected in controlled environments, CelebGait focuses on **real-world unconstrained scenarios**. It captures the practical challenges that strongly affect gait recognition systems, including clothing variation, background complexity, viewpoint changes, non-periodic walking behaviors, and scene diversity.

CelebGait Website is at https://ivccelebgait.github.io
---

## Overview

CelebGait contains:

- **4,500 identities**
- **21,299 gait sequences**
- **10,543 viewpoints**
- **365+ day temporal span**
- **Silhouette and pose modalities**
- **Indoor and outdoor scenes**

Each identity is associated with multiple walking sequences collected from public online videos. On average, each identity contains **4.7 sequences**, and each sequence has an average length of **122 frames**.

In addition to silhouette sequences, CelebGait provides synchronized **2D pose** and **3D pose-related annotations** to support silhouette-based, pose-based, and multimodal gait recognition research.
∑œ∂
---

## Why CelebGait?

Gait recognition has strong potential for long-range and non-contact biometric analysis, but existing benchmarks still have important limitations:

- many datasets are collected in **laboratory or semi-controlled environments**
- some in-the-wild datasets lack **long-term clothing variation**
- clothing-changing settings are often limited in scale or realism
- current models still rely heavily on **clothing-related appearance cues**

CelebGait is introduced to address this gap by providing a benchmark that emphasizes **long-term, real-world clothing changes**. It offers a more realistic test bed for studying **clothing-invariant identity representation learning**.

---

## Key Features

### 1. Long-term clothing-changing scenarios
CelebGait is specifically built for evaluating gait recognition when the same person appears in **different outfits across long time spans**, sometimes extending over **multiple years**.

### 2. In-the-wild data collection
The dataset is collected from public online video platforms and reflects highly unconstrained environments, including:

- red carpets
- airports
- street scenes
- stage events
- interviews and public appearances

### 3. Rich visual diversity
CelebGait includes substantial variation in:

- **clothing**: formal wear, casual wear, sportswear, dresses, coats, hats, masks, etc.
- **viewpoint**: large cross-view changes
- **scene**: indoor and outdoor environments across different countries and devices
- **motion**: walking with turning, waving, nodding, and other non-periodic actions

### 4. Multimodal support
CelebGait provides multiple modalities for gait analysis:

- **silhouette sequences**
- **2D pose**
- **3D pose-related structural cues**

This makes the benchmark suitable for studying **silhouette-based**, **pose-based**, and **multimodal** gait recognition methods.

### 5. Challenging benchmark
Extensive experiments show that the performance of existing gait recognition methods drops notably on CelebGait, demonstrating that **clothing interference remains a major bottleneck** in real-world gait recognition.

---

## Data Collection and Processing

CelebGait is constructed through a multi-stage pipeline that combines automated preprocessing with manual verification:

1. **Identity list construction**  
   Public figures from multiple countries and professions are used as identity indices.

2. **Video retrieval**  
   Walking-related clips are collected from public online platforms using identity names and gait-related keywords.

3. **Sequence extraction**  
   Pedestrian regions are extracted through detection, tracking, and segmentation.

4. **Frame filtering**  
   Low-quality frames with occlusion or failed pose estimation are removed.

5. **Manual subject selection**  
   The target subject is manually identified in each video.

6. **Cross-video consistency check**  
   Multiple reviewers verify identity consistency across videos to ensure data quality.

This design helps preserve both **large-scale diversity** and **identity reliability** under challenging real-world conditions.

---

## Benchmark Split

To facilitate standardized evaluation, CelebGait is split into:

- **3,000 identities for training**
- **1,500 identities for testing**

For each test identity:

- **one sequence** is randomly selected as the **query**
- the remaining sequences form the **gallery**

Models are evaluated by ranking gallery sequences according to their similarity to the query sequence.

---

## Privacy and Ethics

CelebGait is designed with privacy protection in mind:

- all data are collected from **publicly accessible videos**
- only **public figures in open scenarios** are included
- all subjects are anonymized with **random IDs**
- no real names, facial data, uploader metadata, or traceable identifiers are released
- only gait-related representations such as **silhouettes and pose** are preserved

The dataset is released **for non-commercial academic research only**. Any use for commercial identification, surveillance, or intentional re-identification is strictly prohibited.

---

## Baseline and Findings

To study the challenges introduced by CelebGait, we also provide **GaitUniFormer**, a multimodal baseline that integrates silhouette and pose information through fine-grained cross-modal interaction.

Experimental results show that:

- both silhouette-based and pose-based methods face clear limitations on CelebGait
- multimodal approaches perform better than single-modality methods
- stronger cross-modal interaction is important for learning more robust clothing-invariant gait representations

These findings make CelebGait a valuable benchmark for future work on **real-world clothing-changing gait recognition**.

---

## Applications

CelebGait can support research in:

- gait recognition
- clothing-invariant biometric modeling
- multimodal person representation learning
- robust cross-domain identity matching
- pose-silhouette fusion
- in-the-wild human motion understanding

---

## Citation

If you use CelebGait in your research, please cite our paper:

```bibtex
@inproceedings{li2026celebgait,
  title={CelebGait: An In-the-Wild Clothing-Changing Gait Benchmark},
  author={Li, Zeyu and Hou, Saihui and Guo, Qiannan and Su, Hui and Lang, Wenpeng and Huang, Yongzhen},
  booktitle={ACM Multimedia},
  year={2026}
}