import LegalPage from "@/components/legal/LegalPage";

const intro = [
  'The following terms and conditions apply to all projects, services, and engagements undertaken by Savvy Ace Trading LLC ("Savvy Ace Trading LLC", "we", "us", or "our"). By accessing our website, signing up as a client, or using any of our services, you agree to be legally bound by these Terms and Conditions (the "Agreement"). If you do not accept these terms, you may not use our services. Savvy Ace Trading LLC may revise this Agreement at any time by updating this page. You are responsible for reviewing these terms periodically.',
  "Savvy Ace Trading LLC provides a wide range of professional services, including but not limited to: Writing & Editing (ghostwriting, proofreading, copywriting, blog writing); Design & Creative (book covers, illustrations, merchandise design); Publishing & Distribution (copyright registration, printing, Amazon seller setup, e-commerce integration); Marketing & Promotion (SEO, digital campaigns, Amazon PPC, billboard marketing, reviews management); VR Simulation Services (custom training simulations, VR game development, 3D environment design, interactive walkthroughs); AI Agent Services (customer support AI, lead generation, research agents, coding assistants, voice agents); Web/App Development (UI/UX, cross-platform apps, backend integration, prototyping); Game Development (Unity/Unreal, mobile games, multiplayer integration); and UI/UX Design (user research, wireframing, prototyping, visual design).",
] as const;

const sections = [
  {
    title: "Terms of Use & Acceptance",
    paragraphs: [
      "By registering as a client or using any service from Savvy Ace Trading LLC, you represent that you are at least 18 years old, that all information you provide is accurate and complete, and that you have the authority to bind any entity on whose behalf you act. We may accept or reject any registration in our sole discretion.",
      "Savvy Ace Trading LLC reserves the right to modify, suspend, or discontinue any service at any time without notice. We may also pre-screen, refuse, or remove any project or user content that violates this Agreement or is otherwise objectionable (for example, illegal, obscene, defamatory, or infringing on others' rights). We will cooperate with law enforcement if illegal activity is suspected.",
    ],
  },
  {
    title: "Services & Project Workflow",
    paragraphs: [
      'Our services are delivered according to the specific package or agreement selected by the client. The typical workflow involves: (1) you provide a detailed creative brief or project description; (2) we deliver initial concepts, designs, code, or other deliverables (each a "Response"); (3) you may request revisions within the allotted revision cycles; (4) upon your final acceptance, we deliver the final product.',
      "You are solely responsible for the accuracy and completeness of your briefs. If you fail to notify us within a reasonable time (generally 7 business days) that a Response does not conform to your brief, you will be deemed to have accepted the Response. Revision cycles vary by service type - for design projects, we typically offer 2-6 rounds; for development or VR/AI projects, revisions are governed by the project statement of work.",
    ],
    bullets: [
      "For creative & design services: initial concepts are delivered within agreed timelines; revision requests must be specific and actionable.",
      "For VR, AI, and app development: deliverables follow milestone-based acceptance criteria defined in a separate statement of work.",
      "For marketing & publishing: campaign setup, Amazon PPC, and distribution services require your timely provision of assets and approvals.",
    ],
  },
  {
    title: "Eligibility, Access & Prohibited Uses",
    paragraphs: [
      "You may use our website and services only for lawful purposes. You agree not to:",
    ],
    bullets: [
      "Submit any content that infringes third-party intellectual property, privacy, or publicity rights.",
      "Transmit viruses, malicious code, or engage in any activity that disrupts our systems or other users.",
      "Attempt to reverse-engineer, decompile, or gain unauthorized access to our platforms or source code.",
      "Use our services for any illegal, harassing, or fraudulent purpose.",
      "Impersonate another person or entity, or provide false information.",
    ],
  },
  {
    title: "Refund, Cancellation & Tax Policy",
    paragraphs: [
      "Refunds are handled on a per-service basis and are subject to the following conditions. By placing an order, you acknowledge and agree to these terms:",
    ],
    bullets: [
      "No refund will be issued once the primary concept or first deliverable has been approved, or after revision requests have been made (except where we materially fail to follow your brief).",
      "Refund requests must be submitted within 7 calendar days of the initial delivery date. After 7 days, no refund is available.",
      "Services such as SEO campaigns, digital ads (PPC), domain registration, hosting, printing/fulfillment, and VR simulation deployment are non-refundable once work has commenced or third-party costs have been incurred.",
      "For web/app development: no refund after design approval and development has started. For game development: no refund after initial prototype approval.",
      "If you are unresponsive for 10 consecutive business days via your registered email, the project is deemed accepted and no refund will be issued.",
      "Bundled service packages: refunds may apply only to the specific service you are dissatisfied with, not the entire bundle.",
      "Savvy Ace Trading LLC reserves the right to cancel any project at any time for cause (for example, violation of terms or non-payment). In such cases, a pro-rata refund for undelivered work may be issued at our sole discretion.",
      "After a refund, all rights to any deliverables (concepts, code, designs) revert to Savvy Ace Trading LLC, and you may not use them.",
    ],
  },
  {
    title: "Ownership & Rights to Use",
    paragraphs: [
      "Upon full payment for the specific service, you will own the final deliverables (for example, final logo, completed app, VR walkthrough, AI agent code, finished game) as expressly agreed in your project statement of work. However, Savvy Ace Trading LLC retains all rights to: (a) intermediate concepts, drafts, and rejected versions; (b) any underlying tools, frameworks, or reusable components developed by us; and (c) the right to display the final work in our portfolio or marketing materials unless a non-disclosure agreement prohibits it.",
      "We do not conduct trademark, copyright, or patent searches. You are responsible for ensuring that your final deliverables do not infringe third-party rights. Savvy Ace Trading LLC grants no warranty of non-infringement.",
      "For AI agent services: you own the trained agent logic and configuration, but we retain rights to our proprietary agent framework and any pre-built integrations.",
      "For VR simulations: you own the final immersive experience content, but we retain rights to any core interaction libraries or environment templates.",
    ],
  },
  {
    title: "Non-Disclosure & Privacy",
    paragraphs: [
      "Savvy Ace Trading LLC will use commercially reasonable efforts to keep your confidential information secure. However, we cannot guarantee absolute security. We may disclose your information if required by law or to enforce our rights. Our privacy policy (available on our website) explains how we collect and process personal data.",
    ],
  },
  {
    title: "Disclaimer of Warranties & Limitation of Liability",
    paragraphs: [
      'ALL SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" AND "AS AVAILABLE." Savvy Ace Trading LLC MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.',
      "We do not warrant that our services will be uninterrupted, error-free, or meet your specific requirements. To the maximum extent permitted by law, Savvy Ace Trading LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits or data, arising from your use of our services.",
      "Our total liability for any claim arising under this Agreement shall not exceed the total amount you paid to us for the specific service giving rise to the claim. Some states do not allow the exclusion of certain damages, so this limitation may not apply to you.",
    ],
  },
  {
    title: "Indemnification",
    paragraphs: [
      "You agree to indemnify, defend, and hold harmless Savvy Ace Trading LLC and its officers, employees, and agents from any claim, loss, liability, or expense (including reasonable attorneys' fees) arising from your violation of these Terms, your misuse of our services, or your infringement of any third-party rights.",
    ],
  },
  {
    title: "Governing Law & Dispute Resolution",
    paragraphs: [
      "This Agreement and any disputes arising from it shall be governed by the laws of the State of Texas, without regard to conflict of laws principles. Any legal action or proceeding shall be brought exclusively in the state or federal courts located in Fort Bend County, Texas. You consent to personal jurisdiction in those courts.",
    ],
  },
] as const;

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={intro}
      sections={sections}
      lastUpdated="April 4, 2026"
    />
  );
}