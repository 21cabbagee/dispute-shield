import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DisputeRadar } from './components/DisputeRadar';
import { WinLossTracker } from './components/WinLossTracker';
import { ReasonCodeMatrix } from './components/ReasonCodeMatrix';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { DossierViewerModal } from './components/DossierViewerModal';
import { WebhookSimulatorModal } from './components/WebhookSimulatorModal';
import { CABModal } from './components/CABModal';
import { MOCK_DISPUTES } from './data/mockDisputes';
import { compileDossier } from './engine/dossierCompiler';

function App() {
  const [disputes, setDisputes] = useState(MOCK_DISPUTES);
  const [selectedDispute, setSelectedDispute] = useState(MOCK_DISPUTES[0]);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isCABOpen, setIsCABOpen] = useState(false);

  // Handle dispute selection for Dossier compilation
  const handleSelectDispute = (dispute) => {
    setSelectedDispute(dispute);
    setIsDossierOpen(true);
  };

  // Add new dispute (from CSV or Webhook Simulator)
  const handleAddDispute = (newDispute) => {
    setDisputes((prev) => [newDispute, ...prev]);
    setSelectedDispute(newDispute);
    setIsDossierOpen(true);
  };

  const handleScrollToRadar = () => {
    const el = document.getElementById('radar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pre-compiled active dossier for print media
  const activePrintDossier = selectedDispute ? compileDossier(selectedDispute) : null;

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Regular Interactive Web Application (Hidden on print) */}
      <div className="no-print flex-1 flex flex-col">
        {/* Header */}
        <Header 
          onOpenCAB={() => setIsCABOpen(true)}
          onOpenSimulator={() => setIsSimulatorOpen(true)}
          onScrollToRadar={handleScrollToRadar}
        />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero */}
          <Hero 
            onScrollToRadar={handleScrollToRadar}
            onOpenSimulator={() => setIsSimulatorOpen(true)}
            onOpenCAB={() => setIsCABOpen(true)}
          />

          {/* Interactive Dispute Radar */}
          <DisputeRadar 
            disputes={disputes}
            onSelectDispute={handleSelectDispute}
            onOpenSimulator={() => setIsSimulatorOpen(true)}
            onAddDispute={handleAddDispute}
          />

          {/* Win-Loss Analytics */}
          <WinLossTracker disputes={disputes} />

          {/* Visa / Mastercard Reason Code Matrix */}
          <ReasonCodeMatrix />

          {/* Pricing & ROI Recovery */}
          <PricingSection 
            onOpenCAB={() => setIsCABOpen(true)}
            onScrollToRadar={handleScrollToRadar}
          />
        </main>

        {/* Footer */}
        <Footer 
          onScrollToRadar={handleScrollToRadar}
          onOpenCAB={() => setIsCABOpen(true)}
          onOpenSimulator={() => setIsSimulatorOpen(true)}
        />
      </div>

      {/* Interactive Modals */}
      <DossierViewerModal
        dispute={selectedDispute}
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

      <WebhookSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        onInjectDispute={handleAddDispute}
      />

      <CABModal
        isOpen={isCABOpen}
        onClose={() => setIsCABOpen(false)}
      />

      {/* Print-Only White Paper Bank Dossier View (Rendered only on window.print()) */}
      {activePrintDossier && (
        <div className="hidden print:block text-black bg-white p-8 font-sans max-w-4xl mx-auto text-xs leading-normal">
          <div className="border-b-2 border-black pb-4 mb-6">
            <h1 className="text-xl font-bold uppercase tracking-wider">
              OFFICIAL CHARGEBACK DISPUTE REBUTTAL EXHIBIT DOSSIER
            </h1>
            <div className="flex justify-between text-xs mt-2 font-mono">
              <span>REFERENCE: {activePrintDossier.dossierRef}</span>
              <span>DATE: {activePrintDossier.compiledDate}</span>
            </div>
            <div className="text-xs mt-1">
              DISPUTE ID: <strong>{activePrintDossier.dispute.disputeId}</strong> | CHARGE ID: <strong>{activePrintDossier.dispute.chargeId}</strong>
            </div>
          </div>

          <div className="mb-6 whitespace-pre-wrap font-mono text-xs border p-4 bg-gray-50">
            {activePrintDossier.coverLetter}
          </div>

          <div className="page-break pt-6">
            <h2 className="text-sm font-bold uppercase border-b pb-2 mb-3">
              EXHIBIT A: AUTHORIZATION & AVS/CVC TRANSACTION LOG
            </h2>
            <div className="grid grid-cols-2 gap-2 mb-4 font-mono text-xs">
              {activePrintDossier.exhibits[0].fields.map((f, i) => (
                <div key={i} className="border p-2">
                  <span className="font-bold">{f.label}:</span> {f.value}
                </div>
              ))}
            </div>
          </div>

          <div className="page-break pt-6">
            <h2 className="text-sm font-bold uppercase border-b pb-2 mb-3">
              EXHIBIT B: GEOLOCATION & NETWORK AUDIT
            </h2>
            <div className="grid grid-cols-2 gap-2 mb-4 font-mono text-xs">
              {activePrintDossier.exhibits[1].fields.map((f, i) => (
                <div key={i} className="border p-2">
                  <span className="font-bold">{f.label}:</span> {f.value}
                </div>
              ))}
            </div>
          </div>

          <div className="page-break pt-6">
            <h2 className="text-sm font-bold uppercase border-b pb-2 mb-3">
              EXHIBIT C & D: PROOF OF SERVICE FULFILLMENT & TERMS CLAUSE MATCH
            </h2>
            <div className="border p-3 mb-4 text-xs italic">
              Policy Clause Accepted: "{activePrintDossier.dispute.evidence.tosAcknowledgment.policyClause}"
            </div>
            <div className="border p-2 font-mono text-xs">
              Accepted At: {activePrintDossier.dispute.evidence.tosAcknowledgment.acceptedAt} by Customer IP: {activePrintDossier.dispute.customer.ipAddress}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
