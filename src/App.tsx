import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectFilter } from './components/ProjectFilter';
import { ProjectCard } from './components/ProjectCard';
import { SkillsGrid } from './components/SkillsGrid';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { PROJECTS } from './data/portfolioData';
import { ProjectCategory, ProjectMedia } from './types';
import { Sparkles, Terminal } from 'lucide-react';

export const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalMedia, setActiveModalMedia] = useState<ProjectMedia | null>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      all: PROJECTS.length,
      rf: 0,
      power: 0,
      analog: 0,
      robotics: 0,
    };
    PROJECTS.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = project.title.toLowerCase().includes(q);
      const inDesc = project.description.toLowerCase().includes(q);
      const inSpecs = project.specs.toLowerCase().includes(q);
      const inTags = project.tags.some((t) => t.toLowerCase().includes(q));

      return inTitle || inDesc || inSpecs || inTags;
    });
  }, [activeCategory, searchQuery]);

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Engineering Projects Section */}
        <section id="projects" className="py-14 sm:py-18 border-b border-cyan-950/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  HARDWARE PROTOTYPES &amp; SIMULATIONS
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Engineering Projects
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Microstrip RF syntheses, power converter hardware, PCB prototypes, and closed-loop control systems.
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 hidden sm:block">
                Showing{' '}
                <span className="text-cyan-300 font-bold">{filteredProjects.length}</span> of{' '}
                <span className="text-white">{PROJECTS.length}</span> documented systems
              </div>
            </div>

            {/* Live Filter & Search Toolbar */}
            <ProjectFilter
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              categoryCounts={categoryCounts}
            />

            {/* Projects List */}
            {filteredProjects.length > 0 ? (
              <div className="space-y-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onMediaClick={(media) => setActiveModalMedia(media)}
                    onTagClick={handleTagClick}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-[#090e1a] border border-cyan-950/80 rounded-xl p-8">
                <Sparkles className="w-8 h-8 text-cyan-500/60 mx-auto mb-3" />
                <h3 className="text-base font-semibold text-white mb-1">No matching projects found</h3>
                <p className="text-xs font-mono text-slate-400 max-w-sm mx-auto mb-4">
                  No technical projects matched &quot;{searchQuery}&quot; in the current filter.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-900/60 text-xs font-mono transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        <SkillsGrid />
        <Contact />
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal
        media={activeModalMedia}
        onClose={() => setActiveModalMedia(null)}
      />
    </div>
  );
};
