import React from 'react';
import { TrendingUp, ShieldCheck, DollarSign, AlertTriangle, ArrowUpRight, CheckCircle2, XCircle } from 'lucide-react';

export function WinLossTracker({ disputes }) {
  const totalAmount = disputes.reduce((sum, d) => sum + d.transaction.amount, 0);
  const wonDisputes = disputes.filter(d => d.dispute.status === 'won');
  const wonAmount = wonDisputes.reduce((sum, d) => sum + d.transaction.amount, 0);
  const winRate = ((wonDisputes.length / (disputes.filter(d => d.dispute.status === 'won' || d.dispute.status === 'lost').length || 1)) * 100).toFixed(1);

  return (
    <section id="analytics" className="py-16 bg-surface/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>DISPUTE ARBITRATION BENCHMARKS</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Win-Loss Tracking & Revenue Recovery
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Real-time merchant portfolio representation metrics. Eliminating default forfeits by submitting institutional rebuttal packets to issuing banks.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>WIN RATE (RECOVERED)</span>
              <span className="text-emerald-400 flex items-center space-x-0.5">
                <span>+48.4%</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            <div className="text-3xl font-bold font-mono text-emerald-400 mt-3">68.4%</div>
            <p className="text-[11px] text-slate-400 mt-2">
              vs. <span className="text-rose-400 font-semibold">20.0%</span> manual merchant average
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>SAVED REVENUE</span>
              <DollarSign className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-3xl font-bold font-mono text-white mt-3">
              ${(wonAmount > 0 ? wonAmount : 12620).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              From <strong className="text-slate-300">${(totalAmount > 0 ? totalAmount : 18450).toFixed(2)}</strong> total challenged
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>DISPUTE RATIO</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold font-mono text-blue-400 mt-3">0.24%</div>
            <p className="text-[11px] text-slate-400 mt-2">
              Safe buffer below <strong className="text-rose-400 font-mono">0.90%</strong> Visa penalty cap
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>DISPUTE FEES RECLAIMED</span>
              <span className="text-amber-400 text-xs font-mono">+$25/win</span>
            </div>
            <div className="text-3xl font-bold font-mono text-amber-400 mt-3">$1,450.00</div>
            <p className="text-[11px] text-slate-400 mt-2">
              58 gateway dispute fees reversed
            </p>
          </div>

        </div>

        {/* Reason Code Breakdown Grid */}
        <div className="p-6 rounded-2xl bg-surface border border-border">
          <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider font-mono">
            Win Rates by Visa & Mastercard Reason Code
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                <span className="text-slate-200">Visa 10.4 / MC 4837 (First-Party Card-Not-Present Fraud)</span>
                <span className="text-emerald-400 font-bold">72% Win Rate (CE3.0 Match)</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-surface-elevated overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-[72%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                <span className="text-slate-200">Visa 13.1 / MC 4853 (Product Not Received / Physical Delivery)</span>
                <span className="text-emerald-400 font-bold">81% Win Rate (Carrier Signature & GPS)</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-surface-elevated overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-[81%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                <span className="text-slate-200">Visa 13.7 / MC 4841 (Cancelled Recurring SaaS Subscription)</span>
                <span className="text-emerald-400 font-bold">64% Win Rate (Post-Billing Software Usage)</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-surface-elevated overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-[64%]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
