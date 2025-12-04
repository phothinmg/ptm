(function ($) {
  const prefersDarkMode = $.matchMedia("(prefers-color-scheme: dark)").matches;
  const ptmLocalStoreTheme = "ptm_local_theme";
  // Apply theme to document element
  function applyTheme(theme) {
    if (theme === "dark") {
      $.document.documentElement.classList.add("dark");
    } else {
      $.document.documentElement.classList.remove("dark");
    }
  }
  function toogleIconClass(theme) {
    const themeIcon = $.document.getElementById("theme-icon");
    if (theme === "dark") {
      if (themeIcon.classList.contains("moon")) {
        themeIcon.classList.remove("moon");
      }
      themeIcon.classList.add("sun");
    } else {
      if (themeIcon.classList.contains("sun")) {
        themeIcon.classList.remove("sun");
      }
      themeIcon.classList.add("moon");
    }
  }
  // Initialize theme
  (function initTheme() {
    try {
      const stored = localStorage.getItem(ptmLocalStoreTheme);
      if (stored === "dark" || stored === "light") {
        applyTheme(stored);
        toogleIconClass(stored);
      } else {
        const defaultTheme = prefersDarkMode ? "dark" : "light";
        localStorage.setItem(ptmLocalStoreTheme, defaultTheme);
        applyTheme(defaultTheme);
        toogleIconClass(defaultTheme);
      }
    } catch (e) {
      // If access to localStorage is blocked, fall back to default theme only
      const defaultTheme = prefersDarkMode ? "dark" : "light";
      applyTheme(defaultTheme);
      toogleIconClass(defaultTheme);
    }
  })();

  (function () {
    const themeBtn = document.getElementById("theme-btn");
    themeBtn.addEventListener("click", function () {
      // toggle theme and persist
      const current = localStorage.getItem(ptmLocalStoreTheme);
      const newTheme = current === "dark" ? "light" : "dark";
      localStorage.setItem(ptmLocalStoreTheme, newTheme);
      applyTheme(newTheme);
      toogleIconClass(newTheme);
    });
  })();
  // ----------------------------------------
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
