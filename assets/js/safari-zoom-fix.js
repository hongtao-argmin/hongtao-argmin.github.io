// Publication preview lightbox with FLIP zoom (thumb → center).
// Used on Safari always, and on all browsers when preview_scale/width/height is set.
(function () {
  const ua = navigator.userAgent;
  const isSafari =
    /Safari/i.test(ua) && !/Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS/i.test(ua);

  const OPEN_MS = 320;
  const CLOSE_MS = 260;
  const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

  function fullSrc(img) {
    let src = img.getAttribute("data-zoom-src") || img.currentSrc || img.src || "";
    src = src
      .replace(/([?&])(full|safari_full)=[^&]*/g, "$1")
      .replace(/[?&]$/, "")
      .replace(/\?&/, "?");
    if (!src) return src;
    if (!/[?&]full=1(?:&|$)/.test(src)) {
      const sep = src.includes("?") ? "&" : "?";
      src = `${src}${sep}full=1`;
    }
    return src;
  }

  function readZoomOpts(el) {
    if (!el) return {};
    return {
      width: el.getAttribute("data-zoom-width") || "",
      height: el.getAttribute("data-zoom-height") || el.getAttribute("data-zoom-length") || "",
      scale: el.getAttribute("data-zoom-scale") || "",
    };
  }

  function hasCustomZoom(opts) {
    if (!opts) return false;
    if (opts.width || opts.height) return true;
    const scale = parseFloat(opts.scale);
    return Boolean(opts.scale) && !Number.isNaN(scale) && scale !== 1;
  }

  function parseCssLength(value, viewportW, viewportH) {
    if (!value) return null;
    const m = String(value)
      .trim()
      .match(/^([\d.]+)(px|vw|vh|%)$/i);
    if (!m) return null;
    const n = parseFloat(m[1]);
    const unit = m[2].toLowerCase();
    if (unit === "px") return n;
    if (unit === "vw") return (n / 100) * viewportW;
    if (unit === "vh") return (n / 100) * viewportH;
    if (unit === "%") return (n / 100) * viewportW;
    return null;
  }

  function finalSize(nw, nh, opts) {
    const parsed = parseFloat(opts && opts.scale);
    const scale = opts && opts.scale && !Number.isNaN(parsed) ? parsed : 1;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pad = 48;
    const fitMaxW = Math.min(vw * 0.96, 1800) - pad;
    const fitMaxH = vh * 0.94 - pad;

    const fit = Math.min(fitMaxW / nw, fitMaxH / nh, 1);
    let baseW = nw * fit;
    let baseH = nh * fit;

    const explicitW = parseCssLength(opts && opts.width, vw, vh);
    const explicitH = parseCssLength(opts && opts.height, vw, vh);
    if (explicitW && explicitH) {
      baseW = explicitW;
      baseH = explicitH;
    } else if (explicitW) {
      baseW = explicitW;
      baseH = (nh / nw) * explicitW;
    } else if (explicitH) {
      baseH = explicitH;
      baseW = (nw / nh) * explicitH;
    }

    return {
      w: Math.max(1, baseW * scale),
      h: Math.max(1, baseH * scale),
    };
  }

  function flipTransform(from, toX, toY, toW, toH) {
    const fromCx = from.left + from.width / 2;
    const fromCy = from.top + from.height / 2;
    const toCx = toX + toW / 2;
    const toCy = toY + toH / 2;
    const dx = fromCx - toCx;
    const dy = fromCy - toCy;
    const sx = from.width / toW;
    const sy = from.height / toH;
    return `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
  }

  function openLightbox(src, opts, thumb) {
    const existing = document.querySelector(".safari-zoom-overlay");
    if (existing) existing.remove();

    const from = thumb.getBoundingClientRect();
    const thumbSrc = thumb.currentSrc || thumb.src;
    const nw = thumb.naturalWidth || Math.max(1, from.width);
    const nh = thumb.naturalHeight || Math.max(1, from.height);
    const size = finalSize(nw, nh, opts);
    const toW = size.w;
    const toH = size.h;
    const toX = (window.innerWidth - toW) / 2;
    const toY = (window.innerHeight - toH) / 2;

    const overlay = document.createElement("div");
    overlay.className = "safari-zoom-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    const img = document.createElement("img");
    img.className = "safari-zoom-image";
    img.alt = thumb.alt || "Full size preview";
    img.decoding = "async";
    img.draggable = false;
    img.src = thumbSrc;

    img.style.width = `${toW}px`;
    img.style.height = `${toH}px`;
    img.style.left = `${toX}px`;
    img.style.top = `${toY}px`;
    img.style.transform = flipTransform(from, toX, toY, toW, toH);
    img.style.transition = "none";

    let closing = false;
    const prevThumbOpacity = thumb.style.opacity;
    thumb.style.opacity = "0";

    const cleanup = () => {
      document.removeEventListener("keydown", onKey);
      overlay.remove();
      thumb.style.opacity = prevThumbOpacity;
    };

    const close = () => {
      if (closing) return;
      closing = true;
      const back = thumb.getBoundingClientRect();
      overlay.classList.remove("is-open");
      img.style.transition = `transform ${CLOSE_MS}ms ${EASE}, box-shadow ${CLOSE_MS}ms ease`;
      img.style.transform = flipTransform(back, toX, toY, toW, toH);
      img.classList.remove("is-settled");
      document.removeEventListener("keydown", onKey);
      window.setTimeout(cleanup, CLOSE_MS + 20);
    };

    const onKey = (e) => {
      if (e.key === "Escape") close();
    };

    overlay.addEventListener("click", close);
    img.addEventListener("click", (e) => e.stopPropagation());
    document.addEventListener("keydown", onKey);

    overlay.appendChild(img);
    document.body.appendChild(overlay);
    void overlay.offsetWidth;
    overlay.classList.add("is-open");

    // Animate from thumb → centered target.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        img.style.transition = `transform ${OPEN_MS}ms ${EASE}, box-shadow ${OPEN_MS}ms ease`;
        img.style.transform = "translate(0, 0) scale(1)";
        img.classList.add("is-settled");
      });
    });

    // Upgrade to full-resolution source after open (no layout jump if same aspect).
    if (src && src !== thumbSrc) {
      const hi = new Image();
      hi.decoding = "async";
      hi.onload = () => {
        if (closing || !overlay.isConnected) return;
        const hiSize = finalSize(hi.naturalWidth || nw, hi.naturalHeight || nh, opts);
        // Only retarget if the intended display size changed meaningfully.
        if (Math.abs(hiSize.w - toW) > 1 || Math.abs(hiSize.h - toH) > 1) {
          const nx = (window.innerWidth - hiSize.w) / 2;
          const ny = (window.innerHeight - hiSize.h) / 2;
          img.style.width = `${hiSize.w}px`;
          img.style.height = `${hiSize.h}px`;
          img.style.left = `${nx}px`;
          img.style.top = `${ny}px`;
        }
        img.src = src;
      };
      hi.src = src;
    }
  }

  function prefetch(img) {
    const src = fullSrc(img);
    if (!src || img.dataset.zoomPrefetched === "1") return;
    img.dataset.zoomPrefetched = "1";
    const probe = new Image();
    probe.decoding = "async";
    probe.src = src;
  }

  function bindLightbox(img) {
    const srcAttr = img.getAttribute("data-zoom-src") || img.getAttribute("src");
    const opts = readZoomOpts(img);
    img.removeAttribute("data-zoomable");
    img.classList.add("safari-zoomable");
    img.style.cursor = "zoom-in";
    img.title = "Click to view full size (Option-click opens original)";
    img.addEventListener("pointerenter", () => prefetch(img), { once: true });
    img.addEventListener(
      "click",
      (event) => {
        if (event.altKey) return;
        event.preventDefault();
        event.stopPropagation();
        openLightbox(fullSrc(img), opts, img);
      },
      true
    );
    if (srcAttr) img.setAttribute("data-zoom-src", srcAttr);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll("img[data-zoomable]");

    imgs.forEach((img) => {
      img.addEventListener("click", (event) => {
        if (!event.altKey) return;
        event.preventDefault();
        event.stopPropagation();
        const href = (img.getAttribute("data-zoom-src") || img.currentSrc || img.src || "").replace(
          /[?&](full|safari_full)=[^&]*/g,
          ""
        );
        window.open(href, "_blank", "noopener,noreferrer");
      });
    });

    imgs.forEach((img) => {
      const opts = readZoomOpts(img);
      if (isSafari || hasCustomZoom(opts)) {
        bindLightbox(img);
      }
    });
  });
})();
