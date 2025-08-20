import { Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 dark:from-lime-400 dark:to-lime-500 bg-clip-text text-transparent">
              Artur Yusupov
            </h3>
            <p className="text-slate-400 dark:text-slate-500 mt-2">
              Crafting digital experiences with passion and precision
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <a
              href="#home"
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-slate-800 dark:bg-slate-900 mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-500 text-sm">
              <span>© {currentYear} Artur Yusupov. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-500 text-sm">
              <span>Made</span>

              <Code className="w-4 h-4 text-lime-400 dark:text-purple-400" />
              <span>using React & TypeScript. Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
