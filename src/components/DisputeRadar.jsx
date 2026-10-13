import React, { useState, useRef } from 'react';
import { 
  ShieldAlert, ShieldCheck, Clock, FileText, Download, CheckCircle, 
  XCircle, AlertTriangle, Search, Filter, Upload, Zap, ArrowRight, ExternalLink
} from 'lucide-react';
import { compileDossier, downloadTextDossier } from '../engine/dossierCompiler';

export function DisputeRadar({ 
  disputes, 
  onSelectDispute, 
  onOpenSimulator, 
  onAddDispute 
}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const fileInputRef = useRef(null);

  // Filter logic
  const filteredDisputes = disputes.filter((item) => {
    // Status filter
    if (activeFilter === 'needs_response' && item.dispute.status !== 'needs_response') return false;
    if (activeFilter === 'under_review' && item.dispute.status !== 'under_review') return false;
    if (activeFilter === 'won' && item.dispute.status !== 'won') return false;
    if (activeFilter === 'lost' && item.dispute.status !== 'lost') return false;

    // Category filter
    if (categoryFilter === 'saas' && !item.merchantCategory.toLowerCase().includes('saas')) return false;
    if (categoryFilter === 'ecommerce' && !item.merchantCategory.toLowerCase().includes('commerce')) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.customer.name.toLowerCase().includes(q);
      const matchEmail = item.customer.email.toLowerCase().includes(q);
      const matchId = item.disputeId.toLowerCase().includes(q);
      const matchCharge = item.chargeId.toLowerCase().includes(q);
      const matchReason = item.dispute.reasonCategory.toLowerCase().includes(q);
      return matchName || matchEmail || matchId || matchCharge || matchReason;
    }

    return true;
  });

  // Handle CSV Upload
  const handleCSVUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const lines = content.split('\n').filter(l => l.trim().length > 0);
      
      // If valid CSV with rows, parse and add as new dispute
      if (lines.length > 1) {
        const row = lines[1].split(',');
        const newDispute = {
          id: `dp_${Math.random().toString(36).substring(2, 9)}`,
          disputeId: `DISP-${Math.floor(10000 + Math.random() * 90000)}`,
          chargeId: `ch_${Math.random().toString(36).substring(2, 12)}`,
          merchant: row[0]?.replace(/"/g, '') || "Store Intake (CSV)",
          merchantCategory: "Uploaded Intake",
          customer: {
            name: row[1]?.replace(/"/g, '') || "CSV Imported Cardholder",
            email: row[2]?.replace(/"/g, '') || "customer@example.com",
            phone: "+1 (555) 019-2831",
            billingAddress: {
              line1: "100 Main St",
              city: "Austin",
              state: "TX",
              postalCode: "78701",
              country: "US"
            },
            ipAddress: "192.0.2.14",
            isp: "Comcast Business",
            geoCity: "Austin, TX (US)",
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
          },
          transaction: {
            date: new Date().toISOString().replace('T', ' ').substring(0, 19) + " UTC",
            amount: parseFloat(row[3]) || 249.00,
            currency: "USD",
            cardBrand: "Visa",
            cardLast4: "4242",
            cardExp: "12/28",
            avsResult: "Y (Full Match)",
            cvcResult: "M (CVC Match)",
            threeDSecure: "authenticated",
            disputeFee: 15.00
          },
          dispute: {
            reasonCode: "10.4",
            reasonCategory: "Fraudulent Transaction",
            scheme: "Visa",
            networkExplanation: "Cardholder claims unauthorized transaction.",
            status: "needs_response",
            filingDate: new Date().toISOString().replace('T', ' ').substring(0, 19) + " UTC",
            responseDue: new Date(Date.now() + 7 * 86400000).toISOString().replace('T', ' ').substring(0, 19) + " UTC",
            daysRemaining: 7
          },
          evidence: {
            fulfillmentType: "digital_software_service",
            serviceTier: "Standard Subscription",
            loginAuditTrail: [
              { timestamp: "2026-10-01 10:00:00 UTC", event: "Account Provisioned & Used", ip: "192.0.2.14" }
            ],
            tosAcknowledgment: {
              acceptedAt: "2026-10-01 10:00:00 UTC",
              checkboxId: "chk_tos",
              policyClause: "Purchases are subject to merchant published non-refundable terms.",
              url: "https://example.com/terms",
              ipMatched: true
            },
            customerCommunication: [
              { date: "2026-10-01 10:00:05 UTC", channel: "Email", subject: "Order Confirmation", status: "Delivered" }
            ]
          }
        };

        onAddDispute(newDispute);
      }
    };
    reader.readAsText(file);
  };

  return (
    <section id="radar" className="py-12 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-blue-400 mb-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-ping"></span>
              <span>LIVE EVIDENCE COMPILATION RADAR</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
              Dispute Operations Console
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Active chargeback claims requiring evidence representation. Click any case to generate a 5-exhibit bank dossier.
            </p>
          </div>

          {/* Intake Action Triggers */}
          <div className="flex flex-wrap items-center gap-3">
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleCSVUpload}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3.5 py-2 rounded-lg bg-surface border border-border hover:bg-surface-hover text-slate-200 text-xs font-medium flex items-center space-x-2 transition-all cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-blue-400" />
              <span>Import Disputes CSV</span>
            </button>

            <button
              onClick={onOpenSimulator}
              className="px-3.5 py-2 rounded-lg bg-surface-elevated border border-blue-500/40 hover:bg-blue-950/40 text-blue-300 text-xs font-medium flex items-center space-x-2 transition-all cursor-pointer font-mono"
            >
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>Webhook Simulator</span>
            </button>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 rounded-xl bg-surface border border-border mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                  : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
              }`}
            >
              All Disputes ({disputes.length})
            </button>
            <button
              onClick={() => setActiveFilter('needs_response')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeFilter === 'needs_response'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse"></span>
              <span>Needs Response ({disputes.filter(d => d.dispute.status === 'needs_response').length})</span>
            </button>
            <button
              onClick={() => setActiveFilter('under_review')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeFilter === 'under_review'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
              }`}
            >
              Under Review ({disputes.filter(d => d.dispute.status === 'under_review').length})
            </button>
            <button
              onClick={() => setActiveFilter('won')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeFilter === 'won'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
              }`}
            >
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              <span>Won ({disputes.filter(d => d.dispute.status === 'won').length})</span>
            </button>
          </div>

          {/* Search box & Category toggle */}
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search cardholder, ID, charge..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-surface-elevated border border-border text-slate-200 focus:outline-none focus:border-blue-500/50"
              />
            </div>
            
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-2.5 py-1.5 text-xs rounded-lg bg-surface-elevated border border-border text-slate-300 focus:outline-none focus:border-blue-500/50"
            >
              <option value="all">All Channels</option>
              <option value="saas">SaaS Only</option>
              <option value="ecommerce">Shopify DTC</option>
            </select>
          </div>

        </div>

        {/* Disputes Table */}
        <div className="rounded-xl bg-surface border border-border overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-surface-elevated/70 border-b border-border text-slate-400 font-mono text-[11px]">
                  <th className="py-3.5 px-4 font-semibold">Dispute / Charge ID</th>
                  <th className="py-3.5 px-4 font-semibold">Cardholder & Merchant</th>
                  <th className="py-3.5 px-4 font-semibold">Amount & Fee</th>
                  <th className="py-3.5 px-4 font-semibold">Reason Code</th>
                  <th className="py-3.5 px-4 font-semibold">Deadline</th>
                  <th className="py-3.5 px-4 font-semibold">Status</th>
                  <th className="py-3.5 px-4 text-right font-semibold">Rebuttal Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-slate-300">
                {filteredDisputes.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="py-12 text-center text-slate-400 italic">
                      No disputes matching the active filters.
                    </td>
                  </tr>
                ) : (
                  filteredDisputes.map((item) => (
                    <tr 
                      key={item.id} 
                      className="hover:bg-surface-hover/60 transition-colors group"
                    >
                      {/* Dispute / Charge */}
                      <td className="py-4 px-4 font-mono">
                        <div className="font-bold text-white group-hover:text-blue-300 transition-colors">
                          {item.disputeId}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate max-w-[120px]">
                          {item.chargeId}
                        </div>
                      </td>

                      {/* Cardholder */}
                      <td className="py-4 px-4">
                        <div className="font-semibold text-slate-200">{item.customer.name}</div>
                        <div className="text-[11px] text-slate-400">{item.customer.email}</div>
                        <div className="text-[10px] text-blue-400 font-mono mt-0.5">{item.merchant}</div>
                      </td>

                      {/* Amount & Fee */}
                      <td className="py-4 px-4 font-mono">
                        <div className="text-sm font-bold text-white">
                          ${item.transaction.amount.toFixed(2)}
                        </div>
                        <div className="text-[10px] text-rose-400 mt-0.5">
                          +${item.transaction.disputeFee.toFixed(2)} dispute fee
                        </div>
                      </td>

                      {/* Reason Code */}
                      <td className="py-4 px-4">
                        <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-surface-elevated border border-border text-[11px] font-mono">
                          <span className="font-bold text-blue-400">{item.dispute.scheme} {item.dispute.reasonCode}</span>
                        </div>
                        <div className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                          {item.dispute.reasonCategory}
                        </div>
                      </td>

                      {/* Deadline */}
                      <td className="py-4 px-4 font-mono text-[11px]">
                        {item.dispute.status === 'needs_response' ? (
                          <div className="flex items-center space-x-1.5 text-rose-400 font-semibold">
                            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                            <span>{item.dispute.daysRemaining} days left</span>
                          </div>
                        ) : (
                          <span className="text-slate-400">Closed / Submitted</span>
                        )}
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          Due: {item.dispute.responseDue.split(' ')[0]}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4">
                        {item.dispute.status === 'needs_response' && (
                          <span className="px-2 py-1 rounded text-[10px] font-mono bg-rose-500/10 text-rose-300 border border-rose-500/30 font-semibold">
                            NEEDS RESPONSE
                          </span>
                        )}
                        {item.dispute.status === 'under_review' && (
                          <span className="px-2 py-1 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30 font-semibold">
                            UNDER REVIEW
                          </span>
                        )}
                        {item.dispute.status === 'won' && (
                          <span className="px-2 py-1 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold flex items-center space-x-1 w-max">
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                            <span>FUNDS WON</span>
                          </span>
                        )}
                        {item.dispute.status === 'lost' && (
                          <span className="px-2 py-1 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-border">
                            LOST
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => onSelectDispute(item)}
                            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 text-slate-950 text-xs font-semibold hover:from-blue-400 hover:to-emerald-400 transition-all flex items-center space-x-1 cursor-pointer shadow-sm shadow-blue-500/20"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Generate Dossier</span>
                          </button>

                          <button
                            onClick={() => {
                              const d = compileDossier(item);
                              downloadTextDossier(d, `${item.disputeId}_rebuttal.txt`);
                            }}
                            title="Download Raw Rebuttal Text"
                            className="p-1.5 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border text-slate-400 hover:text-white transition-colors cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
