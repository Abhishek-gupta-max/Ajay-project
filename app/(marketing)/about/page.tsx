import React from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  Briefcase, 
  Award, 
  FileCheck, 
  Handshake, 
  CheckCircle2,
  MapPin,
  Phone,
  Globe,
  Mail
} from 'lucide-react';
import { Outfit } from 'next/font/google';

const headerFont = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'About Us | Aj Legal Consultant (I) Private Limited',
  description: 'Aj Legal Consultant (I) Private Limited is a professionally managed legal, regulatory, and compliance consultancy organization providing end-to-end business solutions across India.',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-primary-100">
            Company Profile
          </div>
          <h1 className={`${headerFont.className} text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight`}>
            One Window <span className="text-primary-600">Total Compliance</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Aj Legal Consultant (I) Private Limited is a professionally managed legal, regulatory, and compliance consultancy organization providing end-to-end business solutions across India.
          </p>
        </div>

        {/* About Company */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary-100 p-3 rounded-2xl">
              <Building2 className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className={`${headerFont.className} text-3xl font-bold text-slate-900`}>About the Company</h2>
          </div>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6">
            <p>
              The company specializes in corporate registrations, taxation, overseas recruitment licensing, startup consultancy, and statutory compliance management.
            </p>
            <p>
              With a commitment to professionalism, transparency, and operational excellence, we assist entrepreneurs, startups, SMEs, and enterprises in obtaining regulatory approvals and maintaining smooth legal compliance operations.
            </p>
            <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-2xl my-8 italic font-medium text-slate-700">
              We are particularly recognized for our expertise in Overseas Recruitment Agency (RA) License consultancy under the Ministry of External Affairs governed by the Emigration Act, 1983.
            </div>
            <p>
              Our approach focuses on simplifying complex legal procedures and delivering reliable consultancy services with practical business solutions.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary-600" />
              <h2 className={`${headerFont.className} text-2xl font-bold text-slate-900`}>Our Mission</h2>
            </div>
            <ul className="space-y-4">
              {[
                "To provide professional, transparent, and reliable compliance consultancy services.",
                "To simplify legal and regulatory procedures for businesses and entrepreneurs.",
                "To help organizations establish legally compliant and operationally efficient systems.",
                "To support Indian businesses in expanding globally through proper licensing and regulatory frameworks."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-10 text-white flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-primary-400" />
              <h2 className={`${headerFont.className} text-2xl font-bold`}>Our Vision</h2>
            </div>
            <p className="text-xl leading-relaxed text-slate-300 font-medium">
              To become India&rsquo;s most trusted compliance and legal consultancy platform by delivering innovative, ethical, and result-oriented professional services.
            </p>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <h2 className={`${headerFont.className} text-3xl font-bold text-center text-slate-900 mb-10`}>Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "1. Overseas Recruitment Agency (RA) License Consultancy",
                desc: "We provide complete consultancy support for obtaining Recruitment Agent (RA) License from the Ministry of External Affairs under the Emigration Act, 1983.",
                list: ["Documentation drafting and preparation", "Application filing assistance", "Office setup guidance as per MEA standards", "Bank guarantee support guidance", "Compliance verification support", "End-to-end coordination till approval"]
              },
              {
                title: "2. Company Registration Services",
                desc: "We assist clients in establishing legally compliant business entities across India.",
                list: ["Private Limited Company", "Limited Liability Partnership (LLP)", "One Person Company (OPC)", "Partnership Firm", "Proprietorship Firm"]
              },
              {
                title: "3. GST Registration & Compliance",
                desc: "Our GST services are designed to help businesses maintain smooth taxation compliance.",
                list: ["GST Registration", "GST Return Filing", "GST Notice Handling", "GST Advisory Services", "GST Audit Support"]
              },
              {
                title: "4. Income Tax & Accounting Services",
                desc: "We provide professional taxation and accounting solutions for businesses and individuals.",
                list: ["Income Tax Return Filing", "Tax Planning & Advisory", "Accounting & Bookkeeping", "Financial Statement Preparation", "Payroll Management"]
              },
              {
                title: "5. MCA / ROC Compliance",
                desc: "We help companies maintain mandatory corporate compliance requirements under the Companies Act.",
                list: ["Annual ROC Filing", "Director KYC", "Board Resolution Drafting", "Compliance Certification", "Shareholding & Company Record Management"]
              },
              {
                title: "6. Startup India & DPIIT Recognition",
                desc: "We support startups in obtaining official DPIIT recognition and government benefits under Startup India initiatives.",
                list: ["Startup India Registration", "DPIIT Recognition", "Government Scheme Guidance", "Startup Documentation Support"]
              },
              {
                title: "7. NSDC Registration Consultancy",
                desc: "We provide consultancy support for NSDC-related approvals and Skill India registration processes.",
                list: []
              },
              {
                title: "8. FEMA & RBI Compliance",
                desc: "Our consultancy also includes FEMA and RBI regulatory support for businesses engaged in foreign transactions and international operations.",
                list: []
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary-100 transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                {service.list.length > 0 && (
                  <ul className="space-y-2 mt-4 pt-4 border-t border-slate-50">
                    {service.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us & Industries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Why Choose Us */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
            <h2 className={`${headerFont.className} text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3`}>
              <Award className="w-6 h-6 text-primary-600" />
              Why Choose Us
            </h2>
            <div className="space-y-6">
              {[
                { t: "Professional Expertise", d: "Our team consists of experienced compliance professionals, consultants, and documentation specialists." },
                { t: "End-to-End Support", d: "We provide complete support from consultation to final approval and post-registration compliance." },
                { t: "Transparency", d: "We maintain clear communication and transparent workflow management throughout every project." },
                { t: "PAN India Services", d: "We serve clients across multiple states and industries throughout India." },
                { t: "Industry Experience", d: "Strong operational understanding of overseas recruitment, industrial staffing, and corporate compliance sectors." }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold text-slate-900 mb-1">{item.t}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Strength & Industries */}
          <div className="space-y-8">
            <div className="bg-primary-600 rounded-3xl shadow-xl shadow-primary-200 p-8 md:p-10 text-white">
              <h2 className={`${headerFont.className} text-2xl font-bold mb-8 flex items-center gap-3`}>
                <FileCheck className="w-6 h-6 text-primary-200" />
                Operational Strength
              </h2>
              <div className="space-y-6">
                {[
                  { t: "Rigorous Documentation System", d: "We follow a structured documentation review process to ensure compliance accuracy." },
                  { t: "Compliance-Oriented Workflow", d: "Our execution process focuses on minimizing delays and ensuring regulatory alignment." },
                  { t: "Professional Coordination", d: "Dedicated client coordination support throughout the entire project lifecycle." },
                  { t: "Strategic Advisory", d: "We provide practical guidance based on current government regulations and operational requirements." }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-white mb-1">{item.t}</h4>
                    <p className="text-primary-100 text-sm leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
              <h2 className={`${headerFont.className} text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3`}>
                <Briefcase className="w-6 h-6 text-primary-600" />
                Industries We Serve
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Overseas Recruitment Agencies", "Engineering & EPC Companies", 
                  "Industrial & Construction Sector", "Hospitality & Tourism Industry", 
                  "Healthcare Recruitment", "IT & Technology Startups", 
                  "Manufacturing Sector", "SMEs & Corporate Enterprises"
                ].map((ind, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div>
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-slate-900 rounded-3xl shadow-2xl p-10 md:p-16 text-center text-white mb-12 relative overflow-hidden">
          <Handshake className="w-24 h-24 text-white/5 absolute -top-4 -right-4" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className={`${headerFont.className} text-3xl md:text-4xl font-bold mb-6`}>Our Commitment</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              At Aj Legal Consultant (I) Private Limited, we believe that legal compliance is not merely a statutory requirement but a foundation for sustainable business growth.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed font-medium">
              Our objective is to help businesses operate confidently with proper legal structure, regulatory approvals, and professional compliance systems.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
          <h2 className={`${headerFont.className} text-2xl font-bold text-slate-900 mb-8 text-center`}>Contact Information</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-4xl mx-auto">
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">AJ LEGAL CONSULTANT (I) PRIVATE LIMITED</h3>
              <p className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-6">One Window Total Compliance</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                  <p className="text-slate-600 text-sm">G-16, Ground Floor, Dharmpali Palace,<br/>Sector-27, Noida, Uttar Pradesh – 201301</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                  <a href="tel:+919643862867" className="text-slate-600 text-sm hover:text-primary-600 font-medium">+91 9643862867</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                  <a href="mailto:info@ajlegalconsultant.com" className="text-slate-600 text-sm hover:text-primary-600 font-medium">info@ajlegalconsultant.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="w-5 h-5 text-slate-400 shrink-0" />
                  <a href="https://www.ajlegalconsultant.in" className="text-slate-600 text-sm hover:text-primary-600 font-medium">www.ajlegalconsultant.in</a>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a 
                href="/contact" 
                className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-700 shadow-xl shadow-primary-200 transition-all hover:-translate-y-1 w-full"
              >
                Book a Consultation
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
