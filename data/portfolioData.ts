export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'fullstack';
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  color: string;
  demoType: 'treeorg' | 'lms' | 'chat';
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; color: string; description: string }[];
}

export const portfolioData = {
  personal: {
    name: "Arjun Prasad Chaudhary",
    location: "Nepal 🇳🇵",
    age: 21,
    email: "arjunpsd2020@gmail.com",
    role: "Full-Stack Web & Mobile Developer",
    tagline: "Architecting interactive web applications, graph-based hierarchies, and real-time mobile apps.",
    bio: "Namaste! I'm a 21-year-old passionate software developer based in Nepal. I specialize in building highly scalable web and mobile applications using modern frameworks like Next.js, React, and Flutter. I love solving complex engineering challenges, whether it's modeling organizational trees with Neo4j & React Flow or securing APIs with advanced tokens like PASETO and JWT.",
    defaultAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  skillsCategories: [
    {
      title: "Frontend Development",
      icon: "Layout",
      skills: [
        { name: "Next.js", level: 95, color: "bg-black text-white border-gray-700", description: "App router, SSR/SSG, server actions, API routes optimization" },
        { name: "React", level: 92, color: "bg-cyan-950 text-cyan-400 border-cyan-800", description: "Hooks, custom state management, component lifecycle, virtual DOM" },
        { name: "React Flow", level: 88, color: "bg-pink-950 text-pink-400 border-pink-800", description: "Custom nodes, edge routing, interactive graph hierarchy visualizations" },
        { name: "Tailwind CSS", level: 95, color: "bg-blue-950 text-blue-400 border-blue-800", description: "Responsive layouts, utility-first design, animations, dark mode" },
        { name: "HTML & CSS", level: 98, color: "bg-orange-950 text-orange-400 border-orange-800", description: "Semantic markup, CSS grid & flexbox, accessibility standards" },
        { name: "JavaScript", level: 92, color: "bg-yellow-950 text-yellow-400 border-yellow-800", description: "ES6+, async/await, closures, prototypes, DOM manipulation" }
      ]
    },
    {
      title: "Backend & Databases",
      icon: "Database",
      skills: [
        { name: "Next.js API", level: 90, color: "bg-neutral-900 text-neutral-300 border-neutral-700", description: "RESTful endpoints, middleware, serverless functions, rate limiting" },
        { name: "MongoDB", level: 88, color: "bg-emerald-950 text-emerald-400 border-emerald-800", description: "Mongoose ODM, schemas, indexing, aggregation pipelines" },
        { name: "Neo4j", level: 85, color: "bg-blue-950 text-indigo-400 border-blue-800", description: "Cypher query language, graph data modeling, nodes & relationships" },
        { name: "Java Backend", level: 86, color: "bg-red-950 text-red-400 border-red-800", description: "Object-Oriented Programming, sockets, concurrency, multithreading" }
      ]
    },
    {
      title: "Mobile Development",
      icon: "Smartphone",
      skills: [
        { name: "Flutter", level: 85, color: "bg-sky-950 text-sky-400 border-sky-800", description: "Cross-platform mobile apps, Dart, beautiful custom widgets, Provider/Bloc" },
        { name: "Java (Android)", level: 88, color: "bg-green-950 text-green-400 border-green-800", description: "Native Android development, background services, broadcast receivers" }
      ]
    },
    {
      title: "Security & Architecture",
      icon: "ShieldCheck",
      skills: [
        { name: "JWT", level: 94, color: "bg-violet-950 text-violet-400 border-violet-800", description: "JSON Web Tokens for secure stateless API authentication & claims" },
        { name: "PASETO", level: 88, color: "bg-amber-950 text-amber-400 border-amber-800", description: "Platform-Agnostic Security Tokens for tamper-proof cryptography" },
        { name: "RBAC", level: 92, color: "bg-teal-950 text-teal-400 border-teal-800", description: "Role-Based Access Control architecture for granular permissions" }
      ]
    }
  ],
  projects: [
    {
      id: "treeorg",
      title: "TreeOrg",
      subtitle: "Enterprise Hierarchical Org Chart Platform",
      category: "fullstack",
      summary: "Interactive hierarchical graph builder visualizing company structures level-wise with relationship edges.",
      description: "A cutting-edge visualization platform that lets organizations construct dynamic hierarchical diagrams of their company. Every employee is rendered as an interactive node positioned by seniority level—from C-level executives at the root level down to managers and contributors. Built with React Flow for rich interactivity and Neo4j graph database to naturally query deep organizational relationships like 'manages' or 'collaborates with'.",
      technologies: ["Next.js", "React Flow", "Neo4j", "Tailwind CSS", "TypeScript"],
      features: [
        "Level-wise automated node positioning & tree hierarchy",
        "Neo4j graph database integration for lightning-fast relationship queries",
        "Custom edge connections with descriptive tags ('manages', 'collaborates')",
        "Interactive node expansion, search, and employee profile inspection",
        "Export org charts to high-res image or JSON"
      ],
      color: "from-blue-600 to-indigo-600",
      demoType: "treeorg"
    },
    {
      id: "lms",
      title: "EduSphere LMS",
      subtitle: "Role-Based Learning Management System",
      category: "web",
      summary: "Full-featured LMS portal with dedicated Teacher and Student workflows secured via JWT tokens.",
      description: "A robust online educational platform engineered with role-based access control (RBAC). Teachers are empowered with intuitive course creation dashboards to upload curriculum, set prerequisites, and track enrollment. Students enjoy a seamless browsing and one-click enrollment experience. Built on Next.js with MongoDB and secured with industry-standard JWT authentication.",
      technologies: ["Next.js", "MongoDB", "JWT Auth", "Next.js API Routes", "Tailwind CSS"],
      features: [
        "Granular Role-Based Access Control (RBAC) for Teachers and Students",
        "Secure stateless authentication using encrypted JWT tokens",
        "Instructor dashboard for course creation, lesson modules, and student management",
        "Student portal for course browsing, one-click enrollment, and progress tracking",
        "Responsive, lightning-fast UI optimized with Next.js App Router"
      ],
      color: "from-emerald-600 to-teal-600",
      demoType: "lms"
    },
    {
      id: "chatapp",
      title: "Real-Time Java Chat App",
      subtitle: "Instant Messaging with Live Notifications",
      category: "mobile",
      summary: "Feature-rich Java mobile chat application with reliable real-time push notifications and socket messaging.",
      description: "A highly responsive mobile messaging application built natively in Java. Designed for seamless real-time communication, it features socket-based message delivery, user presence indicators, and background notification alerts that keep users connected even when the application is minimized or inactive.",
      technologies: ["Java App Development", "Socket Programming", "Background Services", "Android Notifications", "SQL Lite"],
      features: [
        "Instantaneous two-way messaging with low latency sockets",
        "Reliable background notification delivery system",
        "User online/offline status indicators and read receipts",
        "Secure user authentication and message persistence",
        "Clean, intuitive material-design mobile user interface"
      ],
      color: "from-purple-600 to-pink-600",
      demoType: "chat"
    }
  ] as Project[],
  stats: [
    { label: "Age", value: "21", suffix: " yrs", icon: "User" },
    { label: "Country", value: "Nepal", suffix: " 🇳🇵", icon: "MapPin" },
    { label: "Projects Completed", value: "15", suffix: "+", icon: "FolderCheck" },
    { label: "Core Technologies", value: "12", suffix: "+", icon: "Cpu" }
  ],
  milestones: [
    { year: "2024 - Present", title: "Advanced Full-Stack Architectures", description: "Built TreeOrg with Neo4j & React Flow, mastered Next.js App Router, and implemented secure PASETO & JWT auth flows." },
    { year: "2023", title: "LMS & Enterprise Portals", description: "Developed full-fledged Learning Management Systems with robust Role-Based Access Control (RBAC) using MongoDB." },
    { year: "2022", title: "Mobile App Mastery", description: "Built native Java and Flutter applications including real-time chat platforms with push notifications." },
    { year: "2020 - 2021", title: "Coding Journey Begins in Nepal", description: "Fell in love with coding at a young age. Started with HTML, CSS, JavaScript, and Java fundamentals." }
  ]
};
