import React from 'react';
import Spline from '@splinetool/react-spline';
import { Wand2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-10 sm:pt-16 lg:pt-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            AI WordPress Builder
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Build a stunning WordPress site in minutes with AI
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Describe your brand, pick a vibe, and watch our AI craft a production‑ready WordPress site with pages, sections, copy, and images—fully editable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex h-11 items-center gap-2 rounded-md bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 px-6 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110">
              <Wand2 className="h-4 w-4" />
              Start for free
            </button>
            <button className="inline-flex h-11 items-center rounded-md border border-white/15 px-6 text-sm font-medium text-white/90 hover:bg-white/10">
              See how it works
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-xs text-slate-400">
            <div>
              <span className="font-semibold text-white">No code</span> required
            </div>
            <div>
              <span className="font-semibold text-white">WordPress</span> optimized
            </div>
            <div>
              <span className="font-semibold text-white">SEO</span> ready
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative h-[380px] sm:h-[520px] lg:h-[620px] w-full rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18),rgba(17,24,39,0.2)_60%)]" />
        </div>
      </div>
    </section>
  );
}
