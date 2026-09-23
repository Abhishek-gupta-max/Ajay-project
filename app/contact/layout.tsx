import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = constructMetadata({
  title: "Contact Compliance Experts | AJ Legal Consultant Noida India",
  description: "Contact AJ Legal Consultant (I) Private Limited in Sector 27 Noida for company registration, GST, ROC filings, and legal compliance. Call +91 9643862867.",
  url: "/contact",
});

const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact AJ Legal Consultant",
    "url": `${siteConfig.url}/contact`,
    "description": "Contact information and office details for AJ Legal Consultant (I) Private Limited in Noida, India."
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
        "name": "Contact Us",
        "item": `${siteConfig.url}/contact`
      }
    ]
  }
];

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={contactSchema} />
      {children}
    </>
  );
}
