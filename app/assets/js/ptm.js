(function ($) {
  // Fix footer
  (function () {
    function fixedFooter() {
      const main = $.document.querySelector("main");
      const footer = $.document.querySelector("footer");
      const mainHeight = main.getBoundingClientRect().height;
      footer.style.position =
        mainHeight > window.innerHeight * 0.75 ? "relative" : "fixed";
    }
    $.addEventListener("resize", fixedFooter);
    fixedFooter();
  })();
  // Smooth scroll on anchor click
  (function () {
    $.document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          history.pushState(null, null, targetId);

          const headerOffset = 80; // Change this to your header's height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + $.pageYOffset - headerOffset;

          $.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  })();
  const topBtn = $.document.getElementById("topbtn");
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  $.onscroll = () => {
    topBtn.style.opacity = window.scrollY > 200 ? 1 : 0;
    // header.style.position = window.scrollY > 200 ? "fixed" : "relative";
  };
})(window);
