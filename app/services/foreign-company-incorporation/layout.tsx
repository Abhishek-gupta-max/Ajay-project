import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = constructMetadata({
  title: "Foreign Company Incorporation in India | AJ Legal Consultant",
  description: "Register a Foreign Company Subsidiary, Branch Office, or Liaison Office in India with expert legal guidance and RBI/MCA compliance.",
  url: "/services/foreign-company-incorporation",
});

const foreignCompSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Foreign Company Incorporation in India",
    "serviceType": "Business Registration",
    "provider": {
      "@type": "LegalService",
      "name": "AJ Legal Consultant (I) Private Limited",
      "url": siteConfig.url
    },
    "areaServed": "India",
    "description": "Register a Foreign Company Subsidiary, Branch Office, or Liaison Office in India with expert legal guidance and RBI/MCA compliance."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${siteConfig.url}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Foreign Company Incorporation",
        "item": `${siteConfig.url}/services/foreign-company-incorporation`
      }
    ]
  }
];

export default function ForeignCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={foreignCompSchema} />
      {children}
    </>
  );
}
