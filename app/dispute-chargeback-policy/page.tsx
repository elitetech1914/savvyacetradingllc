import type { Metadata } from "next";
import DisputeChargebackPolicy from "@/components/DisputeChargebackPolicy";

export const metadata: Metadata = {
  title: "Dispute / Chargeback Policy | ERS Technologies",
  description: "Read the ERS Technologies dispute and chargeback policy.",
};

export default function DisputeChargebackPolicyPage() {
  return <DisputeChargebackPolicy />;
}
