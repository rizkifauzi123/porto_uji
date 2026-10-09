'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import { FolderGit2, ArrowUpRight, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'Semua' | 'Fullstack' | 'Frontend' | 'Backend' | 'UI/UX'>('Semua');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: ('Semua' | 'Fullstack' | 'Frontend' | 'Backend' | 'UI/UX')[] = [
    'Semua',
    'Fullstack',
    'Frontend',
    'Backend',
    'UI/UX'
  ];

  const filteredProjects = selectedCategory === 'Semua'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portofolio Proyek</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Karya & <span className="gradient-text-main">Studi Kasus Pilihan</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Berbagai aplikasi web nyata yang telah saya bangun untuk institusi pendidikan, bisnis pariwisata, UMKM, dan arsitektur backend.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count = cat === 'Semua' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 font-semibold scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-cyan-700/50 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 flex flex-col justify-between overflow-hidden group transition-all duration-300"
            >
              {/* Card Header Gradient Banner */}
              <div className={`p-5 sm:p-6 bg-gradient-to-br ${project.gradient} border-b border-slate-800/60 relative`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-1 line-clamp-2">
                  {project.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-3 border-t border-slate-900 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-slate-900/50 text-[10px] text-slate-500">
                        +{project.techStack.length - 4} lainnya
                      </span>
                    )}
                  </div>

                  {/* Detail CTA Button */}
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 transition-all flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>Lihat Detail Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
