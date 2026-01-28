import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ title, tag }) {
  return (
    <div className="group p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
          {tag}
        </span>
      </div>
      
      <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
        {title}
      </h4>
      
      <p className="text-slate-400 text-sm mb-6">
        Technical implementation and 3D optimization using {tag} architectures.
      </p>
      
      {/* Corrected with backticks for template literal */}
      <Link 
        to={`/project/${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
      >
        View Case Study →
      </Link>
    </div>
  );
}