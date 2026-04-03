import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | ERS Technologies",
  description: "Read the ERS Technologies privacy policy.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
