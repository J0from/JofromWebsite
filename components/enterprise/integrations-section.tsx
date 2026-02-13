import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function IntegrationsSection() {
  const integrations = [
    // Cloud & Infrastructure
    { name: "AWS", industry: "Cloud & Infrastructure", popular: true, logo: "/logos/aws.svg", url: "https://aws.amazon.com" },
    { name: "Microsoft", industry: "Cloud & Infrastructure", logo: "/logos/microsoft.svg", url: "https://azure.microsoft.com" },
    { name: "Google Cloud", industry: "Cloud & Infrastructure", logo: "/logos/google-cloud.svg", url: "https://cloud.google.com" },
    // Data & Analytics
    { name: "Snowflake", industry: "Data & Analytics", logo: "/logos/snowflake.svg", url: "https://www.snowflake.com" },
    { name: "Databricks", industry: "Data & Analytics", popular: true, logo: "/logos/databricks.svg", url: "https://www.databricks.com" },
    { name: "Salesforce", industry: "CRM & Sales", logo: "/logos/salesforce.svg", url: "https://www.salesforce.com" },
    // Productivity & Collaboration
    { name: "Slack", industry: "Collaboration", logo: "/logos/slack.svg", url: "https://slack.com" },
    { name: "Notion", industry: "Productivity", logo: "/logos/notion.svg", url: "https://www.notion.so" },
    { name: "Atlassian", industry: "Dev Tools", logo: "/logos/atlassian.svg", url: "https://www.atlassian.com" },
    // Commerce & Payments
    { name: "Stripe", industry: "Payments", popular: true, logo: "/logos/stripe.svg", url: "https://stripe.com" },
    { name: "Shopify", industry: "Commerce", logo: "/logos/shopify.svg", url: "https://www.shopify.com" },
    { name: "HubSpot", industry: "Marketing & CRM", logo: "/logos/hubspot.svg", url: "https://www.hubspot.com" },
    // Support & Communication
    { name: "Zendesk", industry: "Customer Support", logo: "/logos/zendesk.svg", url: "https://www.zendesk.com" },
    { name: "Twilio", industry: "Communications", logo: "/logos/twilio.svg", url: "https://www.twilio.com" },
    { name: "Figma", industry: "Design", logo: "/logos/figma.svg", url: "https://www.figma.com" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-sm px-4 py-1">
            Seamless Integrations
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">Built for Your Stack</h2>
          <p className="text-lg text-gray-500">Connect with the tools your team already uses</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrations.map((integration) => {
            const CardWrapper = integration.url ? 'a' : 'div'
            const cardProps = integration.url ? { href: integration.url, target: "_blank", rel: "noopener noreferrer" } : {}

            return (
              <CardWrapper key={integration.name} {...cardProps} className={integration.url ? "block" : ""}>
                <Card
                  className="border hover:shadow-lg transition-all hover:border-blue-300 relative group h-full bg-white"
                >
                  <CardContent className="p-5 flex flex-col items-center justify-center">
                    {integration.popular && (
                      <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-[10px] px-2 py-0.5 whitespace-nowrap">
                        POPULAR
                      </Badge>
                    )}
                    <div className="w-full h-12 flex items-center justify-center mb-2">
                      <Image
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        width={160}
                        height={48}
                        className="object-contain max-h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors">{integration.industry}</span>
                  </CardContent>
                </Card>
              </CardWrapper>
            )
          })}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your system? We build custom integrations for enterprise customers.
          </p>
          <a
            href="/company/contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Contact our integration team →
          </a>
        </div>
      </div>
    </section>
  )
}
