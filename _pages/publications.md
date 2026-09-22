---
layout: page
permalink: /publications/
title: Publications
#description: publications by category in reverse chronological order
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

<div class="publications">

<h2>Journals</h2>
{% bibliography --query @*[pubtype=journal] %}

<h2>Abstracts and Conferences</h2>
{% bibliography --query @*[pubtype=conference] %}

<h2>Preprints</h2>
{% bibliography --query @*[pubtype=preprint] %}

<h2>Thesis</h2>
{% bibliography --query @*[pubtype=thesis] %}

</div>
