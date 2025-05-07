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
    
    

    }
  }
};
</script>

<!-- MathJax CDN (place at top of the markdown page) -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>


<h1 style="text-align: center;" class="big-title">Convergent Complex Quasi-Newton Proximal Methods <br> for Gradient-Driven Denoisers in Compressed Sensing MRI Reconstruction</h1>

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

  <a href="https://arxiv.org" class="button-pill">
    <i class="fas fa-arrow-up-right-from-square"></i> arXiv
  </a>


  <a href="https://github.com/hongtao-argmin/CQNPM-GDD-CS-MRI-Reco?tab=readme-ov-file" class="button-pill">
    <i class="fab fa-github"></i> Code
  </a>


  <a href="https://www.dropbox.com/scl/fi/n2mjgmpvch1l9obhuzc23/SM_CQNPMGDenoiser.pdf?rlkey=ujwr3rgswoc3kwofdaofr839r&st=cuosyo9g&dl=0" class="button-pill">
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




---

## Abstract

In compressed sensing (CS) MRI, model-based methods are pivotal to achieving accurate reconstruction. One of the main challenges in model-based methods is finding an effective prior to describe the statistical distribution of the target image. Plug-and-Play (PnP) and REgularization by Denoising (RED) are two general frameworks that use denoisers as the prior. While PnP/RED methods with convolutional neural networks (CNNs) based denoisers outperform classical hand-crafted priors in CS MRI, their convergence theory relies on assumptions that do not hold for practical CNNs. The recently developed gradient-driven denoisers offer a framework that bridges the gap between practical performance and theoretical guarantees. However, the numerical solvers for the associated minimization problem remain slow for CS MRI reconstruction. This paper proposes a complex quasi-Newton proximal method that achieves faster convergence than existing approaches. To address the complex domain in CS MRI, we propose a modified Hessian estimation method that guarantees Hermitian positive definiteness. Furthermore, we provide a rigorous convergence analysis of the proposed method
for nonconvex settings. Numerical experiments on both Cartesian and non-Cartesian sampling trajectories
demonstrate the effectiveness and efficiency of our approach.

---



<div style="
  border: 1px solid #ccc;
  padding: 1em;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-size: 1.4em;
  max-width: 400px;
  margin: 2em auto;
  text-align: center;
">

$$
\text{Denoiser:} \,\, {\umD}_{\boldsymbol \theta } \equiv \uvx - \nabla_{\uvx} f_{\boldsymbol \theta} (\uvx)
$$

<br>

$$
{\uvx}^* = \arg\min_{\uvx}  f_{\boldsymbol \theta}(\uvx) + \underbrace{\frac{1}{2}\|A\uvx - \uvy\|_2^2}_{h(\uvx)} 
$$

</div>


## CQNPM: Reconstruction Algorithm

<table style="width: 100%; margin-top: 1em;">
<tr>

### Algorithm

1. **Initialization**: ${\uvx}_1$ and stepsize $\alpha_k > 0$.
2. **For \( t = T \) to \( 1 \)**:
   -  Estimate ${\umH}_k\succ 0$ and ${\umB}_k$ with Algorithm 2 (details shown in the paper).
   -  $\uvx_{k+1} \leftarrow {\mathrm{prox}}_{\alpha_k \,h+\iota_\mathcal C} }^{{\umB}_k}{#3}\big({\uvx}_k-\stepsize_k\,{\umH}_k\nabla f({\uvx}_k)\big)$ 
</tr>
</table>
