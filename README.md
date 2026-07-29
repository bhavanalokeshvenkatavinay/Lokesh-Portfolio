Premium 3D Interactive Portfolio
A premium, modern, and fully responsive 3D interactive portfolio website built for Lokesh Venkata Vinay Bhavana (LVVB). Featuring rich animations, smooth transitions, glassmorphism, and an interactive 3D background.

✨ Features
3D Background Grid: An interactive, dynamic 3D background that responds to scroll and mouse movements.
Custom Liquid Cursor: A custom particle/trail following cursor that matches the site's futuristic aesthetic.
Glassmorphism Design: Elegant translucent components utilizing Tailwind CSS blur filters.
Micro-Animations & Smooth Scroll: Smooth viewport animations and page transitions powered by Framer Motion.
Dynamic Projects Section: Showcases software engineering projects with beautiful hover animations and live links.
Certifications & Experiences: Highlighted career milestones, internship at SkillDzire, college hackathons (GGU Hack Fest'26 Finalist), and OCI AI Associate certification.
Functional Contact Form: Direct messaging integration using EmailJS.
🛠️ Tech Stack
Framework: React 19
Build Tool: Vite
Language: TypeScript
Styling: Tailwind CSS CDN & Custom Vanilla CSS
Icons: Lucide React
Animations: Framer Motion
🚀 Getting Started
Follow these steps to run the portfolio website on your local machine.

Prerequisites
Make sure you have Node.js installed:

Node.js (LTS version recommended)
Installation
Navigate to the project directory:

cd MyPortfolio-main
Install the dependencies:

npm install
Running Locally
To start the local development server:

npm run dev
The app will be running at http://localhost:5173. Open this URL in your browser to view it.

Build and Deployment
Build for Production
To bundle the project for production:

npm run build
The compiled output will be generated inside the dist folder.

Deploy to GitHub Pages
To publish/deploy your portfolio directly to GitHub Pages:

npm run deploy
📂 Project Structure
MyPortfolio-main/
├── components/          # React components (About, Projects, Contact, Hero, etc.)
│   ├── About.tsx
│   ├── Background3D.tsx
│   ├── Certificates.tsx
│   ├── CollegeExperience.tsx
│   ├── Contact.tsx
│   ├── CustomCursor.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/              # Static assets (images, icons)
├── App.tsx              # Main App entrypoint and layout template
├── constants.ts         # Portfolio data (projects list, experience records)
├── index.html           # Main HTML entrypoint (Tailwind CDN and esm.sh imports)
├── index.tsx            # React DOM mounting logic
├── package.json         # Scripts and project dependencies
├── tsconfig.json        # TypeScript configuration compiler options
└── vite.config.ts       # Vite bundler configurations
📧 Contact & Links
Developer: Lokesh Venkata Vinay Bhavana
GitHub Profile: bhavanalokeshvenkatavinay
