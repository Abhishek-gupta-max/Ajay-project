import React from 'react';
import ServiceFAQSection from '@/components/sections/ServiceFAQSection';
import LeadForm from '@/components/forms/LeadForm';
import {
  CheckCircle2, ShieldCheck, Clock, Users, Award,
  FileText, Headphones, TrendingUp, ArrowRight,
  Building2, Landmark, FileCheck, ClipboardList, Timer
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Recruiting Agent (RA) License Registration in India - MEA Approved',
  description:
    'Obtain your Overseas Recruitment Agent (RA) License under the Ministry of External Affairs with expert consultancy. 100% government-compliant registration, documentation, and liaison support.',
  url: '/services/ra-license',
});

/* -- Why Choose Us -- */
const whyUs = [
  {
    icon: ShieldCheck,
    title: 'Expert Professional Team',
    desc: 'Our qualified consultants have years of experience handling Recruiting Agent (RA) License documentation and MEA compliance across India.',
  },
  {
    icon: Clock,
    title: 'Fast-Track Support',
    desc: 'We file your RA License application promptly and follow up proactively with the POE and MEA  -  keeping you informed at every step.',
  },
  {
    icon: FileText,
    title: 'End-to-End Documentation',
    desc: 'We handle all paperwork, office setup guidance, and eMigrate portal filings  -  ensuring a seamless "One Window" experience.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Pricing',
    desc: 'Fixed, all-inclusive pricing with no hidden fees. Government charges are passed at actuals. You always know exactly what you\'re paying for.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: 'A dedicated compliance manager is assigned from start to finish  -  reachable by phone, WhatsApp, or email at any time.',
  },
  {
    icon: Award,
    title: 'Verified Professional Service',
    desc: 'Aj Legal Consultant is a trusted partner for startups, helping more than 200+ agencies obtain their Overseas Recruitment License from scratch.',
  },
];

/* -- FAQs -- */
const faqs = [
  {
    question: 'What exactly is RA License?',
    answer:
      'The RA License (Recruiting Agent License) is officially granted by the Protector General of Emigrants (PGE) under the Ministry of External Affairs (MEA), Government of India. It is strictly governed by the Emigration Act, 1983, ensuring that recruitment for overseas jobs is handled ethically and legally.',
  },
  {
    question: 'Simple Meaning: Who needs RA License mandatory?',
    answer:
      'If you intend to send manpower to the Gulf, Europe, or other countries, run an overseas recruitment agency, or earn legally from international placement services, then an RA License is mandatory. Operating without it is illegal and can lead to severe penalties, blacklisting, or even imprisonment.',
  },
  {
    question: 'Who should apply for an RA License?',
    answer:
      'You need it if you are a manpower consultant or recruiter, a travel or placement agency looking to expand into overseas jobs, or an individual/company sourcing candidates directly for foreign employers.',
  },
  {
    question: 'What rights do you get with an RA License?',
    answer:
      'With a valid RA License, you can: Legally recruit Indian workers for foreign employers, issue demand letters and process candidates through the e-Migrate portal, work directly with embassies and international companies, and build a scalable, legally protected recruitment business.',
  },
  {
    question: 'What are the high-level key requirements?',
    answer:
      'To obtain the license, you typically need a registered business (Pvt Ltd, LLP, or Proprietorship), an office setup that meets MEA norms (minimum 50 sq. meters), a Bank Guarantee (BG), proper documentation & compliance records, and a clean criminal background.',
  },
  {
    question: 'What is the cost and validity of the license?',
    answer:
      'The government security deposit (Bank Guarantee) and setup costs are significant, often involving an ecosystem of ₹50L+ as per rules (with reduced categories available for limited recruitment). Once issued, the license is valid for 5 years and is renewable.',
  },
  {
    question: 'Why is the RA License important for the industry?',
    answer:
      'Given India\'s massive overseas employment market, the license ensures worker protection from exploitation, promotes ethical recruitment practices, and allows for government monitoring of migration flows.',
  },
  {
    question: 'Practical Insight: Why choose a licensed path?',
    answer:
      'Licensed agents can build long-term, scalable businesses with international credibility. While documentation and compliance are the biggest hurdles, unlicensed operators face constant legal risks and shutdowns. Aj Legal Consultant simplifies this entire journey for you.',
  },
];

const raSteps = [
  { title: 'Business Setup', desc: 'Register firm/company/proprietorship/LLP and prepare business profile.' },
  { title: 'Office Setup as per Norms', desc: 'Premises of not less than 50 sq. meters with waiting hall, interview room, and office facilities.' },
  { title: 'Prepare Documents', desc: 'Collect company, director, financial, office, and affidavit documents.' },
  { title: 'Apply Online on eMigrate', desc: 'RA application form and instructions are available online at the eMigrate portal.' },
  { title: 'Submit Application Fee', desc: 'Government registration fee of ₹25,000.' },
  { title: 'Initial Scrutiny by POE', desc: 'Protector of Emigrants checks completeness as per territorial jurisdiction.' },
  { title: 'Office Inspection', desc: 'POE inspection report of the proposed RA office is conducted.' },
  { title: 'Police Verification', desc: 'Character Verification Report of the applicant/directors is required.' },
  { title: 'Bank Guarantee', desc: 'Deposit ₹50 lakh BG (or ₹8 lakh for limited recruitment of 100 workers).' },
  { title: 'Final Approval / RC Issued', desc: 'Registration Certificate is issued by PGE/MEA after final approval.' },
];

const docCategories = [
  {
    title: 'Company / Firm Documents',
    icon: Building2,
    docs: [
      'Certificate of Incorporation / registration proof',
      'MOA & AOA / Partnership deed / proprietorship proof',
      'PAN card of business',
      'GST registration (if available)',
      'Company profile on letterhead',
      'Board resolution / authorization letter',
      'Digital signature / authorized signatory details',
    ]
  },
  {
    title: 'Applicant / Director Documents',
    icon: Users,
    docs: [
      'Aadhaar card & PAN card',
      'Passport-size photographs',
      'Address proof',
      'Educational qualification (Bachelor’s degree or equivalent)',
      'CV / professional experience details',
      'Police verification / character verification',
    ]
  },
  {
    title: 'Financial Documents',
    icon: Landmark,
    docs: [
      'ITR of last 3 consecutive years',
      'Balance sheet / Statement of assets (CA verified)',
      'Net worth / financial soundness certificate',
      'Recent Bank statements',
      'Bank Guarantee (₹50 lakh or applicable reduced BG)',
    ]
  },
  {
    title: 'Office Documents',
    icon: FileCheck,
    docs: [
      'Rent agreement / lease deed / ownership proof',
      'NOC from landlord (if rented)',
      'Electricity bill / utility proof',
      'Office & Signboard photographs',
      'Layout plan (minimum 50 sq. meters)',
      'Staff details & Website/email info',
    ]
  },
  {
    title: 'Legal / Affidavit Documents',
    icon: Scale,
    docs: [
      'Affidavit in Form II (Notary/Magistrate)',
      'Declaration of no criminal/civil case',
      'Declaration of no previous blacklisting',
      'Undertaking to follow Emigration Act & Rules',
      'Specimen signature and seal',
    ]
  }
];

const timelineStages = [
  { stage: 'Business + Document Preparation', time: '15-30 days' },
  { stage: 'Office Setup & Compliance Prep', time: '15-30 days' },
  { stage: 'Online Application Filing', time: '3-7 days' },
  { stage: 'POE Scrutiny', time: '15-30 days' },
  { stage: 'Office Inspection', time: '15-45 days' },
  { stage: 'Police Verification', time: '30-60 days' },
  { stage: 'BG Submission & Final Approval', time: '15-30 days' },
];

function Scale({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

export default function RALicencePage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* -- 1. Hero -- */}
      <section className="relative bg-[#1E4E8C] pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute -top-40 -left-40 w-[460px] h-[460px] bg-[#4CAF50]/20 rounded-full blur-[130px] opacity-60 pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-[360px] h-[360px] bg-[#4CAF50]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-[#4CAF50]/20 border border-[#4CAF50]/40 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                <span className="text-xs font-bold text-[#4CAF50] uppercase tracking-widest">MEA Approved · Recruiting Agent License</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.12] tracking-tight mb-5 font-serif">
                Recruiting Agent (RA) <br />
                <span className="text-[#4CAF50]">License Registration</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-6">
                Complete consultancy support for obtaining your <strong className="text-white text-xl uppercase tracking-wider">Overseas Recruitment License</strong> from the Ministry of External Affairs.
                Fast-track documentation and 100% compliance guaranteed.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['MEA Approved Process', '90-180 Day Timeline', 'Expert Professional', 'Pan-India Service'].map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs font-semibold text-white/85"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#4CAF50]" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#process" className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold px-8 py-3.5 rounded-xl transition-all text-center">View Step-by-Step Process</Link>
                <Link href="#docs" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-xl border border-white/20 transition-all text-center">Required Documents</Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-1 shadow-2xl">
              <LeadForm serviceSlug="ra-license" serviceName="RA Licence Registration" />
            </div>
          </div>
        </div>
      </section>

      {/* -- 2. Step-by-Step Process -- */}
      <section id="process" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/8 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
              <ClipboardList className="w-3.5 h-3.5 text-[#1E4E8C]" />
              <span className="text-[11px] font-bold text-[#1E4E8C] uppercase tracking-widest">Process Flow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1E4E8C] tracking-tight leading-[1.15] mb-4 font-serif">
              RA License - <span className="text-[#4CAF50]">Step-by-Step Process</span>
            </h2>
            <p className="text-slate-500 text-[16px] max-w-2xl mx-auto">
              Our systematic approach ensures that every requirement of the Protector General of Emigrants (PGE) is met with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {raSteps.map((step, idx) => (
              <div key={idx} className="card-hover relative bg-slate-50 border border-slate-100 p-6 rounded-2xl transition-all">
                <div className="card-tag text-4xl font-black text-[#1E4E8C]/10 mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="card-title text-[15px] font-bold text-[#1E4E8C] mb-2 leading-snug">{step.title}</h4>
                <p className="card-desc text-[13px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 3. Documents Required -- */}
      <section id="docs" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-5 text-primary-700">
              <FileText className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-widest">Paperwork</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4 font-serif">
              Exact <span className="text-primary-600">Documents Required</span>
            </h2>
            <p className="text-slate-500 text-[16px] max-w-2xl mx-auto leading-relaxed">
              Ensure you have these documents ready for a smooth application process. Our team will assist in vetting and preparing these files.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {docCategories.map((cat, idx) => (
              <div key={idx} className="card-hover bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all">
                <div className="card-icon-wrap w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                  <cat.icon className="card-icon w-6 h-6 text-primary-600" />
                </div>
                <h3 className="card-title text-xl font-bold text-slate-900 mb-6">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.docs.map((doc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                      <span className="card-desc leading-snug">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 4. Timeline Section -- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1E4E8C] rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#4CAF50] opacity-[0.05] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-extrabold text-white mb-2 font-serif">Practical Timeline</h2>
                  <p className="text-white/60 text-sm">Realistic professional expectations for the RA License process.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center">
                  <p className="text-white/60 text-[11px] font-bold uppercase tracking-wider mb-1">Total Estimated Time</p>
                  <p className="text-white text-3xl font-black">90-180 Days</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-white font-bold text-sm uppercase tracking-wider">Stage</th>
                      <th className="px-6 py-4 text-white font-bold text-sm uppercase tracking-wider text-right">Approx. Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timelineStages.map((t, idx) => (
                      <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-white/80 text-[15px]">{t.stage}</td>
                        <td className="px-6 py-4 text-[#4CAF50] font-bold text-[15px] text-right">{t.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-bold text-sm flex items-center gap-2 mb-2">
                    <Timer className="w-4 h-4 text-[#4CAF50]" /> Fast-Track Target
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    45-90 working days (Available only if all documents, office, and BG are ready without objection).
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-bold text-sm flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#4CAF50]" /> Safe Commitment
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    90-180 days. This is the standard professional commitment for a smooth, rejection-free process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- 5. Overview + FAQ -- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E4E8C] mb-6 font-serif">What We Do Aj Legal Consultant</h2>
              <div className="prose max-w-none text-slate-600 text-[16px] leading-relaxed">
                <p>
                  Aj Legal Consultant provides <strong>&quot;One Window Total Compliance&quot;</strong>.
                  We have successfully helped more than 200+ startups obtain the Overseas Recruitment (RA) License step-by-step from scratch.
                  We manage everything:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-8">
                  {[
                    'Company Registration (Pvt Ltd, LLP, etc.)',
                    'Office Setup Guidance (meeting 50 sq.m norms)',
                    'Document Preparation & Vetting',
                    'Application Filing & Liaison with POE and MEA',
                    'Bank Guarantee Assistance',
                    'Final License Approval & RC Issuance'
                  ].map((service) => (
                    <div key={service} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ServiceFAQSection faqs={faqs} serviceName="RA License" />
          </div>

          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
                <div className="bg-primary-600 p-6 text-white text-center">
                  <h3 className="text-xl font-bold">Apply Now</h3>
                  <p className="text-primary-100 text-sm">Expert support for your RA License</p>
                </div>
                <div className="p-2">
                  <LeadForm serviceSlug="ra-license" serviceName="RA License Registration" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- 6. Why Choose Us (Redundant but kept for structure) -- */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/6 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
              <Users className="w-3.5 h-3.5 text-[#1E4E8C]" />
              <span className="text-[11px] font-bold text-[#1E4E8C] uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4E8C] tracking-tight leading-[1.15] mb-4 font-serif">
              Trusted by <span className="text-[#4CAF50]">200+ Agencies</span> Nationwide
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed">
              Our expertise in the Emigration Act and eMigrate portal ensures your license application is processed with zero errors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {whyUs.map(item => (
              <div
                key={item.title}
                className="card-hover bg-white border border-slate-200 rounded-3xl p-8 shadow-sm transition-all duration-300"
              >
                <div className="card-icon-wrap w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <item.icon className="card-icon w-6 h-6 text-primary-600 transition-colors duration-300" />
                </div>
                <h3 className="card-title text-xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="card-desc text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#lead-form"
              className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold px-12 py-5 rounded-2xl shadow-xl shadow-[#4CAF50]/20 hover:shadow-[#4CAF50]/40 hover:-translate-y-1 transition-all duration-300 group/btn"
            >
              Get Free RA License Consultation
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <p className="text-slate-400 text-xs mt-4">No commitment · 100% Confidential · Pan-India Service</p>
          </div>
        </div>
      </section>

    </div>
  );
}
