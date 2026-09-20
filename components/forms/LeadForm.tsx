'use client';

import React, { useState } from 'react';
import { ArrowRight, Lock, Clock, CheckCircle2, Shield, Zap } from 'lucide-react';

const trustPills = [
  { icon: Lock,  text: '100% Secure & Confidential' },
  { icon: Zap,   text: 'Reply in 15 Minutes' },
  { icon: Clock, text: 'Limited-Time Free Consultation' },
];

export default function LeadForm({
  serviceSlug = 'general-inquiry',
  serviceName = 'Section 8 Company Registration',
}: {
  serviceSlug?: string;
  serviceName?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phoneVal = formData.get('phone') as string;
    const emailVal = formData.get('email') as string;
    const phoneDigits = phoneVal.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setPhoneError('Please enter a valid phone number (7–15 digits).');
      return;
    }
    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setPhoneError('');
    setEmailError('');
    setLoading(true);
    const data = {
      name: formData.get('name'),
      email: emailVal,
      phone: phoneVal,
      serviceSlug,
    };
    const formElement = e.currentTarget;
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        formElement.reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-[#4CAF50]/10 border border-[#4CAF50]/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9 text-[#4CAF50]" />
        </div>
        <h3 className="text-xl font-bold text-[#1E4E8C] mb-2">Request Received!</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Our expert professional will contact you within 15 minutes to discuss your {serviceName}.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">

      {/* Card Header */}
      <div className="bg-[#1E4E8C] px-7 py-6">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#4CAF50]/20 border border-[#4CAF50]/30 rounded-full px-3 py-1 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
          <span className="text-[10px] font-bold text-[#4CAF50] uppercase tracking-widest">
            Limited-Time Free Consultation
          </span>
        </div>
        <h3 className="text-lg font-extrabold text-white leading-tight mb-1">
          Get Free {serviceName} Consultation
        </h3>
        <p className="text-white/60 text-[13px]">
          Our professional will call you within <span className="text-white font-semibold">15 minutes</span>
        </p>
      </div>

      <div className="px-7 py-6">
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Rajesh Kumar"
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/25 focus:border-[#4CAF50] transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              maxLength={17}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9+\-\s()]/g, '');
                setPhoneError('');
              }}
              className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl text-slate-800 placeholder-slate-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/25 focus:border-[#4CAF50] transition-all ${phoneError ? 'border-red-400' : 'border-slate-200'}`}
            />
            {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="rajesh@example.com"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              onChange={() => setEmailError('')}
              className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl text-slate-800 placeholder-slate-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/25 focus:border-[#4CAF50] transition-all ${emailError ? 'border-red-400' : 'border-slate-200'}`}
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>

          {/* Submit CTA */}
          <button
            disabled={loading}
            type="submit"
            className="w-full mt-2 bg-[#4CAF50] hover:bg-[#43A047] disabled:opacity-70 text-white font-bold text-[15px] py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(76,175,80,0.3)] hover:shadow-[0_6px_24px_rgba(76,175,80,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group/btn"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                Start Registration
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Trust pills */}
        <div className="mt-5 space-y-2">
          {trustPills.map((p) => (
            <div key={p.text} className="flex items-center gap-2 text-[12px] text-slate-500 font-medium">
              <p.icon className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
              {p.text}
            </div>
          ))}
        </div>

        {/* Legal note */}
        <p className="text-[11px] text-slate-400 text-center mt-4 leading-snug">
          <Shield className="inline w-3 h-3 mr-1 relative -top-px" />
          Data protected under IT Act, 2000. We never share your information.
        </p>
      </div>
    </div>
  );
}
