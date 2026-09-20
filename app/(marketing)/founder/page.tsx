import React from 'react';
import Image from 'next/image';
import { Outfit } from 'next/font/google';
import { Linkedin } from 'lucide-react';

const headerFont = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Meet Our Founder | Ajay K Pandey - Aj Legal Consultant',
  description: 'Learn about Mr. Ajay K. Pandey, Founder & CEO of Aj Legal Consultant (I) Private Limited, and his mission to simplify compliance for businesses in India.',
};

export default function FounderPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest mb-12">
          <a href="/" className="hover:text-primary-600 transition-colors">Home</a>
          <span>/</span>
          <span className="text-slate-900">Founder Profile</span>
        </nav>

        {/* Founder Profile Content */}
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] items-stretch">
            
            {/* Left Column: Image Area */}
            <div className="relative bg-slate-900 min-h-[500px] lg:min-h-0">
              <Image 
                src="/Founder.jpeg" 
                alt="Ajay K Pandey - Founder & CEO" 
                fill
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <h1 className={`${headerFont.className} text-4xl font-extrabold mb-2 tracking-tight`}>Ajay K Pandey</h1>
                <p className="text-primary-400 font-bold uppercase tracking-widest text-xs mb-6">
                  Founder & CEO
                </p>
                <div className="flex flex-wrap gap-3">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-xs font-bold">
                     16+ Years Experience
                   </div>
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-xs font-bold">
                     Since 2012
                   </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio Area */}
            <div className="p-8 md:p-16 lg:p-20">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-8 border border-primary-100">
                  Leadership Profile
                </div>
                
                <h2 className={`${headerFont.className} text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 leading-tight`}>
                  Driving a Mission of <span className="text-primary-600">Compliance Simplified</span>
                </h2>

                <div className="prose prose-slate prose-lg max-w-none space-y-6">
                  <p className="text-slate-600 leading-relaxed">
                    Mr. Ajay K. Pandey is a seasoned professional with <strong>16+ years of experience</strong> in the field of accounting, legal compliance, and business consultancy.
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed">
                    He began his career in 2012 as an Accountant, where he gained hands-on experience working with multiple organizations ranging from small enterprises to multinational companies. During this period, he developed a deep understanding of financial systems, compliance structures, and operational challenges faced by businesses.
                  </p>

                  <div className="relative py-8 px-8 bg-slate-50 rounded-3xl border border-slate-100 italic">
                    <span className="absolute top-4 left-4 text-6xl text-primary-100 font-serif leading-none">&ldquo;</span>
                    <p className="relative z-10 text-slate-700 font-medium leading-relaxed">
                      While working closely with business owners, he identified a significant gap — many entrepreneurs struggled with legal compliances, accounting complexities, and regulatory requirements, which often diverted their focus from business growth.
                    </p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    Driven by this insight, he established <strong>Aj Accounting</strong> in 2016, aiming to simplify financial and compliance processes for businesses. Building on this foundation and vision, he later founded <strong>Aj Legal Consultant (I) Private Limited</strong> to provide comprehensive &quot;one window total compliance&quot; solutions.
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed">
                    Under his leadership, Aj Legal Consultant has been dedicated to supporting startups and growing businesses, enabling them to minimize compliance burdens and focus on their core business objectives.
                  </p>
                </div>

                {/* Expertise Section */}
                <div className="mt-12 pt-12 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Areas of Expertise</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {[
                      'Legal & Regulatory Compliance',
                      'Accounting & Financial Structuring',
                      'Business Setup & Licensing',
                      'End-to-end consultancy for startups'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-primary-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-slate-700 font-semibold text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-100">
                   <p className="text-slate-500 text-sm italic max-w-md">
                     &ldquo;Our mission is to make compliance simple, transparent, and accessible for businesses across India.&rdquo;
                   </p>
                   <a 
                     href="https://www.linkedin.com/in/ajay-pandey-242355a5?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 bg-slate-50 hover:bg-[#0A66C2] hover:text-white text-slate-700 px-5 py-2.5 rounded-xl text-sm font-bold transition-all border border-slate-200 hover:border-transparent shadow-sm"
                   >
                     <Linkedin className="w-5 h-5" />
                     <span>Connect on LinkedIn</span>
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6">Want to discuss your business compliance with Mr. Pandey?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary-700 shadow-xl shadow-primary-200 hover:-translate-y-1 transition-all"
          >
            Book a Consultation
          </a>
        </div>

      </div>
    </div>
  );
}
