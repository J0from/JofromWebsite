export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jo",
    alternateName: "Jo from",
    url: "https://jolandingpage.vercel.app",
    logo: "https://jolandingpage.vercel.app/favicon.png",
    description:
      "Digital employees for regulated industries. We help businesses strike the right balance between Human + Machine.",
    sameAs: [
      // Add your social media profiles here when available
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "hello@jofrom.io",
      url: "https://calendly.com/myj0/30min",
      areaServed: "US",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Atlanta",
      addressRegion: "GA",
      addressCountry: "US",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jo: Human + Machine",
    url: "https://jolandingpage.vercel.app",
    description:
      "We help businesses strike the right balance between Human + Machine. Workforce solutions for regulated industries.",
    publisher: {
      "@type": "Organization",
      name: "Jo",
      logo: {
        "@type": "ImageObject",
        url: "https://jolandingpage.vercel.app/favicon.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://jolandingpage.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jo",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "25",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "25",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
    },
    operatingSystem: "Web",
    description:
      "Workforce solutions for highly regulated industries including healthcare, manufacturing, energy, and food processing.",
    featureList: [
      "HIPAA Compliance",
      "FDA Ready",
      "NERC CIP Certified",
      "Labor Bottleneck Solutions",
      "Compliance Solutions",
      "Digital Employees",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Workforce Solutions",
    provider: {
      "@type": "Organization",
      name: "Jo",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Workforce Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Healthcare Compliance Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manufacturing Workforce Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Energy Sector Compliance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Food Processing Solutions",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  )
}
