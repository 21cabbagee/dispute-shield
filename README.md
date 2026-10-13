# DisputeShield 🛡️
> **Autonomous Dispute & Chargeback Dossier Generator**  
> *Automated programmatic evidence dossier compiler that transforms dispute webhooks into bank-ready rebuttal packets in under 60 seconds.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Compliance: Visa CE3.0](https://img.shields.io/badge/Compliance-Visa_Compelling_Evidence_3.0-emerald.svg)](#visa--mastercard-statutory-standards)
[![Gateway: Stripe & Shopify](https://img.shields.io/badge/Gateways-Stripe_%7C_Shopify_%7C_Adyen-purple.svg)](#intake-methods--webhook-architecture)
[![Output: Bank-Ready PDF](https://img.shields.io/badge/Dossiers-Institutional_Bank_PDF-orange.svg)](#5-exhibit-bank-rebuttal-structure)

---

## 1. Executive Summary & Problem Thesis
- **Product Name:** DisputeShield
- **One-Liner:** Automated programmatic evidence dossier compiler that transforms dispute webhooks into bank-ready rebuttal packets in under 60 seconds.
- **Problem Thesis:** E-commerce merchants, digital sellers, and subscription SaaS platforms face an escalating wave of friendly fraud and first-party chargebacks. Payment gateways (Stripe, Shopify, Adyen) alert merchants but offer bare-bones web forms requiring 30–60 minutes of manual forensic compilation per dispute (pulling IP addresses, terms of service agreements, customer communication transcripts, and tracking IDs). Because manual compilation is costly, merchants default to forfeiting 60%+ of contestable disputes.

---

## 2. Market Sizing & Playbook Validation
- **Bottoms-Up TAM:**
  - Target Audience: 1,500,000 digital merchants, DTC e-commerce brands, and mid-market SaaS companies handling high-volume online card transactions.
  - Pricing: $100/month ($1,200/year) baseline platform subscription + performance fee or usage tiers.
  - Calculated TAM: 1,500,000 × $1,200 = **$1.800 Billion** (exceeds $1B high-growth venture hurdle).
- **Early Disruption Indicator:** Digital banking and card transaction volumes continue to set records, yet fraud dispute management remains completely non-automated. Payment processors operate on interchange and platform fees, leaving merchant-side representation to low-margin manual human review.
- **Desperation Filter:** 
  - Every lost dispute forfeits the sales revenue, the underlying product cost, and a mandatory $15–$25 non-refundable bank dispute fee.
  - Excessive chargeback ratios (>0.9%) trigger gateway placement into Visa/Mastercard monitoring programs and merchant account termination.

---

## 3. Target Customer Persona
- **Primary ICP:** Head of Operations, Risk Lead, or Finance Manager at Shopify Plus brands or B2B SaaS companies processing $50k–$1M/month in card volume.
- **Core Value Proposition:** Increase dispute win rates from 20% to 65%+ by generating institutional-grade evidence dossiers programmatically within 60 seconds of dispute notification.

---

## 4. 5-Exhibit Bank Rebuttal Structure
DisputeShield automatically compiles structured, 3-to-5 page bank-ready PDF dossiers organized according to card brand reason codes:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   DISPUTESHIELD BANK-READY REBUTTAL DOSSIER            │
├────────────────────────────────────────────────────────────────────────┤
│  [EXECUTIVE COVER LETTER]                                              │
│  Addressed to Acquiring Bank Dispute Arbitration Operations with legal  │
│  citations (Visa Core Rules § 5.4.1.3 / Mastercard Rules 4837).        │
├────────────────────────────────────────────────────────────────────────┤
│  [EXHIBIT A: PAYMENT GATEWAY FORENSIC RECORD]                          │
│  Gateway Charge ID, AVS Full Street Match, CVC Pass, 3DS ECI 05 Token. │
├────────────────────────────────────────────────────────────────────────┤
│  [EXHIBIT B: GEOLOCATION & NETWORK IDENTITY]                           │
│  Customer IP Address, ISP/ASN, Geolocation matching billing address.  │
├────────────────────────────────────────────────────────────────────────┤
│  [EXHIBIT C: PROOF OF FULFILLMENT OR DIGITAL CONSUMPTION]              │
│  Carrier tracking with signature/GPS, or SaaS login audit trail.       │
├────────────────────────────────────────────────────────────────────────┤
│  [EXHIBIT D: BINDING TERMS OF SERVICE & REFUND POLICY CLAUSE]          │
│  Mandatory checkout checkbox identifier, timestamp, and policy quote.  │
├────────────────────────────────────────────────────────────────────────┤
│  [EXHIBIT E: PRIOR CUSTOMER COMMUNICATIONS]                            │
│  Order receipts, dispatch confirmations, and support interaction logs. │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Visa & Mastercard Statutory Standards

| Reason Code | Category | Statutory Rule | Automated Evidence Module |
| :--- | :--- | :--- | :--- |
| **Visa 10.4 / MC 4837** | First-Party & Card-Not-Present Fraud | Visa Compelling Evidence 3.0 (CE3.0) | AVS/CVC Match, IP/Device Footprint, Software Audit Trail |
| **Visa 13.1 / MC 4853** | Merchandise Not Received | Carrier Proof of Delivery (POD) | Carrier Tracking, Signature Scan, GPS Coordinates |
| **Visa 13.7 / MC 4841** | Cancelled Recurring Transaction | Visa Recurring Rules § 5.4.4.2 | Pre-Renewal Email Receipt, Post-Billing Usage Telemetry |
| **Visa 13.6 / MC 4850** | Credit Not Processed | Disclosed Refund Policy Rules | Checkbox Timestamp, Policy Terms Excerpt, Refused Return |

---

## 6. Intake Methods & Webhook Architecture
DisputeShield ingests disputes via:
1. **Direct CSV Upload:** Batch export ingestion from Stripe, Shopify, or Adyen.
2. **Stripe Webhook Gateway:** Listens to `charge.dispute.created` and `charge.dispute.updated` events, immediately triggering evidence collection from customer telemetry logs.
3. **Interactive Webhook Simulator:** Built-in sandbox allowing risk teams to fire mock webhook events and test 60-second dossier generation in real-time.

---

## 7. Pricing & Customer Advisory Board (CAB)

- **Starter Sandbox ($0/mo):** 3 automated dispute dossiers / month, single CSV file intake, standard plain-text export.
- **Design Partner CAB ($29/mo - 70% Lifetime Discount):** Dedicated assistance recovering your first 20 disputed transactions, direct founder hotline, unlimited Stripe & Shopify webhook sync, custom ToS matching.
- **Growth Merchant ($100/mo - $1,200/year):** Up to 100 automated dossiers/mo, real-time webhook intake, automated CE3.0 evidence compilation, dedicated Slack triage channel.

### Customer Advisory Board Outreach Script
> *"We are launching a focused Customer Advisory Board for high-volume merchants to automate the 45-minute rebuttal compilation nightmare. As a CAB member, you receive a 70% lifetime platform discount ($29/mo) and dedicated assistance recovering your first 20 disputed transactions."*

---

## 8. Quickstart & Local Development

### Installation
```bash
# Clone the repository
git clone https://github.com/21cabbagee/dispute-shield.git
cd dispute-shield

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```

---

## 9. License
Distributed under the MIT License. See `LICENSE` for details.
