import type { Metadata } from "next"
import { HomePageClient } from "./HomePageClient"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "Jo from | Human + Machine Staffing",
    description:
        "We staff Human + Machines to fix labor bottlenecks in Healthcare, Energy, and Manufacturing — highly regulated, thin-margin industries — where the jobs are essential.",
    keywords: [
        "human machine balance",
        "staffing firm",
        "labor bottleneck",
        "healthcare staffing",
        "energy staffing",
        "manufacturing staffing",
        "regulated industries",
        "thin margin business",
        "essential jobs",
        "workforce solutions",
    ],
    openGraph: {
        title: "Jo from | Human + Machine Staffing",
        description:
            "We staff Human + Machines to fix labor bottlenecks in Healthcare, Energy, and Manufacturing.",
        type: "website",
        url: "https://www.jofrom.io/jo",
    },
    alternates: {
        canonical: "https://www.jofrom.io/jo",
    },
}

export default function JoPage() {
    return <HomePageClient />
}
