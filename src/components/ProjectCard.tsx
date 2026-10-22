import React from 'react';
import { ProjectItem, ProjectMedia } from '../types';
import { MathText } from './MathText';
import { ZoomIn, Users, CheckCircle2, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onMediaClick: (media: ProjectMedia) => void;
  onTagClick?: (tag: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onMediaClick, onTagClick }) => {
  const hasMedia = project.media.length > 0;

  return (
    <div className="bg-[#0b101d] border border-cyan-950/70 hover:border-cyan-800/60 rounded-xl p-5 sm:p-6 transition-all duration-200 shadow-xl shadow-black/40 group">
      <div className={`grid gap-6 items-start ${hasMedia ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'}`}>
        {/* Left / Info Column */}
        <div className={hasMedia ? 'lg:col-span-7' : 'w-full'}>
          {/* Card Top: Title & Badges */}
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 flex-wrap">
              {project.team && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-700/80">
                  <Users className="w-3 h-3 text-slate-400" />
                  {project.team}
                </span>
              )}

              {project.status === 'ongoing' ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-500/40">
                  <Clock className="w-3 h-3 text-cyan-400 animate-pulse" />
                  Ongoing
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 bg-slate-900 border border-slate-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  Completed
                </span>
              )}
            </div>
          </div>

          {/* Project Detailed Description */}
          <div className="text-slate-300 text-sm leading-relaxed mb-4">
            <MathText text={project.description} />
          </div>

          {/* Specifications Callout Box */}
          <div className="bg-[#080d19] border-l-2 border-cyan-500/80 border-y border-r border-cyan-950/50 rounded-r-lg p-3 sm:p-3.5 mb-4 text-xs font-mono text-slate-300 leading-relaxed">
            <span className="text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
              [ VERIFIED HARDWARE &amp; BENCH DATA ]
            </span>
            <MathText text={project.specs} />
          </div>

          {/* Technology & Tool Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagClick && onTagClick(tag)}
                className="px-2.5 py-1 rounded text-xs font-mono text-slate-400 hover:text-cyan-300 bg-[#070b16] hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-800/80 transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right / Media Galleries */}
        {hasMedia && (
          <div className="lg:col-span-5">
            {/* Boost Project Stack */}
            {project.mediaLayout === 'boost-stack' && (
              <div className="flex flex-col gap-2.5">
                {/* Full-width schematic */}
                {project.media[0] && (
                  <div
                    onClick={() => onMediaClick(project.media[0])}
                    className="relative group/thumb border border-cyan-950 hover:border-cyan-600/60 rounded-lg overflow-hidden bg-slate-950 cursor-pointer transition-colors"
                  >
                    <img
                      src={project.media[0].src}
                      alt={project.media[0].alt}
                      className="w-full h-28 sm:h-32 object-contain bg-white/95 p-2 transition-transform duration-200 group-hover/thumb:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="px-2 py-1 bg-[#090d18] border-t border-cyan-950 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                      <span>{project.media[0].caption}</span>
                      <ZoomIn className="w-3 h-3 text-cyan-400 opacity-60 group-hover/thumb:opacity-100" />
                    </div>
                  </div>
                )}

                {/* Scope capture pair */}
                <div className="grid grid-cols-2 gap-2.5">
                  {project.media.slice(1, 3).map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => onMediaClick(item)}
                      className="relative group/thumb border border-cyan-950 hover:border-cyan-600/60 rounded-lg overflow-hidden bg-slate-950 cursor-pointer transition-colors"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-24 object-cover transition-transform duration-200 group-hover/thumb:scale-105"
                        loading="lazy"
                      />
                      <div className="px-2 py-1 bg-[#090d18] border-t border-cyan-950 text-[10px] font-mono text-slate-300 truncate flex items-center justify-between">
                        <span className="truncate">{item.caption}</span>
                        <ZoomIn className="w-2.5 h-2.5 text-cyan-400 opacity-60 group-hover/thumb:opacity-100 shrink-0 ml-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Audio Project Layout (3-Column) */}
            {project.mediaLayout === 'audio-3col' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {project.media.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => onMediaClick(item)}
                    className="relative group/thumb border border-cyan-950 hover:border-cyan-600/60 rounded-lg overflow-hidden bg-slate-950 cursor-pointer transition-colors flex flex-col justify-between"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-32 object-contain bg-white/95 p-1 transition-transform duration-200 group-hover/thumb:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="px-2 py-1 bg-[#090d18] border-t border-cyan-950 text-[10px] font-mono text-slate-300 flex items-center justify-between leading-snug">
                      <span className="line-clamp-2">{item.caption}</span>
                      <ZoomIn className="w-2.5 h-2.5 text-cyan-400 opacity-60 group-hover/thumb:opacity-100 shrink-0 ml-1" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Robot Project 2x2 Grid */}
            {project.mediaLayout === 'robot-2x2' && (
              <div className="grid grid-cols-2 gap-2.5">
                {project.media.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => onMediaClick(item)}
                    className="relative group/thumb border border-cyan-950 hover:border-cyan-600/60 rounded-lg overflow-hidden bg-slate-950 cursor-pointer transition-colors flex flex-col justify-between"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-24 sm:h-28 object-contain bg-white/95 p-1 transition-transform duration-200 group-hover/thumb:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="px-2 py-1 bg-[#090d18] border-t border-cyan-950 text-[10px] font-mono text-slate-300 flex items-center justify-between truncate">
                      <span className="truncate">{item.caption}</span>
                      <ZoomIn className="w-2.5 h-2.5 text-cyan-400 opacity-60 group-hover/thumb:opacity-100 shrink-0 ml-1" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
