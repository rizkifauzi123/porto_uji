'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { LinkedInIcon, GitHubIcon } from '@/components/Icons';
import { ArrowDown, ExternalLink, Mail, MapPin, Sparkles, Copy, Check, Terminal, Code } from 'lucide-react';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Light Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4 inline-block" />
              <span>Tersedia untuk Pekerjaan Full-time & Project Freelance</span>
            </div>

            {/* Main Greeting & Title */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-semibold text-cyan-400 tracking-wider uppercase">
                Halo, saya Rizki Ahmad Fauzi
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Fullstack Web <br className="hidden sm:inline" />
                <span className="gradient-text-main">Developer</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed pt-2">
                Lulusan S1 Teknik Informatika STT Nurul Fikri (IPK 3,74) & Web Developer di STIT Fatahillah. Berpengalaman membangun ekosistem web modern end-to-end dengan <span className="text-cyan-300 font-medium">Next.js</span>, <span className="text-cyan-300 font-medium">React</span>, <span className="text-cyan-300 font-medium">Laravel</span>, dan <span className="text-cyan-300 font-medium">Node.js</span>.
              </p>
            </div>

            {/* Quick Meta Location & Contact */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Jonggol, Bogor, Jawa Barat</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Web Dev & UI/UX Specialist</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Jelajahi Proyek</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all flex items-center gap-2"
              >
                <span>Hubungi Langsung</span>
                <ExternalLink className="w-4 h-4 text-cyan-400" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl text-sm font-medium bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
                title="Salin alamat email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Contact Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Tautan:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                title="Kirim Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code / Profile Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-xl opacity-75 animate-pulse-glow" />
              
              {/* Glass Code Editor Box */}
              <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden">
                
                {/* Editor Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>rizki-developer.config.ts</span>
                  </div>
                  <div className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono border border-cyan-800/50">
                    Active
                  </div>
                </div>

                {/* Editor Content */}
                <div className="p-5 font-mono text-xs text-slate-300 space-y-2.5 overflow-x-auto leading-relaxed">
                  <p className="text-slate-500">// Profil Pengembang & Spesialisasi</p>
                  <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-300">developer</span> = {'{'}
                  </p>
                  <p className="pl-4">
                    <span className="text-sky-300">name</span>:{' '}
                    <span className="text-emerald-300">&quot;Rizki Ahmad Fauzi&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-sky-300">role</span>:{' '}
                    <span className="text-emerald-300">&quot;Web Developer (Fullstack)&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-sky-300">currentCompany</span>:{' '}
                    <span className="text-emerald-300">&quot;STIT Fatahillah&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-sky-300">education</span>:{' '}
                    <span className="text-emerald-300">&quot;S1 Informatika STT-NF (IPK 3.74)&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-sky-300">coreStack</span>: [
                  </p>
                  <p className="pl-8 text-cyan-300">
                    &quot;React.js&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Tailwind CSS&quot;,
                  </p>
                  <p className="pl-8 text-indigo-300">
                    &quot;Laravel&quot;, &quot;Node.js&quot;, &quot;Express.js&quot;, &quot;Prisma ORM&quot;,
                  </p>
                  <p className="pl-8 text-teal-300">
                    &quot;MySQL&quot;, &quot;JWT / RBAC&quot;, &quot;Figma UI/UX&quot;
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-sky-300">passion</span>:{' '}
                    <span className="text-emerald-300">&quot;Crafting seamless, scalable web solutions&quot;</span>
                  </p>
                  <p>{'};'}</p>
                </div>

                {/* Bottom Quick Feature Strip */}
                <div className="px-5 py-3.5 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Clean Code & Architecture</span>
                  </div>
                  <div className="text-cyan-400 font-medium">Ready to Deploy</div>
                </div>
              </div>

              {/* Floating Mini Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-xl flex items-center gap-3 animate-float">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Fullstack & UI/UX</div>
                  <div className="text-[10px] text-slate-400">End-to-End Development</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 text-center transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
                <span className="text-cyan-400 text-sm sm:text-base font-medium">{stat.suffix}</span>
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
