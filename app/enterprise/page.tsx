import type { Metadata } from "next"
import EnterpriseClientPage from "./client"

export const metadata: Metadata = {
  title: "Enterprise Workforce Solutions | HIPAA, FDA, NERC Compliant | Jo",
  description:
    "Enterprise-grade workforce solutions for healthcare, energy, manufacturing, and food processing. HIPAA compliant, FDA ready, NERC CIP certified. Reduce labor costs while maintaining compliance.",
  keywords: [
    "enterprise solutions",
    "HIPAA compliant",
    "FDA compliant solutions",
    "NERC CIP compliance",
    "healthcare workforce solutions",
    "energy sector solutions",
    "manufacturing solutions",
    "food processing solutions",
    "enterprise compliance tools",
    "regulated industry solutions",
  ],
  openGraph: {
    title: "Enterprise Workforce Solutions for Regulated Industries",
    description:
      "HIPAA, FDA, and NERC compliant solutions for enterprise organizations. 99.9% uptime SLA and 24/7 support.",
    type: "website",
    url: "https://jolandingpage.vercel.app/enterprise",
  },
  alternates: {
    canonical: "https://jolandingpage.vercel.app/enterprise",
  },
}

export default function EnterprisePage() {
  return <EnterpriseClientPage />
}
