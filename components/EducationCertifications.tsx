'use client';

import React from 'react';
import { EDUCATION_LIST, CERTIFICATIONS } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Star, Sparkles } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Kualifikasi Akademik & Lisensi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pendidikan & <span className="gradient-text-main">Sertifikasi Resmi</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Fondasi akademik teknik informatika yang kokoh serta sertifikasi kompetensi berskala nasional & industri.
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white">Riwayat Pendidikan</h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {edu.gpaOrScore}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white mt-2">
                        {edu.school}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-cyan-400">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="text-right text-xs text-slate-400">
                      <div className="flex items-center gap-1 sm:justify-end text-slate-400 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:justify-end text-slate-500 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-600" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-slate-900">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white">Sertifikasi & Pelatihan</h3>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-800/90 hover:border-purple-500/40 transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 group-hover:border-amber-500/40 transition-all">
                    <Star className="w-5 h-5 fill-amber-400/20" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {cert.date}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 font-medium mt-0.5 flex items-center justify-between">
                      <span>Penerbit: <span className="text-slate-300">{cert.issuer}</span></span>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-amber-400 hover:text-amber-300 underline font-semibold inline-flex items-center gap-1"
                        >
                          Lihat Sertifikat ↗
                        </a>
                      )}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800/60 text-[10px] text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
