/**
 * Nisha P - Portfolio Data Store
 * Source of Truth: Official Resume & Verified Public GitHub Profile (github.com/Nisha4527-ux)
 */

const PORTFOLIO_DATA = {
    profile: {
        name: "NISHA P",
        shortName: "Nisha P",
        title: "B.Tech AI & Data Science Student",
        location: "Coimbatore, Tamil Nadu, India",
        email: "nishasivam4527@gmail.com",
        phone: "+91 9677908508",
        linkedin: "https://www.linkedin.com/in/nisha-paramasivam-4732a2303/",
        github: "https://github.com/Nisha4527-ux",
        summary: "B.Tech Artificial Intelligence and Data Science student with skills in Python, SQL, Linux, and web technologies. Hands-on experience through internships and projects in Cloud Computing, IoT, and data analytics. Passionate about developing practical, industry-ready technology solutions.",
        status: "Seeking Internship Opportunities",
        languages: ["English", "Tamil"]
    },
    education: [
        {
            institution: "VSB College of Engineering Technical Campus, Coimbatore",
            degree: "B.Tech - Artificial Intelligence and Data Science",
            cgpa: "8.5 CGPA",
            status: "Pursuing Undergrad",
            description: "Specialized in Artificial Intelligence, Machine Learning, Data Analytics, Database Management Systems, and Statistical Computing."
        }
    ],
    skills: [
        { name: "Python", category: "Programming & AI" },
        { name: "SQL", category: "Database & Querying" },
        { name: "Machine Learning", category: "AI & ML" },
        { name: "Linux", category: "Operating Systems & CLI" },
        { name: "JavaScript", category: "Web Development" },
        { name: "HTML", category: "Web Development" },
        { name: "CSS", category: "Web Development" }
    ],
    internships: [
        {
            role: "Cloud Computing Intern",
            company: "Codec IT Solutions",
            points: [
                "Learned cloud computing concepts and their practical applications.",
                "Gained hands-on exposure to cloud technologies and cloud-based environments."
            ]
        },
        {
            role: "Web Development Intern",
            company: "CodeBind Technologies",
            points: [
                "Completed internship focused on HTML, CSS, and JavaScript.",
                "Gained practical experience in building responsive and user-friendly web pages.",
                "Worked on front-end development tasks and improved UI/UX implementation skills."
            ]
        }
    ],
    accomplishments: [
        "Completed internships in Cloud Computing and Web Development.",
        "Developed an Expenses Tracker & Analytics project using Python and SQLite.",
        "Built a Secure Cloud–IoT Architecture project with Flask and SQLite.",
        "Participated in Smart India Hackathon (SIH) 2026 with an AI/ML-based solution.",
        "Developed practical skills in Python, SQL, Linux, HTML, CSS, and JavaScript."
    ],
    projects: [
        {
            id: "expenses-tracker",
            title: "Expenses Tracker & Analytics",
            tag: "Flagship Project",
            category: "Data Analytics & Web",
            techStack: ["Python", "SQLite", "Data Analytics", "HTML/CSS/JS"],
            summary: "A personal finance and expense tracking analytics system developed to monitor transactions, manage categorized expenditures, and analyze budgeting trends using SQLite.",
            highlights: [
                "Developed using Python and SQLite for transactional data storage and querying",
                "Provides organized categorization and analytics for financial tracking",
                "Created responsive UI for data entry and analytics overview",
                "Available as an open-source public repository on GitHub"
            ],
            githubUrl: "https://github.com/Nisha4527-ux/Expenses_Tracker"
        },
        {
            id: "secure-cloud-iot",
            title: "Secure Cloud–IoT Architecture",
            tag: "Cloud & IoT",
            category: "Cloud Computing & Backend",
            techStack: ["Flask", "SQLite", "Cloud Concepts", "IoT", "Python"],
            summary: "An integrated architectural project designed to connect IoT device telemetry securely to a cloud backend powered by Flask and SQLite database persistence.",
            highlights: [
                "Built secure backend endpoints using Python Flask framework",
                "Structured lightweight SQLite database for device logging and authentication",
                "Applied core cloud computing and IoT communication principles",
                "Demonstrated end-to-end data transmission from device simulation to storage"
            ],
            githubUrl: "https://github.com/Nisha4527-ux"
        },
        {
            id: "sih-hackathon",
            title: "Smart India Hackathon (SIH) 2026 AI/ML Solution",
            tag: "Hackathon & AI/ML",
            category: "Artificial Intelligence & ML",
            techStack: ["Python", "Machine Learning", "Data Analytics"],
            summary: "An AI/ML-driven solution engineered for the prestigious Smart India Hackathon (SIH) 2026, targeting complex real-world problem statements with data-backed intelligence.",
            highlights: [
                "Applied Machine Learning algorithms and data preprocessing techniques in Python",
                "Designed algorithmic solution architecture to solve designated problem statement",
                "Collaborated on rapid prototyping and practical AI deployment workflows"
            ],
            githubUrl: "https://github.com/Nisha4527-ux"
        }
    ]
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
