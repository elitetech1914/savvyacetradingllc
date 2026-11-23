import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Savvy Ace Trading LLC",
  description: "Read the Savvy Ace Trading LLC privacy policy.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
