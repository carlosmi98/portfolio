import type {
  SidebarData,
  AboutMe,
  Technologies,
  ExperienceItem,
  ContactInfo,
  ProjectsPageData,
} from "../types/portfolio";

// Columna Izquierda (Fija)
export const sidebarData: SidebarData = {
  siteName: "carlos.site",
  name: "Carlos Miguéns",
  role: "Web developer",
  tagline: "Learn, create, and turn ideas into real projects.",
  avatar: "/src/assets/profile.jpg",
  navLinks: [
    { id: "about", label: "About me", href: "#about" },
    { id: "technologies", label: "Technologies", href: "#technologies" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  social: {
    linkedin: "https://linkedin.com/in/carlos-miguens",
    github: "https://github.com/carlosmi98",
    email: "mailto:carlosmiguens861@gmail.com",
  },
};

// Columna Derecha (Sección con Scroll: About Me)
export const aboutMe: AboutMe = {
  title: "About me",
  paragraphs: [
    "Hi! I'm Carlos, a web developer based in A Coruña, Spain. I recently completed my studies in Web Application Development, and I'm now looking for my first professional opportunity to put my skills into practice, learn from other developers, and keep growing.",
    "I'm curious by nature and enjoy understanding how things work. I like turning ideas into real applications, exploring new technologies, and solving problems along the way. I'm particularly interested in both frontend and backend development, and in building applications that are useful, intuitive, and well-structured.",
    "One of my main personal projects is FeelifyMe, an emotional self-tracking application built with React, Django, and PostgreSQL. Developing it has helped me explore different parts of the web development process and learn by tackling real challenges.",
    "Outside of coding, I'm interested in psychology, neuroscience, and philosophy. I enjoy learning about how people think and how the world works — curiosity is something I try to bring into everything I do.",
    "I'm looking forward to joining a development team where I can contribute, learn from others, and turn ideas into meaningful projects.",
  ],
};

export const technologies: Technologies = {
  subtitle: "Technologies and tools I've used throughout my projects, studies and internship.",
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "react" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" }
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Django", icon: "django" },
        { name: "Java", icon: "java" },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "postgresql" }
      ],
    },
    {
      name: "Tools & Practices",
      skills: [
        { name: "GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
      ],
    },
  ],
};

export const experience: ExperienceItem[] = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "Luckia",
    period: "March 2026 - June 2026",
    type: "Internship",
    description: "Worked with backend and frontend technologies as part of a development team.",
    bulletPoints: [
      "Worked with Spring Boot in a project using hexagonal architecture.",
      "Worked on unit testing for Spring Boot components.",
      "Gained introductory experience with Vue.js on the frontend.",
    ],
    tags: ["Spring Boot", "Vue.js", "Unit Testing"],
  },
];

export const contactInfo: ContactInfo = {
  title: "Get in touch",
  description: "I'm currently looking for new opportunities in frontend and full stack development. If you'd like to discuss a role, a project, or a collaboration, feel free to reach out.",
  buttonText: "Send me an email",
  email: "mailto:carlosmiguens861@gmail.com",
};

export const projectsPage: ProjectsPageData = {
  backButtonText: "Back to home",
  title: "Projects",
  subtitle: "A showcase of the products, systems and experiences I've built throughout my journey as a developer.",
  projects: [
    {
      id: "feelifyme",
      badge: "Featured project",
      title: "FeelifyMe",
      paragraphs: [
        "A full-stack emotional intelligence platform inspired by Plutchik's Wheel of Emotions, helping users identify, understand and reflect on their emotional states through interactive visual experiences.",
        "FeelifyMe combines psychology and technology to create a modern emotional awareness experience. Through an interactive emotion wheel, users can explore emotions, gain insights and develop a deeper understanding of their emotional patterns.",
      ],
      tags: ["React", "Django", "PostgreSQL"],
      image: "/src/assets/project/hero/pc.png",
      featuresTitle: "Core Features & Interface Previews",
      featuresSubtitle: "A visual walkthrough of the user journey, daily emotional tracking, and analytics dashboards.",
      features: [
        {
          id: "register",
          title: "Daily Emotional Registration",
          description:
            "Interactive Sunburst emotion wheel inspired by Plutchik's model. Users select nuanced feelings, associate related activities, and write personal reflections.",
          image: "/src/assets/project/features/feelifyme/registro-diario-emocional_feelifyme.png",
        },
        {
          id: "calendar",
          title: "Interactive Emotion Calendar",
          description:
            "Monthly calendar view displaying daily emotional badges, streak indicators, and quick navigation to historical records.",
          image: "/src/assets/project/features/feelifyme/calendario_feelifyme.png",
        },
        {
          id: "timeline",
          title: "Chronological Daily Timeline",
          description:
            "A structured breakdown of every recorded day, showing all selected emotions, attached context, and reflective personal notes in timeline format.",
          image: "/src/assets/project/features/feelifyme/resumen-diario-cronologico_feelifyme.png",
        },
        {
          id: "statistics",
          title: "Evolution & Analytical Dashboard",
          description:
            "Dynamic ECharts visualizations revealing emotional proportions, frequent activity correlations, and recurring behavioral trends month by month.",
          image: "/src/assets/project/features/feelifyme/evolucion-grafica-emocional_feelifyme.png"
        },
        {
          id: "achievements",
          title: "Gamified Milestone System",
          description:
            "Progression system with total points, active streaks, unlocked badges, milestone achievements, and secret badges that encourage consistent emotional tracking.",
          image: "/src/assets/project/features/feelifyme/logros_feelifyme.png",
        },
        {
          id: "profile",
          title: "User Profile & Account Settings",
          description:
            "Personal account management dashboard with customizable avatar cards, personal information, tracking preferences, and GDPR-compliant account deletion.",
          image: "/src/assets/project/features/feelifyme/perfil_feelifyme.png",
        },
      ],
      technicalHighlightsTitle: "Architecture & Engineering Highlights",
      technicalHighlightsSubtitle: "Technical foundations, patterns, and design decisions built beneath the user interface.",
      technicalHighlights: [
        {
          id: "backend-api",
          title: "Django REST API & JWT Security",
          description:
            "Stateless RESTful architecture built with Django REST Framework, featuring SimpleJWT authentication (access and refresh token lifecycle) and guarded routes.",
          icon: "server",
        },
        {
          id: "data-persistence",
          title: "Relational Modeling with PostgreSQL",
          description:
            "Normalized relational schema managing emotional hierarchies, contextual user activities, and transactional daily logs with referential integrity.",
          icon: "database",
        },
        {
          id: "docker-orchestration",
          title: "Docker Multi-Container Environment",
          description:
            "Orchestrated development workflow via Docker Compose with dedicated containers for PostgreSQL 15, Django backend, and React/Vite frontend.",
          icon: "docker",
        },
        {
          id: "data-visualization",
          title: "ECharts Sunburst & Charting Engine",
          description:
            "Custom frontend charting layer with Apache ECharts to render multi-level Sunburst emotion wheels and interactive distribution analytics.",
          icon: "chart",
        },
        {
          id: "ui-system",
          title: "Figma Prototype to Responsive CSS",
          description:
            "End-to-end UI design in Figma translated into modular, accessible CSS variables, custom themes, and full mobile-to-desktop layout responsiveness.",
          icon: "palette",
        },
        {
          id: "capstone-scope",
          title: "End-to-End Capstone Project (TFC)",
          description:
            "Independently planned, developed, tested, and documented as a final vocational degree project, meeting production-grade full-stack standards.",
          icon: "code",
        },
      ],
    },
  ],
};
