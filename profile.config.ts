export interface ProfileConfig {
  // Basic Profile Information
  profile: {
    name: string;
    username: string;
    title: string;
    description: string;
    bio: string;
    image: string;
    website: string;
    location: string;
    email?: string;
    currentFocus: string[];
    funFact: string;
  };

  // Social Links
  socialLinks: {
    github: string;
    linkedin?: string;
    twitter?: string;
    telegram?: string;
    discord?: string;
    instagram?: string;
    youtube?: string;
    website?: string;
    [key: string]: string | undefined;
  };

  // Skills and Technologies
  skills: string[];

  // Stats to display
  stats: {
    projects: string;
    profileViews: string;
    streak: string;
    botUsers?: string;
    [key: string]: string | undefined;
  };

  // Achievements
  achievements: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;

  // Terminal Configuration
  terminal: {
    hostname: string;
    username: string;
    theme: 'dark' | 'light' | 'matrix' | 'cyberpunk';
    welcomeMessage: string[];
    customCommands: {
      [command: string]: {
        description: string;
        output: string[] | (() => string[]);
        action?: 'navigate' | 'external' | 'function';
        target?: string;
      };
    };
    enabledCommands: string[];
    prompt: string;
  };

  // System Information for neofetch
  systemInfo: {
    os: string;
    host: string;
    kernel: string;
    uptime: string;
    packages: string;
    shell: string;
    resolution: string;
    de: string;
    wm: string;
    terminal: string;
    cpu: string;
    gpu: string;
    memory: string;
    ascii?: string[];
  };

  // Project Configuration
  projects: {
    featuredRepos: string[];
    excludeRepos: string[];
    categories: {
      [category: string]: string[];
    };
  };

  // Blog Configuration
  blogs: {
    enabled: boolean;
    featuredPosts: string[];
    categories: string[];
    availableBlogs: string[];
  };

  // SEO Configuration
  seo: {
    siteName: string;
    keywords: string[];
    author: string;
    twitterHandle?: string;
    ogImage?: string;
  };

  // Theme Configuration
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    terminalBackground: string;
    terminalText: string;
    font: string;
  };

  // Navigation Configuration
  navigation: {
    brandName: string;
    brandUrl: string;
    links: Array<{
      name: string;
      path: string;
      external?: boolean;
      color?: string;
    }>;
    systemInfo: {
      // os: string;
      shell: string;
      showDateTime: boolean;
    };
  };

  // Footer Configuration
  footer: {
    statusMessage: string;
    madeWithLove: {
      enabled: boolean;
      text: string;
      location: string;
    };
    systemStatus: {
      enabled: boolean;
      message: string;
    };
  };
}

// Default configuration - Users can override any of these values
export const profileConfig: ProfileConfig = {
  profile: {
    name: "Mário Filipe Encarnação Amorim",
    username: "mario",
    title: "Computer Engineer & University Lecturer",
    description: "Computer Engineering graduate teaching at ISTEC Porto. Full-stack development, cloud computing, and security specialist.",
    bio: "Computer Engineering graduate (ISLA Gaia, GPA 18/20), currently a University Lecturer at ISTEC Porto. Strong background in full-stack development, cloud computing, workflow automation, and security. Led innovative projects such as the award-winning intelligent assistant 'Tecas' for JoTecA 2025. Passionate about education, digital transformation, and applying cutting-edge tech to real-world problems.",
    image: "/M1.ico",
    website: "https://terminal.marioamorim.com",
    location: "Portugal",
    email: "mario@marioamorim.com",
    currentFocus: [
      "Teaching Web Development and Cloud Computing at ISTEC Porto",
      "Developing AI-powered solutions with n8n workflows",
      "Building full-stack applications with Laravel and React",
      "Research in intelligent virtual assistants and automation"
    ],
    funFact: "Won 1st place at JoTecA 2025 with an intelligent assistant project! 🏆"
  },

  socialLinks: {
    github: "https://github.com/marioamorim85",
    linkedin: "https://linkedin.com/in/marioamorim",
    website: "https://terminal.marioamorim.com",
    portfolio: "https://portfolio.marioamorim.com"
  },

  skills: [
    "React", "Next.js", "TypeScript", "Tailwind", "Framer Motion",
    "Laravel", "Node.js", "Express", "PHP",
    "Docker", "Portainer", "EasyPanel", "Azure", "Nginx", "CI/CD",
    "MySQL", "PostgreSQL", "MariaDB", "Supabase", "MongoDB",
    "OSINT", "Nessus", "Metasploit", "Kali Linux", "Packet Tracer",
    "GitHub", "VS Code", "n8n", "Superset"
  ],

  stats: {
    projects: "18+",
    profileViews: "1.2k+",
    streak: "45 days",
    totalStars: "5+"
  },

  achievements: [
    {
      title: "🏆 JoTecA 2025 Winner",
      description: "1st Place – Best Academic Project for 'Architecture of Intelligent Virtual Assistants for Academic Events'",
      icon: "🏆"
    },
    {
      title: "🏆 Scientific Poster Award",
      description: "1st Prize – Scientific Poster Competition, ISLA Gaia 2024 (ISLA Connect platform)",
      icon: "🏆"
    },
    {
      title: "🎤 Research Presenter",
      description: "Presenter at SEI'24 (ISEP) with paper on Big Data & Decision-Making",
      icon: "🎤"
    },
    {
      title: "👨‍🏫 University Lecturer",
      description: "Teaching Web Development and Cloud Computing at ISTEC Porto",
      icon: "👨‍🏫"
    },
    {
      title: "🎓 Computer Engineer",
      description: "ISLA Gaia graduate with GPA 18/20",
      icon: "🎓"
    }
  ],

  terminal: {
    hostname: "terminal.marioamorim.com",
    username: "mario",
    theme: "dark",
    welcomeMessage: [
      "",
      "╭─────────────────────────────────────────────────────────────────────────────╮",
      "│                                                                             │",
      "│    ██╗ █████╗ ███╗   ███╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██████╗ ███████╗██╗   ██╗",
      "│    ██║██╔══██╗████╗ ████║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██╔══██╗██╔════╝╚██╗ ██╔╝",
      "│    ██║███████║██╔████╔██║██║  ██║███████║███████║█████╔╝ ██████╔╝█████╗   ╚████╔╝ ",
      "│    ██║██╔══██║██║╚██╔╝██║██║  ██║██╔══██║██╔══██║██╔═██╗ ██╔══██╗██╔══╝    ╚██╔╝  ",
      "│    ██║██║  ██║██║ ╚═╝ ██║██████╔╝██║  ██║██║  ██║██║  ██╗██║  ██║███████╗   ██║   ",
      "│    ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ",
      "│                                                                             │",
      "│                          🚀 INTERACTIVE DEVELOPER TERMINAL v2.1            │",
      "│                                                                             │",
      "├─────────────────────────────────────────────────────────────────────────────┤",
      "│                                                                             │",
      "│  💫 Welcome to my digital workspace! I'm a passionate developer who loves   │",
      "│     building innovative solutions with modern technologies.                 │",
      "│                                                                             │",
      "│  🎯 What you can do here:                                                   │",
      "│     ▸ Explore my projects and skills                                       │",
      "│     ▸ Read my technical blog posts                                         │",
      "│     ▸ Play with interactive commands                                       │",
      "│     ▸ Discover easter eggs and hidden features                             │",
      "│                                                                             │",
      "│  ⚡ Quick Start:                                                            │",
      "│     ▸ Type 'help' for a comprehensive command guide                        │",
      "│     ▸ Try 'neofetch' to see system information                             │",
      "│     ▸ Use 'skills' to explore my technical abilities                       │",
      "│     ▸ Run 'cd projects' to browse my work                                  │",
      "│                                                                             │",
      "│  💡 Pro Tips:                                                              │",
      "│     ▸ Use ↑/↓ arrows to navigate command history                           │",
      "│     ▸ Press Tab for command auto-completion                                │",
      "│     ▸ Try aliases like 'll', 'cls', or 'h' for shortcuts                  │",
      "│                                                                             │",
      "╰─────────────────────────────────────────────────────────────────────────────╯",
      "",
      "🌟 Ready to explore? The terminal awaits your commands...",
      ""
    ],
    customCommands: {
      "about": {
        description: "Learn about Mário Amorim",
        output: [
          "👨‍💻 About Mário Amorim",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "🎓 Computer Engineering graduate (ISLA Gaia, GPA 18/20)",
          "👨‍🏫 Currently University Lecturer at ISTEC Porto",
          "🚀 Full-stack developer specializing in Laravel, React, and cloud computing",
          "🤖 n8n automation enthusiast and workflow architect",
          "🔒 Security researcher with expertise in OSINT and penetration testing",
          "",
          "🏆 Recent Achievement: 1st Place at JoTecA 2025 with intelligent assistant project",
          "🎤 Research presenter at SEI'24 (ISEP) on Big Data & Decision-Making",
          "",
          "Passionate about education, digital transformation, and applying",
          "cutting-edge technology to solve real-world problems."
        ]
      },
      "skills": {
        description: "View technical skills grouped by category",
        output: [
          "🛠️ Technical Skills",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "🎨 Frontend:",
          "  React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
          "",
          "⚙️ Backend:",
          "  Laravel, Node.js, Express, PHP",
          "",
          "☁️ DevOps/Cloud:",
          "  Docker, Portainer, EasyPanel, Microsoft Azure, VPS (Hetzner), Nginx, CI/CD",
          "",
          "🗄️ Databases:",
          "  MySQL, PostgreSQL, MariaDB, Supabase, MongoDB",
          "",
          "🔒 Security/Pentesting:",
          "  OSINT, Nessus, Metasploit, Kali Linux, Cisco Packet Tracer",
          "",
          "🛠️ Tools:",
          "  GitHub, VS Code, n8n, Apache Superset"
        ]
      },
      "teaching": {
        description: "View courses taught at ISTEC Porto",
        output: [
          "👨‍🏫 Teaching at ISTEC Porto",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "🌐 Web Client Development",
          "  HTML, CSS, JavaScript, PHP, MySQL integration",
          "",
          "🔧 Web Server Development",
          "  Laravel framework, Node.js, MongoDB",
          "",
          "☁️ Cloud Computing Security",
          "  Microsoft Azure, security best practices",
          "",
          "🌐 Network Administration",
          "  Cisco Packet Tracer, LAN/WAN configuration"
        ]
      },
      "research": {
        description: "View publications and research work",
        output: [
          "📚 Publications & Research",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "🏆 JoTecA 2025 – Website & Intelligent Assistant",
          "  ISTEC Porto, 2025 (1st Place Winner)",
          "",
          "📊 Big Data and Business Decision-Making",
          "  SEI'24, ISEP Porto (Presenter)",
          "",
          "🎤 ISLA Connect – Event & Check-in Management Platform",
          "  ISLA Gaia, 2024 (1st Prize Scientific Poster)"
        ]
      },
      "awards": {
        description: "View academic distinctions and awards",
        output: [
          "🏆 Awards & Recognition",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "🥇 JoTecA 2025 – 1st Place",
          "  Best Academic Project: 'Architecture of Intelligent Virtual",
          "  Assistants for Academic Events'",
          "",
          "🥇 ISLA Gaia 2024 – 1st Prize",
          "  Scientific Poster Competition (ISLA Connect platform)",
          "",
          "🎓 ISLA Gaia – Academic Excellence",
          "  Computer Engineering degree with GPA 18/20"
        ]
      },
      "projects": {
        description: "View featured projects (GitHub integration)",
        output: [
          "🚀 Key Projects",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "🏆 JoTecA 2025 – Website & AI Assistant",
          "  Laravel + n8n + PostgreSQL + Docker (⭐ Award winner)",
          "",
          "📚 Storytail – Collaborative Story Platform",
          "  Laravel + MySQL",
          "",
          "🔍 Chrome SQL Voyager – MySQL Chrome Extension",
          "  Node.js backend + Manifest V3",
          "",
          "🏁 F1 Rádio PT – Team Radio Archive",
          "  React + OpenF1 API",
          "",
          "💼 Personal Portfolio",
          "  React + Framer Motion",
          "",
          "Use 'projects --github' to view live GitHub repositories"
        ]
      },
      "contact": {
        description: "Get contact information",
        output: [
          "📧 Contact Information",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "📧 Email: mario@marioamorim.com",
          "🔗 LinkedIn: linkedin.com/in/marioamorim",
          "🐈‍⬛ GitHub: github.com/marioamorim85",
          "🌐 Website: marioamorim.com",
          "💼 Portfolio: portfolio.marioamorim.com",
          "",
          "💼 Available for:",
          "• Teaching and training opportunities",
          "• Full-stack development projects",
          "• Cloud computing consulting",
          "• n8n workflow automation",
          "• Academic collaboration"
        ]
      },
      "cv": {
        description: "Download CV/Resume",
        output: [
          "📄 Curriculum Vitae - Mário Amorim",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "💼 Computer Engineer & University Lecturer",
          "🎓 ISLA Gaia Graduate (GPA: 18/20)",
          "👨‍🏫 Teaching at ISTEC Porto",
          "",
          "📊 CV Stats:",
          "  • Education: Computer Engineering",
          "  • Experience: University Teaching, Full-Stack Development", 
          "  • Languages: Portuguese (Native), English (Professional)",
          "  • Key Skills: Laravel, React, n8n, Cloud Computing, Security",
          "",
          "🚀 Opening CV in new tab...",
          "📱 Mobile-optimized PDF available for download",
          "",
          "🔗 Direct link: /assets/mario-amorim-cv.pdf",
          "💡 Tip: Right-click and 'Save As' to download"
        ],
        action: "external",
        target: "/assets/mario-amorim-cv.pdf"
      },
      "stacks": {
        description: "Quick view of technology stacks",
        output: [
          "📚 Technology Stacks",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "• Frontend: React + Next.js + TypeScript + Tailwind",
          "• Backend: Laravel + Node.js + Express + PHP",
          "• Cloud: Docker + Azure + Nginx + CI/CD",
          "• Database: MySQL + PostgreSQL + MongoDB + Supabase",
          "• Security: OSINT + Metasploit + Kali Linux",
          "• Automation: n8n + GitHub Actions + Superset"
        ]
      },
      "blog": {
        description: "Read blog posts and technical articles",
        output: [
          "📝 Blog Posts & Articles",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "📚 Featured Articles:",
          "",
          "🤖 Tecas — Intelligent Assistant for JoTecA 2025",
          "   Award-winning intelligent assistant for academic events",
          "   Tags: n8n, chatbot, academic-events, automation",
          "",
          "⚡ Workflow Automations with n8n", 
          "   Powerful automations connecting multiple platforms",
          "   Tags: n8n, automation, integration, low-code",
          "",
          "🔒 Pentesting Labs & OSINT Experiments",
          "   Security research and teaching methodologies",
          "   Tags: pentesting, osint, security, education",
          "",
          "💡 Commands:",
          "  blog open <slug>    - Read full article",
          "  blog search <term>  - Search articles",
          "  blog list          - Show all posts"
        ]
      }
    },
    enabledCommands: [
      "help", "about", "whoami", "profile", "skills", "projects", "teaching", 
      "research", "awards", "stacks", "blog", "contact", "cv", "neofetch", "clear", 
      "ls", "cd", "pwd", "fortune", "cowsay", "tree", "ps", "top", "grep", 
      "cat", "man", "history", "date", "uptime", "uname", "theme"
    ],
    prompt: "mario@terminal.marioamorim.com:~$"
  },

  systemInfo: {
    os: "Arch Linux x86_64",
    host: "yourwebsite.dev",
    kernel: "6.1.0-kali7-amd64",
    uptime: "2 hours, 34 mins",
    packages: "1337 (pacman)",
    shell: "zsh 5.9",
    resolution: "1920x1080",
    de: "Awesome",
    wm: "Awesome",
    terminal: "alacritty",
    cpu: "Intel i7-10750H (12) @ 2.6GHz",
    gpu: "NVIDIA GeForce GTX 1650",
    memory: "3840MiB / 15951MiB"
  },

  projects: {
    featuredRepos: [], // Will be filled from GitHub API
    excludeRepos: ["private-repo", "test-repo"],
    categories: {
      "Web Development": ["react-app", "vue-project"],
      "CLI Tools": ["cli-tool", "automation-script"],
      "Libraries": ["npm-package", "python-lib"]
    }
  },

  blogs: {
    enabled: true,
    featuredPosts: ["assistant-tecas-n8n", "n8n-automations-workflows", "pentesting-labs-osint"],
    categories: ["AI & Automation", "Automation", "Security", "n8n", "Laravel", "Education", "Cybersecurity"],
    availableBlogs: [
      "assistant-tecas-n8n.md",
      "n8n-automations-workflows.md",
      "pentesting-labs-osint.md"
    ]
  },

  seo: {
    siteName: "Mário Amorim - Terminal Portfolio",
    keywords: ["computer engineer", "university lecturer", "full-stack developer", "laravel", "react", "n8n", "cloud computing", "security", "portugal"],
    author: "Mário Filipe Encarnação Amorim",
    ogImage: "/og-image.jpg"
  },

  theme: {
    primaryColor: "#0070f3",
    secondaryColor: "#ff6b6b",
    accentColor: "#4ecdc4",
    backgroundColor: "#000000",
    textColor: "#ffffff",
    terminalBackground: "#1a1a1a",
    terminalText: "#00ff00",
    font: "CascadiaCode, 'Courier New', monospace"
  },

  navigation: {
    brandName: "terminal.marioamorim.com",
    brandUrl: "/",
    links: [
      { name: "blogs", path: "/blogs", color: "text-green-400" },
      { name: "projects", path: "/projects", color: "text-orange-400" },
      { name: "profile", path: "/profile", color: "text-purple-400" },
      { name: "gh", path: "https://github.com/marioamorim85/", external: true, color: "text-yellow-400" }
    ],
    systemInfo: {
      // os: "Linux 6.1.0",
      shell: "zsh",
      showDateTime: false
    }
  },

  footer: {
    statusMessage: "Connected",
    madeWithLove: {
      enabled: true,
      text: "Made with ❤️ and ⚡",
      location: "Arch Linux"
    },
    systemStatus: {
      enabled: true,
      message: "Linux 6.15.0 •  System OK"
    }
  }
};

export default profileConfig;
