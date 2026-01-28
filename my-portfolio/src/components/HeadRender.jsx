import React from 'react';
import profileImg from '../assets/profile.jpg';
export default function HeadRender() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-950 overflow-hidden font-mono">
      {/* 1. Spatial Coordinate Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* 2. The "Point Cloud" Container */}
      <div className="relative z-10 w-72 h-72 rounded-2xl border border-white/10 overflow-hidden bg-slate-900 shadow-2xl">
        {/* Subtle LiDAR-style dots overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-30"
             style={{ backgroundImage: 'radial-gradient(#5eead4 1px, transparent 0)', backgroundSize: '12px 12px' }}>
        </div>

        <img 
          src={profileImg} // Replace with your own headshot in /public
          alt="Neural Reconstruction"
          className="w-full h-full object-cover grayscale contrast-150 brightness-75 mix-blend-screen opacity-80"
        />
        
        {/* The Scanning Laser (Optimized Animation) */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/0 via-blue-400/40 to-blue-500/0 z-40 animate-scan"></div>
        
        {/* Neural Network Node Pings */}
        <div className="absolute inset-0 z-50">
           <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full blur-[2px] animate-pulse"></div>
           <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[2px] animate-pulse [animation-delay:0.7s]"></div>
        </div>

        {/* Bottom Status Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md p-2 border-t border-white/10 z-50 flex justify-between items-center text-[9px] tracking-tighter">
            <span className="text-blue-400 uppercase">SYS_LOAD: 87%_RED</span>
            <span className="text-slate-500">FPS: 120.4</span>
        </div>
      </div>

      {/* 3. Personalized Metadata Callouts */}
      <div className="absolute top-6 left-6 space-y-4">
        <div className="text-[10px] text-blue-500/80 bg-blue-500/5 p-2 rounded border-l border-blue-500/50">
          <p className="font-bold text-blue-400 mb-1">// META_OPTIMIZATION_LOG</p>
          <p>STRI_OP: [SUM, TRANSPOSE]</p>
          <p>CONV_PIPE: TFLITE_INT8</p>
          <p>MEM_SYNC: SPI_BLOB_ACTIVE</p>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-right space-y-4">
        <div className="text-[10px] text-green-500/80 bg-green-500/5 p-2 rounded border-r border-green-500/50">
          <p className="font-bold text-green-400 mb-1">// SEATTLE_U_RESEARCH</p>
          <p>MODEL: GCN_TRANSFORMER</p>
          <p>BRAIN_CONNECTIVITY: 85.98%</p>
          <p>CUDA_CORES: ACCELERATED</p>
        </div>
      </div>
    </div>
  );
}