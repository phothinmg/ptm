(function () {
  const customTooltip = document.getElementById("custom-tooltip");
  if (!customTooltip) return;

  function attachTooltip(path) {
    if (!(path instanceof SVGElement)) return;
    if (path._tooltipAttached) return;

    const titleEl = path.querySelector && path.querySelector("title");
    const titleText =
      (titleEl && titleEl.textContent) ||
      path.getAttribute("data-title") ||
      path.getAttribute("title") ||
      "";
    if (titleEl) titleEl.remove();
    if (titleText) path.setAttribute("data-title", titleText);

    path.addEventListener("mousemove", (e) => {
      const text = path.getAttribute("data-title") || "";
      if (!text) return;
      customTooltip.textContent = text;
      customTooltip.style.display = "block";
      customTooltip.style.left = e.pageX + 10 + "px";
      customTooltip.style.top = e.pageY + 10 + "px";
    });

    path.addEventListener("mouseout", () => {
      customTooltip.style.display = "none";
    });

    // support touch
    path.addEventListener(
      "touchstart",
      (e) => {
        const t = e.touches && e.touches[0];
        const text = path.getAttribute("data-title") || "";
        if (!t || !text) return;
        customTooltip.textContent = text;
        customTooltip.style.display = "block";
        customTooltip.style.left = t.pageX + 10 + "px";
        customTooltip.style.top = t.pageY + 10 + "px";
      },
      { passive: true }
    );
    path.addEventListener("touchend", () => {
      customTooltip.style.display = "none";
    });

    path._tooltipAttached = true;
  }

  // Attach to existing paths
  document.querySelectorAll("path").forEach(attachTooltip);

  // Observe for future added paths (e.g., rendered by D3)
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (!node) return;
        if (node.nodeType !== 1) return;
        if (node.tagName && node.tagName.toLowerCase() === "path") {
          attachTooltip(node);
        } else {
          // maybe a container with paths inside
          node.querySelectorAll &&
            node.querySelectorAll("path").forEach(attachTooltip);
        }
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // hide tooltip on scroll/resize/click anywhere
  ["scroll", "resize", "click"].forEach((ev) =>
    window.addEventListener(
      ev,
      () => (customTooltip.style.display = "none"),
      true
    )
  );
})();
