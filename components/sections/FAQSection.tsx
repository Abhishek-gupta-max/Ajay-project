import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FAQItem, type FAQEntry } from './FAQItem';

const faqs: FAQEntry[] = [
  {
    id: 'faq-1',
    question: 'What is ROC compliance and why is it mandatory for companies in India?',
    answer:
      'ROC (Registrar of Companies) compliance refers to the annual filing obligations under the Companies Act, 2013 — including AOC-4 (financial statements), MGT-7 (annual return), and director KYC (DIR-3). All registered private limited companies must file these on time to avoid MCA penalties of ₹100 per day per form.',
    tags: ['ROC Filing', 'MCA Compliance', 'Companies Act'],
  },
  {
    id: 'faq-2',
    question: 'What are the penalties for late GST return filing in India?',
    answer:
      'Late GST return filing attracts a late fee of ₹50 per day (₹20 per day for Nil returns) under CGST + SGST, capped at ₹10,000 per return. Additionally, unpaid GST attracts 18% annual interest. Timely GSTR-1, GSTR-3B, and annual GSTR-9 filing is essential for all GST-registered businesses.',
    tags: ['GST Penalty', 'GSTR Filing', 'Late Fees'],
  },
  {
    id: 'faq-3',
    question: 'How long does it take to register a Private Limited Company in India?',
    answer:
      'Private Limited Company incorporation typically takes 7–10 working days with the Ministry of Corporate Affairs (MCA). This includes DSC issuance, DIN approval, name reservation (SPICe+ Part A), and final certificate of incorporation. Our experts ensure a smooth, penalty-free registration with all filings completed on time.',
    tags: ['Company Registration', 'Pvt Ltd', 'MCA Filing'],
  },
  {
    id: 'faq-4',
    question: 'Can I get GST registration for my startup or new business in India?',
    answer:
      'Yes. Any business with annual turnover exceeding ₹40 lakh (goods) or ₹20 lakh (services) must register under GST. Startups and e-commerce sellers must register regardless of turnover. We help obtain GSTIN within 3–5 working days with minimal documentation — PAN, Aadhaar, bank details, and business address proof.',
    tags: ['GST Registration', 'Startup Compliance', 'GSTIN'],
  },
  {
    id: 'faq-5',
    question: 'What documents are required for annual ROC compliance filing?',
    answer:
      "Annual ROC compliance requires audited financial statements, Board and shareholder resolutions, director details, and the company's annual return (MGT-7). You also need DIN KYC confirmations for all directors. Our compliance team collects and prepares all documents, ensuring accurate and timely MCA filing without penalties.",
    tags: ['ROC Documents', 'Annual Filing', 'AOC-4'],
  },
  {
    id: 'faq-6',
    question: 'What happens if a company misses its annual compliance deadlines?',
    answer:
      'Missing annual compliance deadlines attracts MCA penalties starting at ₹100/day per form. Persistent non-compliance can lead to DIN deactivation, director disqualification, and company strike-off under Section 248. The penalties compound quickly — early filing is always recommended to protect your business and directors.',
    tags: ['Non-Compliance Penalty', 'Director Disqualification', 'Strike-Off'],
  },
  {
    id: 'faq-7',
    question: 'Do small businesses and LLPs need to file income tax returns in India?',
    answer:
      'Yes. All LLPs, companies, and businesses with income above the basic exemption limit must file annual income tax returns. LLPs file ITR-5 and companies file ITR-6. Filing is mandatory even for Nil income. The due date is typically 31st October for audit cases and 31st July for non-audit businesses.',
    tags: ['Income Tax Return', 'LLP Filing', 'ITR Deadline'],
  },
  {
    id: 'faq-8',
    question: 'How much do corporate compliance services cost in India?',
    answer:
      'Corporate compliance service costs vary by type. Basic annual ROC compliance starts from ₹4,999, GST return filing from ₹999/month, and company registration from ₹6,999 all-inclusive. Aj Legal Consultant (I) Private Limited offers transparent, fixed-fee packages with no hidden charges — contact us for a free consultation and custom quote.',
    tags: ['Compliance Cost', 'Pricing', 'ROC Fees'],
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-8 border-t border-slate-100">
      {/* JSON-LD FAQ Schema for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* ── Section Header ── */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/6 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
            <HelpCircle className="w-3.5 h-3.5 text-[#1E4E8C]" />
            <span className="text-[11px] font-bold text-[#1E4E8C] uppercase tracking-widest">
              Got Questions?
            </span>
          </div>
          {/* SEO H2 */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1E4E8C] tracking-tight leading-[1.15] mb-4">
            Frequently Asked Questions
            <br className="hidden sm:block" />{' '}
            <span className="text-[#4CAF50]">on Compliance Services</span>
          </h2>
          <p className="text-slate-500 text-[16px] leading-relaxed max-w-xl mx-auto">
            Clear answers on GST filing, ROC compliance, company registration,
            income tax returns, and penalty rules in India.
          </p>
        </div>

        {/* ── FAQ Accordion ── */}
        <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, idx) => (
            <FAQItem key={faq.id} faq={faq} defaultOpen={idx === 0} />
          ))}
        </div>


      </div>
    </section>
  );
}
