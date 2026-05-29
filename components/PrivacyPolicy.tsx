import LegalPage from "@/components/legal/LegalPage";

const intro = [
  "ERS Technologies respects the privacy of visitors, clients, and collaborators who use our website and services. This Privacy Policy explains what information we collect, how we use it, and what choices you have regarding your information.",
  "This policy applies to online interactions with ERS Technologies, including our website, quote requests, contact forms, and service communications. It does not apply to offline data collection except where expressly incorporated into a service agreement or invoice process.",
];

const sections = [
  {
    title: "Consent",
    paragraphs: [
      "By using our website, requesting information from us, or engaging ERS Technologies for services, you consent to this Privacy Policy and agree to its terms.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "The information we ask you to provide, and the reason we ask for it, is generally explained at the point of collection. If you contact us directly, we may receive information such as your name, email address, phone number, company name, mailing address, the contents of your message, attachments, and any other information you choose to provide.",
      "When you request a quote, start a project, or make a purchase, we may collect business and billing details, project requirements, drafts, briefs, files, manuscripts, design references, or other materials needed to deliver your requested service.",
    ],
    bullets: [
      "Contact information such as your name, email address, phone number, company name, and address",
      "Project and service information such as drafts, creative assets, technical specifications, and support requests",
      "Billing and transaction details processed through our payment or invoicing providers",
      "Technical data such as IP address, browser type, device information, referral pages, usage activity, and site interaction data",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use collected information for legitimate business purposes related to website operation, customer support, project delivery, marketing, security, and compliance.",
    ],
    bullets: [
      "Improve, personalize, and expand our website, features, and client experience",
      "Communicate with you directly or through service providers regarding support, updates, quotes, or active projects",
      "Deliver writing, editing, publishing, marketing, AI, design, app development, game development, UI/UX, and VR-related services",
      "Send marketing or promotional messages where allowed by law, with the option to opt out",
      "Protect your information and reduce misuse, fraud, abuse, or security threats",
      "Comply with legal obligations, dispute handling, billing, and record-keeping requirements",
    ],
  },
  {
    title: "No Sale or Sharing of User Data",
    paragraphs: [
      "ERS Technologies does not sell collected user data. We also do not share collected user data with third parties for their independent marketing, advertising, or promotional use.",
      "Where necessary to operate our website, process payments, communicate with clients, deliver services, maintain security, or comply with legal obligations, we may use trusted service providers that process information only on our behalf and according to applicable privacy and confidentiality requirements.",
    ],
  },
  {
    title: "Log Files",
    paragraphs: [
      "Like many websites, ERS Technologies uses standard log files and analytics records. These may include IP addresses, browser type, internet service provider, date and time stamps, referring and exit pages, device details, and click or session information.",
      "This information is generally used to analyze trends, administer the website, understand visitor behavior, improve performance, and gather aggregated demographic insights. It is not used by itself to directly identify individual visitors in most circumstances.",
    ],
  },
  {
    title: "Cookies and Web Beacons",
    paragraphs: [
      "ERS Technologies may use cookies, pixels, web beacons, and similar technologies to remember preferences, improve website functionality, understand traffic patterns, and tailor content or outreach. Cookies can also help us analyze how visitors use the site so we can improve performance and user experience.",
      "You can control or disable cookies through your browser settings. Doing so may affect how certain parts of the website function.",
    ],
  },
  {
    title: "Google and Similar Third-Party Technologies",
    paragraphs: [
      "We may use third-party analytics, advertising, or performance tools, including Google services where enabled, to understand audience behavior and improve website visibility. Those providers may use cookies or similar technologies to collect information about your browsing activity across websites and sessions.",
      "ERS Technologies does not control the cookies used by third-party advertising or analytics providers. You can review provider privacy policies and use your browser or available ad settings to limit or disable this type of tracking.",
    ],
  },
  {
    title: "Third-Party Privacy Policies",
    paragraphs: [
      "This Privacy Policy applies only to ERS Technologies and does not apply to third-party advertisers, payment providers, integrations, linked websites, or external platforms. We encourage you to review the privacy policies of those third parties for more information about their practices and opt-out procedures.",
      "You may also choose to disable cookies through your browser settings. More detailed information about cookie management is typically available through your browser provider.",
    ],
  },
  {
    title: "Privacy Rights",
    paragraphs: [
      "Depending on your location and applicable law, you may have the right to request access to the personal information we hold about you, request correction or deletion of that information, object to certain processing activities, or ask how your data has been used or shared.",
      "If you make a valid privacy request, we will review and respond within the timeframe required by applicable law. We may need to verify your identity before completing certain requests.",
    ],
    bullets: [
      "Request access to categories or copies of personal data we hold about you",
      "Request correction of inaccurate or incomplete information",
      "Request deletion of personal data, subject to legal or contractual retention requirements",
      "Object to certain processing or marketing communications",
    ],
  },
  {
    title: "Children's Information",
    paragraphs: [
      "Protecting children online is important to us. ERS Technologies does not knowingly collect personal information from children under 13 years of age through this website.",
      "If you believe a child has provided personal information through our site, contact us promptly and we will take reasonable steps to remove the information from our records.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have questions about this Privacy Policy or about how ERS Technologies handles your information, please contact us using the details below.",
    ],
  },
] as const;

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={intro}
      sections={sections}
      lastUpdated="April 4, 2026"
    />
  );
}
