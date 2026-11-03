/* ==========================================================================
   Ihsan Baihaqy Setiaputra — Interactive Portfolio Logic
   Theme: Pastel Orange & Warm Cream + Fluid Spring Interactions
   All data is strictly sourced from the provided CV & live project links.
   ========================================================================== */

const CV_DATA = {
  profile: {
    name: "Ihsan Baihaqy Setiaputra",
    role: "Junior Web Developer",
    location: "Jakarta, Indonesia",
    email: "haqysetiaputra@gmail.com",
    phone: "+6285693946061",
    linkedin: "https://www.linkedin.com/in/baihaqy-setiaputra-844119328/",
    github: "https://github.com/Haqys",
    cvPdf: "Ihsan_Baihaqy_Setiaputra_CV.pdf"
  },

  skillGroups: [
    {
      id: "web-dev",
      title: "Web Development",
      colorClass: "pill-orange",
      skills: ["JavaScript", "Next.js", "Tailwind CSS", "HTML/CSS"]
    },
    {
      id: "backend",
      title: "Programming & Backend",
      colorClass: "pill-butter",
      skills: ["Python", "SQL", "RESTful API Integration"]
    },
    {
      id: "tools",
      title: "Tools & Deployment",
      colorClass: "pill-apricot",
      skills: ["Git", "GitHub", "Vercel"]
    },
    {
      id: "additional",
      title: "Additional Skills",
      colorClass: "pill-sand",
      skills: ["Custom AI Pipelines", "Headless Automation Systems"]
    }
  ],

  projects: [
    {
      id: "nexus-market-analyzer",
      num: "01",
      title: "Nexus Market Analyzer – Web Dashboard",
      subtitle: "Market Intelligence Dashboard for eBay",
      category: "key-systems",
      categoryLabel: "Key Project & System",
      visualTheme: "visual-orange",
      liveUrl: "https://nexus-market-analyzer.vercel.app/",
      displayHost: "nexus-market-analyzer.vercel.app",
      iframeEmbeddable: true,
      bullets: [
        "Developed an interactive dashboard interface and web application to systematically process market data into actionable insights.",
        "Integrated backend analytical models with front-end components to evaluate barrier to entry and formulate optimal pricing strategies."
      ],
      quickFlowNote:
        "Combines live market data processing with analytical front-end components to evaluate market barrier to entry and optimal pricing strategies on eBay.",
      skills: [
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "HTML/CSS",
        "Python",
        "RESTful API Integration",
        "Vercel"
      ]
    },
    {
      id: "metroscope",
      num: "02",
      title: "Metroscope",
      subtitle: "Educational Mentoring Ecosystem & Competition Web App",
      category: "freelance",
      categoryLabel: "Freelance Web Developer",
      visualTheme: "visual-butter",
      liveUrl: "https://metroscope-eight.vercel.app/",
      previewUrl: "metroscope-preview.html?v=2",
      displayHost: "metroscope-eight.vercel.app",
      iframeEmbeddable: true,
      bullets: [
        "Developed and deployed an educational mentoring ecosystem and competition preparation web application using Next.js.",
        "Architected the front-end interface and managed full deployment lifecycles via Vercel."
      ],
      quickFlowNote:
        "Architected with Next.js for student competition preparation and mentoring tracks, managing the complete production deployment lifecycle via Vercel.",
      skills: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML/CSS",
        "Git",
        "GitHub",
        "Vercel"
      ]
    },
    {
      id: "talaswara",
      num: "03",
      title: "TALASWARA",
      subtitle: "Sustainable Fashion E-Commerce Platform & Brand Identity",
      category: "freelance",
      categoryLabel: "Freelance Web Developer",
      visualTheme: "visual-apricot",
      liveUrl: "https://talaswara.vercel.app/",
      displayHost: "talaswara.vercel.app",
      iframeEmbeddable: true,
      bullets: [
        "Built a modern e-commerce platform and visual brand identity for a sustainable fashion brand.",
        "Developed modern web interfaces using Next.js and managed deployments to Vercel via GitHub."
      ],
      quickFlowNote:
        "Delivers a cohesive visual brand identity and modern Next.js e-commerce interface for a sustainable fashion brand, deployed continuously via GitHub to Vercel.",
      skills: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML/CSS",
        "Git",
        "GitHub",
        "Vercel"
      ]
    },
    {
      id: "headless-automation",
      num: "04",
      title: "End-to-End Headless Automation System",
      subtitle: "Independent Backend Workflow & YouTube API System",
      category: "key-systems",
      categoryLabel: "Key Project & System",
      visualTheme: "visual-sand",
      liveUrl: null,
      displayHost: "backend-automation://youtube-api-pipeline",
      iframeEmbeddable: false,
      bullets: [
        "Developed an independent backend-only automation system from scratch.",
        "Implemented JavaScript and Python programming logic to handle headless workflows and API integration (YouTube API)."
      ],
      quickFlowNote:
        "Built from scratch as an independent backend-only system using Python and JavaScript to orchestrate headless workflows integrated with the YouTube API.",
      skills: [
        "Python",
        "JavaScript",
        "RESTful API Integration",
        "Headless Automation Systems",
        "Custom AI Pipelines"
      ],
      architectureSteps: [
        {
          step: "01 / Core Logic",
          title: "Python & JavaScript Engine",
          desc: "Engineered independent backend-only execution scripts combining Python and JavaScript automation logic from scratch."
        },
        {
          step: "02 / Orchestration",
          title: "Headless Workflow Pipeline",
          desc: "Automated background execution pipelines running without manual UI intervention."
        },
        {
          step: "03 / Integration",
          title: "YouTube API Integration",
          desc: "Connected directly with RESTful endpoints (YouTube API) to process and execute automated operations."
        }
      ]
    }
  ],

  timeline: [
    {
      id: "exp-freelance",
      type: "experience",
      wide: true,
      role: "Freelance Web Developer",
      organization: "Independent / Client Projects",
      period: "September 2026 - Present",
      badgeClass: "pill-orange",
      bullets: [
        "Metroscope: Developed and deployed an educational mentoring ecosystem and competition preparation web application using Next.js. Architected the front-end interface and managed full deployment lifecycles via Vercel.",
        "TALASWARA: Built a modern e-commerce platform and visual brand identity for a sustainable fashion brand, developing modern web interfaces using Next.js and managing deployments to Vercel via GitHub."
      ],
      relatedProjects: [
        { label: "Metroscope Live ↗", url: "https://metroscope-eight.vercel.app/", projectId: "metroscope" },
        { label: "TALASWARA Live ↗", url: "https://talaswara.vercel.app/", projectId: "talaswara" }
      ]
    },
    {
      id: "exp-beatpulse",
      type: "experience",
      wide: false,
      role: "Music Annotator",
      organization: "BeatPulse Labs",
      period: "2026",
      badgeClass: "pill-butter",
      bullets: [
        "Performed remote audio data annotation, analysis, and curation to support machine learning model development and audio processing systems."
      ],
      relatedProjects: []
    },
    {
      id: "exp-cakrawala-facilitator",
      type: "experience",
      wide: false,
      role: "Class Facilitator for Hybrid University Courses",
      organization: "Cakrawala University",
      period: "2026",
      badgeClass: "pill-apricot",
      bullets: [
        "Managed technical infrastructure for hybrid classes, broadcasting hardware/software (streaming), and student attendance data backup systems."
      ],
      relatedProjects: []
    },
    {
      id: "edu-cakrawala",
      type: "education",
      wide: true,
      role: "Bachelor of Digital Business (5th Semester)",
      organization: "Cakrawala University",
      period: "2024 - Present",
      badgeClass: "pill-sand",
      bullets: [
        "Specialization: Digital Marketing"
      ],
      relatedProjects: []
    }
  ]
};

/* ==========================================================================
   Application State
   ========================================================================== */
const state = {
  selectedSkillGroup: "all",
  selectedSkill: null,
  selectedProjectCategory: "all",
  selectedTimelineFilter: "all",
  expandedProjectIds: new Set()
};

/* ==========================================================================
   DOM Initialization
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderSkillMarquee();
  renderSkillsSection();
  renderProjectsSection();
  renderTimelineSection();
  setupFilterListeners();
  setupModalListeners();
  setupCommandPalette();
  setupThemeToggle();
  setupCopyButtons();
  setupScrollSpy();
  setupScrollRevealObserver();
  setupFluidCursorFollower();
});

/* ==========================================================================
   0. Render Kinetic Skill Marquee Ribbon
   ========================================================================== */
function renderSkillMarquee() {
  const track = document.getElementById("skill-marquee-track");
  if (!track) return;

  const allSkills = CV_DATA.skillGroups.flatMap((g) => g.skills);
  const buildGroupHtml = () => `
    <div class="marquee-group">
      ${allSkills
        .map(
          (skill) => `
          <span class="marquee-item" data-marquee-skill="${skill}" title="Click to filter projects by ${skill}">
            <span class="marquee-star">✦</span>
            <span>${skill}</span>
          </span>
        `
        )
        .join("")}
    </div>
  `;

  // Duplicate groups for seamless infinite loop
  track.innerHTML = buildGroupHtml() + buildGroupHtml() + buildGroupHtml();

  track.querySelectorAll("[data-marquee-skill]").forEach((el) => {
    el.addEventListener("click", () => {
      const skill = el.getAttribute("data-marquee-skill");
      state.selectedSkill = skill;
      renderSkillsSection();
      renderProjectsSection();
      showToast(`Spotlighting projects using ${skill}`);
      const projectsSec = document.getElementById("projects");
      if (projectsSec) projectsSec.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* ==========================================================================
   1. Render Interactive Technical Skills
   ========================================================================== */
function getProjectCountForSkill(skillName) {
  return CV_DATA.projects.filter((p) => p.skills.includes(skillName)).length;
}

function renderSkillsSection() {
  const container = document.getElementById("skills-grid-container");
  const banner = document.getElementById("active-skill-banner");
  const bannerText = document.getElementById("active-skill-banner-text");

  if (!container) return;

  if (state.selectedSkill) {
    const count = getProjectCountForSkill(state.selectedSkill);
    banner.classList.add("visible");
    bannerText.textContent = `Active Skill Filter: "${state.selectedSkill}" — ${count} matching project${count === 1 ? "" : "s"} highlighted below`;
  } else {
    banner.classList.remove("visible");
  }

  const groupIcons = {
    "web-dev": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    "backend": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    "tools": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    "additional": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
  };

  container.innerHTML = CV_DATA.skillGroups
    .map((group) => {
      const isDimmed =
        state.selectedSkillGroup !== "all" &&
        state.selectedSkillGroup !== group.id;

      const chipsHtml = group.skills
        .map((skill) => {
          const isSelected = state.selectedSkill === skill;
          const count = getProjectCountForSkill(skill);
          return `
            <button
              type="button"
              class="skill-chip ${isSelected ? "selected" : ""}"
              data-skill="${skill}"
              title="Tap to spotlight projects using ${skill}"
            >
              <span>${skill}</span>
              ${count > 0 ? `<span class="skill-count-badge">${count}</span>` : ""}
            </button>
          `;
        })
        .join("");

      return `
        <article class="skill-group-card reveal-up in-view ${isDimmed ? "dimmed" : ""}" data-group-id="${group.id}">
          <div class="skill-group-header">
            <span class="skill-group-icon ${group.colorClass}">
              ${groupIcons[group.id] || ""}
            </span>
            <h3 class="skill-group-name">${group.title}</h3>
          </div>
          <div class="skill-chip-list">
            ${chipsHtml}
          </div>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll(".skill-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const skill = chip.getAttribute("data-skill");
      state.selectedSkill = state.selectedSkill === skill ? null : skill;
      renderSkillsSection();
      renderProjectsSection();
    });
  });
}

/* ==========================================================================
   2. Render Fun Tactile Projects & Expandable Drawers
   ========================================================================== */
function renderProjectsSection() {
  const container = document.getElementById("projects-grid-container");
  if (!container) return;

  const filteredProjects = CV_DATA.projects.filter((project) => {
    if (state.selectedProjectCategory === "live") {
      return Boolean(project.liveUrl);
    }
    if (state.selectedProjectCategory !== "all") {
      return project.category === state.selectedProjectCategory;
    }
    return true;
  });

  container.innerHTML = filteredProjects
    .map((project) => {
      const matchesSkill =
        state.selectedSkill && project.skills.includes(state.selectedSkill);
      const isExpanded = state.expandedProjectIds.has(project.id);

      const bulletsHtml = project.bullets
        .map((b) => `<li>${b}</li>`)
        .join("");

      const tagsHtml = project.skills
        .map((skill) => {
          const isActive = state.selectedSkill === skill;
          return `<button type="button" class="tech-tag ${isActive ? "active-tag" : ""}" data-project-skill="${skill}">${skill}</button>`;
        })
        .join("");

      const previewLabel = project.iframeEmbeddable
        ? "Open Live Workspace"
        : project.liveUrl
        ? "Architecture & Launch"
        : "Inspect System Flow";

      return `
        <article class="project-card reveal-up in-view ${matchesSkill ? "highlighted-by-skill" : ""}" id="project-${project.id}">
          <div>
            <div class="project-visual-header ${project.visualTheme}">
              <div class="browser-chrome-row">
                <div class="browser-dots" aria-hidden="true">
                  <span class="browser-dot"></span>
                  <span class="browser-dot"></span>
                  <span class="browser-dot"></span>
                </div>
                <div class="browser-address-pill">${project.displayHost}</div>
                <span class="project-context-badge">${project.categoryLabel}</span>
              </div>
              <div class="project-banner-meta">
                <div>
                  <h3 class="project-title">${project.title}</h3>
                  <p class="project-subtitle">${project.subtitle}</p>
                </div>
                <span class="project-number-stamp">${project.num}</span>
              </div>
            </div>

            <div class="project-body">
              <div>
                <ul class="project-bullets">
                  ${bulletsHtml}
                </ul>

                <!-- Fun Inline Expandable Drawer -->
                <div class="project-expand-drawer ${isExpanded ? "open" : ""}" id="drawer-${project.id}">
                  <div class="drawer-inner-box">
                    <strong style="display:block; font-size:0.78rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--orange-pastel-deep); margin-bottom:4px;">
                      System Overview
                    </strong>
                    <p style="font-size:0.86rem; color:var(--ink-secondary);">
                      ${project.quickFlowNote}
                    </p>
                  </div>
                </div>
              </div>

              <div class="project-tech-row">
                ${tagsHtml}
              </div>
            </div>
          </div>

          <div class="project-footer">
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <button
                type="button"
                class="project-btn project-btn-preview"
                data-open-preview="${project.id}"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                <span>${previewLabel}</span>
              </button>

              <button
                type="button"
                class="project-btn project-btn-preview"
                data-toggle-drawer="${project.id}"
                title="Unfold quick summary inline"
              >
                <span>${isExpanded ? "Fold Note ▲" : "Quick Unfold ▼"}</span>
              </button>
            </div>

            <div>
              ${
                project.liveUrl
                  ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-live">
                      <span>Visit Live</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>`
                  : `<span class="pastel-pill pill-sand" style="font-size:0.75rem;">Backend-Only</span>`
              }
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  // Skill tag clicks inside project cards
  container.querySelectorAll("[data-project-skill]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const skill = btn.getAttribute("data-project-skill");
      state.selectedSkill = state.selectedSkill === skill ? null : skill;
      renderSkillsSection();
      renderProjectsSection();
    });
  });

  // Inline drawer unfold toggle
  container.querySelectorAll("[data-toggle-drawer]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.getAttribute("data-toggle-drawer");
      if (state.expandedProjectIds.has(pid)) {
        state.expandedProjectIds.delete(pid);
      } else {
        state.expandedProjectIds.add(pid);
      }
      renderProjectsSection();
    });
  });

  // Preview modal triggers
  container.querySelectorAll("[data-open-preview]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-open-preview");
      openProjectModal(projectId);
    });
  });
}

/* ==========================================================================
   3. Render Experience & Education Stepping Cards
   ========================================================================== */
function renderTimelineSection() {
  const container = document.getElementById("timeline-list-container");
  if (!container) return;

  const filtered = CV_DATA.timeline.filter((item) => {
    if (state.selectedTimelineFilter === "all") return true;
    return item.type === state.selectedTimelineFilter;
  });

  container.innerHTML = filtered
    .map((item) => {
      const bulletsHtml = item.bullets.map((b) => `<li>${b}</li>`).join("");

      const linksHtml =
        item.relatedProjects && item.relatedProjects.length > 0
          ? `<div class="timeline-project-links">
              ${item.relatedProjects
                .map(
                  (rp) => `
                  <button type="button" class="contact-action-btn" data-timeline-preview="${rp.projectId}">
                    Open ${rp.projectId === "metroscope" ? "Metroscope" : "TALASWARA"} Workspace
                  </button>
                  <a href="${rp.url}" target="_blank" rel="noopener noreferrer" class="contact-action-btn">
                    ${rp.label}
                  </a>
                `
                )
                .join("")}
            </div>`
          : "";

      return `
        <article class="timeline-card reveal-up in-view ${item.wide ? "wide-card" : ""}">
          <div>
            <div class="timeline-top">
              <div class="timeline-role-group">
                <h3 class="timeline-role">${item.role}</h3>
                <p class="timeline-org">${item.organization}</p>
              </div>
              <span class="timeline-date-pill ${item.badgeClass}">${item.period}</span>
            </div>
            <ul class="timeline-points">
              ${bulletsHtml}
            </ul>
          </div>
          ${linksHtml}
        </article>
      `;
    })
    .join("");

  container.querySelectorAll("[data-timeline-preview]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.getAttribute("data-timeline-preview");
      openProjectModal(pid);
    });
  });
}

/* ==========================================================================
   4. Filter Tab Listeners
   ========================================================================== */
function setupFilterListeners() {
  document.querySelectorAll("[data-skill-group-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll("[data-skill-group-tab]")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedSkillGroup = btn.getAttribute("data-skill-group-tab");
      renderSkillsSection();
    });
  });

  const clearSkillBtn = document.getElementById("clear-skill-filter-btn");
  if (clearSkillBtn) {
    clearSkillBtn.addEventListener("click", () => {
      state.selectedSkill = null;
      renderSkillsSection();
      renderProjectsSection();
    });
  }

  document.querySelectorAll("[data-project-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll("[data-project-tab]")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedProjectCategory = btn.getAttribute("data-project-tab");
      renderProjectsSection();
    });
  });

  document.querySelectorAll("[data-timeline-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll("[data-timeline-tab]")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedTimelineFilter = btn.getAttribute("data-timeline-tab");
      renderTimelineSection();
    });
  });
}

/* ==========================================================================
   5. Interactive Project Preview & CV PDF Viewer Modal
   ========================================================================== */
function openProjectModal(projectId) {
  const project = CV_DATA.projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("workspace-modal");
  const titleEl = document.getElementById("modal-title-text");
  const stageEl = document.getElementById("modal-stage-container");
  const externalBtn = document.getElementById("modal-external-link");
  const vpSwitcher = document.getElementById("modal-viewport-switcher");

  titleEl.textContent = project.title;

  if (project.liveUrl) {
    externalBtn.style.display = "inline-flex";
    externalBtn.href = project.liveUrl;
    externalBtn.querySelector("span").textContent = "Open in New Tab ↗";
  } else {
    externalBtn.style.display = "none";
  }

  if (project.iframeEmbeddable && (project.previewUrl || project.liveUrl)) {
    const frameSrc = project.previewUrl || project.liveUrl;
    vpSwitcher.style.display = "inline-flex";
    stageEl.innerHTML = `
      <div class="iframe-wrapper" id="active-iframe-wrap">
        <iframe
          src="${frameSrc}"
          class="preview-iframe"
          title="${project.title} Live Preview"
          loading="lazy"
        ></iframe>
      </div>
    `;
  } else {
    vpSwitcher.style.display = "none";
    const stepsHtml = (project.architectureSteps || [])
      .map(
        (s) => `
        <div class="arch-node">
          <span class="arch-node-step">${s.step}</span>
          <h4 class="arch-node-title">${s.title}</h4>
          <p class="arch-node-desc">${s.desc}</p>
        </div>
      `
      )
      .join("");

    stageEl.innerHTML = `
      <div class="inspection-sheet">
        <span class="pastel-pill pill-orange" style="margin-bottom:12px;">${project.categoryLabel}</span>
        <h3 style="font-size:1.5rem; font-weight:800; margin-bottom:6px;">${project.title}</h3>
        <p style="color:var(--ink-secondary); margin-bottom:20px;">${project.subtitle}</p>

        <h4 style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.07em; color:var(--ink-muted); margin-bottom:10px;">
          Key Implementation Highlights (From CV)
        </h4>
        <ul class="project-bullets" style="margin-bottom:24px;">
          ${project.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>

        ${
          stepsHtml
            ? `<h4 style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.07em; color:var(--ink-muted);">
                System & Deployment Architecture
              </h4>
              <div class="arch-flow-grid">${stepsHtml}</div>`
            : ""
        }

        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px;">
          ${project.skills.map((sk) => `<span class="tech-tag">${sk}</span>`).join("")}
        </div>

        ${
          project.liveUrl
            ? `<div style="padding:18px 22px; border-radius:var(--radius-sm); background-color:var(--orange-pastel-light); border:2px solid var(--orange-pastel-border); color:var(--ink-primary); display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px;">
                <div>
                  <strong style="display:block; font-size:0.95rem; color:var(--orange-pastel-deep);">Live Production Deployment on Vercel</strong>
                  <span style="font-size:0.83rem; color:var(--ink-secondary);">${project.liveUrl}</span>
                </div>
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                  <span>Launch Metroscope Live ↗</span>
                </a>
              </div>`
            : ""
        }
      </div>
    `;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function openCvPdfModal() {
  const modal = document.getElementById("workspace-modal");
  const titleEl = document.getElementById("modal-title-text");
  const stageEl = document.getElementById("modal-stage-container");
  const externalBtn = document.getElementById("modal-external-link");
  const vpSwitcher = document.getElementById("modal-viewport-switcher");

  titleEl.textContent = "Original CV Document — Ihsan Baihaqy Setiaputra";
  vpSwitcher.style.display = "none";
  externalBtn.style.display = "inline-flex";
  externalBtn.href = CV_DATA.profile.cvPdf;
  externalBtn.querySelector("span").textContent = "Open / Download PDF ↗";

  stageEl.innerHTML = `
    <div class="iframe-wrapper">
      <iframe
        src="${CV_DATA.profile.cvPdf}"
        class="preview-iframe"
        title="Ihsan Baihaqy Setiaputra CV PDF"
      ></iframe>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeWorkspaceModal() {
  const modal = document.getElementById("workspace-modal");
  const stageEl = document.getElementById("modal-stage-container");
  modal.classList.remove("open");
  setTimeout(() => {
    if (!modal.classList.contains("open")) {
      stageEl.innerHTML = "";
    }
  }, 300);
  document.body.style.overflow = "";
}

function setupModalListeners() {
  const closeBtn = document.getElementById("modal-close-btn");
  const modal = document.getElementById("workspace-modal");
  const previewCvBtn = document.getElementById("preview-cv-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeWorkspaceModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeWorkspaceModal();
    });
  }

  if (previewCvBtn) {
    previewCvBtn.addEventListener("click", openCvPdfModal);
  }

  document.querySelectorAll("[data-vp]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-vp]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.getAttribute("data-vp");
      const wrap = document.getElementById("active-iframe-wrap");
      if (!wrap) return;
      wrap.classList.remove("vp-tablet", "vp-mobile");
      if (mode === "tablet") wrap.classList.add("vp-tablet");
      if (mode === "mobile") wrap.classList.add("vp-mobile");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeWorkspaceModal();
      closeCommandPalette();
    }
  });
}

/* ==========================================================================
   6. Command Palette (Ctrl+K / Cmd+K)
   ========================================================================== */
const COMMAND_ITEMS = [
  {
    label: "Open Live Workspace: Nexus Market Analyzer (eBay)",
    tag: "Live App",
    action: () => openProjectModal("nexus-market-analyzer")
  },
  {
    label: "Open Live Workspace: TALASWARA Sustainable E-Commerce",
    tag: "Live App",
    action: () => openProjectModal("talaswara")
  },
  {
    label: "Open Live Workspace: Metroscope Mentoring Ecosystem",
    tag: "Live App",
    action: () => openProjectModal("metroscope")
  },
  {
    label: "Inspect: End-to-End Headless Automation System",
    tag: "Backend System",
    action: () => openProjectModal("headless-automation")
  },
  {
    label: "Preview Original CV Document (PDF)",
    tag: "CV Document",
    action: () => openCvPdfModal()
  },
  {
    label: "Copy Email Address (haqysetiaputra@gmail.com)",
    tag: "Contact",
    action: () => copyToClipboard("haqysetiaputra@gmail.com", "Email copied to clipboard")
  },
  {
    label: "Copy Phone Number (+6285693946061)",
    tag: "Contact",
    action: () => copyToClipboard("+6285693946061", "Phone number copied to clipboard")
  },
  {
    label: "Open GitHub Profile (github.com/Haqys)",
    tag: "Social",
    action: () => window.open("https://github.com/Haqys", "_blank", "noopener")
  },
  {
    label: "Open LinkedIn Profile",
    tag: "Social",
    action: () =>
      window.open(
        "https://www.linkedin.com/in/baihaqy-setiaputra-844119328/",
        "_blank",
        "noopener"
      )
  }
];

function openCommandPalette() {
  const backdrop = document.getElementById("cmd-backdrop");
  const input = document.getElementById("cmd-search-input");
  if (!backdrop || !input) return;
  backdrop.classList.add("open");
  input.value = "";
  renderCommandResults("");
  setTimeout(() => input.focus(), 40);
}

function closeCommandPalette() {
  const backdrop = document.getElementById("cmd-backdrop");
  if (backdrop) backdrop.classList.remove("open");
}

function renderCommandResults(query) {
  const list = document.getElementById("cmd-results-list");
  if (!list) return;
  const q = query.trim().toLowerCase();
  const matches = COMMAND_ITEMS.filter(
    (item) =>
      item.label.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q)
  );

  list.innerHTML = matches
    .map(
      (item, idx) => `
      <button type="button" class="cmd-item" data-cmd-idx="${idx}">
        <span>${item.label}</span>
        <span class="cmd-item-tag">${item.tag}</span>
      </button>
    `
    )
    .join("");

  list.querySelectorAll("[data-cmd-idx]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-cmd-idx"));
      closeCommandPalette();
      matches[idx].action();
    });
  });
}

function setupCommandPalette() {
  const trigger = document.getElementById("open-cmd-btn");
  const backdrop = document.getElementById("cmd-backdrop");
  const input = document.getElementById("cmd-search-input");

  if (trigger) {
    trigger.addEventListener("click", openCommandPalette);
  }

  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeCommandPalette();
    });
  }

  if (input) {
    input.addEventListener("input", (e) => {
      renderCommandResults(e.target.value);
    });
  }

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openCommandPalette();
    }
  });
}

/* ==========================================================================
   7. Copy Buttons, Theme Toggle, ScrollSpy, ScrollReveal & Fluid Cursor
   ========================================================================== */
function copyToClipboard(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(message));
  } else {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    showToast(message);
  }
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function setupCopyButtons() {
  document.querySelectorAll("[data-copy-value]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-copy-value");
      const label = btn.getAttribute("data-copy-label") || "Copied to clipboard";
      copyToClipboard(value, label);
    });
  });
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const isNight = document.documentElement.getAttribute("data-theme") === "cozy-night";
    if (isNight) {
      document.documentElement.removeAttribute("data-theme");
      showToast("Switched to Pastel Orange & Warm Cream theme");
    } else {
      document.documentElement.setAttribute("data-theme", "cozy-night");
      showToast("Switched to Cozy Espresso & Terracotta theme");
    }
  });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener(
    "scroll",
    () => {
      let current = "";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 150;
        if (window.scrollY >= top) {
          current = sec.getAttribute("id");
        }
      });
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${current}`
        );
      });
    },
    { passive: true }
  );
}

function setupScrollRevealObserver() {
  const items = document.querySelectorAll(".reveal-up");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("in-view");
          }, idx * 70);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((el) => observer.observe(el));
}

function setupFluidCursorFollower() {
  const follower = document.getElementById("cursor-follower");
  if (!follower || window.matchMedia("(hover: none)").matches) return;

  let mouseX = -100;
  let mouseY = -100;
  let posX = -100;
  let posY = -100;

  window.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      follower.classList.add("active");
    },
    { passive: true }
  );

  document.addEventListener("mouseover", (e) => {
    const interactive = e.target.closest("a, button, .marquee-item, .project-card");
    follower.classList.toggle("hovered", Boolean(interactive));
  });

  function renderCursorLoop() {
    posX += (mouseX - posX) * 0.18;
    posY += (mouseY - posY) * 0.18;
    follower.style.transform = `translate3d(${posX - 14}px, ${posY - 14}px, 0)`;
    requestAnimationFrame(renderCursorLoop);
  }

  requestAnimationFrame(renderCursorLoop);
}
