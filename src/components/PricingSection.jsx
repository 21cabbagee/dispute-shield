import React from 'react';
import { Check, Sparkles, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export function PricingSection({ onOpenCAB, onScrollToRadar }) {
  return (
    <section id="pricing" className="py-20 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>ROI RECOVERY PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Recapture Disputed Revenue on Autopilot
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Recovering just one $300 dispute pays for months of DisputeShield. Stop defaulting to unrepresented forfeitures.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1: Free Sandbox */}
          <div className="rounded-2xl bg-surface border border-border p-8 flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-sans">Starter Sandbox</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-slate-400 border border-border">
                  Trial
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                For emerging merchants testing dispute rebuttal generation.
              </p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white font-mono">$0</span>
                <span className="text-xs text-slate-400 ml-2 font-mono">/ month</span>
              </div>

              <ul className="mt-8 space-y-3 text-xs text-slate-300">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>3 automated dispute dossiers / month</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Single CSV file intake</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Visa 10.4 & MC 4853 templates</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Standard plain-text export</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onScrollToRadar}
              className="mt-8 w-full py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-border text-slate-200 text-xs font-semibold transition-all cursor-pointer"
            >
              Start Free in Radar
            </button>
          </div>

          {/* Tier 2: Customer Advisory Board (Featured) */}
          <div className="rounded-2xl bg-surface border-2 border-blue-500/50 p-8 flex flex-col justify-between shadow-xl shadow-blue-500/10 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-slate-950 text-[11px] font-bold font-mono uppercase tracking-wider shadow-md">
              70% Lifetime CAB Discount
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-sans flex items-center space-x-2">
                  <span>Design Partner CAB</span>
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
                  LIMITED SEATS
                </span>
              </div>
              <p className="text-xs text-blue-300/80 mt-2">
                Join our Customer Advisory Board for high-volume merchants ($50k–$1M/mo).
              </p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white font-mono">$29</span>
                <span className="text-xs text-slate-400 ml-2 font-mono">/ mo (locked lifetime)</span>
              </div>
              <div className="text-[10px] text-slate-400 line-through font-mono mt-0.5">Regular: $100/mo</div>

              <ul className="mt-8 space-y-3 text-xs text-slate-200">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Dedicated assistance recovering first 20 disputes</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Direct founder hotline & roadmap input</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Unlimited Stripe & Shopify webhook sync</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Custom ToS and refund policy clause matchers</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>5-Exhibit print-ready PDF bank packets</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCAB}
              className="mt-8 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-400 hover:to-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-blue-500/20 flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply for CAB Membership</span>
            </button>
          </div>

          {/* Tier 3: Growth Merchant */}
          <div className="rounded-2xl bg-surface border border-border p-8 flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-sans">Growth Merchant</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-slate-400 border border-border">
                  Standard
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                For established Shopify Plus & SaaS companies scaling volume.
              </p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white font-mono">$100</span>
                <span className="text-xs text-slate-400 ml-2 font-mono">/ mo ($1,200/yr)</span>
              </div>

              <ul className="mt-8 space-y-3 text-xs text-slate-300">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Up to 100 automated dispute dossiers / mo</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Real-time webhook intake from Stripe & Shopify</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Automated CE3.0 evidence compilation</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Carrier API sync (FedEx, UPS, DHL, USPS)</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated Slack dispute triage channel</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCAB}
              className="mt-8 w-full py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-border text-slate-200 text-xs font-semibold transition-all cursor-pointer"
            >
              Get Started with Growth
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
