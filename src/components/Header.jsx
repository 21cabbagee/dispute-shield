import React from 'react';
import { ShieldAlert, ShieldCheck, Zap, Sparkles, ExternalLink, Activity, ArrowUpRight } from 'lucide-react';

export function Header({ onOpenCAB, onOpenSimulator, onScrollToRadar }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/10 border border-blue-500/40 text-blue-400">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold tracking-tight text-white font-mono">Dispute<span className="text-blue-400">Shield</span></span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30 uppercase">
                v1.0 CE3.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Autonomous Dispute & Chargeback Dossier Generator</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
          <button 
            onClick={onScrollToRadar}
            className="hover:text-blue-400 transition-colors flex items-center space-x-1.5 cursor-pointer"
          >
            <span>Dispute Radar</span>
          </button>
          <a href="#analytics" className="hover:text-blue-400 transition-colors">
            Win-Loss Metrics
          </a>
          <a href="#reason-codes" className="hover:text-blue-400 transition-colors">
            Visa / MC Codes
          </a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">
            Pricing
          </a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenSimulator}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-border text-xs text-slate-300 hover:text-white hover:bg-surface-hover transition-colors cursor-pointer font-mono"
          >
            <Activity className="w-3.5 h-3.5 text-blue-400" />
            <span>Webhook Simulator</span>
          </button>

          <button
            onClick={onOpenCAB}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 text-slate-950 hover:from-blue-400 hover:to-emerald-400 transition-all shadow-sm shadow-blue-500/20 flex items-center space-x-1.5 cursor-pointer font-sans"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join CAB ($29/mo)</span>
          </button>
        </div>

      </div>
    </header>
  );
}
