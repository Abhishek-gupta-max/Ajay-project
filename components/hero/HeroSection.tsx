'use client';

import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, Users, CheckCircle2, Lock, Phone, Star } from 'lucide-react';

const trustBadges = [
  { icon: Users, value: '10,000+', label: 'Companies Served' },
  { icon: ShieldCheck, value: 'Expert', label: 'Professional Support' },
  { icon: Clock, value: '15 Min', label: 'Response Time' },
  { icon: Star, value: '4.9/5', label: 'Client Rating' },
];

const services = [
  'RA License Registration',
  'ROC / MCA Filing',
  'GST Registration & Returns',
  'Company Incorporation',
  'Trademark & IP',
  'Income Tax Filing',
  'FSSAI License',
];

export default function HeroSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '' });
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setPhoneError('Please enter a valid phone number.');
      return;
    }
    setPhoneError('');
    setIsSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: formData.service || 'RA License Registration',
        }),
      });
      setFormData({ name: '', phone: '', service: '' });
    } catch (err) {
      console.error('[HeroSection] Lead submission failed:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section
      className="relative bg-[#1E4E8C] overflow-hidden"
      aria-label="Corporate Compliance Services Hero"
    >
      {/* Subtle diagonal pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Ambient depth glows */}
      <div className="absolute -top-32 -left-48 w-[520px] h-[520px] bg-[#112a50] rounded-full blur-[140px] opacity-60 pointer-events-none" />
      <div className="absolute -bottom-32 -right-48 w-[460px] h-[460px] bg-[#163665] rounded-full blur-[130px] opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 lg:pt-24 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ──────────────────────────────────────
              LEFT: SEO Content + Trust Signals
          ────────────────────────────────────── */}
          <div className="text-white">

            {/* Keyword pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-3 animate-fade-in-up-d1">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
              <span className="text-xs font-semibold text-white/90 uppercase tracking-widest">
                RA Licensed Professional · ISO Certified · Pan-India
              </span>
            </div>

            {/* =========== SEO H1 =========== */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.12] tracking-tight text-white mb-3 animate-fade-in-up-d1">
              Corporate{' '}
              <span className="text-[#4CAF50]">Compliance</span>
              <br className="hidden sm:block" />
              {' '}Services in India
            </h1>

            {/* Subheading with keywords */}
            <p className="text-[16px] sm:text-base text-white/80 leading-relaxed max-w-lg mb-3 animate-fade-in-up-d2">
              End-to-end compliance management — <strong className="text-white font-semibold">ROC / MCA filing</strong>,{' '}
              <strong className="text-white font-semibold">GST registration &amp; returns</strong>, company incorporation, and{' '}
              <strong className="text-white font-semibold">legal compliance</strong> — handled by expert CAs and CSs.
            </p>

            {/* SEO keyword paragraph (hidden visually but crawlable) */}
            <p className="text-sm text-white/55 leading-relaxed max-w-lg mb-3 animate-fade-in-up-d2">
              Aj Legal Consultant (I) Private Limited offers comprehensive corporate consultancy services across India including
              Private Limited company registration, LLP formation, GST filing, ROC annual compliance,
              trademark registration, FSSAI license, income tax return filing, and MCA secretarial services
              for startups, SMEs, and large enterprises nationwide.
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 mb-4 animate-fade-in-up-d2">
              {services.map((s) => (
                <span
                  key={s}
                  className="px-3.5 py-1.5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full text-xs font-semibold text-white/85 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* ── Trust Badges Grid ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-in-up-d3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center text-center bg-white/[0.07] border border-white/15 rounded-2xl px-3 py-4 hover:bg-white/10 transition-colors"
                >
                  <badge.icon className="w-5 h-5 text-[#4CAF50] mb-2" />
                  <span className="text-lg font-extrabold text-white leading-none">{badge.value}</span>
                  <span className="text-[11px] font-medium text-white/55 mt-1 leading-tight">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Phone CTA strip */}
            <div className="flex items-center gap-3 mt-3 animate-fade-in-up-d3">
              <div className="w-10 h-10 rounded-full bg-[#4CAF50]/20 border border-[#4CAF50]/40 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#4CAF50]" />
              </div>
              <div>
                <p className="text-[11px] text-white/50 uppercase tracking-widest font-semibold">Call us directly</p>
                <a href="tel:9643862867" className="text-white font-bold text-[15px] hover:text-[#4CAF50] transition-colors">
                  9643862867
                </a>
              </div>
            </div>
          </div>

          {/* ──────────────────────────────────────
              RIGHT: Lead Capture Form
          ────────────────────────────────────── */}
          <div className="animate-fade-in-up-d3 lg:pt-4">
            {/* Glow behind card */}
            <div className="absolute hidden lg:block top-1/2 right-4 xl:right-16 -translate-y-1/2 w-[420px] h-[480px] bg-[#112a50] blur-[90px] opacity-40 rounded-full pointer-events-none" />

            <div className="relative bg-white rounded-3xl shadow-[0_16px_60px_rgba(0,0,0,0.28)] border border-white/10 overflow-hidden">

              {/* Card header band */}
              <div className="bg-[#1E4E8C] px-6 py-4 border-b border-slate-100">
                <h2 className="text-xl font-bold text-white tracking-tight">Get Free Consultation</h2>
                <p className="text-white/65 text-sm mt-1">
                  Our professional will call you within <span className="font-semibold text-white">15 minutes</span>
                </p>
              </div>

              <div className="px-6 py-4">
                {submitted ? (
                  <div className="py-10 text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[#4CAF50]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1E4E8C] mb-1">Request Received!</h3>
                    <p className="text-slate-500 text-sm">Our expert will contact you shortly.</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                      <label className="block text-[12px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/30 focus:border-[#4CAF50] transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[12px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        maxLength={17}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9+\-\s()]/g, '');
                          setFormData({ ...formData, phone: val });
                          setPhoneError('');
                        }}
                        className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl text-slate-800 placeholder-slate-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/30 focus:border-[#4CAF50] transition-all ${phoneError ? 'border-red-400' : 'border-slate-200'}`}
                      />
                      {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-[12px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/30 focus:border-[#4CAF50] transition-all appearance-none"
                      >
                        <option>RA License Registration</option>
                        <option>Company Registration</option>
                        <option>GST Registration &amp; Filing</option>
                        <option>ROC / MCA Compliance</option>
                        <option>Trademark Filing</option>
                        <option>Income Tax Return</option>
                        <option>FSSAI License</option>
                        <option>Other Compliance</option>
                      </select>
                    </div>

                    {/* CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 bg-[#4CAF50] hover:bg-[#43A047] disabled:opacity-70 text-white font-bold text-[15px] py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(76,175,80,0.35)] hover:shadow-[0_6px_24px_rgba(76,175,80,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group/btn"
                    >
                      {isSubmitting ? (
                        <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Submitting…</>
                      ) : (
                        <>Get Free Consultation <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></>
                      )}
                    </button>

                    {/* Micro-trust row */}
                    <div className="flex items-center justify-center gap-4 pt-1">
                      <span className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                        <Lock className="w-3 h-3" /> 100% Confidential
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-[#4CAF50]" /> No Spam Calls
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                        <Clock className="w-3 h-3" /> 15 Min Reply
                      </span>
                    </div>
                  </form>
                )}
              </div>

              {/* Bottom compliance bar */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1E4E8C] shrink-0" />
                <p className="text-[11px] text-slate-500 font-medium">
                  Data protected under the IT Act, 2000. Your information is never shared.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

