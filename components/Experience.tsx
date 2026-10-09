'use client';

import React, { useState } from 'react';
import { EXPERIENCES, Experience } from '@/data/portfolioData';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export default function ExperienceSection() {
  const [filterType, setFilterType] = useState<'All' | 'Kerja' | 'Organisasi'>('All');

  const filteredExperiences = EXPERIENCES.filter(exp => {
    if (filterType === 'All') return true;
    if (filterType === 'Kerja') return exp.type === 'Full-time' || exp.type === 'Freelance';
    if (filterType === 'Organisasi') return exp.type === 'Organisasi';
    return true;
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Rekam Jejak & Karier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman <span className="gradient-text-main">Kerja & Organisasi</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Perjalanan profesional membangun solusi digital untuk institusi, klien komersial, serta kepemimpinan tim.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(['All', 'Kerja', 'Organisasi'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilterType(type)}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filterType === type
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 font-semibold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {type === 'All' ? 'Semua Pengalaman' : type === 'Kerja' ? 'Pekerjaan & Freelance' : 'Organisasi & Kepanitiaan'}
            </button>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500/40 to-slate-800 sm:-translate-x-1/2" />

          <div className="space-y-8 relative">
            {filteredExperiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 group`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-125 group-hover:border-cyan-300 transition-all z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:bg-white transition-colors" />
                  </div>

                  {/* Spacer for alternate layout on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div className={`glass-card p-6 rounded-2xl border border-slate-800 group-hover:border-cyan-500/40 transition-all ${
                      isEven ? 'sm:mr-6' : 'sm:ml-6'
                    }`}>
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                          {exp.badge || exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 mb-4">
                        <Building2 className="w-3.5 h-3.5 text-slate-500" />
                        <span className="font-semibold text-slate-300">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-rose-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech or Tools pills */}
                      {exp.techOrTools && exp.techOrTools.length > 0 && (
                        <div className="pt-3 border-t border-slate-900 flex flex-wrap gap-1.5">
                          {exp.techOrTools.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
