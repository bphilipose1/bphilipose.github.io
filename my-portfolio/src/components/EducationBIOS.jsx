import React from 'react';

export default function EducationBIOS() {
  return (
    <div className="py-12 border-t border-slate-900 font-mono">
      <h3 className="text-2xl mb-8 text-white lowercase">_system_bios (edu)</h3>
      
      <div className="space-y-6">
        {/* GRADUATE RECORD */}
        <div className="bg-black/40 border border-slate-800 p-6 rounded-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-blue-500/10 text-blue-500 text-[10px] px-2 py-1 uppercase">Active_Session</div>
          <div className="text-green-500 mb-4 font-bold">{`> LOADING_GRADUATE_RECORD... [OK]`}</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-blue-400 text-sm mb-1">PROGRAM: M.S. COMPUTER SCIENCE</p>
              <p className="text-white font-bold text-lg leading-tight">Specialization: Data Science</p>
              <p className="text-slate-400 text-xs mt-1 italic">Seattle University | 2023 – 2025</p>
              <p className="text-blue-500 text-sm mt-3 font-bold underline decoration-blue-500/30">GPA: 4.00 / 4.00</p>
            </div>
            
            <div className="text-[11px] text-slate-400 space-y-1 bg-slate-950/50 p-3 rounded border border-slate-800/50">
              <p className="text-blue-500 mb-2 font-bold uppercase tracking-widest text-[10px]">ML_Modules_Loaded:</p>
              <div className="grid grid-cols-2 gap-x-2">
                <p>• LLMs / GenAI</p>
                <p>• Parallel Computing</p>
                <p>• Distributed Systems</p>
                <p>• Big Data Analytics</p>
                <p>• Advanced ML</p>
                <p>• Visual Analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* UNDERGRADUATE RECORD */}
        <div className="bg-black/40 border border-slate-800 p-6 rounded-lg relative opacity-80 hover:opacity-100 transition-opacity">
          <div className="text-green-500/60 mb-4 font-bold">{`> LOADING_UNDERGRAD_RECORD... [OK]`}</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-blue-400 text-sm mb-1">PROGRAM: B.S. COMPUTER ENGINEERING & CS</p>
              <p className="text-white font-bold text-lg leading-tight">Double Major / Accelerated</p>
              <p className="text-slate-400 text-xs mt-1 italic">Seattle University | 2021 – 2025</p>
              <p className="text-blue-500 text-sm mt-3 font-bold underline decoration-blue-500/30">GPA: 4.00 / 4.00</p>
            </div>
            
            <div className="text-[11px] text-slate-400 space-y-1 bg-slate-950/50 p-3 rounded border border-slate-800/50">
              <p className="text-blue-500 mb-2 font-bold uppercase tracking-widest text-[10px]">Core_Kernel_Modules:</p>
              <div className="grid grid-cols-2 gap-x-2">
                <p>• Embedded Systems</p>
                <p>• Microproc Design</p>
                <p>• Signals & Systems</p>
                <p>• Data Comm Networks</p>
                <p>• Algo Design/Analysis</p>
                <p>• Semiconductors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}