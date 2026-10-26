export const siteConfig = {
  name: "Darshan U",
  role: "Data Analyst & Software Developer",
  description: "Freshgraduate Information Technology professional with strong foundation in data analytics, SQL, and Python programming. Proven ability to analyze complex datasets, create insightful visualizations, and coordinate cross-functional projects.",
  email: "darshanpec2006@gmail.com",
  githubUsername: "darshan-u-18",
  githubUrl: "https://github.com/darshan-u-18",
  linkedinUrl: "https://www.linkedin.com/in/darshan-u-b73058346",
  resumePath: `${import.meta.env.BASE_URL}Darshan_U_Resume.pdf`,

  // Featured GitHub projects configuration
  githubProjects: {
    // If true, will fetch from GitHub API
    dynamic: true,
    // Max number of projects to show
    maxProjects: 6,
    // Topics to filter by (if a repo has any of these topics, it will be included)
    featuredTopics: ["portfolio", "featured", "web-development", "machine-learning"],
    // Fallback static list in case API fails or dynamic is false
    staticProjects: [
      {
        name: "Company Sales Analysis",
        description: "Analyzed sales data using SQL and Python to identify revenue trends and performance metrics across product lines.",
        language: "Python, SQL",
        topics: ["analytics", "data"],
        html_url: "#",
        updated_at: new Date().toISOString()
      },
      {
        name: "Stock Management System",
        description: "Designed and developed inventory tracking system using Python and SQL supporting real-time stock management for 1000+ items. Implemented automated data validation and error-checking mechanisms.",
        language: "Python, SQL",
        topics: ["backend", "sql"],
        html_url: "#",
        updated_at: new Date().toISOString()
      }
    ]
  },
  
  // Currently working on section
  currentlyWorkingOn: {
    title: "AI-Powered Automation Framework",
    description: "Developing scalable, intelligent agent workflows to streamline data operations.",
    technologies: ["Python", "React", "Node.js", "AI/ML"],
    status: "In Progress",
    link: "https://github.com/darshan-u-18"
  },
  
  // Site Metadata for SEO
  meta: {
    title: "Darshan U | Developer Portfolio",
    description: "Portfolio of Darshan U, a Data Analyst and Software Developer specializing in data analytics, SQL, and Python.",
    themeColor: "#FF5722",
    url: "https://darshan-u-18.github.io/Darshan-Portfolio/"
  }
};
