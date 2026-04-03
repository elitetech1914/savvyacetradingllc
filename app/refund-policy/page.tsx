import type { Metadata } from "next";
import RefundPolicy from "@/components/RefundPolicy";

export const metadata: Metadata = {
  title: "Refund Policy | ERS Technologies",
  description: "Read the ERS Technologies refund policy.",
};

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}
