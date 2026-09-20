import React from 'react';
import Link from 'next/link';
import {
  Phone, FileCheck, Cpu, CheckCircle2, ArrowRight,
  ClipboardList, UserCheck, Rocket
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Free Consultation Call',
    keyword: 'Expert Professional Guidance',
    desc: 'Speak with a qualified professional about your compliance requirement — company registration, GST, ROC filing, or tax returns. We assess your exact needs and recommend the right service at transparent pricing.',
    tags: ['No commitment required', 'Same-day callback available'],
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Document Collection',
    keyword: 'Fast & Secure Process',
    desc: 'Submit your documents securely via WhatsApp or email. Our team prepares a tailored checklist — PAN, Aadhaar, address proof, director details — so you only share what is needed, nothing more.',
    tags: ['256-bit encryption', 'Minimal documents needed'],
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Government Filing & Processing',
    keyword: 'ROC, MCA, GSTN, Income Tax',
    desc: 'Our experts handle all government filings on your behalf — MCA ROC forms, GSTIN applications, ITR submissions, or trademark applications — with real-time tracking and zero compliance gaps.',
    tags: ['100% government-compliant', 'Real-time status updates'],
  },
  {
    number: '04',
    icon: UserCheck,
    title: 'Verification & Approval',
    keyword: 'Dedicated Manager Support',
    desc: 'Your dedicated compliance manager follows up with the relevant authority — GST Council, ROC, Trademark Office, or IT Department — to ensure timely approval and handle any queries or notices proactively.',
    tags: ['Proactive notice handling', 'Dedicated point of contact'],
  },
  {
    number: '05',
    icon: FileCheck,
    title: 'Delivery of Certificate / Filing Acknowledgement',
    keyword: 'Official Documents Delivered',
    desc: 'Receive your incorporation certificate, GSTIN, trademark certificate, or filing acknowledgement digitally. All official documents — DSC, DIN, registration copy — are delivered to your inbox immediately on approval.',
    tags: ['Digital delivery in minutes', 'Secure document storage'],
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Ongoing Compliance Management',
    keyword: 'Annual Compliance & ROC Filings',
    desc: 'We proactively remind you of upcoming GST return dates, ROC annual filing due dates, and income tax deadlines — so you never miss a compliance date or incur MCA / GST penalties.',
    tags: ['Auto compliance reminders', 'Annual package available'],
  },
];

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/6 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E4E8C]" />
            <span className="text-[11px] font-bold text-[#1E4E8C] uppercase tracking-widest">How It Works</span>
          </div>
          {/* SEO H2 */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1E4E8C] tracking-tight leading-[1.15] mb-4">
            Simple Process for<br className="hidden sm:block" />{' '}
            <span className="text-[#4CAF50]">Compliance Services</span> in India
          </h2>
          <p className="text-slate-500 text-[16px] leading-relaxed max-w-xl mx-auto">
            From first call to certificate delivery, our end-to-end compliance process is designed
            to be fast, transparent, and completely hassle-free for Indian businesses.
          </p>
        </div>

        {/* ── Steps Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <article
                key={step.number}
                className={`card-hover relative bg-white rounded-2xl p-7 border transition-all duration-300 group ${
                  isLast
                    ? 'border-[#4CAF50] shadow-[0_2px_20px_rgba(76,175,80,0.10)]'
                    : 'border-slate-200 shadow-sm hover:border-[#1E4E8C]/25'
                }`}
              >
                {/* Top accent stripe on last (CTA) card */}
                {isLast && (
                  <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#4CAF50] rounded-b-full" />
                )}

                {/* Number + Icon row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`card-icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-sm group-hover:shadow ${
                    isLast
                      ? 'bg-[#4CAF50]/10 border-[#4CAF50]/20 text-[#4CAF50]'
                      : 'bg-[#1E4E8C]/6 border-[#1E4E8C]/10 text-[#1E4E8C]'
                  }`}>
                    <step.icon className="card-icon w-6 h-6" />
                  </div>
                  <span className={`card-number text-4xl font-black leading-none tracking-tighter select-none transition-colors duration-300 ${
                    isLast ? 'text-[#4CAF50]/20' : 'text-[#1E4E8C]/12'
                  }`} style={{ color: isLast ? 'rgba(76,175,80,0.18)' : 'rgba(30,78,140,0.12)' }}>
                    {step.number}
                  </span>
                </div>

                {/* Keyword label */}
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                  {step.keyword}
                </p>

                {/* Step title */}
                <h3 className={`card-title font-extrabold text-[17px] mb-3 tracking-tight leading-snug transition-colors ${
                  isLast ? 'text-[#2e7d32]' : 'text-[#1E4E8C]'
                }`}>
                  {step.title}
                </h3>

                {/* SEO description */}
                <p className="card-desc text-slate-500 text-[13.5px] leading-relaxed mb-5">
                  {step.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        isLast
                          ? 'bg-[#4CAF50]/8 text-[#2e7d32]'
                          : 'bg-[#1E4E8C]/6 text-[#1E4E8C]'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-5 text-center">
          <p className="text-slate-500 text-[15px] mb-5">
            Ready to start your compliance journey?{' '}
            <span className="font-semibold text-[#1E4E8C]">Get expert help today.</span>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold px-9 py-4 rounded-xl shadow-lg shadow-[#4CAF50]/20 hover:shadow-[#4CAF50]/30 transition-all hover:-translate-y-0.5"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
