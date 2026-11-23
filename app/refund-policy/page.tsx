import type { Metadata } from "next";
import RefundPolicy from "@/components/RefundPolicy";

export const metadata: Metadata = {
  title: "Refund Policy | Savvy Ace Trading LLC",
  description: "Read the Savvy Ace Trading LLC refund policy.",
};

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}
