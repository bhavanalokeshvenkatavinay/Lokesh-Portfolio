
import { Project, Experience } from "./types";

export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "TicketGuard – AI Scalper & Bot Detection System",
        description: "Developed a full-stack ticket booking platform using Angular, Spring Boot, MySQL, and JWT Authentication. Implemented secure event booking, automatic 5-minute seat reservation with timeout, rule-based fraud detection, and Generative AI (Spring AI & Gemini)-powered risk analysis for identifying suspicious bot behavior. Built an admin dashboard for booking analytics, fraud monitoring, and AI security insights.",
        image: "ticketguard.png",
        link: "#",
        tags: ["Angular", "Spring Boot", "Spring AI", "Gemini API", "MySQL", "JWT"]
    },
    {
        id: "2",
        title: "Hybrid Secure File Transfer System",
        description: "Developed a secure file transfer platform implementing AES and RSA encryption. Features RESTful APIs for authentication, secure file upload/download, role-based access, and user management. Applied CRUD operations, OOP design, and Git/GitHub workflows to ensure secure file transmission and storage.",
        image: "filetransfer.png",
        link: "https://filesecuretransfer.vercel.app/#/",
        tags: ["Java", "Spring Boot", "Angular", "MySQL", "AES/RSA"]
    },
    {
        id: "3",
        title: "Student Hostel Management Portal",
        description: "Developed a full-stack hostel management platform featuring student records, hostel allocation, attendance tracking, and a QR Code-based Gate Pass system with authentication and MySQL database integration. Designed and developed RESTful APIs for hostel allocation, attendance, and gate-pass management.",
        image: "hostelmanagement.png",
        link: "https://hostelmanagement-zeta.vercel.app/#/",
        tags: ["Spring Boot", "Angular", "MySQL", "QR Pass"]
    }
];

export const EXPERIENCES: Experience[] = [
    {
        id: "1",
        company: "SkillDzire",
        role: "Full Stack Developer Intern",
        period: "May 2025 – June 2025",
        description: "Developed responsive web applications using HTML, CSS, JavaScript, and Bootstrap. Built backend services and RESTful APIs using Node.js and Express.js with MySQL database integration. Implemented CRUD operations and tested APIs using Postman for reliable functionality while collaborating with team members using Git/GitHub.",
        technologies: ["Node.js", "Express.js", "MySQL", "Postman", "Bootstrap", "Git"]
    },
    {
        id: "2",
        company: "VaultofCodes.in",
        role: "Web Development Intern",
        period: "April 2025 – May 2025",
        description: "Worked as a Web Development Intern, contributing to responsive web applications using modern web technologies. Collaborated on frontend and backend development, implemented responsive user interfaces, and gained practical experience in web development workflows, problem-solving, and teamwork while delivering project requirements successfully.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Frontend", "Web Workflows"]
    }
];

export const COLLEGE_EXPERIENCES: Experience[] = [
    {
        id: "1",
        company: "National Level Hackathon",
        role: "GGU Hack Fest’26 - Finalist",
        period: "2026",
        description: "Selected as a Round 2 Finalist in a competitive 24-hour National Level Hackathon. Collaborated with a team to brainstorm, design, and prototype a software solution under intense time pressure.",
        technologies: ["Problem Solving", "Collaboration", "Rapid Prototyping"]
    },
    {
        id: "2",
        company: "HackVega 2.0 Hackathon",
        role: "Nationwide Hackathon Participant",
        period: "2026",
        description: "Successfully participated in HackVega 2.0, a nationwide hackathon organized by Careernet & HirePro, competing against 47,000+ engineering students from the 2026–2029 graduating cohorts.",
        technologies: ["Hackathon", "Problem Solving", "Competitive Coding"]
    },
    {
        id: "3",
        company: "Oracle Cloud Infrastructure (OCI)",
        role: "AI Foundations Associate",
        period: "2025",
        description: "Earned the Oracle OCI AI Foundations Associate certification. Validated foundational knowledge of AI/ML concepts and their integration into cloud infrastructure workloads.",
        technologies: ["OCI", "AI Foundations", "Machine Learning"]
    },
    {
        id: "4",
        company: "Postman Academy",
        role: "API Fundamentals Student Expert",
        period: "2025",
        description: "Certified as a Postman Student Expert. Showcased competency in API design, sending requests, writing integration tests, and managing request workflows in Postman.",
        technologies: ["Postman", "API Testing", "REST APIs"]
    },
    {
        id: "5",
        company: "Amazon Web Services (AWS)",
        role: "AWS Prompt Engineering Certified",
        period: "2026",
        description: "Earned AWS Certification in Prompt Engineering & Generative AI. Demonstrated competency in prompt design and cloud AI concepts.",
        technologies: ["AWS", "Prompt Engineering", "Generative AI", "Cloud"]
    },
    {
        id: "6",
        company: "Extra-Curricular",
        role: "Coding Competitor & Workshop Participant",
        period: "2021 - Present",
        description: "Solved multiple Data Structures and Algorithms problems on coding platforms. Actively participated in technical workshops, coding contests, and campus hackathons, honing a strong learning mindset.",
        technologies: ["DSA", "Competitive Programming", "Technical Workshops"]
    }
];
