---
title: CV
permalink: /cv/
nav: false
nav_order: 4
# Navbar links straight to the PDF (same tab; see nav_url in _includes/header.liquid).
nav_url: /assets/pdf/CV.pdf
layout: null
---
{% comment %}
Fallback if someone opens /cv/ directly (navbar already uses nav_url -> PDF).
{% endcomment %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url={{ '/assets/pdf/CV.pdf' | relative_url }}">
    <link rel="canonical" href="{{ '/assets/pdf/CV.pdf' | absolute_url }}">
    <link rel="icon" href="{{ '/assets/img/tao-fire-32.png' | relative_url }}" type="image/png">
    <title>CV — {{ site.title }}</title>
  </head>
  <body>
    <p><a href="{{ '/assets/pdf/CV.pdf' | relative_url }}">Open CV (PDF)</a></p>
  </body>
</html>
