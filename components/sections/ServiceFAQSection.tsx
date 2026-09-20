'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown, HelpCircle, ArrowRight, ShieldCheck, MessageSquare
} from 'lucide-react';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: ServiceFAQ[];
  serviceName: string;
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: ServiceFAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        isOpen
          ? 'border-[#1E4E8C]/30 shadow-md shadow-[#1E4E8C]/5 bg-[#1E4E8C]/[0.02]'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
      }`}
    >
      {/* Question button */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-4 text-left px-6 py-5 group"
      >
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Step number */}
          <span
            className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold mt-0.5 transition-colors ${
              isOpen
                ? 'bg-[#1E4E8C] text-white'
                : 'bg-slate-100 text-slate-400 group-hover:bg-[#1E4E8C]/10 group-hover:text-[#1E4E8C]'
            }`}
          >
            {index + 1}
          </span>
          <span
            itemProp="name"
            className={`font-bold text-[15px] leading-snug transition-colors ${
              isOpen ? 'text-[#1E4E8C]' : 'text-slate-800 group-hover:text-[#1E4E8C]'
            }`}
          >
            {faq.question}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 shrink-0 mt-0.5 transition-all duration-300 ${
            isOpen ? 'rotate-180 text-[#1E4E8C]' : 'text-slate-400 group-hover:text-[#1E4E8C]'
          }`}
        />
      </button>

      {/* Answer — CSS max-height transition for smooth animation */}
      <div
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 pt-0 border-t border-slate-100 ml-9">
            <p
              itemProp="text"
              className="text-slate-600 text-[14.5px] leading-relaxed pt-4"
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceFAQSection({ faqs, serviceName }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="service-faq" className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />

      {/* Section header */}
      <div className="flex items-center gap-3 mb-7">
        <div className="w-10 h-10 bg-[#1E4E8C]/8 rounded-xl flex items-center justify-center shrink-0">
          <HelpCircle className="w-5 h-5 text-[#1E4E8C]" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-[#4CAF50] uppercase tracking-widest mb-0.5">
            You Asked, We Answered
          </p>
          <h2 className="text-xl font-extrabold text-[#1E4E8C] leading-tight">
            Frequently Asked Questions — {serviceName}
          </h2>
        </div>
      </div>

      {/* FAQ accordion */}
      <div
        className="space-y-3 mb-4"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            faq={faq}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#1E4E8C]/8 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
            <MessageSquare className="w-5 h-5 text-[#1E4E8C]" />
          </div>
          <div>
            <p className="font-bold text-[#1E4E8C] text-[15px] mb-0.5">
              Still have questions?
            </p>
            <p className="text-slate-500 text-[13px]">
              Our compliance experts respond within <span className="font-semibold text-slate-700">15 minutes</span>.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold text-[13.5px] px-6 py-3 rounded-xl shadow-md shadow-[#4CAF50]/20 hover:shadow-[#4CAF50]/30 hover:-translate-y-0.5 transition-all duration-200 group/btn whitespace-nowrap shrink-0"
        >
          Get Free Consultation
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Trust note */}
      <p className="text-center text-[11px] text-slate-400 mt-4">
        <ShieldCheck className="inline w-3 h-3 mr-1 relative -top-px text-[#4CAF50]" />
        100% confidential · No commitment required · IT Act 2000 compliant
      </p>
    </section>
  );
}
