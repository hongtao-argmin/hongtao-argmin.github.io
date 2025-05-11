---
layout: plain
title: Convergent Complex Quasi-Newton Proximal Methods for Gradient-Driven Denoisers in Compressed Sensing MRI Reconstruction
permalink: /CQNPM-GD-CSMRI/
---

<!-- MathJax config with macros -->
<script>
MathJax = {
  tex: {
    macros: {
    bm: ["\\boldsymbol{#1}", 1],
    uva: "\\boldsymbol{\\mathrm{a}}",
    uvb: "\\boldsymbol{\\mathrm{b}}",
    uvc: "\\boldsymbol{\\mathrm{c}}",
    uvd: "\\boldsymbol{\\mathrm{d}}",
    uve: "\\boldsymbol{\\mathrm{e}}",
    uvf: "\\boldsymbol{\\mathrm{f}}",
    uvg: "\\boldsymbol{\\mathrm{g}}",
    uvh: "\\boldsymbol{\\mathrm{h}}",
    uvi: "\\boldsymbol{\\mathrm{i}}",
    uvj: "\\boldsymbol{\\mathrm{j}}",
    uvk: "\\boldsymbol{\\mathrm{k}}",
    uvl: "\\boldsymbol{\\mathrm{l}}",
    uvm: "\\boldsymbol{\\mathrm{m}}",
    uvn: "\\boldsymbol{\\mathrm{n}}",
    uvo: "\\boldsymbol{\\mathrm{o}}",
    uvp: "\\boldsymbol{\\mathrm{p}}",
    uvq: "\\boldsymbol{\\mathrm{q}}",
    uvr: "\\boldsymbol{\\mathrm{r}}",
    uvs: "\\boldsymbol{\\mathrm{s}}",
    uvt: "\\boldsymbol{\\mathrm{t}}",
    uvu: "\\boldsymbol{\\mathrm{u}}",
    uvv: "\\boldsymbol{\\mathrm{v}}",
    uvw: "\\boldsymbol{\\mathrm{w}}",
    uvx: "\\boldsymbol{\\mathrm{x}}",
    uvy: "\\boldsymbol{\\mathrm{y}}",
    uvz: "\\boldsymbol{\\mathrm{z}}",
    
    umA: "\\boldsymbol{\\mathrm{A}}",
    umB: "\\boldsymbol{\\mathrm{B}}",
    umC: "\\boldsymbol{\\mathrm{C}}",
    umD: "\\boldsymbol{\\mathrm{D}}",
    umE: "\\boldsymbol{\\mathrm{E}}",
    umF: "\\boldsymbol{\\mathrm{F}}",
    umG: "\\boldsymbol{\\mathrm{G}}",
    umH: "\\boldsymbol{\\mathrm{H}}",
    umI: "\\boldsymbol{\\mathrm{I}}",
    umJ: "\\boldsymbol{\\mathrm{J}}",
    umK: "\\boldsymbol{\\mathrm{K}}",
    umL: "\\boldsymbol{\\mathrm{L}}",
    umM: "\\boldsymbol{\\mathrm{M}}",
    umN: "\\boldsymbol{\\mathrm{N}}",
    umO: "\\boldsymbol{\\mathrm{O}}",
    umP: "\\boldsymbol{\\mathrm{P}}",
    umQ: "\\boldsymbol{\\mathrm{Q}}",
    umR: "\\boldsymbol{\\mathrm{R}}",
    umS: "\\boldsymbol{\\mathrm{S}}",
    umT: "\\boldsymbol{\\mathrm{T}}",
    umU: "\\boldsymbol{\\mathrm{U}}",
    umV: "\\boldsymbol{\\mathrm{V}}",
    umW: "\\boldsymbol{\\mathrm{W}}",
    umX: "\\boldsymbol{\\mathrm{X}}",
    umY: "\\boldsymbol{\\mathrm{Y}}",
    umZ: "\\boldsymbol{\\mathrm{Z}}"
    },
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true
  }
};
</script>


<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>



<h1 style="text-align: center; font-size: 3.2em;" class="big-title">Convergent Complex Quasi-Newton Proximal Methods <br> for Gradient-Driven Denoisers <br> in Compressed Sensing MRI Reconstruction</h1>

<div style="text-align: center;" class="big-title">

  <div style="display: inline-block; margin: 0 1em;">
  <a href="https://hongtao-argmin.github.io" style="font-size: 1.5em; font-weight: bold;">Tao Hong</a> <br> 
  <span style="font-size: 1.2em;">UT Austin</span>
    </div>
  
  <div style="display: inline-block; margin: 0 1em;">
  <a href="#" style="font-size: 1.5em; font-weight: bold;">Zhaoyi Xu </a> <br>
  <span style="font-size: 1.2em;">Umich</span>
  </div>
  
  <div style="display: inline-block; margin: 0 1em;">
  <a href="https://icl.snu.ac.kr" style="font-size: 1.5em; font-weight: bold;">Se Young Chun</a><br>
  <span style="font-size: 1.2em;">SNU</span>
  </div>
  
  <div style="display: inline-block; margin: 0 1em;">
  <a href="#" style="font-size: 1.5em; font-weight: bold;">Luis Hernandez-Garcia</a> <br>
  <span style="font-size: 1.2em;">Umich</span>

  </div>
  
  <div style="display: inline-block; margin: 0 1em;">
 <a href="https://web.eecs.umich.edu/~fessler/" style="font-size: 1.5em; font-weight: bold;">Jeffrey A. Fessler</a><br>
 <span style="font-size: 1.2em;">Umich</span>
  </div>
  
</div>


  <!-- Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Button container -->
<div style="text-align: center; margin-top: 1em;">

  <a href="https://arxiv.org/abs/2505.04820" class="button-pill">
    <i class="fas fa-arrow-up-right-from-square"></i> arXiv
  </a>


  <a href="https://github.com/hongtao-argmin/CQNPM-GDD-CS-MRI-Reco?tab=readme-ov-file" class="button-pill">
    <i class="fab fa-github"></i> Code
  </a>


  <a href="https://www.dropbox.com/scl/fi/989xih55oojfo3grxa5d3/SM_CQNPMGDenoiser..pdf?rlkey=yujwhnxqmkd1ox5q4lou8b6yv&st=p7i1229w&dl=0" class="button-pill">
    <i class="fas fa-arrow-up-right-from-square"></i>  Supp
  </a>

</div>

<!-- Button style -->
<style>
.button-pill {
  display: inline-block;
  margin: 0.5em;
  padding: 0.6em 1em;
  background-color: #222;
  color: white;
  border-radius: 2em;
  text-decoration: none;
  font-weight: 600;
  font-family: sans-serif;
  font-size: 0.95em;
  transition: background 0.3s;
}
.button-pill:hover {
  background-color: #444;
}
.button-pill i {
  margin-right: 0.4em;
}
</style>




<div style="
  background-color: #e5e5e8;
  padding: 1em;                  /* ↓ reduce padding */
  border-radius: 6px;
  max-width: 1300px;            /* ↑ increase width */
  margin: 1em auto;
  font-size: 1.4em;             /* ↓ slightly reduce font size */
  line-height: 1.4;             /* ↓ tighten line spacing */
  text-align: justify;
">


<h2 style="margin-top: 0; font-size: 2.4em; text-align: left;">Abstract</h2>

In compressed sensing (CS) MRI, model-based methods are pivotal to achieving accurate reconstruction. One of the main challenges in model-based methods is finding an effective prior to describe the statistical distribution of the target image. Plug-and-Play (PnP) and REgularization by Denoising (RED) are two general frameworks that use denoisers as the prior. While PnP/RED methods with convolutional neural networks (CNNs) based denoisers outperform classical hand-crafted priors in CS MRI, their convergence theory relies on assumptions that do not hold for practical CNNs. The recently developed gradient-driven denoisers offer a framework that bridges the gap between practical performance and theoretical guarantees. However, the numerical solvers for the associated minimization problem remain slow for CS MRI reconstruction. This paper proposes a complex quasi-Newton proximal method (CQNPM) that achieves faster convergence than existing approaches. To address the <b>complex domain</b> in CS MRI, we propose a modified Hessian estimation method that guarantees <b>Hermitian positive definiteness</b>. Furthermore, we provide a rigorous <b>convergence analysis</b> of the proposed method for nonconvex settings. Numerical experiments on both Cartesian and non-Cartesian sampling trajectories
demonstrate the effectiveness and efficiency of our approach.

</div>


<div style="display: flex; gap: 0.5em; justify-content: center; background-color: #e5e5e8; padding: 1.5em; border-radius: 6px; max-width: 1300px; margin: 0 auto; margin-top: 2em;">

  <img src="/files/BrainSpiralPSNR2025up.gif" width="600"/>

  <img src="/files/BrainSpiralRecoIms2025.gif" width="600"/>

</div>



<div style="
  border: 1px solid #ccc;
  padding: 2em;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-size: 1.4em;
  max-width: 500px;
  margin: 2em auto;
  text-align: left; <!-- center -->
  margin-top: 2em;
">

<h2 style="margin-top: 0; font-size: 2.4 em; text-align: left;"> Problem </h2>

$$
\text{Denoiser:} \,\, {\umD}_{\boldsymbol \theta } \equiv \uvx - \nabla_{\uvx} f_{\boldsymbol \theta} (\uvx)
$$


$$
{\uvx}^* = \arg\min_{\uvx\in\mathcal C}  F(\uvx) \equiv f_{\boldsymbol \theta}(\uvx) + \underbrace{\frac{1}{2}\|\umA\uvx - \uvy\|_2^2}_{h(\uvx)} 
$$

</div>



<div style="
background-color: #e8f0fe;
padding: 1.5em; 
border-radius: 6px; 
max-width: 800px; 
margin: 0 auto; 
font-size: 1.4em; 
margin-top: 2em;
"> 
<!--text-align: justify; -->

<h2 style="margin-top: 0; font-size: 2em; text-align: left;">CQNPM: Reconstruction Algorithm</h2>

<table style="width: 100%; margin-top: 1em;">
<tr>
<td style="width: 80%; vertical-align: top; padding-right: 1em;">

<h3 style="color: #333; font-size: 1.8em;">Algorithm</h3>

<ol>
  <li><strong>Initialization</strong>: $\uvx_1$ and stepsize $\alpha_k > 0$ </li>

  <li>
    <strong> For $k = 1, 2, \ldots$ until convergence</strong>:
    <ul>
      <li>Estimate $\umH_k \succ 0$ and $\umB_k\succ 0$ using Algorithm 2 (see paper).</li>
      <li>Update:
     $$
     \uvx_{k+1} \leftarrow \operatorname{prox}^{\umB_k}_{\alpha_k \, h + \iota_{\mathcal{C}}}
     \left( \uvx_k - \alpha_k \, \umH_k \, \nabla_{\uvx} f_{\boldsymbol \theta}(\uvx_k) \right),
     $$
     where 
     $$
     \iota_{\mathcal C}(\uvx) =
 \begin{cases}
    0, & \text{if } \uvx \in \mathcal{C}, \\
    +\infty, & \text{otherwise},
\end{cases}
     $$
     and
     
     $$
              \operatorname{prox}^{\umB_k}_{\alpha_k \, h + \iota_{\mathcal{C}}}(\cdot)  \triangleq \arg\min_{\uvx\in\mathcal C}\frac{1}{2}\|\uvx-\cdot \|_{\umB_k}^2+ \alpha_k h(\uvx).
     $$
      </li>
    </ul>
  </li>
</ol>

</td>
</tr>
</table>

</div>


<div style="background-color: #e5e5e8; padding: 1.5em; border-radius: 6px; max-width: 1000px; margin: 0 auto; margin-top: 2em; font-size: 1.4em; text-align: justify;">


<h2 style="margin-top: 0; font-size: 2.4em;">Results</h2>


<img src="/images/CQNPM2025/SpiralBrainPSNR.png" alt="Comparison of cost and PSNR versus iterationa and wall time on spiral brain image" style="width: 100%; margin-top: 1em; border-radius: 6px;">

<p style="text-align: center; font-size: 1.3em; color: #333;">Figure 1: Cost and PSNR versus Iter. and Wall Time. GD: projected gradient descent; PG: proximal gradient; APG: accelerated proximal gradient.</p>


<img src="/images/CQNPM2025/SpiralBrainRecoIm.png" alt="Comparison of Reco. Images for various methods" style="width: 100%; margin-top: 2em; border-radius: 6px;">

<p style="text-align: center; font-size: 1.3em; color: #333;">Figure 2: Reconstructed Images.</p>


<img src="/images/CQNPM2025/SpiralBrainConv.png" alt="Conv. Validation" style="width: 100%; margin-top: 2em; border-radius: 6px;">

<p style="text-align: center; font-size: 1.3em; color: #333;"> Figure 3: Convergence results. (a) $F(\uvx_k)$: cost value;  (b) $E(\uvx_k)=\|\uvx_k-\uvx_{k+1}\|_2^2$. </p>

</div>




<div style="background-color: #e5e5e8; padding: 1.5em; border-radius: 6px; max-width: 1000px; margin: 0 auto; margin-top: 2em; font-size: 1.5em; text-align: justify;">


<h2 style="margin-top: 0; font-size: 2em; text-align: left;">BibTeX citation</h2>

@article{hong2025CQNPMCSMRI, <br>
  title={Convergent Complex Quasi-{N}ewton Proximal Methods for Gradient-Driven Denoisers in Compressed Sensing {MRI} Reconstruction},<br>
  author={Hong, Tao and Xu, Zhaoyi and Chun, Se Young and Hernandez-Garcia, Luis and Fessler, Jeffrey A},<br>
  year={2025},<br>
  journal={arXiv:2505.04820},<br>
  url={https://arxiv.org/abs/2505.04820},<br>
}


</div>
