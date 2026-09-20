import React from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/hero/HeroSection';

// Lazy-load all below-fold sections — they are not needed for initial paint
const ServicesCarouselSection   = dynamic(() => import('@/components/sections/ServicesCarouselSection'));
const HighlightBox               = dynamic(() => import('@/components/sections/HighlightBox'));
const ClientsAndPartnersSection  = dynamic(() => import('@/components/sections/ClientsAndPartnersSection'));
const WhyUsSection               = dynamic(() => import('@/components/sections/WhyUsSection'));
const ProcessSection             = dynamic(() => import('@/components/sections/ProcessSection'));
const ServiceSection             = dynamic(() => import('@/components/sections/ServiceSection'));
const FAQSection                 = dynamic(() => import('@/components/sections/FAQSection'));
const RALicensingPopup           = dynamic(() => import('@/components/modals/RALicensingPopup'));

export default function Home() {
  return (
    <div className="bg-white">
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
