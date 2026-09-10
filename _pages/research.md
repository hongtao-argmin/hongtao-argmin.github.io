---
layout: page
title: Research
permalink: /research/
description: Computational foundations for next-generation imaging
nav: true
nav_order: 3
# — large-scale optimization, physics + learning, and biomedical & scientific imaging.
# toc:
#   sidebar: left
---

<div class="research-page" markdown="1">

My research focuses on extracting meaningful information from limited and imperfect measurements. I organize my work around three connected themes: **numerical methods** for large-scale inverse problems, **physics + learning** for reliable reconstruction, and **biomedical & scientific** imaging. Together, these themes connect advances in numerical computation with new capabilities in computational imaging.

My long-term vision is to develop the **computational foundations** for next-generation imaging systems that integrate mathematical structure, physical models, and data-driven learning. I am particularly interested in **jointly recovering images and latent imaging parameters** from incomplete measurements, pushing the limits of what can be **resolved, tracked, and quantified**.

<div class="research-vision">
{% include figure.liquid
  path="assets/img/research/RV_Summary.png"
  class="img-fluid research-vision-img"
  alt="Research vision: mathematical structure, imaging physics, and data-driven learning combine into computational imaging to resolve, track, and quantify"
  width="100%"
  avoid_scaling=true
  cache_bust=true
  zoomable=true
  zoom_scale=1.36
  caption="Computational imaging at the intersection of numerical methods, physics, and learning."
%}
</div>

{% comment %}
<ul class="research-toc">
  <li><a href="#optimization">Numerical Methods</a></li>
  <li><a href="#physics-learning">Physics + Learning for Computational Imaging</a></li>
  <li><a href="#computational-imaging">Biomedical &amp; Scientific Imaging</a></li>
</ul>
{% endcomment %}

<hr class="research-divider">

### Numerical Methods
{: #optimization}

Modern inverse problems often involve high-dimensional variables, nonlinear forward models, incomplete data, and complex physical models, posing fundamental challenges in both computation and reliability. My research develops numerical methods that exploit **mathematical and problem structure** to address these challenges efficiently and reliably.

My work draws broadly on **numerical analysis, scientific computing, and optimization**. A recurring principle is to identify exploitable structure—across scales, curvature, low-dimensional representations, or forward models—and incorporate it directly into algorithm design. This perspective enables efficient computation for inverse problems that would otherwise be prohibitively expensive to solve.


**Focus areas**

- Multigrid and multilevel methods
- Quasi-Newton and proximal methods
- Krylov-subspace methods and preconditioning
- Stochastic and mini-batch optimization
- Acceleration and extrapolation methods

**Related publications**

</div>

<div class="research-refs">
{% bibliography --group_by none --template bib_plain --style ieee --query @*[key=hong2026minibatch] || @*[key=hong2026genkrylov] || @*[key=hong2025nystrom]  || @*[key=hong2022nesterov] || @*[key=hong2018merging] %}
</div>

<div class="research-page" markdown="1">

<hr class="research-divider">

### Physics + Learning for Computational Imaging
{: #physics-learning}

Computational imaging provides explicit knowledge of how measurements are physically generated, while **data-driven learning** can capture complex image structure from data. My research brings these complementary sources of information together within model-based reconstruction.

I am particularly interested in integrating learning with physical forward models, using learned priors, denoisers, and other data-driven representations to model image structure that is difficult to characterize explicitly. This integration allows learned information to guide reconstruction while maintaining consistency with the measurements and underlying imaging physics.

{%comment%}
In computational imaging, reconstruction is guided not only by the measured data, but also by our knowledge of the **underlying imaging physics** and the structure of the images being recovered. My research combines physical models with **data-driven learning** to incorporate both sources of information into model-based reconstruction.

I am particularly interested in integrating learning with physical forward models, using learned priors, denoisers, and other data-driven representations to model image structure that is difficult to characterize explicitly. This integration allows learned information to guide reconstruction while maintaining consistency with the measurements and underlying imaging physics.
{%endcomment%}

**Focus areas**

- Learned priors
- Physics-integrated iterative reconstruction
- Convergence and reliability of learning-based methods

**Related publications**

</div>

<div class="research-refs">
{% bibliography --group_by none --template bib_plain --style ieee --query @*[key=hong2026genkrylov] || @*[key=hong2025cqnpm] || @*[key=hong2024ppnp] || @*[key=hong2020redwpm]  %}
</div>

<div class="research-page" markdown="1">

<hr class="research-divider">

### Biomedical & Scientific Imaging
{: #computational-imaging}

Biomedical and scientific imaging increasingly seek to recover information that is not directly accessible from measured data, from high-resolution anatomical structure to dynamic and quantitative information. My research develops computational imaging methods that **expand what can be resolved, tracked, and quantified** from limited and imperfect measurements.

I work across **magnetic resonance imaging, photoacoustic, and optical imaging**, where different measurement physics give rise to distinct inverse problems and computational challenges. Across these modalities, I am particularly interested in enabling faster and more robust imaging, resolving dynamic processes, and advancing quantitative imaging to better characterize underlying physical and physiological systems.




**Magnetic Resonance Imaging**

- Accelerated and compressed-sensing MRI
- Nonlinear and model-based reconstruction
- Motion-robust reconstruction

<div class="research-demo-gifs">
{% include figure.liquid
  path="assets/img/research/MyBrainT2Star.gif"
  class="img-fluid rounded z-depth-1"
  alt="My brain — 3D slice walkthrough"
  max-width="720px"
  avoid_scaling=true
  zoomable=true
  zoom_scale=2
  caption="Movie of my brain."
%}
{% comment %}
  Uncomment when motion GIF is ready (assets/img/research/brain-motion.gif):
{% include figure.liquid
  path="assets/img/research/brain-motion.gif"
  class="img-fluid rounded z-depth-1"
  alt="Motion in brain MRI"
  max-width="720px"
  avoid_scaling=true
  zoomable=true
  zoom_scale=1.35
  caption="Motion across brain MRI frames."
%}
{% endcomment %}
</div>


**Photoacoustic Imaging**

- Dynamic image reconstruction
- Low-dimensional representations of spatiotemporal images

<div class="research-demo-gifs">
{% include figure.liquid
  path="assets/img/research/PACTImage.png"
  class="img-fluid rounded z-depth-1"
  alt="Photoacoustic computed tomography — vascular and volumetric imaging"
  max-width="720px"
  avoid_scaling=true
  zoomable=true
  zoom_scale=0.8
  caption="Human chest vasculature and a 3D MOBY mouse phantom for photoacoustic imaging."
%}
</div>


**Optical Imaging**

- Optical diffraction tomography and Fourier ptychography
- Nonlinear image reconstruction
- Wave-based inverse problems

<div class="research-demo-gifs">
{% include figure.liquid
  path="assets/img/research/ODTImage.png"
  class="img-fluid rounded z-depth-1"
  alt="Optical diffraction tomography — principle and reconstruction results"
  max-width="720px"
  avoid_scaling=true
  zoomable=true
  zoom_scale=0.8
  caption="Optical diffraction tomography — imaging model and 3D reconstruction."
%}
</div>

**Related publications**

</div>

<div class="research-refs">
{% bibliography --group_by none --template bib_plain --style ieee --query @*[key=hong2024ppnp] || @*[key=hong2026pact] || @*[key=hong2026minibatch] || @*[key=hong2021diffraction] %}
</div>

<div class="research-page" markdown="1">

<p class="research-more">
  Full list: <a href="{{ '/publications/' | relative_url }}">Publications</a>
  ·
  <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar</a>
</p>

</div>
