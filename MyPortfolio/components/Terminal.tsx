import React, { useState, useEffect, useRef } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Terminal as TerminalIcon } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface HistoryItem {
  type: 'input' | 'output';
  text: string;
}

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', text: "Welcome to Lokesh's Terminal v1.0" },
    { type: 'output', text: 'Type "help" to see a list of available commands.' },
    { type: 'output', text: ' ' }
  ]);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  // Command database
  const commands: Record<string, () => HistoryItem[]> = {
    help: () => [
      { type: 'output', text: 'Available commands:' },
      { type: 'output', text: '  about        - Learn more about Lokesh' },
      { type: 'output', text: '  skills       - List technical skills and proficiencies' },
      { type: 'output', text: '  profiles     - View coding & security profiles (LeetCode, etc.)' },
      { type: 'output', text: '  projects     - View featured software engineering projects' },
      { type: 'output', text: '  certificates - View verified certifications & badges' },
      { type: 'output', text: '  experience   - View work experience & achievements' },
      { type: 'output', text: '  contact      - Get email, LinkedIn, and GitHub links' },
      { type: 'output', text: '  resume       - Open / download Lokesh\'s Resume' },
      { type: 'output', text: '  matrix       - Enter the Cyber Violet Matrix Rain' },
      { type: 'output', text: '  clear        - Clear the terminal screen' },
      { type: 'output', text: '  sudo [cmd]   - Execute a command with administrative privileges' }
    ],
    about: () => {
      scrollToSection('about');
      return [
        { type: 'output', text: 'Lokesh Venkata Vinay Bhavana' },
        { type: 'output', text: '---------------------------' },
        { type: 'output', text: 'B.Tech Student in Cyber Security at Godavari Institute of Engineering and Technology (CGPA: 8.95/10).' },
        { type: 'output', text: 'Deeply passionate about computer networks, cryptography, and building secure backends/APIs.' },
        { type: 'output', text: 'Philosophy: "Security is not a feature, it\'s a foundation."' }
      ];
    },
    skills: () => {
      scrollToSection('skills');
      return [
        { type: 'output', text: 'Technical Skills:' },
        { type: 'output', text: '  Languages: Java, JavaScript, TypeScript, HTML5, CSS3, SQL' },
        { type: 'output', text: '  Frameworks: Spring Boot, Angular, Node.js, Express.js, Bootstrap' },
        { type: 'output', text: '  Databases: MySQL, Relational Database Management' },
        { type: 'output', text: '  Security / Tools: Cryptography (AES, RSA), Git, GitHub, Postman, API Testing' }
      ];
    },
    profiles: () => {
      scrollToSection('coding');
      return [
        { type: 'output', text: 'Competitive Coding & Security Profiles:' },
        { type: 'output', text: '  - LeetCode:      https://leetcode.com/u/bhavanalokeshvenakatavinay/' },
        { type: 'output', text: '  - GeeksforGeeks: https://www.geeksforgeeks.org/profile/bhavanalokeshf3ql' },
        { type: 'output', text: '  - Codeforces:    https://codeforces.com/profile/Lokeshbhavana' },
        { type: 'output', text: '  - CodeChef:      https://www.codechef.com/users/aloft_dust_67' },
        { type: 'output', text: '  - HackerRank:    https://www.hackerrank.com/profile/bhavanalokeshve1' },
        { type: 'output', text: '  - TryHackMe:     https://tryhackme.com/p/bhavanalokeshvenkatavinay' }
      ];
    },
    coding: () => {
      scrollToSection('coding');
      return [
        { type: 'output', text: 'Competitive Coding & Security Profiles:' },
        { type: 'output', text: '  - LeetCode:      https://leetcode.com/u/bhavanalokeshvenakatavinay/' },
        { type: 'output', text: '  - GeeksforGeeks: https://www.geeksforgeeks.org/profile/bhavanalokeshf3ql' },
        { type: 'output', text: '  - Codeforces:    https://codeforces.com/profile/Lokeshbhavana' },
        { type: 'output', text: '  - CodeChef:      https://www.codechef.com/users/aloft_dust_67' },
        { type: 'output', text: '  - HackerRank:    https://www.hackerrank.com/profile/bhavanalokeshve1' },
        { type: 'output', text: '  - TryHackMe:     https://tryhackme.com/p/bhavanalokeshvenkatavinay' }
      ];
    },
    projects: () => {
      scrollToSection('projects');
      return [
        { type: 'output', text: 'Featured Projects:' },
        { type: 'output', text: '  1. TicketGuard – AI Scalper & Bot Detection System' },
        { type: 'output', text: '     - Angular, Spring Boot, Spring AI, Google Gemini API, MySQL, JWT' },
        { type: 'output', text: '     - Real-time seat reservation, rule-based risk scoring & GenAI fraud analysis.' },
        { type: 'output', text: '     - Live Demo: https://ticket-guard-pi.vercel.app/login' },
        { type: 'output', text: '  2. Hybrid Secure File Transfer System' },
        { type: 'output', text: '     - AES/RSA Encryption, Java, Spring Boot, Angular, MySQL' },
        { type: 'output', text: '     - Developed REST APIs for secure file uploads and transfers.' },
        { type: 'output', text: '  3. Student Hostel Management Portal' },
        { type: 'output', text: '     - Spring Boot, Angular, MySQL, QR-based gate pass system' }
      ];
    },
    certificates: () => {
      scrollToSection('certificates');
      return [
        { type: 'output', text: 'Certifications & Credentials:' },
        { type: 'output', text: '  1. Oracle Cloud Infrastructure (OCI) AI Foundations Associate (2025)' },
        { type: 'output', text: '  2. Cisco Networking & Security Certification (2024-2026)' },
        { type: 'output', text: '  3. AWS Prompt Engineering Certified (2026)' },
        { type: 'output', text: '  4. Postman API Fundamentals Student Expert (2025)' },
        { type: 'output', text: '  5. Individual Internships & Work Experience Certificates' },
        { type: 'output', text: '  6. Hackathon Finalist Certificates (GGU Hack Fest\'26)' }
      ];
    },
    certs: () => {
      scrollToSection('certificates');
      return [
        { type: 'output', text: 'Certifications & Credentials:' },
        { type: 'output', text: '  1. Oracle Cloud Infrastructure (OCI) AI Foundations Associate (2025)' },
        { type: 'output', text: '  2. Cisco Networking & Security Certification (2024-2026)' },
        { type: 'output', text: '  3. AWS Prompt Engineering Certified (2026)' },
        { type: 'output', text: '  4. Postman API Fundamentals Student Expert (2025)' },
        { type: 'output', text: '  5. Individual Internships & Work Experience Certificates' },
        { type: 'output', text: '  6. Hackathon Finalist Certificates (GGU Hack Fest\'26)' }
      ];
    },
    experience: () => {
      scrollToSection('experience');
      return [
        { type: 'output', text: 'Work Experience:' },
        { type: 'output', text: '  1. Full Stack Developer Intern @ SkillDzire (May 2025 – June 2025)' },
        { type: 'output', text: '     Built backend APIs with Node.js/Express, integrated MySQL database and tested CRUD ops.' },
        { type: 'output', text: '  2. Web Development Intern @ VaultofCodes.in (April 2025 – May 2025)' },
        { type: 'output', text: '     Contributed to responsive web applications using HTML5, CSS3, JavaScript and frontend workflows.' },
        { type: 'output', text: 'Achievements:' },
        { type: 'output', text: '  - Round 2 Finalist in National Level Hackathon (GGU Hack Fest\'26)' },
        { type: 'output', text: '  - AWS Certified Prompt Engineering (2026)' },
        { type: 'output', text: '  - Oracle Cloud Infrastructure (OCI) AI Foundations Associate (2025)' },
        { type: 'output', text: '  - Certified Postman Student Expert (2025)' }
      ];
    },
    contact: () => {
      scrollToSection('contact');
      return [
        { type: 'output', text: 'Contact Information:' },
        { type: 'output', text: '  Email:    bhavanalokeshvenkatavinay@gmail.com' },
        { type: 'output', text: '  LinkedIn: https://www.linkedin.com/in/lokesh-venkata-vinay-bhavana-84385a354/' },
        { type: 'output', text: '  GitHub:   https://github.com/bhavanalokeshvenkatavinay' }
      ];
    },
    resume: () => {
      window.open('/Resume.pdf', '_blank');
      return [{ type: 'output', text: 'Opening Resume.pdf in a new tab...' }];
    },
    clear: () => {
      return [];
    },
    matrix: () => {
      setIsMatrixMode(true);
      return [{ type: 'output', text: 'Entering Matrix Mode. Press any key to exit...' }];
    },
    sudo: () => [
      { type: 'output', text: 'lokesh is not in the sudoers file. This incident will be reported.' }
    ]
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim();
      const commandArgs = trimmedInput.toLowerCase().split(' ');
      const mainCommand = commandArgs[0];

      if (!trimmedInput) return;

      const newHistory = [...history, { type: 'input', text: `lokesh@portfolio:~$ ${input}` } as HistoryItem];

      if (mainCommand === 'clear') {
        setHistory([]);
      } else if (commands[mainCommand]) {
        const result = commands[mainCommand]();
        setHistory([...newHistory, ...result]);
      } else {
        setHistory([
          ...newHistory,
          {
            type: 'output',
            text: `bash: command not found: ${trimmedInput}. Type "help" to see available commands.`
          }
        ]);
      }
      setInput('');
    }
  };

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, isMatrixMode]);

  // Focus input on clicking terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };


  // Matrix Rain Canvas Logic
  useEffect(() => {
    if (!isMatrixMode || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };
    resizeCanvas();

    const letters = '010101ABCDEFGHIJKLMNOPQRSTUVWXYZ010101';
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#8b5cf6'; // Violet color to match portfolio
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleExitMatrix = () => {
      setIsMatrixMode(false);
      setTimeout(focusInput, 50);
    };

    window.addEventListener('keydown', handleExitMatrix);
    canvas.addEventListener('click', handleExitMatrix);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleExitMatrix);
    };
  }, [isMatrixMode]);

  return (
    <SectionWrapper id="terminal" title="Interactive Terminal">
      <div className="max-w-4xl mx-auto w-full">
        {/* Terminal Window Wrapper */}
        <div 
          onClick={focusInput}
          className="w-full rounded-2xl glass border border-white/10 bg-[#050505]/95 shadow-2xl overflow-hidden flex flex-col font-mono text-sm min-h-[450px]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            
            <div className="flex items-center gap-2 text-white/40 text-xs font-bold">
              <TerminalIcon size={12} className="text-violet-500" />
              <span>lokesh@portfolio</span>
            </div>

            <div className="text-white/30 text-xs font-bold">
              <span>BASH</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-3 sm:p-5 relative overflow-hidden flex flex-col min-h-[350px] sm:min-h-[380px]">
            {isMatrixMode ? (
              <div className="absolute inset-0 z-10 w-full h-full bg-[#050505] cursor-pointer">
                <canvas ref={canvasRef} className="w-full h-full" />
                <div className="absolute bottom-4 left-4 right-4 text-center text-white/50 text-xs animate-pulse">
                  Click or press any key to exit matrix mode
                </div>
              </div>
            ) : null}

            <div 
              ref={terminalBodyRef}
              className="flex-1 overflow-y-auto space-y-2 pr-1 sm:pr-2 text-xs sm:text-sm"
              style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
            >
              {/* ASCII Art formatted inside <pre> for perfect monospace rendering */}
              <pre className="font-mono leading-tight tracking-normal text-violet-400 select-none overflow-x-auto mb-4 text-[8px] sm:text-xs md:text-sm" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
{` _         _              _     
| | ___   | | __  ___  ___| |__  
| |/ _ \\  | |/ / / _ \\/ __| '_ \\ 
| | (_) | |   < |  __/\\__ \\ | | |
|_|\\___/  |_|\\_\\ \\___||___/_| |_|`}
              </pre>

              {history.map((item, index) => (
                <div 
                  key={index}
                  className={`leading-relaxed whitespace-pre-wrap ${
                    item.type === 'input' ? 'text-white font-bold' : 'text-violet-200/80 font-medium'
                  }`}
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
                >
                  {item.text}
                </div>
              ))}
            </div>

            {/* Input Prompt (Always visible at bottom when not in Matrix mode) */}
            {!isMatrixMode && (
              <div className="flex items-center gap-2 mt-3 sm:mt-4 text-white border-t border-white/5 pt-3 text-xs sm:text-sm" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
                <span className="text-white font-bold flex-shrink-0 text-xs sm:text-sm">lokesh@portfolio:~$</span>
                <div className="flex-1 flex items-center relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent border-none outline-none focus:ring-0 text-white p-0 font-mono caret-violet-500 text-xs sm:text-sm"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
                    placeholder=""
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
