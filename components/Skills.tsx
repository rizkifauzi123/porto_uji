'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Wrench, CheckCircle, Sparkles, Layers, Cpu, Database, Shield, Palette, TerminalSquare } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');

  const categoryIcons = [
    Layers,         // Frontend
    Cpu,            // Backend
    Database,       // Database & ORM
    Shield,         // Keamanan & Testing
    Palette,        // UI/UX & Design
    TerminalSquare  // Tools
  ];

  const softSkills = [
    "Manajemen Proyek & Acara",
    "Koordinasi Lintas Tim",
    "Kepemimpinan & Delegasi",
    "Komunikasi Efektif",
    "Problem Solving",
    "Adaptasi Teknologi Baru"
  ];

  const displayedCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : [SKILL_CATEGORIES[activeTab]];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Keahlian Teknis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Teknologi & <span className="gradient-text-main">Stack yang Dikuasai</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Kombinasi teknologi modern untuk frontend yang responsif, arsitektur backend yang aman, dan database yang teroptimasi.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 font-semibold'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Semua Kategori
          </button>
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Wrench;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === idx
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 font-semibold'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, idx) => {
            const actualIdx = activeTab === 'all' ? idx : activeTab;
            const Icon = categoryIcons[actualIdx] || Wrench;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle card top gradient glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills in Category */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 text-xs text-slate-200 font-medium flex items-center gap-1.5 transition-all group/item"
                      >
                        {skill.icon || skill.logo ? (
                          <img src={skill.icon || skill.logo} alt={skill.name} className="w-3.5 h-3.5 object-contain" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/item:scale-125 transition-transform" />
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-slate-500 font-normal ml-0.5">
                            • {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{category.skills.length} Keterampilan</span>
                  <span className="text-cyan-400/80 font-mono">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills & Working Principles Strip */}
        <div className="mt-14 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-sm">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Soft Skills & Kolaborasi</span>
              </div>
              <h3 className="text-lg font-bold text-white">Etos Kerja & Kepemimpinan</h3>
              <p className="text-xs text-slate-400">
                Kombinasi kemampuan teknis dengan kepemimpinan organisasi dan manajemen event.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 flex-1 justify-start md:justify-end">
              {softSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2 shadow-sm"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
