import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import HeroSection from '@/components/hero/HeroSection';
import { constructMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = constructMetadata({
  title: "AJ Legal Consultant (I) Private Limited | Legal & Compliance Services India",
  description: "AJ Legal Consultant (I) Private Limited provides company registration, GST, ROC/MCA filing, income tax, trademark, FSSAI, RA licence and business compliance consultancy services across India.",
  url: "/",
});

// Lazy-load all below-fold sections — they are not needed for initial paint
const ServicesCarouselSection   = dynamic(() => import('@/components/sections/ServicesCarouselSection'));
const HighlightBox               = dynamic(() => import('@/components/sections/HighlightBox'));
const ClientsAndPartnersSection  = dynamic(() => import('@/components/sections/ClientsAndPartnersSection'));
const WhyUsSection               = dynamic(() => import('@/components/sections/WhyUsSection'));
const ProcessSection             = dynamic(() => import('@/components/sections/ProcessSection'));
const ServiceSection             = dynamic(() => import('@/components/sections/ServiceSection'));
const FAQSection                 = dynamic(() => import('@/components/sections/FAQSection'));
const RALicensingPopup           = dynamic(() => import('@/components/modals/RALicensingPopup'));

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does AJ Legal Consultant provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AJ Legal Consultant (I) Private Limited provides company registration, GST registration & return filing, ROC/MCA annual compliance, income tax filing, trademark registration, FSSAI licenses, and MEA Recruitment Agent (RA) license consultancy across India."
      }
    },
    {
      "@type": "Question",
      "name": "How long does company registration take in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Company registration in India through MCA SPICe+ portal typically takes 7–10 working days once all director documents and registered office proofs are submitted."
      }
    },
    {
      "@type": "Question",
      "name": "Where is AJ Legal Consultant located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AJ Legal Consultant (I) Private Limited is located at G-16, Ground Floor, Dharmpali Palace, Sector-27, Noida, Uttar Pradesh 201301."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="bg-white">
      <JsonLd data={homeFaqSchema} />
      <RALicensingPopup />
      <ServicesCarouselSection />
      <HeroSection />
      <HighlightBox />
      <ClientsAndPartnersSection />
      <WhyUsSection />
      <ProcessSection />
      <ServiceSection />
      <FAQSection />
    </div>
  );
}
