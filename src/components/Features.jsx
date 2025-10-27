import React from 'react';
import { LayoutTemplate, Images, FileEdit, Search, Shield, Zap } from 'lucide-react';

const items = [
  {
    icon: LayoutTemplate,
    title: 'Auto‑generated pages',
    desc: 'Home, About, Services, Blog and more, structured with modern UX best practices.'
  },
  {
    icon: FileEdit,
    title: 'AI copy & sections',
    desc: 'On‑brand headlines, subcopy, and CTAs tailored to your niche and tone.'
  },
  {
    icon: Images,
    title: 'Smart imagery',
    desc: 'Curated visuals or AI‑generated assets matched to your color palette.'
  },
  {
    icon: Search,
    title: 'SEO ready',
    desc: 'Clean markup, schema, sitemaps, and blazing performance out of the box.'
  },
  {
    icon: Shield,
    title: 'Reliable hosting',
    desc: 'Export to WordPress or deploy with best‑in‑class security and backups.'
  },
  {
    icon: Zap,
    title: '1‑click edits',
    desc: 'Regenerate any section instantly, keep what you like, swap what you don’t.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to ship faster</h2>
        <p className="mt-3 text-slate-300">
          From concept to deployed WordPress site in minutes. Fully editable, endlessly flexible.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:border-fuchsia-400/30 transition">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-slate-300">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#" className="inline-flex h-11 items-center rounded-md bg-white text-slate-900 px-6 text-sm font-medium hover:bg-slate-100">
          Generate my site
        </a>
        <span className="text-slate-400 text-sm">No credit card required</span>
      </div>
    </section>
  );
}
