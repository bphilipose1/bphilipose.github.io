// pages/ProjectPage.jsx
export default function ProjectPage() {
    return (
      <article className="py-10 max-w-4xl mx-auto">
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-2">PanoHead Inversion</h2>
          <div className="flex gap-2">
            <span className="bg-slate-800 px-3 py-1 rounded text-xs">PyTorch</span>
            <span className="bg-slate-800 px-3 py-1 rounded text-xs">3D Synthesis</span>
          </div>
        </header>
  
        {/* ABSTRACT / PROBLEM */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4">Project Abstract</h3>
          <p className="text-slate-300 leading-relaxed">
            The challenge was performing high-fidelity 3D head synthesis from a single 2D image. 
            By utilizing Perceptual Triplet Inversion (PTI), we optimized the latent code $w$ 
            to minimize the loss function:
          </p>
          <div className="bg-slate-900 p-4 rounded my-4 font-mono text-blue-400">
            $$L_{total} = \lambda_{perc}L_{lpips} + \lambda_{mse}L_{mse}$$
          </div>
        </section>
  
        {/* METRICS SECTION */}
        <aside className="bg-slate-900 border-l-4 border-blue-500 p-6 mb-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Metrics & Results</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><p className="text-xs text-slate-500">FID Score</p><p className="text-xl font-mono">14.2</p></div>
            <div><p className="text-xs text-slate-500">Inference Time</p><p className="text-xl font-mono">120ms</p></div>
          </div>
        </aside>
      </article>
    );
  }