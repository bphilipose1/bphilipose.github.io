import React from 'react';

const skillGroups = [
  {
    category: "Intelligence",
    skills: ["PyTorch", "TensorFlow", "GNNs", "Transformers", "RAG", "OpenCV"]
  },
  {
    category: "Systems & Compute",
    skills: ["C++", "CUDA", "MPI", "Embedded Systems", "RISC-V", "Linux"]
  },
  {
    category: "Cloud & Data",
    skills: ["AWS (SageMaker/EMR)", "Apache Spark", "MongoDB", "Kubernetes"]
  }
];

export default function SkillsMatrix() {
  return (
    <div className="py-12 border-t border-slate-900">
      <h3 className="text-2xl font-mono mb-8 text-white">_system_capabilities</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => (
          <div key={i} className="p-6 bg-slate-900/30 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors group">
            <h4 className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 group-hover:text-blue-400">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <span key={j} className="px-3 py-1 bg-slate-800 text-slate-100 text-sm rounded shadow-sm border border-transparent hover:border-slate-600 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}