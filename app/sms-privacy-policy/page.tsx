import type { Metadata } from "next";
import SMSPrivacyPolicy from "@/components/SMSPrivacyPolicy";

export const metadata: Metadata = {
  title: "SMS Privacy Policy | ERS Technologies",
  description: "Read the ERS Technologies SMS privacy policy.",
};

export default function SMSPrivacyPolicyPage() {
  return <SMSPrivacyPolicy />;
}
