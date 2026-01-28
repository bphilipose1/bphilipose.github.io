import React from 'react';
import ProjectCard from '../components/ProjectCard'; 
import ExperienceTimeline from '../components/ExperienceTimeline'; 
import SkillsMatrix from '../components/SkillsMatrix';
import EducationBIOS from '../components/EducationBIOS';
import HeadRender from '../components/HeadRender';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* 01. HERO SECTION */}
      <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            System_Status: Operational
          </div>
          <h2 className="text-5xl font-bold mb-4 text-white leading-tight">
            Algorithms & <br/>
            <span className="text-blue-500">ML Engineer</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
            Architecting 3D generative pipelines and optimizing embedded computer vision for resource-constrained hardware.
          </p>
          <div className="flex gap-4 font-mono text-sm">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20">
              _view_research
            </button>
            
            {/* Functional Resume Download Link */}
            <a 
              href="/Benjamin_Philipose_Resume.pdf" 
              download 
              className="border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-lg transition-all text-center"
            >
              _get_resume.pdf
            </a>
          </div>
        </div>
        
        {/* Visual Asset Slot - NOW WITH LIVE RENDER */}
        <div className="aspect-square bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden relative group">
           <HeadRender />
        </div>
      </section>

      {/* 02. FEATURED PROJECTS */}
      <section className="py-12 border-t border-slate-900">
        <h3 className="text-2xl font-mono mb-8 text-white flex items-center">
          <span className="text-blue-500 mr-2">/</span> 01_featured_work
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard title="fMRI GNNs" tag="Neuroscience" />
          <ProjectCard title="AV Simulation" tag="Systems" />
          <ProjectCard title="Quantization" tag="MLoPS" />
        </div>
      </section>

      {/* 03. PROFESSIONAL TIMELINE */}
      <section className="py-12">
        <ExperienceTimeline />
      </section>

      {/* 04. EDUCATION BIOS */}
      <section className="py-12">
        <EducationBIOS />
      </section>

      {/* 05. SYSTEM SKILLS MATRIX */}
      <section className="py-12">
        <SkillsMatrix />
      </section>

      {/* 06. CONTACT TERMINAL */}
      <footer className="py-20 border-t border-slate-900 text-center">
        <p className="text-slate-500 font-mono text-xs mb-4">TERMINAL_SESSION_END: 2026</p>
        <div className="flex justify-center gap-8 font-mono text-sm">
          <a href="mailto:philiposebenjamin@gmail.com" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">email</a>
          <a href="https://linkedin.com/in/bphilipose" target="_blank" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">linkedin</a>
          <a href="https://github.com/bphilipose1" target="_blank" className="text-blue-400 hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-4">github</a>
        </div>
      </footer>
    </div>
  );
}