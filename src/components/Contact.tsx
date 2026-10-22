import React from 'react';
import { Mail, Github, FileText, MapPin, GraduationCap } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-[#070a12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0b101d] border border-cyan-950/80 rounded-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Info */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <GraduationCap className="w-4 h-4" />
                ACADEMIC &amp; INDUSTRY CONTACT
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Get In Touch
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Available for RF engineering, power electronics, embedded hardware internships, and research collaborations.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>University of Washington · Department of Electrical &amp; Computer Engineering</span>
              </div>
            </div>

            {/* Right Contact Matrix */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {/* Personal Email */}
              <div className="p-3.5 rounded-lg bg-[#070b16] border border-cyan-950/70 hover:border-cyan-800/60 transition-colors">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
                  Personal (Preferred)
                </span>
                <a
                  href="mailto:kairfrazier@gmail.com"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors font-medium break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>kairfrazier@gmail.com</span>
                </a>
              </div>

              {/* School Email */}
              <div className="p-3.5 rounded-lg bg-[#070b16] border border-cyan-950/70 hover:border-cyan-800/60 transition-colors">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
                  University of Washington
                </span>
                <a
                  href="mailto:kaifra@uw.edu"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors font-medium break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>kaifra@uw.edu</span>
                </a>
              </div>

              {/* GitHub */}
              <div className="p-3.5 rounded-lg bg-[#070b16] border border-cyan-950/70 hover:border-cyan-800/60 transition-colors">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
                  Version Control
                </span>
                <a
                  href="https://github.com/kai-frazier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors font-medium"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>github.com/kai-frazier</span>
                </a>
              </div>

              {/* Resume */}
              <div className="p-3.5 rounded-lg bg-[#070b16] border border-cyan-950/70 hover:border-cyan-800/60 transition-colors">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
                  Curriculum Vitae
                </span>
                <a
                  href="/images/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors font-medium"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Resume (PDF Document)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
