export const MOCK_DISPUTES = [
  {
    id: "dp_1Ox9F2Lkd82vN901",
    disputeId: "DISP-89241",
    chargeId: "ch_3N8xKaLkd82vN711",
    merchant: "CloudFlow Analytics (SaaS)",
    merchantCategory: "Digital B2B SaaS",
    customer: {
      name: "Arthur Pendelton",
      email: "arthur.pendelton@apexcapital.org",
      phone: "+1 (415) 555-8921",
      billingAddress: {
        line1: "555 California St, Suite 3200",
        city: "San Francisco",
        state: "CA",
        postalCode: "94104",
        country: "US"
      },
      ipAddress: "198.51.100.54",
      isp: "Apex Capital Autonomous System (AS15169)",
      geoCity: "San Francisco, CA (US)",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/122.0.0.0"
    },
    transaction: {
      date: "2026-09-14 18:22:04 UTC",
      amount: 499.00,
      currency: "USD",
      cardBrand: "Visa",
      cardLast4: "4242",
      cardExp: "08/28",
      avsResult: "Y (Full Street & Zip Match)",
      cvcResult: "M (CVC Match)",
      threeDSecure: "frictionless_authenticated",
      threeDsEci: "05 (Fully Authenticated)",
      disputeFee: 15.00
    },
    dispute: {
      reasonCode: "10.4",
      reasonCategory: "Fraudulent Transaction",
      scheme: "Visa",
      networkExplanation: "Cardholder claims they neither participated in nor authorized the Card-Not-Present transaction.",
      status: "needs_response", // 'needs_response', 'under_review', 'won', 'lost'
      filingDate: "2026-10-02 09:14:00 UTC",
      responseDue: "2026-10-16 23:59:59 UTC",
      daysRemaining: 3
    },
    evidence: {
      fulfillmentType: "digital_software_service",
      serviceTier: "Enterprise Team Plan (Monthly)",
      loginAuditTrail: [
        { timestamp: "2026-09-14 18:22:30 UTC", event: "Account Created & Checkout Completed", ip: "198.51.100.54" },
        { timestamp: "2026-09-15 09:11:15 UTC", event: "Team Member Added (sarah.w@apexcapital.org)", ip: "198.51.100.54" },
        { timestamp: "2026-09-18 14:35:42 UTC", event: "Exported Full Portfolio Financial Data (CSV)", ip: "198.51.100.54" },
        { timestamp: "2026-09-24 11:20:08 UTC", event: "API Secret Key Generated & 4,200 Invocations", ip: "198.51.100.54" },
        { timestamp: "2026-09-30 16:45:19 UTC", event: "Active User Session (Total usage: 38.4 hours)", ip: "198.51.100.54" }
      ],
      tosAcknowledgment: {
        acceptedAt: "2026-09-14 18:22:03 UTC",
        checkboxId: "chk_tos_refund_policy_v4",
        policyClause: "Customer acknowledges that subscriptions bill automatically upon term inception and are non-refundable once software feature access is provisioned.",
        url: "https://cloudflow.io/legal/terms-2026",
        ipMatched: true
      },
      customerCommunication: [
        { date: "2026-09-14 18:22:10 UTC", channel: "Email", subject: "Welcome to CloudFlow Enterprise & Invoice #INV-8821", status: "Delivered & Opened" },
        { date: "2026-09-20 14:10:00 UTC", channel: "In-App Intercom", subject: "Question regarding Webhook endpoints", status: "Resolved by Support" }
      ]
    }
  },

  {
    id: "dp_2Ka8L1Ppd91wM402",
    disputeId: "DISP-89242",
    chargeId: "ch_3N9yZbLkd82vN822",
    merchant: "Lumin Optics (Shopify DTC)",
    merchantCategory: "Luxury DTC E-Commerce",
    customer: {
      name: "Elena Rostova",
      email: "elena.rostova@designhaus.co",
      phone: "+1 (212) 555-4102",
      billingAddress: {
        line1: "420 W 23rd St, Apt 8C",
        city: "New York",
        state: "NY",
        postalCode: "10011",
        country: "US"
      },
      shippingAddress: {
        line1: "420 W 23rd St, Apt 8C",
        city: "New York",
        state: "NY",
        postalCode: "10011",
        country: "US"
      },
      ipAddress: "72.229.18.204",
      isp: "Verizon Fios",
      geoCity: "New York, NY (US)",
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15"
    },
    transaction: {
      date: "2026-09-20 14:10:11 UTC",
      amount: 285.00,
      currency: "USD",
      cardBrand: "Mastercard",
      cardLast4: "5512",
      cardExp: "11/27",
      avsResult: "Y (Full Address Match)",
      cvcResult: "M (CVC Match)",
      threeDSecure: "not_supported_by_issuer",
      disputeFee: 15.00
    },
    dispute: {
      reasonCode: "13.1",
      reasonCategory: "Product Not Received",
      scheme: "Mastercard",
      networkExplanation: "Cardholder claims that merchandise ordered was not received at the agreed delivery address.",
      status: "needs_response",
      filingDate: "2026-10-05 14:22:00 UTC",
      responseDue: "2026-10-19 23:59:59 UTC",
      daysRemaining: 6
    },
    evidence: {
      fulfillmentType: "physical_goods_shipping",
      itemName: "Atelier Handcrafted Titanium Optical Frames (Model L-402)",
      carrier: "FedEx Express Priority",
      trackingNumber: "784912984124",
      trackingUrl: "https://www.fedex.com/fedextrack/?trknbr=784912984124",
      shippingDate: "2026-09-21 11:00:00 UTC",
      deliveryDate: "2026-09-23 15:42:00 UTC",
      deliveryStatus: "Delivered to recipient address front lobby / doorman",
      signatureRecorded: "Signature on File: E. ROSTOVA",
      gpsCoordinates: "40.7475° N, 74.0012° W (Matches Customer Residence)",
      tosAcknowledgment: {
        acceptedAt: "2026-09-20 14:10:09 UTC",
        checkboxId: "chk_checkout_terms",
        policyClause: "Delivery is deemed complete once signature confirmation or photographic carrier scan is recorded at the designated shipping address.",
        url: "https://luminoptics.com/policies/terms-of-sale",
        ipMatched: true
      },
      customerCommunication: [
        { date: "2026-09-20 14:10:15 UTC", channel: "Email", subject: "Order #LM-4920 Confirmed", status: "Delivered" },
        { date: "2026-09-21 11:05:00 UTC", channel: "SMS", subject: "FedEx Tracking #784912984124 Dispatched", status: "Delivered" },
        { date: "2026-09-23 15:43:00 UTC", channel: "Email", subject: "Package Delivered - Enjoy your frames!", status: "Opened (Read Receipt Received)" }
      ]
    }
  },

  {
    id: "dp_3Bc7M9Qqe83xL503",
    disputeId: "DISP-89243",
    chargeId: "ch_3N7zYaLkd82vN933",
    merchant: "Nexus Intelligence (SaaS)",
    merchantCategory: "AI API Infrastructure",
    customer: {
      name: "Jordan Vance",
      email: "jordan@vancemedia.net",
      phone: "+1 (312) 555-7489",
      billingAddress: {
        line1: "111 W Wacker Dr, Floor 14",
        city: "Chicago",
        state: "IL",
        postalCode: "60601",
        country: "US"
      },
      ipAddress: "67.180.201.12",
      isp: "AT&T Business Fiber",
      geoCity: "Chicago, IL (US)",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/121.0.0.0"
    },
    transaction: {
      date: "2026-09-01 00:00:15 UTC",
      amount: 120.00,
      currency: "USD",
      cardBrand: "Visa",
      cardLast4: "1882",
      cardExp: "04/29",
      avsResult: "Y (Full Street & Zip Match)",
      cvcResult: "M (CVC Match)",
      threeDSecure: "frictionless_authenticated",
      disputeFee: 15.00
    },
    dispute: {
      reasonCode: "13.7",
      reasonCategory: "Cancelled Recurring Transaction",
      scheme: "Visa",
      networkExplanation: "Cardholder states that recurring transaction was billed after cardholder cancelled subscription.",
      status: "under_review",
      filingDate: "2026-09-28 10:11:00 UTC",
      responseDue: "2026-10-12 23:59:59 UTC",
      daysRemaining: 0
    },
    evidence: {
      fulfillmentType: "digital_recurring_subscription",
      serviceTier: "Developer Pro (Monthly Billing)",
      loginAuditTrail: [
        { timestamp: "2026-09-01 00:00:15 UTC", event: "Automated Monthly Renewal Billed ($120.00)", ip: "system_cron" },
        { timestamp: "2026-09-05 14:18:22 UTC", event: "User Logged In & Executed 1,280 API Calls", ip: "67.180.201.12" },
        { timestamp: "2026-09-12 19:40:11 UTC", event: "User Initiated Self-Service Cancellation in App", ip: "67.180.201.12" }
      ],
      tosAcknowledgment: {
        acceptedAt: "2026-06-01 10:00:00 UTC",
        checkboxId: "chk_sub_terms_v2",
        policyClause: "Cancellations take effect at the conclusion of the current prepaid billing period. Services remain accessible through the billing cycle without prorated refunds.",
        url: "https://nexusintel.ai/terms",
        ipMatched: true
      },
      customerCommunication: [
        { date: "2026-08-25 10:00:00 UTC", channel: "Email", subject: "Upcoming Renewal Notice: Pro Plan renews Sept 1", status: "Delivered & Opened" },
        { date: "2026-09-12 19:40:15 UTC", channel: "Email", subject: "Subscription Cancellation Confirmed (Access ends Sept 30)", status: "Delivered & Opened" }
      ]
    }
  },

  {
    id: "dp_4Td6J8Kke72vM604",
    disputeId: "DISP-89244",
    chargeId: "ch_3N6xWaLkd82vN644",
    merchant: "Apex Render Cloud (B2B SaaS)",
    merchantCategory: "High Performance Cloud Compute",
    customer: {
      name: "Marcus Thorne",
      email: "marcus@thornefx.studio",
      phone: "+1 (512) 555-9012",
      billingAddress: {
        line1: "800 Brazos St, Suite 240",
        city: "Austin",
        state: "TX",
        postalCode: "78701",
        country: "US"
      },
      ipAddress: "172.56.42.110",
      isp: "T-Mobile USA",
      geoCity: "Austin, TX (US)",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3_1) AppleWebKit/605.1.15"
    },
    transaction: {
      date: "2026-08-15 22:15:30 UTC",
      amount: 850.00,
      currency: "USD",
      cardBrand: "Visa",
      cardLast4: "9102",
      cardExp: "09/27",
      avsResult: "Y (Full Match)",
      cvcResult: "M (CVC Match)",
      threeDSecure: "frictionless_authenticated",
      disputeFee: 15.00
    },
    dispute: {
      reasonCode: "10.4",
      reasonCategory: "Fraudulent Transaction",
      scheme: "Visa",
      networkExplanation: "Cardholder claims unauthorized charge.",
      status: "won",
      filingDate: "2026-08-25 16:00:00 UTC",
      responseDue: "2026-09-08 23:59:59 UTC",
      daysRemaining: 0
    },
    evidence: {
      fulfillmentType: "cloud_compute_rendering",
      serviceTier: "10,000 GPU Node Render Hours",
      loginAuditTrail: [
        { timestamp: "2026-08-15 22:15:30 UTC", event: "Checkout Authenticated with 2FA SMS Token", ip: "172.56.42.110" },
        { timestamp: "2026-08-15 22:20:00 UTC", event: "Render Job 'Cinema4D_Commercial_V3' Started", ip: "172.56.42.110" },
        { timestamp: "2026-08-16 04:10:00 UTC", event: "140GB Render Files Downloaded to Austin IP", ip: "172.56.42.110" }
      ],
      tosAcknowledgment: {
        acceptedAt: "2026-08-15 22:15:28 UTC",
        checkboxId: "chk_compute_usage",
        policyClause: "Compute usage is non-refundable once rendering cycles are dispatched to cluster.",
        url: "https://apexrender.com/tos",
        ipMatched: true
      },
      customerCommunication: [
        { date: "2026-08-15 22:15:35 UTC", channel: "Email", subject: "Receipt: 10,000 GPU Credits provisioned", status: "Delivered" },
        { date: "2026-08-16 04:15:00 UTC", channel: "Email", subject: "Render Job Complete: Files Ready for Download", status: "Delivered & Downloaded" }
      ]
    }
  }
];
