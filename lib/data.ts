import { Service, TechStack, Product } from "./types";

export const services: Service[] = [
  {
    id: "1",
    title: "Backend Development",
    description: "Scalable REST APIs and microservices using Spring Boot, Laravel, and Nest.js with secure authentication and optimized database design.",
    icon: "database",
  },
  {
    id: "2",
    title: "Frontend Engineering",
    description: "High-performance web applications with Next.js, TypeScript, and Tailwind CSS. Focus on UX, performance optimization, and responsive design.",
    icon: "layout",
  },
  {
    id: "3",
    title: "Cloud & DevOps",
    description: "AWS cloud architecture (EC2, S3, RDS, Lambda, CloudWatch) for scalable, secure deployments with CI/CD pipelines and monitoring.",
    icon: "cloud",
  },
  {
    id: "4",
    title: "Full-Stack Solutions",
    description: "End-to-end application development from database design to deployment, including CRM, e-ticketing, and management systems.",
    icon: "code",
  },
];

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    technologies: ["Next.js", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Livewire"],
  },
  {
    category: "Backend",
    technologies: ["Spring Boot", "Laravel", "Nest.js", "Java", "PHP", "REST APIs", "Microservices"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MySQL", "SQLite", "Query Optimization"],
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS (EC2, S3, RDS, Lambda)", "CloudWatch", "IAM", "Git", "CI/CD"],
  },
  {
    category: "Security & Auth",
    technologies: ["JWT", "OAuth", "Role-Based Access", "Secure Authentication"],
  },
];

export const featuredProduct: Product = {
  id: "store-management",
  title: "Store Management System",
  description: "A desktop store management system built with clean monolithic, layered architecture featuring Spring Boot backend and JavaFX UI.",
  features: [
    "Clean layered architecture with Facade Pattern",
    "Spring Boot backend with robust business logic",
    "JavaFX desktop UI with intuitive design",
    "SQLite embedded database for offline reliability",
    "Optimized queries for high performance",
    "Secure role-based access control",
    "Inventory and batch-level stock management",
    "Complete transaction processing system",
  ],
  techStack: ["Spring Boot", "JavaFX", "SQLite", "Java", "REST APIs"],
};

export const projects = [
  {
    id: "crm",
    title: "CRM System",
    description: "Enterprise CRM with optimized payment workflow and email integration",
    highlights: [
      "Improved customer satisfaction by 20%",
      "Integrated email communication (15% engagement boost)",
      "95% merge conflict resolution accuracy",
    ],
    tech: ["Full Stack", "Payment Processing", "Email Integration"],
  },
  {
    id: "ticketing",
    title: "E-Ticketing System",
    description: "Scalable ticketing platform with optimized performance",
    highlights: [
      "Reduced render time by 27%",
      "Optimized state and UI architecture",
      "Payment processing integration",
    ],
    tech: ["Full Stack", "State Management", "Performance Optimization"],
  },
  {
    id: "survey",
    title: "Survey & Exam Management",
    description: "Multilingual survey system with AWS integration (Current project)",
    highlights: [
      "Improved load time by 22%",
      "AWS S3 document storage integration",
      "Full multilingual support with static deployment",
    ],
    tech: ["Next.js", "AWS S3", "Localization", "Static Deployment"],
  },
];

export const frontendShowcase = [
  {
    title: "Performance Optimized",
    description: "Reduced render times by up to 27% through optimized state management and architecture",
  },
  {
    title: "Cloud Integration",
    description: "Seamless AWS integration (S3, EC2, RDS, Lambda) for scalability and reliability",
  },
  {
    title: "Modern Stack",
    description: "Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth UX",
  },
  {
    title: "Secure & Scalable",
    description: "JWT/OAuth authentication, role-based access, and optimized database queries",
  },
];