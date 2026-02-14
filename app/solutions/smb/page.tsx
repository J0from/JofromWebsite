import SMBPageClient from "./client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jo: Affordable Office Staff for Small Business | $25/month per Department",
  description:
    "Digital staffing for small businesses. Get support for Finance, HR, Accounting, IT, Marketing, Sales, and Operations. No code required. Starting at $25/month.",
  keywords: [
    "small business solutions",
    "affordable digital employees",
    "digital staffing",
    "small business solutions",
    "small business tools",
    "bookkeeping solutions",
    "marketing assistant",
    "sales assistant",
    "small business software",
    "business tools",
  ],
  openGraph: {
    title: "Jo: Affordable Office Staff for Small Business",
    description:
      "Digital staffing for Finance, HR, Accounting, IT, Marketing, Sales, and Operations. Starting at $25/month.",
    type: "website",
    url: "https://jolandingpage.vercel.app/solutions/smb",
  },
  alternates: {
    canonical: "https://jolandingpage.vercel.app/solutions/smb",
  },
}

export default function SMBPage() {
  return <SMBPageClient />
}
