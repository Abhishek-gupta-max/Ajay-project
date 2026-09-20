import React from 'react';
import ServiceFAQSection from '@/components/sections/ServiceFAQSection';
import {
  CheckCircle2, ShieldCheck, Clock, Users, Award,
  FileText, Headphones, TrendingUp, ArrowRight, Timer
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { getServiceData } from '@/config/serviceData';

import serviceData from '@/config/serviceData';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = getServiceData(params.slug);
  const title = data?.title ?? params.slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return constructMetadata({
    title: `${title} in India`,
    description: data?.description ?? `Expert ${title} services in India — handled by qualified professionals. Fast, transparent, and 100% government-compliant.`,
    url: `/services/${params.slug}`,
  });
}

const whyUs = [
  { icon: ShieldCheck, title: 'Expert Professional Team', desc: 'Our qualified Chartered Accountants and Company Secretaries have 16+ years of experience handling complex compliance and registration cases across India.' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'We process registrations and filings in the shortest possible time — keeping you informed at every step with real-time status updates.' },
  { icon: FileText, title: 'End-to-End Documentation', desc: 'We handle all paperwork, government forms, DSC, DIN, and MCA filings — so you just share the documents and we take care of the rest.' },
  { icon: TrendingUp, title: 'Transparent Pricing', desc: 'Fixed, all-inclusive pricing with no hidden fees. Government charges are passed at actuals. You always know exactly what you\'re paying for.' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'A dedicated compliance manager is assigned to your case from start to finish — reachable by phone, WhatsApp, or email at any time.' },
  { icon: Award, title: 'RA Licensed Professional', desc: 'We are officially RA Licensed and approved by the Government of India, providing verified professional services for aviation security and company compliance.' },
];

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const data = getServiceData(params.slug);

  const serviceName = data?.title ?? params.slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const faqs = data?.faqs ?? [
    { question: `What documents are required for ${serviceName} in India?`, answer: `For ${serviceName}, you typically need PAN card, Aadhaar card, passport-size photograph, address proof (bank statement or utility bill), and registered office proof (NOC + electricity bill). Our team sends a tailored document checklist after your free consultation so you share only what is needed.` },
    { question: `How long does ${serviceName} take in India?`, answer: `The timeline for ${serviceName} depends on the government authority's processing speed. On average: company registration takes 7–10 working days, GST registration 3–5 days, trademark filing 18–24 months for final approval.` },
    { question: `What are the penalties for not completing ${serviceName} on time?`, answer: `Delaying or missing ${serviceName.toLowerCase()} compliance can result in MCA penalties of ₹100–₹500 per day, GST late fees of ₹50/day per return, director disqualification, and in severe cases, company strike-off under Section 248 of the Companies Act.` },
    { question: `Can I do ${serviceName} myself without a professional?`, answer: `While technically possible, ${serviceName.toLowerCase()} involves government portals, specific forms, and legal nuances that are easy to get wrong. Errors cause rejection delays and refiling fees. A qualified professional ensures accurate, penalty-free filing the first time.` },
    { question: `Is ${serviceName} mandatory for all businesses in India?`, answer: `Applicability depends on your business type and turnover. Please consult our experts for specific applicability advice.` },
    { question: `What compliance is required after ${serviceName} is complete?`, answer: `After ${serviceName.toLowerCase()}, ongoing compliance includes annual ROC filings, GST return filing, income tax return, and director KYC. Aj Legal Consultant offers annual compliance packages to cover all these obligations.` },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="relative bg-[#1E4E8C] pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)', backgroundSize: '56px 56px' }}
        />
        <div className="absolute -top-40 -left-40 w-[460px] h-[460px] bg-[#112a50] rounded-full blur-[130px] opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-white">
              {data?.tagline && (
                <p className="inline-flex items-center gap-2 text-[#4CAF50] text-xs font-bold uppercase tracking-widest mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {data.tagline}
                </p>
              )}
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.12] tracking-tight mb-5">
                {serviceName}{' '}
                <span className="text-[#4CAF50]">Services</span> in India
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-4">
                {data?.description ?? `Expert-led ${serviceName.toLowerCase()} services handled by qualified professionals. Fast turnaround, transparent pricing, and 100% government-compliant filings.`}
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 mb-4">
                {data?.timeline && (
                  <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5">
                    <Timer className="w-4 h-4 text-[#4CAF50]" />
                    <div>
                      <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Timeline</p>
                      <p className="text-white font-bold text-sm">{data.timeline}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              {data?.highlights && (
                <div className="flex flex-wrap gap-2">
                  {data.highlights.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white/85">
                      <CheckCircle2 className="w-3 h-3 text-[#4CAF50]" /> {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Content Grid ── */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-4">

            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E4E8C] mb-4">Overview</h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
                {data?.description ?? `${serviceName} is an essential compliance step for businesses operating in India. The process involves detailed documentation, government filing with the relevant authority, and constant follow-up. Our team of experts ensures an error-free, penalty-free filing experience.`}
              </p>
              {data?.benefits && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {data.benefits.map((b) => (
                    <div key={b.title} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <h4 className="font-bold text-[#1E4E8C] text-[14px] mb-1">{b.title}</h4>
                      <p className="text-slate-500 text-[13px] leading-snug">{b.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Documents Required */}
            {data?.documents && (
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1E4E8C] mb-6">Documents Required</h2>
                <ul className="space-y-3">
                  {data.documents.map((doc) => (
                    <li key={doc} className="flex items-center gap-3 text-[15px] text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF50] shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQ */}
            <ServiceFAQSection faqs={faqs} serviceName={serviceName} />
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-3">
            {/* CTA Card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden sticky top-28">
              <div className="bg-[#1E4E8C] px-6 py-5">
                <h3 className="text-lg font-bold text-white">Get Free Consultation</h3>
                <p className="text-white/65 text-sm mt-1">Our expert will call you within <span className="font-bold text-white">15 minutes</span></p>
              </div>
              <div className="p-6 space-y-4">
                {data?.timeline && (
                  <div className="flex items-center gap-3 py-2.5 border-b border-slate-100">
                    <Timer className="w-4 h-4 text-[#1E4E8C] shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">Estimated Timeline</p>
                      <p className="text-slate-800 font-semibold text-[14px]">{data.timeline}</p>
                    </div>
                  </div>
                )}

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-[#4CAF50]/20 hover:-translate-y-0.5 group"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="tel:9643862867"
                  className="flex items-center justify-center gap-2 w-full border-2 border-[#1E4E8C] text-[#1E4E8C] hover:bg-[#1E4E8C] hover:text-white font-bold py-3 rounded-xl transition-all text-sm"
                >
                  Call: 9643862867
                </a>
                <p className="text-center text-[11px] text-slate-400">
                  <ShieldCheck className="inline w-3 h-3 mr-1 relative -top-px" />
                  100% confidential · No spam calls
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Why Choose Us ── */}
      <section className="bg-white py-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/6 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
              <Users className="w-3.5 h-3.5 text-[#1E4E8C]" />
              <span className="text-[11px] font-bold text-[#1E4E8C] uppercase tracking-widest">The Smart Choice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4E8C] tracking-tight leading-[1.15] mb-4">
              Why Businesses Choose Our{' '}
              <span className="text-[#4CAF50]">{serviceName}</span> Services
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed">
              Over 1,000 businesses across India trust us for compliance, registration, and legal filings — because we deliver results, not just promises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
            {whyUs.map((item) => (
              <div key={item.title} className="card-hover group bg-white border border-slate-200 rounded-2xl p-7 shadow-sm transition-all duration-300">
                <div className="card-icon-wrap w-14 h-14 bg-[#1E4E8C]/6 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <item.icon className="card-icon w-6 h-6 text-[#1E4E8C] transition-colors duration-300" />
                </div>
                <h3 className="card-title text-[17px] font-extrabold text-[#1E4E8C] mb-2 tracking-tight">{item.title}</h3>
                <p className="card-desc text-slate-500 text-[13.5px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-[#4CAF50]/20 hover:shadow-[#4CAF50]/30 hover:-translate-y-0.5 transition-all duration-300 group/btn"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
            <p className="text-slate-400 text-[12px] mt-3">No commitment · 100% Confidential · Response in 15 minutes</p>
          </div>
        </div>
      </section>

    </div>
  );
}
