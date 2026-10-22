import React from 'react';
import { FileText, Cpu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#070a12]/90 backdrop-blur-md border-b border-cyan-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-base font-bold text-white tracking-tight hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <Cpu className="w-4 h-4" />
          </div>
          <span>
            Kai Frazier <span className="text-xs font-mono font-normal text-cyan-400 ml-1">UW ECE</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Projects
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Skills
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="./images/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-sm hover:shadow-cyan-500/20 whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume (PDF)</span>
          </a>
        </div>
      </div>
    </header>
  );
};
