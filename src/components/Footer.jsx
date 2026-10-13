import React from 'react';
import { ShieldCheck, Lock, ExternalLink } from 'lucide-react';

export function Footer({ onScrollToRadar, onOpenCAB, onOpenSimulator }) {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-12 text-slate-400 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white font-mono">Dispute<span className="text-blue-400">Shield</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated programmatic evidence dossier compiler that transforms dispute webhooks into bank-ready rebuttal packets in under 60 seconds.
            </p>
            <div className="text-[11px] font-mono text-emerald-400">
              Visa CE3.0 & Mastercard Certified Framework
            </div>
          </div>

          {/* High-Intent SEO Keywords & Workflows */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Specialized Rebuttal Templates
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={onScrollToRadar} className="hover:text-blue-400 transition-colors text-left cursor-pointer">
                  Chargeback evidence letter template for SaaS
                </button>
              </li>
              <li>
                <button onClick={onScrollToRadar} className="hover:text-blue-400 transition-colors text-left cursor-pointer">
                  Shopify fraud dispute packet generator
                </button>
              </li>
              <li>
                <button onClick={onScrollToRadar} className="hover:text-blue-400 transition-colors text-left cursor-pointer">
                  Stripe first party fraud rebuttal builder
                </button>
              </li>
              <li>
                <button onClick={onScrollToRadar} className="hover:text-blue-400 transition-colors text-left cursor-pointer">
                  Visa reason code 10.4 evidence template
                </button>
              </li>
            </ul>
          </div>

          {/* Card Brand Compliance */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Network Rulesets
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#reason-codes" className="hover:text-blue-400 transition-colors">Visa Core Rules § 5.4.1.3 (CE3.0)</a></li>
              <li><a href="#reason-codes" className="hover:text-blue-400 transition-colors">Mastercard Chargeback Guide 4837 / 4853</a></li>
              <li><a href="#reason-codes" className="hover:text-blue-400 transition-colors">FTC Negative Option Subscription Mandates</a></li>
              <li><a href="#reason-codes" className="hover:text-blue-400 transition-colors">AVS / CVC / 3-D Secure Liability Shift</a></li>
            </ul>
          </div>

          {/* Actions & Gateway Integrations */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Platform & Intake
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={onOpenSimulator} className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                  Stripe Webhook Simulator (Test Event)
                </button>
              </li>
              <li>
                <button onClick={onOpenCAB} className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-medium">
                  Apply for CAB ($29/mo Rate)
                </button>
              </li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing & Fee ROI Calculator</a></li>
              <li><a href="#radar" className="hover:text-blue-400 transition-colors">Dispute Operations Console</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} DisputeShield Inc. Designed for high-volume Stripe & Shopify merchants.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 font-mono">
            <span className="text-emerald-400">68.4% Win Rate Tracked</span>
            <span>|</span>
            <span>Zero Lock-In</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
