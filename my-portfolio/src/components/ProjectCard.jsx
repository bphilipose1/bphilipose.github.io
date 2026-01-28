import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function ProjectCard({ title, tag }) {
  // 1. Motion values to track mouse position relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Transform mouse position into rotation degrees
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  // 3. Smooth the rotation with spring physics
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate rotation based on center of card
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }} // Enables the 3D perspective
    >
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d", // Necessary for nested parallax
        }}
        className="relative p-6 bg-slate-900 rounded-2xl border border-slate-800 group-hover:border-blue-500 transition-colors duration-500"
      >
        {/* TOP SECTION: Tag (Layer: Deep) */}
        <div 
          className="flex justify-between items-start mb-4"
          style={{ transform: "translateZ(20px)" }}
        >
          <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
            {tag}
          </span>
        </div>
        
        {/* MAIN CONTENT: Title & Description (Layer: Elevated) */}
        <div style={{ transform: "translateZ(40px)" }}>
          <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h4>
          
          <p className="text-slate-400 text-sm mb-6">
            Technical implementation and 3D optimization using {tag} architectures.
          </p>
        </div>
        
        {/* ACTION: Link (Layer: Surface) */}
        <div style={{ transform: "translateZ(30px)" }}>
          <Link 
            to={`/project/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors flex items-center gap-1"
          >
            View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* GLOW EFFECT: Background light that tracks mouse slightly (Layer: Background) */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
          style={{ transform: "translateZ(-10px)" }}
        />
      </motion.div>
    </div>
  );
}