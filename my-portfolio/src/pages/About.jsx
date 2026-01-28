import React from 'react';
import EducationBIOS from '../components/EducationBIOS';
import SkillsMatrix from '../components/SkillsMatrix';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-mono text-white mb-2 underline decoration-blue-500 underline-offset-8">
        _system_diagnostics
      </h2>
      <p className="text-slate-400 font-mono text-sm mb-12">
        Execution of academic and technical profiling... [DONE]
      </p>

      <section className="space-y-16">
        {/* The Credentials */}
        <EducationBIOS />

        {/* The Toolset */}
        <SkillsMatrix />

        {/* The Personal Specs */}
        <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-lg font-mono">
          <h4 className="text-blue-400 text-xs uppercase mb-4 tracking-widest">// Developer_Bio</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            I am a Software and Algorithms Engineer focused on the intersection of Machine Learning and Systems Programming. 
            My work spans from high-level Graph Neural Networks to low-level C++ optimization for embedded hardware. 
            I thrive in resource-constrained environments where every clock cycle and byte of memory matters.
          </p>
        </div>
      </section>
    </div>
  );
}