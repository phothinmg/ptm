(function () {
  const main = document.getElementById("ptm-main");
  const footer = document.getElementById("ptm-footer");
  const mainHeight = main.getBoundingClientRect().height;
  if (mainHeight < window.innerHeight * 0.75) {
    footer.style.position = "fixed";
  } else {
    footer.style.position = "relative";
  }
})();
