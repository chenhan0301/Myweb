(() => {
  const root = document.documentElement;
  const header = document.getElementById("siteHeader");
  const progress = document.getElementById("scrollProgress");
  const themeToggle = document.getElementById("themeToggle");
  const menuButton = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");

  const getPreferredTheme = () => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "切換淺色模式" : "切換深色模式"
      );
      themeToggle.title = theme === "dark" ? "切換淺色模式" : "切換深色模式";
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", theme === "dark" ? "#0d171b" : "#f4f1ea");
    }
  };

  applyTheme(getPreferredTheme());

  themeToggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("portfolio-theme", next);
  });

  const setMenu = (open) => {
    menuButton?.setAttribute("aria-expanded", String(open));
    mobileNav?.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  menuButton?.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  const updateScrollUI = () => {
    const y = window.scrollY;
    header?.classList.toggle("is-scrolled", y > 12);

    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
  };

  updateScrollUI();
  window.addEventListener("scroll", updateScrollUI, { passive: true });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    reveals.forEach((el) => revealObserver.observe(el));
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".desktop-nav a[href^='#']")];

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const id = visible.target.id;

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      },
      { rootMargin: "-30% 0px -58% 0px", threshold: [0.01, 0.15, 0.4] }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) setMenu(false);
  });
})();