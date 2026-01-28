import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skillGroups = [
  {
    category: "Intelligence",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "TensorFlow", level: 85 },
      { name: "GNNs", level: 90 },
      { name: "Transformers", level: 88 },
      { name: "RAG", level: 80 },
      { name: "OpenCV", level: 92 }
    ]
  },
  {
    category: "Systems & Compute",
    skills: [
      { name: "C++", level: 95 },
      { name: "CUDA", level: 88 },
      { name: "MPI", level: 82 },
      { name: "Embedded Systems", level: 90 },
      { name: "RISC-V", level: 75 },
      { name: "Linux", level: 85 }
    ]
  },
  {
    category: "Cloud & Data",
    skills: [
      { name: "AWS (SageMaker/EMR)", level: 88 },
      { name: "Apache Spark", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "Kubernetes", level: 72 }
    ]
  }
];

export default function SkillsMatrix() {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const getStatusLabel = (val) => {
    if (val >= 90) return "OPTIMIZED";
    if (val >= 80) return "STABLE";
    if (val >= 70) return "DEPLOYED";
    return "INITIALIZING";
  };

  return (
    <div className="py-12 border-t border-slate-900">
      <h3 className="text-2xl font-mono mb-12 text-white flex items-center gap-3">
        <span className="text-blue-500">/</span>_system_capabilities
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="p-6 bg-slate-950/50 rounded-xl border border-slate-900 hover:border-blue-500/30 transition-all group relative overflow-hidden"
          >
            <motion.h4 
              style={{ y: headerY }}
              className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-8 flex justify-between relative z-10"
            >
              <span>{group.category}</span>
              <span className="text-slate-600 group-hover:text-blue-400 transition-colors">[SCAN_OK]</span>
            </motion.h4>

            <div className="space-y-7 relative z-10">
              {group.skills.map((skill, j) => (
                <div key={j} className="space-y-3">
                  <div className="flex justify-between items-end text-[10px] font-mono">
                    <span className="text-slate-200 uppercase tracking-widest">{skill.name}</span>
                    <span className={`px-2 py-0.5 rounded-sm font-bold ${
                      skill.level >= 90 ? 'text-blue-400 border border-blue-500/30 bg-blue-500/5' : 'text-slate-500'
                    }`}>
                      {getStatusLabel(skill.level)}
                    </span>
                  </div>
                  
                  {/* Segmented Progress Bar (Hollow Inactive Blocks) */}
                  <div className="flex gap-1.5 h-2 w-full">
                    {[...Array(10)].map((_, step) => {
                      const isActive = (step * 10) < skill.level;
                      return (
                        <motion.div 
                          key={step}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.2, 
                            delay: i * 0.1 + j * 0.05 + step * 0.03 
                          }}
                          className={`h-full flex-1 rounded-sm transition-all duration-300 ${
                            isActive 
                              ? 'bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] border-transparent' 
                              : 'bg-transparent border border-slate-800'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-2 -right-1 text-[40px] font-mono text-slate-900 opacity-20 pointer-events-none group-hover:text-blue-500/10 transition-colors">
              0{i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}