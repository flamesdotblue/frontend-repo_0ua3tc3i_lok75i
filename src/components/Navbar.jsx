import React from 'react';
import { Rocket, Bot } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400">
            <Bot className="h-4 w-4 text-white" />
          </span>
          <span className="text-white">NeuroSite</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center rounded-md border border-white/20 px-4 text-sm text-white/90 hover:bg-white/10">Sign in</button>
          <button className="inline-flex h-9 items-center gap-2 rounded-md bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 px-4 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110">
            <Rocket className="h-4 w-4" />
            Launch Builder
          </button>
        </div>
      </div>
    </header>
  );
}
