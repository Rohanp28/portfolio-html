// Data
const technologies = [
  { name: "React", category: "Frontend", color: "#61dafb" },
  { name: "Next.js", category: "Frontend", color: "#000000" },
  { name: "TypeScript", category: "Frontend", color: "#3178c6" },
  { name: "JavaScript", category: "Frontend", color: "#f7df1e" },
  { name: "Redux", category: "Frontend", color: "#764abc" },
  { name: "HTML", category: "Frontend", color: "#e34c26" },
  { name: "CSS/SCSS", category: "Frontend", color: "#1572b6" },
  { name: "Material UI", category: "Frontend", color: "#007fff" },
  { name: "Node.js", category: "Backend", color: "#339933" },
  { name: "Express.js", category: "Backend", color: "#000000" },
  { name: "GraphQL", category: "Backend", color: "#e10098" },
  { name: "RESTful APIs", category: "Backend", color: "#00d9ff" },
  { name: "MongoDB", category: "Database", color: "#47a248" },
  { name: "MS SQL", category: "Database", color: "#cc2927" },
  { name: "AWS", category: "Cloud", color: "#ff9900" },
  { name: "Git", category: "Tools", color: "#f05032" },
  { name: "Jira", category: "Tools", color: "#0052cc" },
  { name: "Postman", category: "Tools", color: "#ff6c37" },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Musafir.com",
    location: "UAE",
    period: "Mar 2025 — Present",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    points: [
      "Contributing to JETT, an in-house SaaS-based travel infrastructure platform, and leading the frontend architecture for the Admin Console.",
      "Developed and maintained core admin and travel modules — including onboarding for TMCs/organizations, pricing policies, access control, and revenue workflows — using React, TypeScript, and the MERN stack.",
      "Engineering reusable component systems and scalable UI patterns that boost development speed and maintainability.",
      "Designing and integrating end-to-end APIs while improving platform performance and stability through optimizations and production issue resolution.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Musafir.com",
    location: "UAE",
    period: "Jan 2022 — Feb 2025",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Next.js",
      "Strapi",
      "GraphQL",
      "JavaScript",
      "jQuery",
      "Sass",
      "Material UI",
      "Storybook",
    ],
    points: [
      "Delivered high-impact travel modules including Flight Listing, Request Forms, Seatmap Integration, and Hotel Quotation.",
      "Built a dynamic Flight Seatmap System that increased booking efficiency by 30%.",
      "Modernized large sections of the frontend, improving performance, reducing build issues by 25%, and enhancing UX.",
      "Developed scalable React components and GraphQL-backed interfaces, accelerating feature delivery by 30%.",
    ],
  },
  {
    title: "Member of Technical Staff",
    company: "Mindstix Software Labs",
    location: "Pune",
    period: "Aug 2021 — Dec 2021",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "CSS",
    ],
    points: [
      "Project- Amway Taiwan (E-Commerce Platform)",
      "Built responsive, reusable React components that delivered a consistent multi-device user experience.",
      "Integrated RESTful APIs for better performance and smoother data rendering.",
      "Developed backend endpoints in Node.js & Express to support frontend workflows.",
      "Improved UI stability and performance through debugging and refactoring.",
    ],
  },
  {
    title: "Graduate Trainee Engineer",
    company: "Reliance Jio",
    location: "Mumbai",
    period: "Sep 2020 — Jul 2021",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    points: [
      "Contributed to full-stack development using React, Node.js, Express, and MongoDB.",
      "Resolved production issues, improving system stability and user experience.",
      "Collaborated in Agile teams and quickly adapted to new technologies, contributing across the full feature lifecycle.",
    ],
  },
];

const projects = [
  {
    title: "My Portfolio",
    description:
      "A modern, responsive portfolio website showcasing my skills and experience with glassmorphic design.",
    techStack: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Rohanp28/my-portfolio",
    live: "#",
  },
  {
    title: "Todo App",
    description:
      "A full-stack task management application for creating, organizing, and tracking daily tasks and to-do items.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Rohanp28/expense-tracker",
    live: "#",
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense management application for tracking and managing personal finances.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/Rohanp28/expense-tracker",
    live: "#",
  },
];

// Tech Icons
function getTechIcon(name) {
  const icons = {
    React: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(-60 12 12)" />
    </svg>`,
    "Next.js": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5714 6L18 18H15.6L11.5714 11.619L7.54286 18H5.14286L11.5714 6Z" fill="currentColor" />
      <path d="M18 6H20.4L14.4 18H12L18 6Z" fill="currentColor" opacity="0.5" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>`,
    TypeScript: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M8 8h8M8 12h6M8 16h4" stroke-width="1.5" />
      <path d="M14 16l2-2" stroke-width="1.5" />
    </svg>`,
    JavaScript: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M8 8h4v8M12 8h4M12 12h2" stroke-width="1.5" />
    </svg>`,
    Redux: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20M2 12h20" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>`,
    HTML: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4l2 16 6 2 6-2 2-16H4z" />
      <path d="M7 8h10M7 12h8M7 16h6" stroke-width="1.5" />
    </svg>`,
    "CSS/SCSS": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4l2 16 6 2 6-2 2-16H4z" />
      <path d="M7 8h10M7 12h10M7 16h8" stroke-width="1.5" />
      <circle cx="17" cy="16" r="1.5" />
    </svg>`,
    "Material UI": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h8v8H0V0zm8 8h8v8H8V8zm8-8h8v8h-8V0zm0 16h8v8h-8v-8z" fill="currentColor" />
    </svg>`,
    "Node.js": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="currentColor" opacity="0.9" />
      <path d="M12 2v20l10-5V7L12 2z" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
    </svg>`,
    "Express.js": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8zm1 1v6h6V9H9z" fill="currentColor" />
    </svg>`,
    GraphQL: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="4" r="2" />
      <circle cx="4" cy="12" r="2" />
      <circle cx="20" cy="12" r="2" />
      <circle cx="12" cy="20" r="2" />
      <path d="M12 6l-6 6 6 6M12 6l6 6-6 6" />
      <path d="M4 12h16" />
    </svg>`,
    "RESTful APIs": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16v4H4z" />
      <path d="M4 10h16v4H4z" />
      <path d="M4 16h16v4H4z" />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
      <circle cx="6" cy="12" r="1" fill="currentColor" />
      <circle cx="6" cy="18" r="1" fill="currentColor" />
    </svg>`,
    MongoDB: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8 2 5 5 5 9c0 3 2 5.5 5 6.5v7h4v-7c3-1 5-3.5 5-6.5 0-4-3-7-7-7z" fill="currentColor" />
      <path d="M12 2v13.5c-3-1-5-3.5-5-6.5 0-4 2-7 5-7z" fill="currentColor" opacity="0.7" />
    </svg>`,
    "MS SQL": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h6v2H8v-2z" fill="currentColor" />
      <circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.5" />
    </svg>`,
    AWS: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 8.5L12 2l6.5 6.5L12 15l-6.5-6.5z" fill="currentColor" />
      <path d="M5.5 15.5L12 9l6.5 6.5L12 22l-6.5-6.5z" fill="currentColor" opacity="0.7" />
      <path d="M12 2v7l6.5-6.5L12 2z" fill="currentColor" opacity="0.5" />
    </svg>`,
    Git: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M12 8v8M6 18l6-6M18 18l-6-6" />
    </svg>`,
    Jira: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16v16H4z" />
      <path d="M8 8h8v8H8z" />
      <path d="M10 10h4v4h-4z" fill="currentColor" />
    </svg>`,
    Postman: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>`,
  };
  return icons[name] || `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8" stroke-width="2" />
  </svg>`;
}

// Theme Management
let currentTheme = localStorage.getItem("theme") || "dark";

function initTheme() {
  // Set theme before DOM is ready to prevent flash
  if (document.documentElement) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (document.body) {
      document.body.setAttribute("data-theme", currentTheme);
    }
  }
  updateThemeIcons();
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (document.body) {
    document.body.setAttribute("data-theme", currentTheme);
  }
  localStorage.setItem("theme", currentTheme);
  updateThemeIcons();
}

function updateThemeIcons() {
  const icon = currentTheme === "dark" ? "☀️" : "🌙";
  const themeIcon = document.getElementById("theme-icon");
  const themeIconMobile = document.getElementById("theme-icon-mobile");
  if (themeIcon) themeIcon.textContent = icon;
  if (themeIconMobile) themeIconMobile.textContent = icon;
}

// Initialize theme immediately
initTheme();

// Mobile Menu
let mobileMenuOpen = false;

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const menu = document.getElementById("mobile-menu");
  const hamburger = document.querySelector(".hamburger");
  
  if (mobileMenuOpen) {
    menu.classList.add("open");
    hamburger.classList.add("active");
  } else {
    menu.classList.remove("open");
    hamburger.classList.remove("active");
  }
}

// Navigation
function handleNavClick(section) {
  const sectionId = section === "home" ? "hero" : section;
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 85;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  if (mobileMenuOpen) {
    toggleMobileMenu();
  }
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function handleScroll() {
  const scrollButton = document.getElementById("scroll-to-top");
  if (window.scrollY > 300) {
    scrollButton.style.display = "flex";
  } else {
    scrollButton.style.display = "none";
  }
}

// Render Technologies
function renderTechnologies() {
  const grid = document.getElementById("tech-grid");
  grid.innerHTML = technologies
    .map(
      (tech) => `
    <div class="tech-item ${tech.color === "#000000" ? "tech-dark" : ""}" style="--tech-color: ${tech.color}">
      <div class="tech-icon">${getTechIcon(tech.name)}</div>
      <span class="tech-name">${tech.name}</span>
    </div>
  `
    )
    .join("");
}

// Render Experiences
function renderExperiences() {
  const list = document.getElementById("experience-list");
  list.innerHTML = experiences
    .map(
      (role) => `
    <li class="glass-card">
      <div class="timeline-meta">
        <span>${role.period} · ${role.location}</span>
        <span>${role.company}</span>
      </div>
      <h3>${role.title}</h3>
      ${
        role.technologies
          ? `<div class="experience-badges">
        ${role.technologies.map((tech) => `<span class="tech-badge">${tech}</span>`).join("")}
      </div>`
          : ""
      }
      ${
        role.points && role.points.length > 0
          ? `<ul>
        ${role.points
          .map((point) => {
            if (point.startsWith("Project-")) {
              return `<li class="project-point">${point}</li>`;
            }
            return `<li>${point}</li>`;
          })
          .join("")}
      </ul>`
          : ""
      }
    </li>
  `
    )
    .join("");
}

// Render Projects
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = projects
    .map(
      (project) => `
    <div class="project-card glass-card">
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-technologies">
        ${project.techStack.map((tech) => `<span class="tech-badge">${tech}</span>`).join("")}
      </div>
      ${
        project.github || project.live !== "#"
          ? `<div class="project-links">
        ${
          project.github
            ? `<a href="${project.github}" target="_blank" rel="noreferrer" class="project-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          GitHub
        </a>`
            : ""
        }
        ${
          project.live && project.live !== "#"
            ? `<a href="${project.live}" target="_blank" rel="noreferrer" class="project-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Live Demo
        </a>`
            : ""
        }
      </div>`
          : ""
      }
    </div>
  `
    )
    .join("");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Re-initialize theme to ensure icons are updated
  initTheme();
  renderTechnologies();
  renderExperiences();
  renderProjects();
  window.addEventListener("scroll", handleScroll);
  
  // Initial scroll check
  handleScroll();
});

