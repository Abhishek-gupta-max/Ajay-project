'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, X } from 'lucide-react';

// const KEY_FACTS = [
//   { icon: <Globe className="w-4 h-4" />, label: 'Validity', value: '5 Years', color: 'text-green-700 bg-green-50 border-green-100' },
//   { icon: <ShieldCheck className="w-4 h-4" />, label: 'Issuing Authority', value: 'MEA / PGE', color: 'text-blue-700 bg-blue-50 border-blue-100' },
//   { icon: <FileText className="w-4 h-4" />, label: 'Portal', value: 'eMigrate', color: 'text-purple-700 bg-purple-50 border-purple-100' },
// ];

const COMPLIANCE_POINTS = [
  'Mandatory under Emigration Act, 1983 (Section 10)',
  'Issued by Protector General of Emigrants (PGE), MEA',
  'Applications submitted via eMigrate Portal — jurisdiction-based processing',
  'Operating without licence = Illegal recruitment (equivalent to human trafficking)',
  'Valid RC verification available on eMigrate portal',
];

export default function RALicensingPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatingIn, setAnimatingIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimatingIn(true));
      });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll while popup is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isVisible]);

  const close = () => {
    setAnimatingIn(false);
    setTimeout(() => setIsVisible(false), 350);
  };

  if (!isVisible) return null;

  return (
    /* Backdrop overlay */
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 transition-all duration-300 ${animatingIn ? 'bg-slate-900/70 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none pointer-events-none'
        }`}
      onClick={close}
    >
      {/* Modal card */}
      <div
        className={`relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform ${animatingIn ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-5'
          }`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '92vh', overflowY: 'auto' }}
      >
        {/* ── TOP-RIGHT CLOSE BUTTON ── */}
        <button
          onClick={close}
          aria-label="Close popup"
          className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-md text-slate-600 hover:text-slate-900 transition-all hover:scale-110"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── IMAGE BANNER — fills width, fixed height ── */}
        <div className="relative w-full h-44 sm:h-52 overflow-hidden shrink-0">
          <Image
            src="/ra-licensing-banner.png"
            alt="Recruiting Agent (RA) License – Ministry of External Affairs, India"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Bottom gradient so text below sits cleanly */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d]/80 via-[#0b1e3d]/10 to-transparent" />

          {/* Authority pill — top left */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-amber-400/95 text-amber-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow tracking-wide uppercase">
            <ShieldCheck className="w-3 h-3" />
            Ministry of External Affairs
          </div>

          {/* Title overlay — bottom of image */}
          <div className="absolute bottom-3 left-4 right-10">
            <p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-0.5">
              Government of India — Mandatory Registration
            </p>
            <h2 className="text-white text-lg sm:text-xl font-bold leading-tight drop-shadow-md">
              Recruiting Agent (RA) License
            </h2>
            <p className="text-white/70 text-[11px] mt-0.5">Emigration Act, 1983 · eMigrate Portal</p>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="p-5 sm:p-6">

          {/* Short description */}
          <p className="text-slate-600 text-[13px] leading-relaxed mb-4">
            An <span className="font-semibold text-slate-800">RA License</span> is mandatory for any agency recruiting
            Indian citizens for <span className="font-semibold text-[#1e4e8c]">overseas employment</span> under the
            Emigration Act, 1983. It is issued by the{' '}
            <span className="font-semibold text-slate-800">Protector General of Emigrants (PGE)</span>, MEA, through
            the eMigrate portal and is valid for <strong>5 years</strong>.
          </p>

          {/* Key facts grid */}
          {/* <div className="grid grid-cols-3 gap-2 mb-4">
            {KEY_FACTS.map((fact, i) => (
              <div
                key={`fact-${i}`}
                className={`flex flex-col items-center text-center rounded-xl border p-2.5 gap-1 ${fact.color}`}
              >
                <div className="opacity-80">{fact.icon}</div>
                <p className="text-[11px] font-semibold leading-tight">{fact.label}</p>
                <p className="text-[13px] font-extrabold leading-tight">{fact.value}</p>
              </div>
            ))}
          </div> */}


          {/* Compliance checklist */}
          <div className="mb-5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Key Compliance Points</h3>
            <ul className="space-y-1.5">
              {COMPLIANCE_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1e4e8c] shrink-0 mt-[3px]" />
                  <span className="text-slate-700 text-[12.5px] leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Link
              href="/contact"
              onClick={close}
              className="flex-1 text-center py-3 px-6 bg-[#1e4e8c] hover:bg-[#163665] text-white text-[13.5px] font-bold rounded-xl shadow-lg shadow-[#1e4e8c]/20 transition-all hover:-translate-y-0.5"
            >
              Apply Now →
            </Link>
            <button
              onClick={close}
              className="flex-1 py-3 px-6 border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[13.5px] font-semibold rounded-xl transition-all hover:-translate-y-0.5"
            >
              Close
            </button>
          </div>

          <p className="text-center text-[10.5px] text-slate-400 mt-3 leading-relaxed">
            Source: Ministry of External Affairs, Govt. of India · eMigrate Portal<br />
            Our experts handle end-to-end documentation &amp; submission.
          </p>
        </div>
      </div>
    </div>
  );
}
