import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function IntegrationsSection() {
  const integrations = [
    // Food & Beverage - popular in position 2 (3rd column)
    { name: "Aptean", industry: "Food & Beverage", logo: "/logos/aptean.svg", url: "https://www.aptean.com/" },
    { name: "NetSuite", industry: "Food & Beverage", logo: "/logos/netsuite.png", url: "https://www.netsuite.com/portal/home.shtml" },
    { name: "Infor CloudSuite F&B", industry: "Food & Beverage", popular: true, logo: "/logos/infor.svg", url: "https://www.infor.com/industries/food-beverage" },
    { name: "BatchMaster", industry: "Food & Beverage", logo: "/logos/batchmaster.png", url: "https://www.batchmaster.com/" },
    { name: "Wolters Kluwer", industry: "Food & Beverage", logo: "/logos/wolters-kluwer.svg", url: "https://www.wolterskluwer.com/" },
    // Healthcare & Life Sciences - popular in position 6 (2nd column)
    { name: "Epic / Cerner", industry: "Healthcare & Life Sciences", popular: true, logo: "/logos/cerner.png", url: "https://www.epic.com" },
    { name: "Infor Cloverleaf", industry: "Healthcare & Life Sciences", logo: "/logos/infor.svg", url: "https://www.infor.com/products/cloverleaf" },
    { name: "Veeva Systems", industry: "Healthcare & Life Sciences", logo: "/logos/veeva.png", url: "https://www.veeva.com" },
    { name: "Workday Healthcare", industry: "Healthcare & Life Sciences", logo: "/logos/workday.png", url: "https://www.workday.com/en-us/solutions/industries/healthcare.html" },
    { name: "ServiceNow Healthcare", industry: "Healthcare & Life Sciences", logo: "/logos/servicenow.png", url: "https://www.servicenow.com/products/healthcare-life-sciences.html" },
    // Energy & Utilities - popular in position 13 (4th column)
    { name: "IFS Cloud", industry: "Energy & Utilities", logo: "/logos/ifs.jpeg", url: "https://www.ifs.com/ifs-cloud" },
    { name: "SAP S/4HANA for Energy", industry: "Energy & Utilities", logo: "/logos/sap.jpeg", url: "https://www.sap.com/industries/utilities.html" },
    { name: "Oracle Utilities", industry: "Energy & Utilities", popular: true, logo: "/logos/oracle-utilities.png", url: "https://www.oracle.com/utilities/" },
    { name: "Enablon", industry: "Energy & Utilities", logo: "/logos/enablon.png", url: "https://www.wolterskluwer.com/en/solutions/enablon" },
    { name: "GE Vernova", industry: "Energy & Utilities", logo: "/logos/ge-vernova.png", url: "https://www.gevernova.com" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-sm px-4 py-1">
            Industry-Specific Integrations
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">Built for Your Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration) => {
            const CardWrapper = integration.url ? 'a' : 'div'
            const cardProps = integration.url ? { href: integration.url, target: "_blank", rel: "noopener noreferrer" } : {}
            
            return (
              <CardWrapper key={integration.name} {...cardProps} className={integration.url ? "block" : ""}>
                <Card
                  className="border-2 hover:shadow-xl transition-all hover:border-blue-300 relative group h-full bg-white"
                >
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    {integration.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-xs px-3 py-1 whitespace-nowrap">
                        MOST POPULAR
                      </Badge>
                    )}
                    <div className="w-40 h-40 mb-6 relative rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center p-8 group-hover:shadow-inner transition-all border border-slate-200">
                      <div className="relative w-full h-full">
                        <Image
                          src={integration.logo || `/.jpg?key=ohhmj&height=160&width=160&query=${encodeURIComponent(integration.name + " logo")}`}
                          alt={`${integration.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-base leading-tight group-hover:text-blue-600 transition-colors mb-2">
                      {integration.name}
                    </h4>
                    <p className="text-sm text-gray-500">{integration.industry}</p>
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
