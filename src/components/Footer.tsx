import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-cyan-950/80 bg-[#05070e] text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>&copy; {new Date().getFullYear()} Kai Frazier · University of Washington ECE</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
