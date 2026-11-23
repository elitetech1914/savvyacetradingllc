import LegalPage from "@/components/legal/LegalPage";

const intro = [
  "Savvy Ace Trading LLC handles refund requests according to the service purchased, the stage of the project, and whether work has already been delivered, approved, revised, or moved into production.",
  "Because many of our services involve custom creative, technical, and consulting work, refund eligibility is limited once substantial work begins or once you approve a concept, draft, milestone, or deliverable.",
];

const sections = [
  {
    title: "30-Day Refund Policy",
    paragraphs: [
      "Savvy Ace Trading LLC offers a 30-day refund review window from the original purchase date unless a different written agreement applies. Refund requests submitted within 30 days will be reviewed according to the service purchased, the project stage, approvals, revisions, production status, third-party costs, and the other terms in this Refund Policy.",
      "Refund requests submitted after 30 days from the original purchase date are generally not eligible for refund review unless required by applicable law or expressly agreed in writing by Savvy Ace Trading LLC.",
    ],
  },
  {
    title: "General Refund Review",
    paragraphs: [
      "Refund requests must be made promptly and are reviewed case by case. Early-stage requests made before revisions, approvals, production, or implementation are more likely to be eligible for review than requests made after work progresses.",
      "We rely on timely and complete client feedback to move projects forward effectively. Delayed feedback, shifting requirements, or incomplete information can affect delivery, revision cycles, and refund eligibility.",
    ],
  },
  {
    title: "I. Client Non-Responsiveness",
    paragraphs: [
      "We may decline or limit refund requests if a client remains non-responsive for 15 days or more during an active project. If you need to pause work for personal or business reasons, contact us by email so the project can be placed on hold where possible.",
    ],
  },
  {
    title: "II. Project or Package Forfeiture",
    paragraphs: [
      "If a client chooses to stop or forfeit a website, app, publishing, marketing, design, or other service after the project has substantially progressed, refunds generally will not apply. Where feasible, we may place the project on hold so work can resume later under the original or updated scope.",
    ],
  },
  {
    title: "III. Additional Revisions or Scope Changes",
    paragraphs: [
      "Once a client requests revisions, modifications, or new change directions on initial concepts, drafts, samples, prototypes, or early deliverables, the original refund review window may no longer apply. Additional revision activity is treated as continuation of the project.",
    ],
  },
  {
    title: "IV. Finalizing Part of an Order",
    paragraphs: [
      "If one part of a bundled order or multi-service package has been approved, finalized, delivered, or consumed, a refund will generally not apply to the completed portion and may not apply to the remaining package depending on how much work has already been allocated or performed.",
    ],
  },
  {
    title: "V. Non-Refundable Fees",
    paragraphs: [
      "Rush fees, expedited turnaround charges, emergency revisions, setup charges, ad spend, domain registration, hosting, third-party subscriptions, platform fees, printing, publishing distribution fees, and similar pass-through or time-sensitive costs are non-refundable unless otherwise required by law.",
    ],
  },
  {
    title: "VI. Change of Mind",
    paragraphs: [
      "Refunds are not available for change-of-mind cancellations, internal disagreement, delayed internal approvals, business renaming, business closure, or other reasons unrelated to Savvy Ace Trading LLC' service performance.",
    ],
  },
  {
    title: "VII. Specific Refund Conditions",
    paragraphs: [
      "Where a refund review is considered, Savvy Ace Trading LLC may evaluate the request based on timing, proof of the issue raised, project communication history, and the portion of work already completed. Duplicate charges may be corrected in full where verified.",
      "For bundled packages, any refund review applies only to the service element that has not begun or has not materially progressed. Services already delivered, approved, revised, or put into production are generally excluded.",
    ],
    bullets: [
      "Refunds are generally not available for special or promotional packages",
      "Refunds are generally not available after the primary concept, draft, or direction has been approved",
      "Refunds are generally not available after revisions have been requested",
      "Refunds may be denied if the cancellation is unrelated to Savvy Ace Trading LLC' performance",
      "Refunds may be denied if the project has been inactive because the client did not respond for more than two weeks",
      "Refunds may be denied if policies or agreed project terms have been violated",
      "Refunds may be denied if another provider has been engaged on the same project without disclosure where that impacts our work",
      "Refunds may be denied if the original brief lacked the information needed to perform the service",
      "Refunds may be denied if a full redesign or major new direction is requested after work has already started",
      "Refunds may be denied if the request is made outside the applicable review window",
    ],
  },
  {
    title: "Important Notes",
    paragraphs: [
      "Promotional offers are non-refundable. Refunds do not apply to marketing retainers, SEO, hosting, domain services, printing, third-party fees, or similar services once purchased or activated.",
      "For websites, apps, games, VR experiences, AI systems, or custom technical builds, refunds are not available once design approval has been given and development or implementation has started. For publishing and creative services, refunds are not available once approved deliverables move into formatting, production, print, distribution, or account setup.",
      "Project communication should be maintained through the registered email address or other approved communication channel provided by the client. If we send at least three project emails or reminders and receive no response within seven consecutive working days after delivery, the project may be deemed accepted for purposes of fulfillment and refund review.",
      "If a client remains non-responsive for 10 consecutive days or more during an active delivery or review stage, any money-back or early-stage refund consideration may become void at Savvy Ace Trading LLC' discretion.",
      "If a refund is issued, you may not use unpaid-for concepts, drafts, designs, code, content, deliverables, or other work product created by Savvy Ace Trading LLC as part of the refunded portion of the project.",
    ],
  },
] as const;

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund Policy"
      intro={intro}
      sections={sections}
      lastUpdated="April 4, 2026"
    />
  );
}
