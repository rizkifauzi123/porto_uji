'use client';

import React, { useEffect } from 'react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="dialog-overlay" onClick={onClose} style={{ padding: 12 }}>
      {/* 
        Panel uses overflow-y: auto (from .dialog-panel CSS) so everything scrolls.
        We intentionally do NOT use display:flex here — flex causes the image to shrink.
        Instead we use plain block layout so img keeps its full natural height.
      */}
      <div
        className="dialog-panel"
        style={{
          maxWidth: 960,
          width: '100%',
          padding: 20,
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button — fixed inside panel */}
        <button
          type="button"
          className="dialog-close liquid-elem"
          onClick={onClose}
          aria-label="Tutup"
          style={{ position: 'sticky', top: 14, float: 'right', zIndex: 10 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Gambar Proyek — FULL, tidak terpotong */}
        {project.image ? (
          <div style={{
            width: '100%',
            borderRadius: 16,
            overflow: 'hidden',
            background: '#121316',
            border: '1px solid var(--line)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            marginBottom: 18
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        ) : (
          <div style={{
            width: '100%',
            minHeight: 200,
            borderRadius: 16,
            background: 'linear-gradient(135deg, var(--accent), #6366f1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 22,
            fontWeight: 700,
            padding: 24,
            textAlign: 'center',
            marginBottom: 18
          }}>
            {project.title}
          </div>
        )}

        {/* Header: Title & Category */}
        <div style={{ marginBottom: 14 }}>
          <div className="tl__title" style={{ marginBottom: 6 }}>
            <h3 className="t-card" style={{ fontSize: 20 }}>{project.title}</h3>
            <span className="livepill liquid-elem t-fine">{project.category}</span>
          </div>
          <p className="tl__sub t-meta" style={{ color: 'var(--txt2)' }}>{project.tagline}</p>
          <span className="tl__period t-fine" style={{ marginTop: 4, display: 'inline-block' }}>
            {project.period} <span className="dot">{project.clientOrContext}</span>
          </span>
        </div>

        {/* Deskripsi Singkat */}
        <div className="hairline" style={{ paddingTop: 14, marginBottom: 14 }}>
          <h4 className="t-fine" style={{ color: 'var(--txt3)', marginBottom: 6 }}>Deskripsi Singkat</h4>
          <p className="t-lede" style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--txt)' }}>
            {project.description || project.overview}
          </p>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: 14 }}>
          <h4 className="t-fine" style={{ color: 'var(--txt3)', marginBottom: 6 }}>Teknologi</h4>
          <div className="techs">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="techs__chip t-fine">{tech}</span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="hairline" style={{ paddingTop: 14, display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
          <a
            href={`https://wa.me/6285717937863?text=Halo%20Rizki,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(project.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent t-fine"
            style={{ minHeight: 42, padding: '0 20px', fontSize: 13, textDecoration: 'none' }}
          >
            Diskusikan Proyek
          </a>
          <button
            type="button"
            onClick={onClose}
            className="cvbtn t-fine"
            style={{ minHeight: 42, flex: 'none', padding: '0 20px' }}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
