import React from 'react';
import { 
  ArrowUpRight, 
  FileText, 
  Radio, 
  Zap, 
  Cpu, 
  Sliders, 
  GraduationCap, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="about" className="py-12 sm:py-16 border-b border-cyan-950/80 cyber-grid-bg relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Bio & Core Direction */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                UNIVERSITY OF WASHINGTON · ECE PORTFOLIO
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight mb-4">
                Electrical &amp; Computer{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Engineering
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                B.S. Electrical &amp; Computer Engineering student at the{' '}
                <strong className="text-white font-semibold">University of Washington</strong> (Expected March 2028),
                focusing on RF circuit design, power electronics, analog signal conditioning, and scientific
                computation. Experienced in electromagnetic simulation, SPICE modeling, and benchtop hardware testing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  <span>View Engineering Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="./images/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-900/60 hover:border-cyan-500/60 font-mono text-xs transition-all shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download Resume (PDF)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-0.5" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 px-3 py-2 text-slate-400 hover:text-white font-mono text-xs transition-colors"
                >
                  <span>Contact Information &rarr;</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 border-t border-slate-800/80">
              <div className="p-3 rounded-lg bg-[#0c1220]/80 border border-cyan-950">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 mb-1">
                  <Radio className="w-3.5 h-3.5" /> RF &amp; Microwave
                </div>
                <div className="text-base font-bold font-mono text-white">1090 MHz</div>
                <div className="text-[10px] text-slate-400 font-mono">Chebyshev Filter</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0c1220]/80 border border-cyan-950">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 mb-1">
                  <Zap className="w-3.5 h-3.5" /> Power Electronics
                </div>
                <div className="text-base font-bold font-mono text-white">10–20V</div>
                <div className="text-[10px] text-slate-400 font-mono">CCM Boost Converter</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0c1220]/80 border border-cyan-950">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 mb-1">
                  <Sliders className="w-3.5 h-3.5" /> Analog Design
                </div>
                <div className="text-base font-bold font-mono text-white">3-Channel</div>
                <div className="text-[10px] text-slate-400 font-mono">Active Equalizer</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0c1220]/80 border border-cyan-950">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 mb-1">
                  <Cpu className="w-3.5 h-3.5" /> PCB &amp; Robotics
                </div>
                <div className="text-base font-bold font-mono text-white">KiCad EDA</div>
                <div className="text-[10px] text-slate-400 font-mono">Optoelectronic PCB</div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Academic & Technical Profile Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0b101d] border border-cyan-950/90 rounded-xl p-5 sm:p-6 shadow-xl shadow-cyan-950/20">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Candidate Profile
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                  Seeking Internships
                </span>
              </div>

              <div className="space-y-3.5 text-xs font-mono">
                <div>
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-0.5">Degree &amp; Institution</span>
                  <div className="text-slate-200 font-semibold text-sm">
                    B.S. Electrical &amp; Computer Engineering
                  </div>
                  <div className="text-slate-400 text-xs">University of Washington · Expected March 2028</div>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Core Simulation &amp; EDA</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Ansys HFSS / AEDT', 'KiCad EDA', 'LTspice (.tran/.ac/.dc)', 'SMath Studio', 'Python (NumPy)'].map((tool) => (
                      <span key={tool} className="px-2 py-0.5 rounded bg-[#060a14] border border-slate-800 text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Benchtop Instrumentation</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Keysight DSOs', 'Arbitrary Function Gen.', 'VNA Vector Analyzers', '6½-Digit DMMs', 'SMD Soldering'].map((inst) => (
                      <span key={inst} className="px-2 py-0.5 rounded bg-[#060a14] border border-slate-800 text-slate-300">
                        {inst}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Verified Laboratory Strengths</span>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>Chebyshev hairpin synthesis &amp; S-parameter measurement</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>CCM switched boost supplies with &lt;72mVpp ripple verification</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>Custom KiCad multi-layer PCB layout &amp; bring-up</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <a
                href="./images/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-cyan-950/70 hover:bg-cyan-900/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Full Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
