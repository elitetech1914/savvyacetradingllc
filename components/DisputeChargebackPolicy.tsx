import LegalPage from "@/components/legal/LegalPage";

const intro = [
  "Savvy Ace Trading LLC is committed to handling billing concerns fairly and resolving disputes in good faith before they escalate into payment disputes or chargebacks.",
  "If you believe there is an issue with a charge, deliverable, or project timeline, contact us first so we can review the matter and work toward a resolution.",
];

const sections = [
  {
    title: "Fraudulent Charges",
    paragraphs: [
      "Savvy Ace Trading LLC does not process credit or debit card charges without customer authorization. Payments are made through approved invoicing or merchant channels, and we do not support fraudulent transactions or unauthorized billing activity.",
    ],
  },
  {
    title: "Product or Service Not Received",
    paragraphs: [
      "A claim that services were not received will be reviewed in light of the active project timeline, delivery records, client approvals, requested changes, and communication history.",
      "If delivery is delayed because the client changed requirements, paused the project, withheld information, or failed to respond, Savvy Ace Trading LLC is not responsible for meeting the original timeline without an adjusted schedule. If a client no longer wishes to proceed, they must submit a cancellation request with a valid reason so it can be reviewed under our refund terms.",
    ],
  },
  {
    title: "Product or Service Unacceptable",
    paragraphs: [
      "If a client claims that a product or service is unacceptable, we review the concern against the approved scope, recorded feedback, and the revisions already offered. Once a concept, manuscript direction, design, strategy, or technical milestone has been approved, a client cannot later treat the same approved work as unauthorized damage or non-delivery.",
      "Savvy Ace Trading LLC provides revision opportunities within the applicable scope and may recreate or correct deliverables where appropriate. However, full reimbursement is not available simply because a client changes preference after approvals or after significant work has been performed.",
    ],
  },
  {
    title: "Credit Not Processed",
    paragraphs: [
      "A client may raise a payment dispute for a credit not processed only where a refund or credit was expressly committed in writing by Savvy Ace Trading LLC billing or support staff and was not issued within the communicated timeframe.",
    ],
  },
  {
    title: "General or Other Disputes",
    paragraphs: [
      "General disputes, including change-of-mind disputes, do not override the applicable refund, delivery, approval, or project-acceptance terms. Because Savvy Ace Trading LLC allocates time, labor, and specialist resources to each project, payment disputes should not be filed as a substitute for the normal support and resolution process.",
      "We care about resolving issues professionally and encourage customers to contact us first so we can review the matter, gather documentation, and offer an appropriate resolution where available.",
    ],
  },
] as const;

export default function DisputeChargebackPolicy() {
  return (
    <LegalPage
      title="Dispute / Chargeback Policy"
      intro={intro}
      sections={sections}
      lastUpdated="April 4, 2026"
    />
  );
}
