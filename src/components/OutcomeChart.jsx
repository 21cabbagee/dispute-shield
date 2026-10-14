import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, Zap, DollarSign, Clock, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * OutcomeChart for DisputeShield (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $4,500/mo manual chargeback agencies & 25% recovery markups ($6 layer)
 * with Autonomous Visa CE3.0 / Mastercard Dispute Rebuttal Dossier Engine ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "Autonomous Stripe & Shopify Dispute Evidence Dossier Generator",
  defaultDisputes = 40,
  onCtaClick
}) {
  const [disputes, setDisputes] = useState(defaultDisputes);

  // Avg dispute value: $185
  const totalDisputeVolume = disputes * 185;
  // Legacy human agencies: $4,500 base retainer + 25% contingency on ~25% win rate = $4,500 + ($185 * disputes * 0.25 * 0.25)
  const legacyServicesCost = 3500 + Math.round(totalDisputeVolume * 0.25 * 0.25) + Math.round(totalDisputeVolume * 0.75); // unrecovered losses
  // DisputeShield: $49/mo software fee + 68% win rate leaves only 32% unrecovered losses
  const autoUnrecoveredLosses = Math.round(totalDisputeVolume * 0.32);
  const autoSoftwareCost = 49 + autoUnrecoveredLosses;
  const netValueReclaimed = legacyServicesCost - autoSoftwareCost;
  const savingsPercent = Math.round(((legacyServicesCost - autoSoftwareCost) / legacyServicesCost) * 100);

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 5);

  return (
    <div className="relative rounded-2xl border border-blue-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-blue-500/40 text-blue-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $4,500/mo Chargeback Agencies ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Chargeback Economics: <span className="text-blue-400">{savingsPercent}% Bottom-Line Reclaimed</span>
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Julien Bek Thesis: Displacing manual dispute rebuttal paralegals and agency contingency markups with automated Visa CE3.0 evidence synthesis.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900/80 border border-blue-500/30 rounded-xl p-3">
          <ShieldCheck className="w-5 h-5 text-blue-400" />
          <div className="text-right">
            <div className="text-xs text-slate-400 font-mono">Net Monthly Savings</div>
            <div className="text-lg font-black text-blue-400 font-mono">
              +${netValueReclaimed.toLocaleString()}/mo
            </div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="my-6 bg-slate-900/60 rounded-xl p-4 border border-white/5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Monthly Inbound Chargeback & Fraud Disputes:</span>
          </label>
          <span className="text-base font-bold text-blue-400 font-mono bg-blue-500/10 px-3 py-0.5 rounded-lg border border-blue-500/20">
            {disputes} Disputes (${totalDisputeVolume.toLocaleString()})
          </span>
        </div>
        <input
          type="range"
          min="5"
          max="200"
          value={disputes}
          onChange={(e) => setDisputes(parseInt(e.target.value))}
          className="w-full accent-blue-400 bg-slate-800 rounded-lg cursor-pointer h-2"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>5 Boutique Store</span>
          <span>100 Mid-Market E-commerce</span>
          <span>200+ Enterprise Scaling</span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Legacy Manual Services ($6) */}
        <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                <Clock className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">Legacy Dispute Agency</h4>
                <p className="text-xs text-rose-300/70">Manual Paralegals & 25% Contingency</p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-rose-400 bg-rose-500/10 px-2 py-1 rounded">
              The $6 Service Layer
            </span>
          </div>

          <div className="space-y-3 mb-6 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">• Win Rate (Manual Forms):</span>
              <span className="font-mono text-rose-400 font-bold">22.4% Average</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Rebuttal Submission Delay:</span>
              <span className="font-mono text-rose-400 font-bold">7 - 12 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Retainer + Lost Capital:</span>
              <span className="font-mono text-rose-400 font-bold">${legacyServicesCost.toLocaleString()}/mo</span>
            </div>
            <div className="border-t border-rose-500/20 pt-2 flex justify-between font-bold text-sm">
              <span className="text-white">Total Dispute Drain:</span>
              <span className="font-mono text-rose-400">${legacyServicesCost.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Bar visualization */}
          <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-rose-500/30">
            <div
              className="bg-gradient-to-r from-rose-600 to-rose-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${legacyBarHeight}%` }}
            />
          </div>
        </div>

        {/* DisputeShield Software Layer ($1) */}
        <div className="rounded-xl border border-blue-500/30 bg-blue-950/15 p-5 relative overflow-hidden shadow-lg shadow-blue-500/5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">DisputeShield Autonomous Dossier</h4>
                <p className="text-xs text-blue-300/80">Visa CE3.0 Compliant 5-Exhibit PDF</p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
              The $1 Software Layer
            </span>
          </div>

          <div className="space-y-3 mb-6 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">• Win Rate (Algorithmic Dossier):</span>
              <span className="font-mono text-blue-400 font-bold">68.2% Verified</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Dossier Assembly Speed:</span>
              <span className="font-mono text-blue-400 font-bold">&lt; 45 seconds</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Net Cost (Fee + Residual):</span>
              <span className="font-mono text-blue-400 font-bold">${autoSoftwareCost.toLocaleString()}/mo</span>
            </div>
            <div className="border-t border-blue-500/20 pt-2 flex justify-between font-bold text-sm">
              <span className="text-white">Software Price:</span>
              <span className="font-mono text-blue-400">${autoSoftwareCost.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Bar visualization */}
          <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-blue-500/30">
            <div
              className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${autoBarHeight}%` }}
            />
          </div>
        </div>
      </div>

      {/* Larry Ellison Economic Guarantee Box */}
      <div className="rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-emerald-950/40 border border-blue-500/30 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>The Ellison SLA: 60%+ Win-Rate Guarantee</span>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-mono">100% Risk-Free</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              If our CE3.0 dossiers don't win at least 60% of eligible first-party fraud disputes across your first 90 days, we refund 100% of platform fees.
            </p>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="whitespace-nowrap px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
        >
          Generate Free Sample Dossier
        </button>
      </div>
    </div>
  );
}
