import type { Metadata } from "next";
import DisputeChargebackPolicy from "@/components/DisputeChargebackPolicy";

export const metadata: Metadata = {
  title: "Dispute / Chargeback Policy | Savvy Ace Trading LLC",
  description: "Read the Savvy Ace Trading LLC dispute and chargeback policy.",
};

export default function DisputeChargebackPolicyPage() {
  return <DisputeChargebackPolicy />;
}
