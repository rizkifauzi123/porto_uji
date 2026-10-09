'use client';

import React, { useState, useEffect } from 'react';
import {
  PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION_LIST,
  CERTIFICATIONS, SKILL_CATEGORIES, Project
} from '@/data/portfolioData';
import { LinkedInIcon, GitHubIcon } from '@/components/Icons';
import ProjectModal from '@/components/ProjectModal';

/* ── Rail Nav Icons (inline SVG) ── */
const IconHome = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 21.5h15" /><path d="M4.5 21.5v-13.5M19.5 21.5v-13.5" /><path d="M2 10l10 -8l10 8" /><path d="M9.5 21.5v-9h5v9" />
  </svg>
);
const IconAcademic = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 17h-3v-2.8c-1.79-1.04-3-2.98-3-5.2c0-3.31 2.69-6 6-6c3.31 0 6 2.69 6 6c0 2.22-1.21 4.16-3 5.2v2.8Z" /><path d="M10 21h4" />
  </svg>
);
const IconExperience = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55-0.45 1-1 1h-16c-0.55 0-1-0.45-1-1v-11c0-0.55 0.45-1 1-1Z" /><path d="M9 7v-3c0-0.55 0.45-1 1-1h4c0.55 0 1 0.45 1 1v3" />
  </svg>
);
const IconProjects = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 7h8c0.55 0 1 0.45 1 1v10c0 0.55-0.45 1-1 1h-16c-0.55 0-1-0.45-1-1v-11Z" /><path d="M12 7h-9v-1c0-0.55 0.45-1 1-1h6Z" />
  </svg>
);
const IconSkills = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 9c1.66 0 3 1.34 3 3c0 1.66-1.34 3-3 3c-1.66 0-3-1.34-3-3c0-1.66 1.34-3 3-3Z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconCert = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconContact = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);

const SECTIONS = [
  { id: 'home', label: 'Introduce', Icon: IconHome },
  { id: 'pendidikan', label: 'Pendidikan', Icon: IconAcademic },
  { id: 'pengalaman', label: 'Pengalaman', Icon: IconExperience },
  { id: 'proyek', label: 'Proyek', Icon: IconProjects },
  { id: 'keterampilan', label: 'Keahlian', Icon: IconSkills },
  { id: 'sertifikasi', label: 'Sertifikasi', Icon: IconCert },
  { id: 'kontak', label: 'Kontak', Icon: IconContact },
];

export default function Shell() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Background */}
      <div className="bg-layer" aria-hidden="true" />

      <div className="page">
        <div className="layout">

          {/* ═══ LEFT SIDEBAR ═══ */}
          <aside className="col-sticky">
            <section className="glass profilecard">
              {/* Name & Role */}
              <header style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <h1 className="t-brand">{PERSONAL_INFO.name}</h1>
                <p className="profilecard__role t-meta">Fullstack Web Developer</p>
              </header>

              {/* Photo */}
              <div className="profilecard__photo relative">
                {PERSONAL_INFO.avatar ? (
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-[24px]"
                    onError={(e) => {
                      // Fallback ke inisial jika file gambar belum ada
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  style={{
                    display: PERSONAL_INFO.avatar ? 'none' : 'flex',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                    borderRadius: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 64,
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '-0.02em'
                  }}
                >
                  RAF
                </div>
              </div>

              {/* Contact */}
              <div className="profilecard__meta">
                <a className="profilecard__email t-meta" href={`mailto:${PERSONAL_INFO.email}`}>
                  {PERSONAL_INFO.email}
                </a>
                <p className="t-side" style={{ color: 'var(--txt3)', fontSize: 15 }}>
                  {PERSONAL_INFO.location}
                </p>
              </div>

              {/* Social */}
              <ul className="social" aria-label="Social media">
                <li>
                  <a className="socialbtn liquid-elem" href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LinkedInIcon className="w-[22px] h-[22px]" />
                  </a>
                </li>
                <li>
                  <a className="socialbtn liquid-elem" href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="socialbtn liquid-elem" href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </li>
              </ul>

              {/* CTA */}
              <button
                type="button"
                className="btn-accent t-side"
                style={{ alignSelf: 'stretch', width: '100%', textAlign: 'center' }}
                onClick={() => scrollTo('kontak')}
              >
                Hubungi Saya
              </button>

              {/* Actions row */}
              <div className="profilecard__actions">
                <a className="cvbtn t-fine" href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>

              {/* Copyright */}
              <p className="rights t-fine">© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
            </section>
          </aside>

          {/* ═══ MAIN CONTENT ═══ */}
          <main className="stack-main">

            {/* ── INTRODUCE ── */}
            <section id="home" className="menu" aria-labelledby="menu-home">
              <h2 id="menu-home" className="chiplabel liquid-elem t-fine">Perkenalan</h2>
              <div className="glass card home">
                <p className="t-hero">
                  <span className="line">
                    <span className="w reveal" style={{ '--i': 0 } as React.CSSProperties}>Halo </span>
                    <span className="w reveal" style={{ '--i': 1 } as React.CSSProperties}>Saya </span>
                  </span>
                  <span className="line text-accent">
                    <span className="w reveal" style={{ '--i': 2 } as React.CSSProperties}>Rizki </span>
                    <span className="w reveal" style={{ '--i': 3 } as React.CSSProperties}>Ahmad </span>
                    <span className="w reveal" style={{ '--i': 4 } as React.CSSProperties}>Fauzi</span>
                  </span>
                  <span className="line">
                    <span className="w reveal" style={{ '--i': 5 } as React.CSSProperties}>Fullstack </span>
                    <span className="w reveal" style={{ '--i': 6 } as React.CSSProperties}>Web </span>
                    <span className="w reveal" style={{ '--i': 7 } as React.CSSProperties}>Developer</span>
                  </span>
                </p>

                <div className="home__about hairline">
                  <p className="t-lede reveal" style={{ '--i': 8 } as React.CSSProperties}>
                    {PERSONAL_INFO.bio}
                  </p>

                  <dl className="stats">
                    {PERSONAL_INFO.stats.map((stat, idx) => (
                      <div key={idx} className="stat reveal" style={{ '--i': 9 + idx } as React.CSSProperties}>
                        <dt className="t-stat">{stat.value}</dt>
                        <dd className="t-fine">{stat.label}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </section>

            {/* ── PENDIDIKAN ── */}
            <section id="pendidikan" className="menu" aria-labelledby="menu-pendidikan">
              <h2 id="menu-pendidikan" className="chiplabel liquid-elem t-fine">Pendidikan</h2>
              <div className="glass card">
                <ol className="timeline">
                  {EDUCATION_LIST.map((edu, idx) => (
                    <li key={idx} className="tl">
                      <span className="tl__node">
                        {edu.logo ? (
                          <img
                            src={edu.logo}
                            alt={edu.school}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 'inherit' }}
                          />
                        ) : (
                          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
                          </svg>
                        )}
                      </span>
                      <div className="tl__body">
                        <div className="tl__title">
                          <h3 className="t-card">{edu.school}</h3>
                          <span className="livepill liquid-elem t-fine">{edu.gpaOrScore}</span>
                        </div>
                        <p className="tl__sub t-meta">{edu.degree}</p>
                        <span className="tl__period t-fine">
                          {edu.period}<span className="dot">{edu.location}</span>
                        </span>
                        {edu.highlights.length > 0 && (
                          <ul style={{ color: 'var(--txt2)', fontSize: 14, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4, paddingLeft: 18, listStyle: 'disc' }}>
                            {edu.highlights.map((hl, hIdx) => (
                              <li key={hIdx}>{hl}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* ── PENGALAMAN ── */}
            <section id="pengalaman" className="menu" aria-labelledby="menu-pengalaman">
              <h2 id="menu-pengalaman" className="chiplabel liquid-elem t-fine">Pengalaman</h2>
              <div className="glass card">
                <ol className="timeline">
                  {EXPERIENCES.map((exp) => (
                    <li key={exp.id} className="tl">
                      <span className="tl__node">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 'inherit' }}
                          />
                        ) : (
                          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                          </svg>
                        )}
                      </span>
                      <div className="tl__body">
                        <div className="tl__title">
                          <h3 className="t-card">{exp.company}</h3>
                          {exp.badge && (
                            <span className="livepill liquid-elem t-fine">{exp.badge}</span>
                          )}
                        </div>
                        <p className="tl__sub t-meta">{exp.role}</p>
                        <span className="tl__period t-fine">
                          {exp.period}<span className="dot">{exp.location}</span>
                        </span>
                        {exp.description.length > 0 && (
                          <ul style={{ color: 'var(--txt2)', fontSize: 14, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4, paddingLeft: 18, listStyle: 'disc' }}>
                            {exp.description.map((d, dIdx) => (
                              <li key={dIdx}>{d}</li>
                            ))}
                          </ul>
                        )}
                        {exp.techOrTools && exp.techOrTools.length > 0 && (
                          <div className="techs">
                            {exp.techOrTools.map((t, tIdx) => (
                              <span key={tIdx} className="techs__chip t-fine">{t}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* ── PROYEK ── */}
            <section id="proyek" className="menu" aria-labelledby="menu-proyek">
              <h2 id="menu-proyek" className="chiplabel liquid-elem t-fine">Proyek</h2>
              <div className="glass card">
                <ul className="pgrid">
                  {PROJECTS.map((project) => (
                    <li key={project.id} className="ptile" onClick={() => setActiveProject(project)}>
                      <div className="ptile__thumb">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-[inherit]"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div style={{
                          display: project.image ? 'none' : 'flex',
                          width: '100%', height: '100%',
                          background: `linear-gradient(135deg, var(--accent), #6366f1)`,
                          alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontWeight: 600, fontSize: 14, padding: 12, textAlign: 'center'
                        }}>
                          {project.title.split(' ').slice(0, 2).join(' ')}
                        </div>
                      </div>
                      <div className="ptile__text">
                        <div className="tl__title">
                          <h3 className="t-card" style={{ fontSize: 18 }}>{project.title}</h3>
                          <span className="livepill liquid-elem t-fine">{project.category}</span>
                        </div>
                        <p className="tl__sub t-meta">{project.tagline}</p>
                        <span className="tl__period t-fine">{project.period}</span>
                        <div className="techs">
                          {project.techStack.slice(0, 4).map((tech, tIdx) => (
                            <span key={tIdx} className="techs__chip t-fine">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ── KEAHLIAN ── */}
            <section id="keterampilan" className="menu" aria-labelledby="menu-keterampilan">
              <h2 id="menu-keterampilan" className="chiplabel liquid-elem t-fine">Keahlian</h2>
              <div className="glass card">
                <div className="skills-grid">
                  {SKILL_CATEGORIES.flatMap(cat =>
                    cat.skills.map((skill, sIdx) => (
                      <div key={`${cat.title}-${sIdx}`} className="skill-item" title={cat.title}>
                        {skill.icon || skill.logo ? (
                          <img
                            src={skill.icon || skill.logo}
                            alt={skill.name}
                            width={32}
                            height={32}
                            style={{ width: 32, height: 32, objectFit: 'contain' }}
                            loading="lazy"
                          />
                        ) : (
                          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                          </svg>
                        )}
                        <span className="t-meta">{skill.name}</span>
                      </div>
                    ))
                  )}
                </div>

                {/* Services */}
                <div className="services hairline">
                  <div className="service">
                    <span className="service__icon">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
                      </svg>
                    </span>
                    <h3 className="t-card">Design</h3>
                    <p className="t-meta">Merancang antarmuka dan alur produk dengan Figma, Photoshop, & Illustrator sebelum coding dimulai.</p>
                  </div>
                  <div className="service">
                    <span className="service__icon">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /><path d="M10 13l-2 2 2 2" /><path d="M14 13l2 2-2 2" />
                      </svg>
                    </span>
                    <h3 className="t-card">Development</h3>
                    <p className="t-meta">Membangun produk end-to-end: database, API, web interface, hingga deployment ke server.</p>
                  </div>
                  <div className="service">
                    <span className="service__icon">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </span>
                    <h3 className="t-card">Leadership</h3>
                    <p className="t-meta">Memimpin koordinasi tim, manajemen acara kampus, dan delegasi tugas proyek software.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SERTIFIKASI ── */}
            <section id="sertifikasi" className="menu" aria-labelledby="menu-sertifikasi">
              <h2 id="menu-sertifikasi" className="chiplabel liquid-elem t-fine">Sertifikasi</h2>
              <div className="glass card">
                <ol className="timeline timeline--plain">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <li key={idx} className="tl">
                      <span className="tl__node">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                        </svg>
                      </span>
                      <div className="tl__body">
                        <div className="tl__title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                          <h3 className="t-card">{cert.title}</h3>
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="livepill liquid-elem t-fine"
                              style={{
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 4,
                                padding: '4px 10px',
                                fontSize: 12,
                                color: 'var(--accent)',
                                borderColor: 'var(--line)'
                              }}
                            >
                              <span>Lihat Sertifikat</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                              </svg>
                            </a>
                          )}
                        </div>
                        <p className="tl__sub t-meta">{cert.issuer}</p>
                        <span className="tl__period t-fine">{cert.date}</span>
                        <div className="techs">
                          {cert.skills.map((s, sIdx) => (
                            <span key={sIdx} className="techs__chip t-fine">{s}</span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* ── KONTAK ── */}
            <section id="kontak" className="menu" aria-labelledby="menu-kontak">
              <h2 id="menu-kontak" className="chiplabel liquid-elem t-fine">Kontak</h2>
              <div className="glass card" style={{ gap: 24 }}>
                <div>
                  <h3 className="t-card" style={{ marginBottom: 8 }}>Mari Berdiskusi & Berkolaborasi</h3>
                  <p className="t-lede" style={{ fontSize: 16 }}>
                    Punya ide proyek, kebutuhan web institusi / UMKM, atau peluang kerja sama? Jangan ragu menghubungi saya.
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                  <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                    <span className="t-fine" style={{ color: 'var(--accent)' }}>WhatsApp</span>
                    <span className="t-meta" style={{ fontWeight: 600 }}>{PERSONAL_INFO.phone}</span>
                  </a>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-link">
                    <span className="t-fine" style={{ color: 'var(--accent)' }}>Email</span>
                    <span className="t-meta" style={{ fontWeight: 600, overflowWrap: 'anywhere' as const }}>{PERSONAL_INFO.email}</span>
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                    <span className="t-fine" style={{ color: 'var(--accent)' }}>LinkedIn</span>
                    <span className="t-meta" style={{ fontWeight: 600 }}>Rizki Ahmad Fauzi</span>
                  </a>
                </div>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent t-side"
                  style={{ alignSelf: 'stretch', textAlign: 'center', textDecoration: 'none' }}
                >
                  Kirim Pesan via WhatsApp
                </a>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* ═══ RAIL NAV ═══ */}
      <nav className="glass rail liquid-elem" aria-label="Section navigation">
        <ul className="rail__list">
          {SECTIONS.map(({ id, label, Icon }) => (
            <li key={id}>
              <button
                type="button"
                className="railbtn"
                aria-current={activeSection === id ? 'true' : undefined}
                aria-label={label}
                title={label}
                onClick={() => scrollTo(id)}
              >
                <Icon />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ═══ PROJECT MODAL ═══ */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
