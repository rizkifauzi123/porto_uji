'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { User, Code2, ShieldCheck, Palette, Users, GraduationCap, MapPin, Languages, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      title: 'Fullstack Web Development',
      desc: 'Membangun aplikasi web end-to-end terintegrasi dengan React.js, Next.js, Laravel, Node.js, Express, dan Prisma ORM.'
    },
    {
      icon: ShieldCheck,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      title: 'Keamanan & Sistem RBAC',
      desc: 'Berpengalaman mendesain otentikasi JWT, hierarki hak akses (Role-Based Access Control) multi-user, dan validasi data terproteksi.'
    },
    {
      icon: Palette,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      title: 'UI/UX & Desain Grafis',
      desc: 'Mampu merancang antarmuka intuitif di Figma serta materi visual promosi menggunakan Adobe Photoshop & Illustrator.'
    },
    {
      icon: Users,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      title: 'Manajemen Proyek & Tim',
      desc: 'Terbiasa memimpin koordinasi lintas tim, menyusun timeline dan rundown acara kampus, serta mengelola alur pengerjaan software.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengenal Lebih Dekat <span className="gradient-text-main">Profil & Dedikasi Saya</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Berfokus pada pengembangan perangkat lunak yang andal, efisien, dan memberikan dampak nyata bagi pengguna serta bisnis.
          </p>
        </div>

        {/* Main Grid: Bio + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detailed Story & Personal Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative">
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-white font-semibold">Fullstack Web Developer</strong> dengan pengalaman membangun aplikasi web <span className="text-cyan-300 font-medium">end-to-end</span>, mulai dari Learning Management System dengan Role-Based Access Control hingga platform rental mobil dan sistem invoice digital.
                </p>
                <p>
                  Terbiasa menangani seluruh siklus pengembangan, dari analisis kebutuhan sampai deployment, dengan stack <span className="text-white">Laravel</span>, <span className="text-white">MySQL</span>, dan <span className="text-white">React</span>. Lulusan Teknik Informatika <span className="text-cyan-300 font-medium">STT Terpadu Nurul Fikri</span> (<strong className="text-emerald-400">IPK 3,74</strong>).
                </p>
              </div>

              {/* Quick Info Badges */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Domisili</div>
                    <div className="font-medium text-slate-200">Jonggol, Bogor, Jawa Barat</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Pendidikan</div>
                    <div className="font-medium text-slate-200">S1 Teknik Informatika (IPK 3.74)</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Languages className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Bahasa</div>
                    <div className="font-medium text-slate-200">Indonesia (Native), English</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Status Saat Ini</div>
                    <div className="font-medium text-slate-200">Web Dev @ STIT Fatahillah</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Strength Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
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
