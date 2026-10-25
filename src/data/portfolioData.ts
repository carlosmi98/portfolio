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
    email: "mailto:tu-email@ejemplo.com",
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
  description: "I'm open to new opportunities and would love to hear from you.",
  buttonText: "Send me an email",
  email: "mailto:tu-email@ejemplo.com",
};

export const projectsPage: ProjectsPageData = {
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
      image: "/src/assets/projects/feelifyme-mockup.png",
      keyFeaturesTitle: "Key features",
      keyFeatures: [
        {
          id: "wheel",
          title: "Interactive Emotion Wheel",
          description: "Explore emotional states through an interactive wheel inspired by Plutchik's model of emotions.",
          icon: "brain",
        },
        {
          id: "insights",
          title: "Emotion Insights",
          description: "Understand emotional relationships, intensity levels and recurring emotional patterns.",
          icon: "chart",
        },
        {
          id: "resources",
          title: "Personal Resources",
          description: "Discover curated content designed to support emotional awareness and personal growth.",
          icon: "search",
        },
      ],
    },
  ],
};
