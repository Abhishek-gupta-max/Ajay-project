import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard';

export const metadata = {
  title: 'Startup Services | Aj Legal Consultant (I) Private Limited',
  description: 'Explore comprehensive consultancy services for startups including incorporations, trademark, and compliance.',
};

export default function StartupServicesPage() {
  const services = [
    { title: "Private Limited Company", slug: "private-limited-company", description: "The most popular corporate entity among startups." },
    { title: "Limited Liability Partnership", slug: "llp-registration", description: "Combine advantages of limited liability and flexibility of a partnership." },
    { title: "One Person Company", slug: "one-person-company", description: "Best for sole entrepreneurs looking for limited liability protection." },
    { title: "Section 8 Company", slug: "section-8-company", description: "For NGOs, charities, and non-profit organizations." },
    { title: "Startup India Registration", slug: "startup-india", description: "Avail tax exemptions and fast-tracking of IPR applications." },
    { title: "GST Registration", slug: "gst-registration", description: "Mandatory indirect tax registration for specific businesses." },
    { title: "Trademark Registration", slug: "trademark", description: "Protect your brand name, logo, or slogan legally." },
    { title: "FSSAI Food License", slug: "fssai", description: "Required for any food-related business in India." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Startup Services</h1>
          <p className="text-xl text-slate-600">
            Everything your startup needs to launch, protect, and grow. From incorporation to intellectual property, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <ServiceCard key={idx} {...svc} />
          ))}
        </div>

      </div>
    </div>
  );
}
