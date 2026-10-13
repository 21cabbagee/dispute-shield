import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Building2, User, DollarSign } from 'lucide-react';

export function CABModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Head of Operations',
    monthlyVolume: '$100k - $250k/mo',
    primaryPlatform: 'Stripe'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-surface border border-blue-500/40 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-border bg-surface-elevated flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-sans">
                Customer Advisory Board (CAB)
              </h3>
              <p className="text-[11px] text-blue-300 font-mono">
                70% Lifetime Discount ($29/mo) + First 20 Disputes Assisted
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-surface-hover transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Application Received!</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you for applying to the DisputeShield Customer Advisory Board. Our risk engineering team will reach out to <strong className="text-white font-mono">{formData.email}</strong> within 24 hours to schedule onboarding and connect your gateway webhook.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2 rounded-xl bg-surface-elevated border border-border text-xs font-semibold text-white hover:bg-surface-hover cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Official CAB Outreach Script Quote */}
              <div className="p-3.5 rounded-xl bg-surface-elevated border border-border text-xs text-slate-300 italic leading-relaxed">
                "We are launching a focused Customer Advisory Board for high-volume merchants to automate the 45-minute rebuttal compilation nightmare. As a CAB member, you receive a 70% lifetime platform discount ($29/mo) and dedicated assistance recovering your first 20 disputed transactions."
              </div>

              {/* Form Fields */}
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Work Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Company Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="Acme SaaS or Brand"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Role / Title:</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-blue-500/50"
                    >
                      <option>Head of Operations</option>
                      <option>Risk & Fraud Lead</option>
                      <option>Finance Manager / VP Finance</option>
                      <option>Founder / CEO</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Monthly Card Volume:</label>
                    <select
                      value={formData.monthlyVolume}
                      onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-blue-500/50"
                    >
                      <option>$50k - $100k/mo</option>
                      <option>$100k - $250k/mo</option>
                      <option>$250k - $1M/mo</option>
                      <option>$1M+/mo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Primary Gateway:</label>
                    <select
                      value={formData.primaryPlatform}
                      onChange={(e) => setFormData({ ...formData, primaryPlatform: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-blue-500/50"
                    >
                      <option>Stripe</option>
                      <option>Shopify Payments</option>
                      <option>Adyen</option>
                      <option>Braintree / PayPal</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-400 hover:to-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Submit CAB Application ($29/mo Rate)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center text-[10px] text-slate-400 font-mono">
                No credit card required upfront. 14-day risk-free trial.
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
