(function () {
  const root = document.getElementById("project-list");
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const projects = window.PORTFOLIO_PROJECTS || [];
  if (!root) return;

  root.innerHTML = projects
    .map((project) => {
      const links = (project.links || [])
        .map(
          (link) =>
            `<a href="${link.href}" rel="noopener noreferrer" target="_blank">${link.label}</a>`
        )
        .join("");
      return `
        <article class="project">
          <span class="project-tag">${project.tag || "Project"}</span>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">${links}</div>
        </article>
      `;
    })
    .join("");
})();
