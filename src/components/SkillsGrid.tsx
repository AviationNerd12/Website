import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Radio, Zap, Cpu, Activity } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Radio: <Radio className="w-4 h-4 text-cyan-400" />,
  Zap: <Zap className="w-4 h-4 text-cyan-400" />,
  Cpu: <Cpu className="w-4 h-4 text-cyan-400" />,
  Activity: <Activity className="w-4 h-4 text-cyan-400" />,
};

export const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="py-12 border-b border-cyan-950/80 bg-[#070b14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            CORE TECHNICAL DISCIPLINES
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Engineering Competencies
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Domain synthesis across high-frequency RF modeling, analog power topologies, EDA tools, and bench instrumentation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#0b101c] border border-cyan-950/70 hover:border-cyan-800/60 rounded-xl p-5 transition-all duration-200 group relative overflow-hidden"
            >
              {/* Subtle accent corner line */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none" />

              <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-slate-800/80">
                <div className="p-1.5 rounded bg-cyan-950/80 border border-cyan-800/50">
                  {ICON_MAP[cat.iconName]}
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 font-normal">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <span className="text-cyan-500/60 select-none font-mono">›</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
