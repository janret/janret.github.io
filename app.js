(function () {
  const STORAGE_KEY = "portfolio-lang";
  const SUPPORTED = ["en", "es"];

  const root = document.getElementById("project-list");
  const year = document.getElementById("year");
  const langButtons = document.querySelectorAll("[data-lang]");

  if (year) year.textContent = String(new Date().getFullYear());

  function pick(value, lang, fallback) {
    if (value == null) return fallback || "";
    if (typeof value === "string") return value;
    return value[lang] || value.en || fallback || "";
  }

  function detectLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(stored)) return stored;

    const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (nav.startsWith("es")) return "es";
    return "en";
  }

  function setLangButtons(lang) {
    langButtons.forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("is-active", active);
    });
  }

  function renderProjects(lang) {
    if (!root) return;

    const copy = (window.PORTFOLIO_I18N && window.PORTFOLIO_I18N[lang]) || {};
    const projects = window.PORTFOLIO_PROJECTS || [];

    root.innerHTML = projects
      .map((project) => {
        const links = (project.links || [])
          .map(
            (link) =>
              `<a href="${link.href}" rel="noopener noreferrer" target="_blank">${pick(
                link.label,
                lang,
                "Link"
              )}</a>`
          )
          .join("");
        return `
        <article class="project">
          <span class="project-tag">${pick(project.tag, lang, copy.projectFallback)}</span>
          <h3>${pick(project.title, lang)}</h3>
          <p>${pick(project.description, lang)}</p>
          <div class="project-links">${links}</div>
        </article>
      `;
      })
      .join("");
  }

  function applyLang(lang) {
    const next = SUPPORTED.includes(lang) ? lang : "en";
    const copy = (window.PORTFOLIO_I18N && window.PORTFOLIO_I18N[next]) || {};

    document.documentElement.lang = next;
    if (copy.title) document.title = copy.title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta && copy.description) meta.setAttribute("content", copy.description);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && copy[key] != null) el.textContent = copy[key];
    });

    const switcher = document.querySelector(".lang-switch");
    if (switcher && copy.langLabel) {
      switcher.setAttribute("aria-label", copy.langLabel);
    }

    setLangButtons(next);
    renderProjects(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(detectLang());
})();
