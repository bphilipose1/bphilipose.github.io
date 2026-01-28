import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-mono font-bold tracking-tighter hover:text-blue-400">
            BENJAMIN.ML
          </Link>
          <ul className="flex gap-8 text-sm font-medium">
            {/* Use 'Link to' instead of 'a href' */}
            <li><Link to="/" className="hover:text-blue-400">Engineering</Link></li>
            <li><Link to="/projects" className="hover:text-blue-400">Research</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">System_Info</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full p-6">
        {children}
      </main>

      <footer className="p-10 border-t border-slate-900 text-center text-slate-500 text-xs">
        <p>&copy; 2026 Build_Status: Operational. Powered by WSL2 & React.</p>
      </footer>
    </div>
  );
}