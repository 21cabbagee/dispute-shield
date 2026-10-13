import React from 'react';
import { ShieldCheck, BookOpen, CheckCircle, AlertTriangle, FileText, ChevronRight } from 'lucide-react';

const REASON_CODES = [
  {
    code: "Visa 10.4 / MC 4837",
    category: "First-Party & Card-Not-Present Fraud",
    statutoryRule: "Visa Compelling Evidence 3.0 (CE3.0)",
    burdenOfProof: "Proof that cardholder or authorized household member initiated the charge.",
    requiredExhibits: [
      "AVS full street/ZIP match and CVC validation",
      "Corroborating IP address and device footprint matching cardholder",
      "Two prior undisputed transactions with identical customer credentials",
      "Timestamped software login audit trail and feature utilization"
    ]
  },
  {
    code: "Visa 13.1 / MC 4853",
    category: "Merchandise or Services Not Received",
    statutoryRule: "Carrier Proof of Delivery (POD) Standards",
    burdenOfProof: "Irrefutable proof of physical fulfillment or digital delivery to cardholder.",
    requiredExhibits: [
      "Carrier tracking number showing delivery to customer billing address",
      "Physical signature scan or photographic carrier porch capture",
      "GPS delivery coordinates matching street address within 50 meters",
      "Delivery dispatch confirmation email delivered without bounce"
    ]
  },
  {
    code: "Visa 13.7 / MC 4841",
    category: "Cancelled Recurring Transaction",
    statutoryRule: "Visa Core Rules § 5.4.4.2 & FTC Negative Option Rule",
    burdenOfProof: "Proof that subscription was active and cancellation policy was acknowledged.",
    requiredExhibits: [
      "Affirmative checkbox consent to recurring billing terms at signup",
      "Pre-renewal reminder email dispatched prior to renewal date",
      "Telemetry audit showing software logins after alleged cancellation",
      "Clear cancellation policy published within checkout iframe"
    ]
  },
  {
    code: "Visa 13.6 / MC 4850",
    category: "Credit Not Processed / Terms Dispute",
    statutoryRule: "Merchant Disclosed Refund Policy Rules",
    burdenOfProof: "Proof that merchandise/service does not qualify for refund under terms.",
    requiredExhibits: [
      "Explicit refund policy acknowledged via mandatory checkbox",
      "Documentation showing customer failed return qualification criteria",
      "Customer communications refusing merchant corrective remedy",
      "Digital download telemetry proving immediate service consumption"
    ]
  }
];

export function ReasonCodeMatrix() {
  return (
    <section id="reason-codes" className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CARD NETWORK REBUTTAL STANDARDS</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Visa & Mastercard Reason Code Matrix
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Every card network enforces specific statutory evidence tests. DisputeShield formats your exhibits to meet these exact issuer arbitration standards.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REASON_CODES.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface border border-border hover:border-blue-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-sm font-bold text-blue-400 bg-blue-950/40 border border-blue-800/40 px-2.5 py-1 rounded">
                    {item.code}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/30">
                    {item.statutoryRule}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.category}
                </h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  <strong className="text-slate-200">Issuer Burden:</strong> {item.burdenOfProof}
                </p>

                <div className="space-y-2 pt-2 border-t border-border">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Automated Exhibit Modules:
                  </span>
                  {item.requiredExhibits.map((ex, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Compilation Time:</span>
                <span className="text-emerald-400 font-bold">&lt; 60 seconds</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
