import React, { useState } from 'react';
import { X, Zap, ArrowRight, CheckCircle, Code, ShieldCheck, RefreshCw } from 'lucide-react';

const WEBHOOK_TEMPLATES = {
  dispute_created: {
    event: "charge.dispute.created",
    summary: "New First-Party Fraud Dispute Triggered (Visa 10.4)",
    payload: {
      id: "evt_1Ox9F2Lkd82vN901test",
      object: "event",
      type: "charge.dispute.created",
      created: 1729000000,
      data: {
        object: {
          id: "dp_test_" + Math.random().toString(36).substring(2, 9),
          charge: "ch_test_" + Math.random().toString(36).substring(2, 9),
          amount: 35000,
          currency: "usd",
          status: "needs_response",
          reason: "fraudulent",
          evidence_details: {
            due_by: 1729600000,
            has_evidence: false,
            past_due: false,
            submission_count: 0
          },
          payment_intent: "pi_test_8849201",
          balance_transactions: [
            {
              id: "txn_test_9921",
              amount: -35000,
              fee: 1500,
              net: -36500
            }
          ],
          metadata: {
            customer_name: "Gregory Vance",
            customer_email: "gregory.vance@techcorp.io",
            product_tier: "Scale Subscription (B2B)",
            ip_at_checkout: "198.51.100.88",
            avs_result: "Y",
            cvc_result: "M"
          }
        }
      }
    }
  },

  product_not_received: {
    event: "charge.dispute.created",
    summary: "Product Not Received Claim (Mastercard 4853)",
    payload: {
      id: "evt_1Pz8M1Qld71wM202test",
      object: "event",
      type: "charge.dispute.created",
      created: 1729050000,
      data: {
        object: {
          id: "dp_test_" + Math.random().toString(36).substring(2, 9),
          charge: "ch_test_" + Math.random().toString(36).substring(2, 9),
          amount: 19500,
          currency: "usd",
          status: "needs_response",
          reason: "product_not_received",
          evidence_details: {
            due_by: 1729700000,
            has_evidence: false
          },
          metadata: {
            customer_name: "Charlotte Dubois",
            customer_email: "charlotte@duboisdesign.fr",
            carrier: "DHL Express",
            tracking_number: "948201948210",
            delivery_status: "Delivered & Signed",
            avs_result: "Y",
            cvc_result: "M"
          }
        }
      }
    }
  }
};

export function WebhookSimulatorModal({ isOpen, onClose, onInjectDispute }) {
  const [selectedTemplate, setSelectedTemplate] = useState('dispute_created');
  const [injected, setInjected] = useState(false);

  if (!isOpen) return null;

  const currentPayload = WEBHOOK_TEMPLATES[selectedTemplate].payload;

  const handleSimulate = () => {
    const meta = currentPayload.data.object.metadata;
    const amountDollars = currentPayload.data.object.amount / 100;
    const isPhysical = currentPayload.data.object.reason === "product_not_received";

    const newDispute = {
      id: currentPayload.data.object.id,
      disputeId: `DISP-${Math.floor(10000 + Math.random() * 90000)}`,
      chargeId: currentPayload.data.object.charge,
      merchant: "Webhook Live Ingestion Store",
      merchantCategory: isPhysical ? "Luxury DTC E-Commerce" : "Digital B2B SaaS",
      customer: {
        name: meta.customer_name,
        email: meta.customer_email,
        phone: "+1 (415) 555-0199",
        billingAddress: {
          line1: "100 Innovation Way",
          city: "San Francisco",
          state: "CA",
          postalCode: "94105",
          country: "US"
        },
        ipAddress: meta.ip_at_checkout || "198.51.100.88",
        isp: "Cloudflare Warp / Enterprise Fiber",
        geoCity: "San Francisco, CA (US)",
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
      },
      transaction: {
        date: new Date().toISOString().replace('T', ' ').substring(0, 19) + " UTC",
        amount: amountDollars,
        currency: "USD",
        cardBrand: isPhysical ? "Mastercard" : "Visa",
        cardLast4: "4242",
        cardExp: "10/28",
        avsResult: `${meta.avs_result} (Full Match)`,
        cvcResult: `${meta.cvc_result} (CVC Match)`,
        threeDSecure: "authenticated",
        disputeFee: 15.00
      },
      dispute: {
        reasonCode: isPhysical ? "13.1" : "10.4",
        reasonCategory: isPhysical ? "Product Not Received" : "Fraudulent Transaction",
        scheme: isPhysical ? "Mastercard" : "Visa",
        networkExplanation: isPhysical 
          ? "Cardholder claims physical merchandise was not received."
          : "Cardholder claims unauthorized card-not-present transaction.",
        status: "needs_response",
        filingDate: new Date().toISOString().replace('T', ' ').substring(0, 19) + " UTC",
        responseDue: new Date(Date.now() + 7 * 86400000).toISOString().replace('T', ' ').substring(0, 19) + " UTC",
        daysRemaining: 7
      },
      evidence: isPhysical ? {
        fulfillmentType: "physical_goods_shipping",
        itemName: "Premium Design Merchandise",
        carrier: meta.carrier,
        trackingNumber: meta.tracking_number,
        trackingUrl: "https://www.dhl.com/track?id=" + meta.tracking_number,
        deliveryStatus: meta.delivery_status,
        signatureRecorded: "Signature on File: C. DUBOIS",
        tosAcknowledgment: {
          acceptedAt: new Date().toISOString().replace('T', ' ').substring(0, 19) + " UTC",
          checkboxId: "chk_checkout_terms",
          policyClause: "Delivery is verified upon carrier signature scan at the customer's delivery address.",
          url: "https://example.com/terms",
          ipMatched: true
        },
        customerCommunication: [
          { date: new Date().toISOString().substring(0, 10), channel: "Email", subject: "Order Dispatched", status: "Delivered & Signed" }
        ]
      } : {
        fulfillmentType: "digital_software_service",
        serviceTier: meta.product_tier,
        loginAuditTrail: [
          { timestamp: new Date().toISOString().substring(0, 16) + " UTC", event: "API Access & User Sessions Recorded", ip: meta.ip_at_checkout }
        ],
        tosAcknowledgment: {
          acceptedAt: new Date().toISOString().substring(0, 16) + " UTC",
          checkboxId: "chk_terms",
          policyClause: "Subscriptions are non-refundable once software provisioning is completed.",
          url: "https://example.com/terms",
          ipMatched: true
        },
        customerCommunication: [
          { date: new Date().toISOString().substring(0, 10), channel: "Email", subject: "Receipt & API Keys Delivered", status: "Delivered" }
        ]
      }
    };

    onInjectDispute(newDispute);
    setInjected(true);
    setTimeout(() => {
      setInjected(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-surface border border-blue-500/30 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-border bg-surface-elevated flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                Stripe Webhook Gateway Simulator
              </h3>
              <p className="text-[11px] text-slate-400">
                Simulate inbound <code>charge.dispute.created</code> events to test 60-second dossier compilation
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
        <div className="p-6 space-y-4">
          
          {/* Template pills */}
          <div className="flex items-center space-x-2 text-xs">
            <button
              onClick={() => setSelectedTemplate('dispute_created')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedTemplate === 'dispute_created' 
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' 
                  : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
              }`}
            >
              Visa 10.4 (B2B SaaS Fraud)
            </button>
            <button
              onClick={() => setSelectedTemplate('product_not_received')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedTemplate === 'product_not_received' 
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' 
                  : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
              }`}
            >
              Mastercard 4853 (E-Commerce Delivery)
            </button>
          </div>

          {/* JSON Payload viewer */}
          <div className="p-4 rounded-xl bg-background border border-border max-h-72 overflow-y-auto font-mono text-[11px] text-slate-300 leading-relaxed selection:bg-blue-900/40">
            <pre>{JSON.stringify(currentPayload, null, 2)}</pre>
          </div>

          {/* Simulation CTA */}
          <button
            onClick={handleSimulate}
            disabled={injected}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-400 hover:to-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer"
          >
            {injected ? (
              <>
                <CheckCircle className="w-4 h-4 text-slate-950" />
                <span>Dispute Ingested! Opening Radar...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 text-slate-950" />
                <span>Simulate Webhook & Auto-Compile Evidence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>

          <p className="text-center text-[10px] text-slate-400 font-mono">
            Zero merchant intervention required. Triggers instant evidence extraction.
          </p>

        </div>
      </div>
    </div>
  );
}
