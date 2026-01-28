import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

export default function HeadRender() {
  // 1. Mouse tracking values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Smooth the movement with spring physics
  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Define transformations for different layers
  // Main Container Tilt
  const rotateX = useTransform(smoothY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothX, [-300, 300], [-10, 10]);

  // Callout Parallax (moving them slightly to look like they float)
  const calloutX = useTransform(smoothX, [-300, 300], [15, -15]);
  const calloutY = useTransform(smoothY, [-300, 300], [15, -15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center bg-slate-950 overflow-hidden font-mono"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
    >
      {/* 1. Spatial Coordinate Grid (Stationary Background) */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* 2. The "Point Cloud" Container (The Main Parallax Object) */}
      <motion.div 
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        className="relative z-10 w-72 h-72 rounded-2xl border border-white/10 overflow-hidden bg-slate-900 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
      >
        {/* Subtle LiDAR dots */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-30"
             style={{ backgroundImage: 'radial-gradient(#5eead4 1px, transparent 0)', backgroundSize: '12px 12px' }}>
        </div>

        <img 
          src={profileImg} 
          alt="Neural Reconstruction"
          className="w-full h-full object-cover grayscale contrast-150 brightness-75 mix-blend-screen opacity-80"
        />
        
        {/* Scanning Laser */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/0 via-blue-400/40 to-blue-500/0 z-40 animate-scan"></div>
        
        {/* Neural Pings */}
        <div className="absolute inset-0 z-50" style={{ transform: "translateZ(30px)" }}>
           <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full blur-[2px] animate-pulse"></div>
           <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[2px] animate-pulse [animation-delay:0.7s]"></div>
        </div>

        {/* Status Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md p-2 border-t border-white/10 z-50 flex justify-between items-center text-[9px]">
            <span className="text-blue-400 uppercase">SYS_LOAD: 87%_RED</span>
            <span className="text-slate-500">FPS: 120.4</span>
        </div>
      </motion.div>

      {/* 3. Personalized Metadata Callouts (Counter-Parallax Layer) */}
      <motion.div 
        style={{ x: calloutX, y: calloutY }}
        className="absolute top-6 left-6 space-y-4 z-20"
      >
        <div className="text-[10px] text-blue-500/80 bg-blue-500/10 backdrop-blur-sm p-2 rounded border-l border-blue-500/50 shadow-lg">
          <p className="font-bold text-blue-400 mb-1">// META_OPTIMIZATION_LOG</p>
          <p>STRI_OP: [SUM, TRANSPOSE]</p>
          <p>CONV_PIPE: TFLITE_INT8</p>
          <p>MEM_SYNC: SPI_BLOB_ACTIVE</p>
        </div>
      </motion.div>

      <motion.div 
        style={{ x: useTransform(smoothX, [-300, 300], [-15, 15]), y: useTransform(smoothY, [-300, 300], [-15, 15]) }}
        className="absolute bottom-6 right-6 text-right space-y-4 z-20"
      >
        <div className="text-[10px] text-green-500/80 bg-green-500/10 backdrop-blur-sm p-2 rounded border-r border-green-500/50 shadow-lg">
          <p className="font-bold text-green-400 mb-1">// SEATTLE_U_RESEARCH</p>
          <p>MODEL: GCN_TRANSFORMER</p>
          <p>BRAIN_CONNECTIVITY: 85.98%</p>
          <p>CUDA_CORES: ACCELERATED</p>
        </div>
      </motion.div>
    </div>
  );
}