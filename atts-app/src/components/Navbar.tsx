import Link from 'next/link';
import { Search, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 glass-card bg-black/40 border-b border-white/10 rounded-none mb-0 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-cyan drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
          <span className="text-xl font-bold tracking-tight text-white">
            ATTS <span className="opacity-60 text-sm hidden sm:inline ml-2">Agency Trust System</span>
          </span>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/agencies" className="text-white/80 hover:text-white hover:text-cyan transition-colors">
            Explorer
          </Link>
          <Link href="/about" className="text-white/80 hover:text-white hover:text-pink transition-colors">
            How it works
          </Link>
          <Link href="/admin" className="text-white/80 hover:text-white hover:text-purple transition-colors">
            Admin
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search className="w-5 h-5 text-white/80" />
          </button>
          <Link href="/agencies" className="btn-neon text-sm">
            Find Agencies
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
