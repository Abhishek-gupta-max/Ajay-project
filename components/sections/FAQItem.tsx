'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQEntry {
  id: string;
  question: string;
  answer: string;
  tags: string[];
}

export function FAQItem({
  faq,
  defaultOpen = false,
}: {
  faq: FAQEntry;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        open
          ? 'border-[#1E4E8C]/25 shadow-md shadow-[#1E4E8C]/5'
          : 'border-slate-200 shadow-sm'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-4 text-left px-6 py-5 transition-colors ${
          open ? 'bg-[#1E4E8C]/[0.03]' : 'bg-white hover:bg-slate-50'
        }`}
        aria-expanded={open}
      >
        <span
          itemProp="name"
          className="font-bold text-[15px] text-[#1E4E8C] leading-snug pr-2"
        >
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180 text-[#1E4E8C]' : ''
          }`}
        />
      </button>

      {open && (
        <div
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
          className="px-6 pb-6 pt-1 bg-white border-t border-slate-100"
        >
          <p itemProp="text" className="text-slate-600 text-[14.5px] leading-relaxed mb-4">
            {faq.answer}
          </p>
          <div className="flex flex-wrap gap-2">
            {faq.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold text-[#1E4E8C] bg-[#1E4E8C]/6 border border-[#1E4E8C]/10 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
