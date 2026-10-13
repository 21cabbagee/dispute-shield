import React, { useState } from 'react';
import { 
  X, Printer, Download, Copy, Check, ShieldCheck, FileText, 
  MapPin, CheckCircle, ExternalLink, Calendar, User, CreditCard, ChevronRight
} from 'lucide-react';
import { compileDossier, downloadTextDossier } from '../engine/dossierCompiler';

export function DossierViewerModal({ dispute, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('full'); // 'full', 'letter', 'exhibit_a', 'exhibit_b', 'exhibit_c', 'exhibit_d', 'exhibit_e'
  const [copiedLetter, setCopiedLetter] = useState(false);

  if (!isOpen || !dispute) return null;

  const dossier = compileDossier(dispute);

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(dossier.coverLetter);
    setCopiedLetter(true);
    setTimeout(() => setCopiedLetter(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    downloadTextDossier(dossier, `${dispute.disputeId}_bank_dossier.txt`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl rounded-2xl bg-surface border border-blue-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] no-print"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-border bg-surface-elevated flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-bold text-white font-mono">
                  Bank-Ready Rebuttal Dossier
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
                  {dossier.dossierRef}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Visa/Mastercard Evidence Compilation for Case {dispute.disputeId} • {dispute.merchant}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyLetter}
              className="px-3 py-1.5 rounded-lg bg-surface border border-border hover:bg-surface-hover text-slate-300 text-xs font-medium flex items-center space-x-1.5 cursor-pointer"
            >
              {copiedLetter ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedLetter ? 'Copied Letter' : 'Copy Cover Letter'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-surface border border-blue-500/30 text-blue-300 hover:bg-blue-950/40 text-xs font-medium flex items-center space-x-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 text-slate-950 text-xs font-semibold hover:from-blue-400 hover:to-emerald-400 transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Exhibit Packet</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-hover transition-colors cursor-pointer ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigator */}
        <div className="px-6 py-2 bg-surface border-b border-border flex items-center space-x-1 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab('full')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'full' ? 'bg-surface-elevated text-blue-400 border border-border' : 'text-slate-400 hover:text-white'
            }`}
          >
            Complete 5-Exhibit Packet
          </button>
          <button
            onClick={() => setActiveTab('letter')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'letter' ? 'bg-surface-elevated text-blue-400 border border-border' : 'text-slate-400 hover:text-white'
            }`}
          >
            Executive Cover Letter
          </button>
          <button
            onClick={() => setActiveTab('exhibit_a')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'exhibit_a' ? 'bg-surface-elevated text-blue-400 border border-border' : 'text-slate-400 hover:text-white'
            }`}
          >
            Exhibit A (Auth/AVS)
          </button>
          <button
            onClick={() => setActiveTab('exhibit_b')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'exhibit_b' ? 'bg-surface-elevated text-blue-400 border border-border' : 'text-slate-400 hover:text-white'
            }`}
          >
            Exhibit B (IP/Geo)
          </button>
          <button
            onClick={() => setActiveTab('exhibit_c')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'exhibit_c' ? 'bg-surface-elevated text-blue-400 border border-border' : 'text-slate-400 hover:text-white'
            }`}
          >
            Exhibit C (Fulfillment)
          </button>
          <button
            onClick={() => setActiveTab('exhibit_d')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'exhibit_d' ? 'bg-surface-elevated text-blue-400 border border-border' : 'text-slate-400 hover:text-white'
            }`}
          >
            Exhibit D (Terms of Service)
          </button>
          <button
            onClick={() => setActiveTab('exhibit_e')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'exhibit_e' ? 'bg-surface-elevated text-blue-400 border border-border' : 'text-slate-400 hover:text-white'
            }`}
          >
            Exhibit E (Communications)
          </button>
        </div>

        {/* Dossier Document Content Area */}
        <div className="p-6 overflow-y-auto space-y-8 bg-background font-sans text-xs">
          
          {/* Executive Defense Banner */}
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold block">
                LEGAL DEFENSE STRATEGY:
              </span>
              <span className="text-white font-semibold text-sm">
                {dossier.defenseStrategy}
              </span>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Statutory Standard: <strong className="text-slate-200">{dossier.cardNetworkStandard}</strong>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-right font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-surface border border-border">
                <span className="text-slate-400 text-[10px] block">DISPUTED SUM:</span>
                <span className="text-white font-bold text-sm">
                  ${dispute.transaction.amount.toFixed(2)}
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-surface border border-border">
                <span className="text-slate-400 text-[10px] block">REASON CODE:</span>
                <span className="text-rose-400 font-bold text-sm">
                  {dispute.dispute.scheme} {dispute.dispute.reasonCode}
                </span>
              </div>
            </div>
          </div>

          {/* Section: Cover Letter */}
          {(activeTab === 'full' || activeTab === 'letter') && (
            <div className="p-6 rounded-xl bg-surface border border-border font-mono text-[11px] leading-relaxed text-slate-200 whitespace-pre-wrap selection:bg-blue-900/40">
              <div className="flex items-center justify-between pb-3 border-b border-border mb-4 font-sans text-xs font-bold text-white uppercase tracking-wider">
                <span>Executive Cover Letter to Acquiring Bank</span>
                <span className="text-blue-400 font-mono text-[10px]">CE3.0 Formatted</span>
              </div>
              {dossier.coverLetter}
            </div>
          )}

          {/* Exhibit A */}
          {(activeTab === 'full' || activeTab === 'exhibit_a') && (
            <div className="p-6 rounded-xl bg-surface border border-border space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-blue-400" />
                  <h4 className="text-sm font-bold text-white">
                    {dossier.exhibits[0].title}
                  </h4>
                </div>
                <span className="text-[11px] text-slate-400">Gateway Authentication</span>
              </div>
              <p className="text-xs text-slate-300">
                {dossier.exhibits[0].summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {dossier.exhibits[0].fields.map((f, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-surface-elevated border border-border font-mono text-[11px]">
                    <span className="text-slate-400 block text-[10px]">{f.label}:</span>
                    <span className={f.highlight ? 'text-emerald-400 font-bold' : 'text-slate-200'}>
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exhibit B */}
          {(activeTab === 'full' || activeTab === 'exhibit_b') && (
            <div className="p-6 rounded-xl bg-surface border border-border space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-sm font-bold text-white">
                    {dossier.exhibits[1].title}
                  </h4>
                </div>
                <span className="text-[11px] text-slate-400">Geolocation Corroboration</span>
              </div>
              <p className="text-xs text-slate-300">
                {dossier.exhibits[1].summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {dossier.exhibits[1].fields.map((f, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-surface-elevated border border-border font-mono text-[11px]">
                    <span className="text-slate-400 block text-[10px]">{f.label}:</span>
                    <span className={f.highlight ? 'text-emerald-400 font-bold' : 'text-slate-200'}>
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exhibit C */}
          {(activeTab === 'full' || activeTab === 'exhibit_c') && (
            <div className="p-6 rounded-xl bg-surface border border-border space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm font-bold text-white">
                    {dossier.exhibits[2].title}
                  </h4>
                </div>
                <span className="text-[11px] text-slate-400">Proof of Fulfillment</span>
              </div>
              <p className="text-xs text-slate-300">
                {dossier.exhibits[2].summary}
              </p>

              {dispute.evidence.loginAuditTrail ? (
                <div className="space-y-2 pt-2">
                  <h5 className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                    Authenticated Software Telemetry Trail:
                  </h5>
                  <div className="space-y-1.5">
                    {dispute.evidence.loginAuditTrail.map((log, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-surface-elevated border border-border flex items-center justify-between font-mono text-[11px]">
                        <span className="text-slate-400">{log.timestamp}</span>
                        <span className="text-emerald-300 font-medium">{log.event}</span>
                        <span className="text-slate-400">{log.ip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-surface-elevated border border-border space-y-3 font-mono text-[11px]">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-slate-400 block text-[10px]">CARRIER / SERVICE:</span>
                      <span className="text-white font-bold">{dispute.evidence.carrier}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">TRACKING NUMBER:</span>
                      <a href={dispute.evidence.trackingUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline flex items-center space-x-1">
                        <span>{dispute.evidence.trackingNumber}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">DELIVERY CONFIRMATION:</span>
                      <span className="text-emerald-400 font-bold">{dispute.evidence.deliveryStatus}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">SIGNATURE / GPS PROOF:</span>
                      <span className="text-emerald-300">{dispute.evidence.signatureRecorded}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Exhibit D */}
          {(activeTab === 'full' || activeTab === 'exhibit_d') && (
            <div className="p-6 rounded-xl bg-surface border border-border space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-sm font-bold text-white">
                    {dossier.exhibits[3].title}
                  </h4>
                </div>
                <span className="text-[11px] text-slate-400">Binding Policy Match</span>
              </div>
              <p className="text-xs text-slate-300">
                {dossier.exhibits[3].summary}
              </p>

              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  {dossier.exhibits[3].fields.filter(f => !f.fullWidth).map((f, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-surface-elevated border border-border font-mono text-[11px]">
                      <span className="text-slate-400 block text-[10px]">{f.label}:</span>
                      <span className="text-slate-200">{f.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-surface-elevated border border-indigo-500/30">
                  <span className="text-indigo-300 font-mono text-[10px] uppercase font-bold block mb-1">
                    BINDING CHECKOUT POLICY CLAUSE ACCEPTED BY CARDHOLDER:
                  </span>
                  <p className="text-slate-200 text-xs italic">
                    {dispute.evidence.tosAcknowledgment.policyClause}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Exhibit E */}
          {(activeTab === 'full' || activeTab === 'exhibit_e') && (
            <div className="p-6 rounded-xl bg-surface border border-border space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <h4 className="text-sm font-bold text-white">
                    {dossier.exhibits[4].title}
                  </h4>
                </div>
                <span className="text-[11px] text-slate-400">Pre-Dispute Notices</span>
              </div>
              <p className="text-xs text-slate-300">
                {dossier.exhibits[4].summary}
              </p>

              <div className="space-y-2 pt-2">
                {dispute.evidence.customerCommunication.map((comm, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-surface-elevated border border-border flex items-center justify-between font-mono text-[11px]">
                    <div>
                      <span className="text-slate-400 block text-[10px]">{comm.date} • {comm.channel}</span>
                      <span className="text-white font-semibold">{comm.subject}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium">
                      {comm.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
