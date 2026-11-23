import type { Metadata } from "next";
import SMSPrivacyPolicy from "@/components/SMSPrivacyPolicy";

export const metadata: Metadata = {
  title: "SMS Privacy Policy | Savvy Ace Trading LLC",
  description: "Read the Savvy Ace Trading LLC SMS privacy policy.",
};

export default function SMSPrivacyPolicyPage() {
  return <SMSPrivacyPolicy />;
}
