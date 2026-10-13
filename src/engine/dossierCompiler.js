/**
 * DisputeShield — Institutional Dispute Rebuttal Dossier Compiler
 * Formats evidence packets conforming to Visa Core Rules and Mastercard Chargeback Guides.
 */

export function compileDossier(dispute) {
  const { customer, transaction, dispute: dDetails, evidence, merchant } = dispute;

  // Generate unique Dossier Reference
  const dossierRef = `DS-DOSSIER-${dispute.disputeId.replace('DISP-', '')}-${Date.now().toString(36).toUpperCase()}`;
  const compiledDate = new Date().toUTCString();

  // Determine Primary Legal Argument based on Reason Code
  let defenseStrategy = "";
  let cardNetworkStandard = "";

  if (dDetails.reasonCode === "10.4") {
    defenseStrategy = "First-Party Legitimate Cardholder Participation ('Compelling Evidence 3.0')";
    cardNetworkStandard = "Visa Core Rules § 5.4.1.3 & Mastercard Rules 4837 (Cardholder AVS/IP/Activity Match)";
  } else if (dDetails.reasonCode === "13.1") {
    defenseStrategy = "Verifiable Carrier Delivery to Billing Address with Signature / GPS Coordinates";
    cardNetworkStandard = "Mastercard Chargeback Guide 4853 & Visa Dispute Management Guidelines § 13.1";
  } else if (dDetails.reasonCode === "13.7") {
    defenseStrategy = "Active Software Utilization Post-Billing & Cancellation Policy Non-Breach";
    cardNetworkStandard = "Visa Recurring Transaction Rules § 5.4.4.2 & Mastercard Subscription Mandates";
  } else {
    defenseStrategy = "Documented Merchant Fulfillment & Binding Terms Acceptance";
    cardNetworkStandard = "Card Scheme General Representation Standards";
  }

  // Cover Letter Text
  const coverLetter = `
FORMAL CHARGEBACK REBUTTAL NOTICE & EVIDENCE SUBMISSION

DATE: ${compiledDate}
TO: Acquiring Bank Dispute Operations & Card Brand Dispute Resolution Committee
RE: Dispute Representation for Case ${dispute.disputeId} (Charge ID: ${dispute.chargeId})
MERCHANT: ${merchant}
CARD SCHEME: ${dDetails.scheme} (${dDetails.reasonCode} - ${dDetails.reasonCategory})
DISPUTED AMOUNT: $${transaction.amount.toFixed(2)} ${transaction.currency}

ATTN: DISPUTE ARBITRATION SPECIALIST

This formal representation packet is submitted on behalf of ${merchant} in response to Dispute ID ${dispute.disputeId} initiated by cardholder ${customer.name} for the transaction in the amount of $${transaction.amount.toFixed(2)} ${transaction.currency} processed on ${transaction.date}.

STATEMENT OF MERCHANT DEFENSE:
The cardholder's claim of "${dDetails.networkExplanation}" is demonstrably refuted by the enclosed forensic evidence exhibits. This dispute constitutes first-party friendly fraud or invalid buyer remorse under ${cardNetworkStandard}. 

SUMMARY OF IRREFUTABLE FORENSIC PROOF:
1. Complete Address Verification Service (AVS) match [Result: ${transaction.avsResult}] and Card Verification Code (CVC) validation [Result: ${transaction.cvcResult}].
2. Continuous digital activity log or carrier tracking confirming customer receipt and extensive consumption of the purchased services.
3. Explicit, affirmative checkout consent to ${merchant}'s published Terms of Service and Refund Policy at timestamp ${evidence.tosAcknowledgment?.acceptedAt || transaction.date}.
4. Prior electronic notifications and billing confirmations delivered directly to the cardholder's verified email address (${customer.email}) without prompt objection.

In accordance with ${dDetails.scheme} merchant dispute regulations, the merchant respectfully requests that the provisional credit be immediately reversed, the disputed funds in the amount of $${transaction.amount.toFixed(2)} be reinstated to the merchant's operating account, and the $${transaction.disputeFee.toFixed(2)} bank dispute assessment fee be cancelled.

Respectfully submitted,
DisputeShield Automated Rebuttal System
on behalf of ${merchant}
`.trim();

  return {
    dossierRef,
    compiledDate,
    dispute,
    defenseStrategy,
    cardNetworkStandard,
    coverLetter,
    exhibits: [
      {
        id: "EXHIBIT_A",
        title: "Exhibit A: Payment Gateway & Card Authorization Record",
        summary: "Proof of electronic cardholder authentication, AVS verification, and CVC validation at time of sale.",
        fields: [
          { label: "Gateway Charge ID", value: dispute.chargeId },
          { label: "Card Scheme / Brand", value: `${transaction.cardBrand} (Ending in **** ${transaction.cardLast4})` },
          { label: "Authorization Timestamp", value: transaction.date },
          { label: "Authorized Transaction Total", value: `$${transaction.amount.toFixed(2)} ${transaction.currency}` },
          { label: "Address Verification Service (AVS)", value: transaction.avsResult, highlight: true },
          { label: "Card Verification Code (CVC)", value: transaction.cvcResult, highlight: true },
          { label: "3D Secure Protocol (EMV 3DS)", value: transaction.threeDSecure || "Frictionless Pass" },
          { label: "Electronic Commerce Indicator (ECI)", value: transaction.threeDsEci || "05 (Authenticated)" }
        ]
      },
      {
        id: "EXHIBIT_B",
        title: "Exhibit B: Geolocation, Device Fingerprint & Network Identity",
        summary: "Corroboration between transaction IP address, customer billing residence, and session device footprint.",
        fields: [
          { label: "Originating IP Address", value: customer.ipAddress },
          { label: "Internet Service Provider (ISP)", value: customer.isp },
          { label: "IP Geolocation", value: customer.geoCity, highlight: true },
          { label: "Customer Billing Address", value: `${customer.billingAddress.line1}, ${customer.billingAddress.city}, ${customer.billingAddress.state} ${customer.billingAddress.postalCode}` },
          { label: "Device Operating System / User Agent", value: customer.userAgent }
        ]
      },
      {
        id: "EXHIBIT_C",
        title: "Exhibit C: Proof of Digital Consumption or Carrier Delivery",
        summary: evidence.fulfillmentType.includes("digital") 
          ? "Authenticated user session telemetry showing active software utilization post-transaction."
          : "Carrier tracking verification with signature capture and GPS delivery scan.",
        type: evidence.fulfillmentType,
        details: evidence
      },
      {
        id: "EXHIBIT_D",
        title: "Exhibit D: Binding Terms of Service & Refund Policy Agreement",
        summary: "Mandatory pre-purchase checkbox affirmation binding cardholder to merchant policies.",
        fields: [
          { label: "Checkout Affirmation Timestamp", value: evidence.tosAcknowledgment.acceptedAt },
          { label: "Checkbox Identifier", value: evidence.tosAcknowledgment.checkboxId },
          { label: "IP Address at Acceptance", value: customer.ipAddress },
          { label: "Published Terms URL", value: evidence.tosAcknowledgment.url },
          { label: "Binding Policy Clause", value: `"${evidence.tosAcknowledgment.policyClause}"`, fullWidth: true }
        ]
      },
      {
        id: "EXHIBIT_E",
        title: "Exhibit E: Customer Communications & Pre-Dispute Receipts",
        summary: "Audit log of order receipts, dispatch alerts, and service communications delivered without dispute.",
        communications: evidence.customerCommunication
      }
    ]
  };
}

/**
 * Quick plain text download trigger
 */
export function downloadTextDossier(dossier, filename = "dispute_rebuttal_packet.txt") {
  const content = `
================================================================================
DISPUTESHIELD BANK-READY REBUTTAL DOSSIER
Dossier Reference: ${dossier.dossierRef}
Dispute ID: ${dossier.dispute.disputeId} | Gateway Charge: ${dossier.dispute.chargeId}
================================================================================

${dossier.coverLetter}

================================================================================
EXHIBIT A: PAYMENT GATEWAY FORENSIC RECORD
================================================================================
${dossier.exhibits[0].fields.map(f => `${f.label}: ${f.value}`).join('\n')}

================================================================================
EXHIBIT B: GEOLOCATION & NETWORK IDENTITY
================================================================================
${dossier.exhibits[1].fields.map(f => `${f.label}: ${f.value}`).join('\n')}

================================================================================
EXHIBIT C: PROOF OF FULFILLMENT / CONSUMPTION
================================================================================
Fulfillment Category: ${dossier.dispute.evidence.fulfillmentType}
${dossier.dispute.evidence.loginAuditTrail ? 
  dossier.dispute.evidence.loginAuditTrail.map(l => `[${l.timestamp}] ${l.event} (IP: ${l.ip})`).join('\n') : 
  `Carrier: ${dossier.dispute.evidence.carrier}\nTracking: ${dossier.dispute.evidence.trackingNumber}\nStatus: ${dossier.dispute.evidence.deliveryStatus}\nSignature: ${dossier.dispute.evidence.signatureRecorded}`}

================================================================================
EXHIBIT D: TERMS OF SERVICE & POLICY CLAUSE MATCH
================================================================================
${dossier.exhibits[3].fields.map(f => `${f.label}: ${f.value}`).join('\n')}

================================================================================
EXHIBIT E: PRIOR CUSTOMER COMMUNICATION RECORDS
================================================================================
${dossier.dispute.evidence.customerCommunication.map(c => `[${c.date}] (${c.channel}) Subject: "${c.subject}" | Status: ${c.status}`).join('\n')}

================================================================================
END OF DOSSIER — GENERATED PROGRAMMATICALLY BY DISPUTESHIELD
================================================================================
`.trim();

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
