'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ShieldCheck, FileText, Calculator, Building2,
  ArrowRight, ChevronLeft, ChevronRight, Star
} from 'lucide-react';

/* ----------------------------------------
   CARD DATA
----------------------------------------- */
const cards = [
  {
    id: 'ra-licence',
    isPrimary: true,
    highlight: 'RA',
    restHeading: 'Licence Registration',
    Icon: ShieldCheck,
    iconBg: '#4CAF50',
    tag: 'Most Popular',
    title: 'RA Licence',
    heading: 'RA Licence Registration India',
    description:
      'RA (Recruiting Agent) Licence Registration is the official process to legally authorize an agency to recruit Indian workers for overseas employment. It is governed by the Emigration Act, 1983 and managed by the Ministry of External Affairs (MEA).',
    features: ['Inspection readiness support', 'Renewal & amendment services'],
    cta: 'Apply Now',
    href: '/services/ra-license',
    accent: '#4CAF50',
    keywords: ['RA Licence India', 'Regulated Agent Licence', 'BCAS Registration', 'Aviation Security'],
  },
  {
    id: 'tds-itr',
    isPrimary: true,
    highlight: 'TDS / ITR',
    restHeading: 'Filing Services',
    Icon: FileText,
    iconBg: '#4CAF50',
    tag: 'Top Rated',
    title: 'TDS / ITR Filing',
    heading: 'TDS & ITR Filing Services',
    description:
      'Stress-free TDS return and ITR filing by qualified CAs. Avoid penalties, claim refunds, and stay 100% compliant with income tax laws.',
    features: ['ITR filing for all categories', 'TDS return filing', 'Income tax notice handling'],
    cta: 'File Now',
    href: '/services/itr-filing',
    accent: '#4CAF50',
    keywords: ['ITR Filing', 'TDS Filing', 'Income Tax Return India'],
  },
  {
    id: 'company-registration',
    isPrimary: true,
    highlight: 'Company',
    restHeading: 'Registration India',
    Icon: Building2,
    iconBg: '#fb923c',
    tag: 'Highly Valued',
    title: 'Company Registration',
    heading: 'Company Registration India',
    description:
      'Register your Private Limited, LLP, OPC, or Sole Proprietorship online in India with expert professional guidance and fast turnaround.',
    features: ['Pvt Ltd, LLP, OPC setup', 'DSC & DIN filing', 'Pan-India service'],
    cta: 'Register Now',
    href: '/services/private-limited-company',
    accent: '#fb923c',
    keywords: ['Company Registration India', 'Private Limited Company', 'LLP Registration'],
  },
  {
    id: 'gst',
    isPrimary: true,
    highlight: 'GST',
    restHeading: 'Registration & Filing',
    Icon: Calculator,
    iconBg: '#38bdf8',
    tag: 'GST Services',
    title: 'GST Registration',
    heading: 'GST Registration & Filing',
    description:
      'Complete GST solutions  -  registration, return filing, GSTR-9, LUT, and notice replies. Stay compliant with India\'s GST regulations.',
    features: ['GST registration online', 'Monthly return filing', 'GST notice reply'],
    cta: 'Get Started',
    href: '/services/gst-registration',
    accent: '#38bdf8',
    keywords: ['GST Registration India', 'GST Return Filing', 'GSTR-9 Annual Filing'],
  },

] as const;

const INTERVAL_MS = 6500;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' as const } },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.35, ease: 'easeIn' as const } }),
};

/* ----------------------------------------
   PRIMARY CARD (RA Licence)
----------------------------------------- */
function PrimaryCard({ card }: { card: typeof cards[0] }) {
  const { Icon, accent } = card;
  return (
    <article
      className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d1f3c] via-[#0f2647] to-[#071020]"
      aria-label={card.heading}
      style={{ border: `1.5px solid ${accent}40`, boxShadow: `0 0 40px ${accent}15, 0 16px 40px rgba(0,0,0,0.4)` }}
    >
      {/* Glows */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full blur-[100px] opacity-30 pointer-events-none" style={{ background: accent }} />
      <div className="absolute -bottom-16 right-0 w-48 h-48 rounded-full blur-[80px] opacity-15 pointer-events-none" style={{ background: accent }} />

      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0">

        {/* Left */}
        <div className="p-6 md:p-8 lg:p-10">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
              style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}45` }}
            >
              <Star className="w-3 h-3 fill-current" /> {card.tag}
            </span>
            <span className="text-white/30 text-[11px] font-medium">Priority Service</span>
          </div>

          {/* H2 heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tight mb-3">
            <span style={{ color: accent }}>{card.highlight}</span> {card.restHeading.split(' ')[0]}<br className="hidden md:block" /> {card.restHeading.substring(card.restHeading.indexOf(' ') + 1)}
          </h2>
          <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed max-w-md mb-5">
            {card.description}
          </p>

          {/* Feature list */}
          <ul className="space-y-1.5 mb-6" aria-label="RA Licence key features">
            {card.features.map(f => (
              <li key={f} className="flex items-center gap-2.5 text-[12px] md:text-[13px] text-white/70">
                <span className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0" style={{ background: `${accent}25` }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* sr-only keywords */}
          <div className="sr-only">{card.keywords.join(', ')}</div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={card.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-[14px] transition-all duration-300 hover:-translate-y-0.5 group/cta"
              style={{ background: accent, color: '#0a1628', boxShadow: `0 6px 20px ${accent}40` }}
              aria-label={`Apply Now for ${card.heading}`}
            >
              {card.cta}
              <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-[13px] border border-white/20 text-white/75 hover:text-white hover:border-white/35 hover:bg-white/6 transition-all duration-300"
            >
              Consultation
            </Link>
          </div>
        </div>

        {/* Right: Large icon display */}
        <div className="hidden md:flex items-center justify-center px-8 lg:px-12 shrink-0">
          <div
            className="relative w-32 h-32 md:w-36 md:h-36 rounded-[2rem] flex items-center justify-center"
            style={{ background: `${accent}10`, border: `1.5px solid ${accent}30` }}
          >
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-[2rem] animate-ping opacity-10" style={{ background: accent }} />
            <Icon
              className="w-16 h-16 md:w-20 md:h-20"
              style={{ color: accent }}
              strokeWidth={1.5}
              aria-label={`${card.title} icon`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ----------------------------------------
   REGULAR CARD
----------------------------------------- */
function ServiceCard({ card }: { card: typeof cards[number] }) {
  const { Icon, accent } = card;
  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1f3c] to-[#071020] h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:from-[#162d55] hover:to-[#0d1e3a]"
      style={{
        border: `1px solid rgba(255,255,255,0.08)`,
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
      aria-label={card.heading}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
        style={{ boxShadow: `0 0 40px ${accent}18, inset 0 0 0 1px ${accent}30` }}
      />

      <div className="relative flex flex-col flex-1 p-5 md:p-6">
        {/* Icon */}
        <div
          className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
          aria-hidden="true"
        >
          <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: accent }} strokeWidth={1.75} />
        </div>

        {/* Tag */}
        <span
          className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-2 self-start"
          style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}35` }}
        >
          {card.tag}
        </span>

        <h3 className="text-white font-extrabold text-[16px] md:text-[18px] leading-snug mb-2">{card.title}</h3>
        <p className="text-white/50 text-[12px] md:text-[13px] leading-relaxed flex-1 mb-5 line-clamp-2">{card.description}</p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {card.features.slice(0, 2).map(f => (
            <li key={f} className="flex items-center gap-2 text-[11px] md:text-[12px] text-white/55">
              <span className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0" style={{ background: `${accent}20` }}>
                <span className="w-1 h-1 rounded-full" style={{ background: accent }} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="sr-only">{card.keywords.join(', ')}</div>

        <Link
          href={card.href}
          className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-xl font-bold text-[12px] md:text-[13px] transition-all duration-300 group-hover:gap-3"
          style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}35` }}
          aria-label={`${card.cta}: ${card.heading}`}
        >
          {card.cta}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}

/* ----------------------------------------
   MAIN COMPONENT
----------------------------------------- */
export default function ServicesCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number, dir = 1) => {
    setDirection(dir);
    setActiveIndex(idx);
  }, []);

  const next = useCallback(() => goTo((activeIndex + 1) % cards.length, 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo((activeIndex - 1 + cards.length) % cards.length, -1), [activeIndex, goTo]);

  useEffect(() => {
    if (!isPaused) intervalRef.current = setInterval(next, INTERVAL_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused, next]);

  const active = cards[activeIndex];

  return (
    <section
      id="services-section"
      className="relative bg-[#060e1d] pt-8 pb-6 md:pt-10 md:pb-16 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)', backgroundSize: '48px 48px' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        {/* <header className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Our Services</span>
          </div>
          <h2 id="services-heading" className="text-3xl md:text-3xl font-extrabold text-white tracking-tight leading-[1.15]">
            Expert Services for <span className="text-green-400">Every Business Need</span>
          </h2>
          <p className="mt-2 text-white/45 text-[14px] max-w-lg mx-auto">
            From <strong className="text-white/70">RA Licence</strong> to <strong className="text-white/70">GST Registration</strong>, <strong className="text-white/70">ITR Filing</strong> to <strong className="text-white/70">Company Registration India</strong>  -  professional-backed, pan-India.
          </p>
        </header> */}

        {/* Carousel area */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={activeIndex} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit">
              {active.isPrimary
                ? <PrimaryCard card={active as typeof cards[0]} />
                : <ServiceCard card={active} />
              }
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next */}
          {(['prev', 'next'] as const).map(dir => (
            <button
              key={dir}
              onClick={dir === 'prev' ? prev : next}
              aria-label={dir === 'prev' ? 'Previous service' : 'Next service'}
              className="absolute top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/8 border border-white/12 text-white hover:bg-white/15 hover:border-white/25 transition-all duration-200 z-10 backdrop-blur-sm"
              style={{ [dir === 'prev' ? 'left' : 'right']: '-20px' }}
            >
              {dir === 'prev' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-7 mb-6" role="tablist" aria-label="Service navigation dots">
          {cards.map((card, idx) => (
            <button
              key={card.id}
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`Show ${card.title}`}
              onClick={() => goTo(idx, idx > activeIndex ? 1 : -1)}
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: idx === activeIndex ? 28 : 8,
                  height: 8,
                  background: idx === activeIndex ? active.accent : 'rgba(255,255,255,0.2)',
                }}
              />
            </button>
          ))}
        </div>

        {/* Thumbnail buttons */}
        <nav
          className="flex justify-center gap-2 flex-wrap"
          aria-label="Quick service navigation"
        >
          {cards.map((card, idx) => {
            const { Icon, accent } = card;
            const isActive = idx === activeIndex;
            return (
              <button
                key={card.id}
                onClick={() => goTo(idx, idx > activeIndex ? 1 : -1)}
                aria-label={`Navigate to ${card.title}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: isActive ? `${accent}15` : 'rgba(255,255,255,0.04)',
                  borderColor: isActive ? `${accent}55` : 'rgba(255,255,255,0.08)',
                  color: isActive ? accent : 'rgba(255,255,255,0.45)',
                  boxShadow: isActive ? `0 4px 16px ${accent}20` : 'none',
                }}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                {card.title}
                {card.isPrimary && (
                  <Star className="w-3 h-3 fill-current" style={{ color: accent }} aria-hidden="true" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Progress bar */}
        {!isPaused && (
          <div className="mt-6 max-w-sm mx-auto h-[2px] bg-white/8 rounded-full overflow-hidden">
            <motion.div
              key={activeIndex}
              className="h-full rounded-full"
              style={{ background: active.accent }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: INTERVAL_MS / 1000, ease: 'linear' }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
