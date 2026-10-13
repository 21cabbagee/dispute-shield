import React from 'react';
import { ShieldCheck, ArrowRight, Zap, FileText, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

export function Hero({ onScrollToRadar, onOpenSimulator, onOpenCAB }) {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[260px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Compliance Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-surface border border-blue-500/30 text-blue-300 text-xs font-mono mb-6">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span>Visa Compelling Evidence 3.0 (CE3.0) & Mastercard 4837 Ready</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">&lt; 60s Generation</span>
        </div>

        {/* Mandatory High-Intent SEO H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
          Automated Dispute Evidence Dossier Generator for Stripe & Shopify
        </h1>

        {/* Subhead with Problem Thesis & Long-tail keywords */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Transform incoming dispute webhooks into institutional, bank-ready rebuttal packets in under 60 seconds.
          The turnkey <strong className="text-white font-semibold">Stripe first party fraud rebuttal builder</strong> and <strong className="text-white font-semibold">Shopify fraud dispute packet generator</strong> that shifts win rates from 20% to 65%+.
        </p>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-300">
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Visa Reason Code 10.4 Evidence Template</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chargeback Evidence Letter Template for SaaS</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Automated 5-Exhibit Bank PDF</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>CSV Batch & Live Webhook Intake</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToRadar}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-slate-950 font-semibold text-sm hover:from-blue-400 hover:to-emerald-400 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <ShieldCheck className="w-5 h-5 text-slate-950" />
            <span>Launch Dispute Radar</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onOpenSimulator}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-surface border border-border-strong text-slate-200 font-medium text-sm hover:bg-surface-hover hover:border-slate-600 transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span>Simulate Stripe Webhook</span>
          </button>

          <button
            onClick={onOpenCAB}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-surface-elevated border border-blue-500/40 text-blue-300 font-medium text-sm hover:bg-blue-950/40 transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Design Partner CAB ($29/mo)</span>
          </button>
        </div>

        {/* Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-emerald-400">68.4%</div>
            <div className="text-xs text-slate-400 mt-1">Average Win Rate</div>
            <div className="text-[11px] text-slate-400 mt-0.5">vs. 20% industry default forfeit</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-blue-400">&lt; 60s</div>
            <div className="text-xs text-slate-400 mt-1">Dossier Compilation Time</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Replaces 45m forensic search</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-white">0.24%</div>
            <div className="text-xs text-slate-400 mt-1">Protected Dispute Ratio</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Safely below 0.9% Visa threshold</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-amber-400">$25.00</div>
            <div className="text-xs text-slate-400 mt-1">Dispute Fee Recovered</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Plus 100% of transaction revenue</div>
          </div>
        </div>

      </div>
    </section>
  );
}
