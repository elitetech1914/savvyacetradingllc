import LegalPage from "@/components/legal/LegalPage";

const intro = [
  "ERS Technologies values your trust and is committed to protecting your privacy when we communicate by text message.",
  "This SMS Privacy Policy explains how we use mobile numbers, what type of text communications you may receive, and the choices available to you.",
];

const sections = [
  {
    title: "How We Use Your Number",
    paragraphs: [
      "When you provide your mobile number to ERS Technologies, we use it only for legitimate business communications related to your inquiry, project, account, or services.",
    ],
    bullets: [
      "Share updates about your project, quote, or service request",
      "Send reminders, notifications, scheduling details, or support messages",
      "Respond to questions you submit through our website or team",
      "Send promotional or service-related messages where you have provided appropriate consent",
    ],
  },
  {
    title: "Our Messaging Providers",
    paragraphs: [
      "ERS Technologies may use secure third-party telephony, CRM, or messaging platforms to send and manage SMS communications. These vendors process messages on our behalf so we can deliver communications reliably and securely.",
    ],
  },
  {
    title: "Your Privacy",
    paragraphs: [
      "We do not sell, rent, or share your phone number with outside companies for their independent marketing purposes.",
      "Mobile opt-in data and SMS consent are not shared with third parties or affiliates for their own promotional use.",
    ],
    bullets: [
      "Standard message and data rates from your carrier may apply",
      "Message frequency may vary based on your inquiry, project stage, and communication preferences",
      "You may opt out at any time by replying STOP",
    ],
  },
  {
    title: "Your Choices",
    paragraphs: [
      "You may contact ERS Technologies at any time to update your communication preferences or ask about the data connected to your SMS communications.",
    ],
    bullets: [
      "Update your communication preferences",
      "Request information about the data we hold in connection with text messaging",
      "Stop receiving text messages",
      "Ask for help with message delivery or support concerns",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "If you have questions about this SMS Privacy Policy, please contact ERS Technologies using the details below.",
    ],
  },
] as const;

export default function SMSPrivacyPolicy() {
  return (
    <LegalPage
      title="SMS Privacy Policy"
      intro={intro}
      sections={sections}
      lastUpdated="April 4, 2026"
    />
  );
}
