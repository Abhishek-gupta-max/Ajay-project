'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Mail, Clock, CheckCircle2,
  ArrowRight, Shield, Star, Users, Zap, Building2, MessageSquare
} from 'lucide-react';

const services = [
  'RA Licence',
  'Company Registration',
  'ROC / MCA Filing',
  'GST Registration & Filing',
  'Income Tax Return',
  'Trademark Filing',
  'FSSAI License',
  'Legal Compliance',
  'Other Query',
];

const contactDetails = [
  {
    icon: Phone,
    label: 'Call Us Directly',
    value: '9643862867',
    sub: 'Mon - Sat, 10:00 AM - 6:00 PM',
    href: 'tel:9643862867',
    color: 'text-[#1E4E8C]',
    bg: 'bg-[#1E4E8C]/8',
  },
  {
    icon: Mail,
    label: 'Email Support',
    value: 'info@ajlegalconsultant.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@ajlegalconsultant.com',
    color: 'text-[#4CAF50]',
    bg: 'bg-[#4CAF50]/8',
  },
  {
    icon: MapPin,
    label: 'Visit Our Office',
    value: 'No G 16, Dharmpal Palace',
    sub: 'Sector 27, Noida 201301',
    href: 'https://maps.google.com/?q=Sector+27+Noida',
    color: 'text-[#1E4E8C]',
    bg: 'bg-[#1E4E8C]/8',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon - Sat',
    sub: '10:00 AM - 6:00 PM IST',
    href: null,
    color: 'text-[#4CAF50]',
    bg: 'bg-[#4CAF50]/8',
  },
];

const trustPoints = [
  'Response within 24 hours  -  guaranteed',
  'Dedicated professional assigned to your case',
  'Free initial consultation, no hidden charges',
  'Served 10,000+ businesses across India',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.service) {
      alert("Please fill all the details properly.");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        alert('Failed to send request. Please try again or call us directly.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      {/* ---------------------------------------------
          PAGE HEAD  -  SEO meta is handled in layout
      --------------------------------------------- */}

      {/* -- 1. Hero Banner -- */}
      <section className="relative bg-[#1E4E8C] pt-28 pb-10 overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#112a50] rounded-full blur-[140px] opacity-60 pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#163665] rounded-full blur-[120px] opacity-50 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-white/50 font-medium mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Contact</span>
          </nav>

          {/* SEO H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
            Contact{' '}
            <span className="text-[#4CAF50]">Compliance Experts</span>
            <br className="hidden sm:block" /> in India
          </h1>

          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Reach our team of qualified CAs and CSs for company registration, GST filing,
            ROC compliance, and all corporate legal services  -  pan-India.
          </p>

          {/* Quick trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Zap, text: 'Response within 24 hours' },
              { icon: Shield, text: '100% Confidential' },
              { icon: Users, text: '10,000+ Businesses Helped' },
              { icon: Star, text: '4.9 / 5 Rating' },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs font-semibold text-white/85"
              >
                <Icon className="w-3 h-3 text-[#4CAF50]" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* -- 2. Main Content: Form + Side Info -- */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-10 lg:gap-14 items-start">

            {/* -- LEFT: Contact Form -- */}
            <div className="bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.07)] border border-slate-100 overflow-hidden">

              {/* Form header */}
              <div className="bg-[#1E4E8C] px-8 py-7">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Book Free Consultation</h2>
                    <p className="text-white/65 text-sm mt-0.5">
                      We respond within <span className="font-semibold text-white">24 hours</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-8">
                {submitted ? (
                  /* -- Success State -- */
                  <div className="py-14 text-center">
                    <div className="w-20 h-20 bg-[#4CAF50]/10 border border-[#4CAF50]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-9 h-9 text-[#4CAF50]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E4E8C] mb-2">Request Received!</h3>
                    <p className="text-slate-500 text-[15px] max-w-sm mx-auto mb-4">
                      Thank you! Our compliance expert will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }); }}
                      className="px-8 py-3 border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-colors text-sm"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Rajesh Kumar"
                          value={form.name}
                          onChange={set('name')}
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/25 focus:border-[#4CAF50] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="9876543210"
                          value={form.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '');
                            if (val.length <= 10) {
                              setForm(f => ({ ...f, phone: val }));
                            }
                          }}
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/25 focus:border-[#4CAF50] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@example.com"
                        value={form.email}
                        onChange={set('email')}
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/25 focus:border-[#4CAF50] transition-all"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={form.service}
                        onChange={set('service')}
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/25 focus:border-[#4CAF50] transition-all appearance-none"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Message <span className="text-slate-300 font-normal normal-case">(optional)</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us briefly about your requirement..."
                        value={form.message}
                        onChange={set('message')}
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/25 focus:border-[#4CAF50] transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-[#4CAF50] hover:bg-[#43A047] disabled:opacity-70 text-white font-bold text-[15px] rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(76,175,80,0.3)] hover:shadow-[0_6px_24px_rgba(76,175,80,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group/btn"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Book Free Consultation
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Micro-trust */}
                    <p className="text-center text-[11px] text-slate-400 pt-1">
                      <Shield className="inline w-3 h-3 mr-1 relative -top-px" />
                      Your data is 100% confidential. We never share your information. IT Act 2000 compliant.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* -- RIGHT: Contact Info + Trust + Map -- */}
            <div className="space-y-3">

              {/* Contact Details Cards */}
              {contactDetails.map((c) => (
                <div
                  key={c.label}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${c.bg}`}>
                    <c.icon className={`w-5 h-5 ${c.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`font-bold text-[15px] ${c.color} hover:underline underline-offset-2 block truncate`}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className={`font-bold text-[15px] ${c.color}`}>{c.value}</p>
                    )}
                    <p className="text-slate-500 text-[13px] mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}

              {/* Trust Checklist Box */}
              <div className="bg-[#1E4E8C] rounded-2xl p-6 border border-[#1a4279]">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-[#4CAF50]" />
                  <h3 className="font-bold text-white text-[15px]">Why Contact Us?</h3>
                </div>
                <ul className="space-y-3">
                  {trustPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[13px] text-white/80 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  title="Aj Legal Consultant Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8!2d77.35!3d28.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzEyLjAiTiA3N8KwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="bg-white px-4 py-3 border-t border-slate-100 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1E4E8C] shrink-0" />
                  <p className="text-[12px] text-slate-500 font-medium">
                    No G 16, Dharmpal Palace, Sector 27, Noida 201301, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- 3. Alternative Contact Methods -- */}
      <section className="bg-white py-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Prefer a different way?</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E4E8C] mb-4">Reach Us Any Way You Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                label: 'Call Now',
                value: '9643862867',
                desc: 'Speak directly with a compliance expert',
                icon: Phone,
                href: 'tel:9643862867',
                cta: 'Call Now',
                primary: false,
              },
              {
                label: 'WhatsApp',
                value: 'Chat on WhatsApp',
                desc: 'Message us on WhatsApp for quick replies',
                icon: MessageSquare,
                href: 'https://wa.me/9110204280165',
                cta: 'Open WhatsApp',
                primary: true,
              },
              {
                label: 'Email',
                value: 'info@ajlegalconsultant.com',
                desc: 'Email us your documents or queries',
                icon: Mail,
                href: 'mailto:info@ajlegalconsultant.com',
                cta: 'Send Email',
                primary: false,
              },
            ].map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`group flex flex-col items-center text-center p-7 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg ${method.primary
                  ? 'bg-[#4CAF50] border-[#4CAF50] text-white shadow-[0_4px_20px_rgba(76,175,80,0.2)] hover:shadow-[0_8px_28px_rgba(76,175,80,0.3)]'
                  : 'bg-white border-slate-200 hover:border-[#1E4E8C]/30'
                  }`}
              >
                <div className={`w-13 h-13 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${method.primary ? 'bg-white/20' : 'bg-[#1E4E8C]/6'
                  }`}>
                  <method.icon className={`w-6 h-6 ${method.primary ? 'text-white' : 'text-[#1E4E8C]'}`} />
                </div>
                <p className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${method.primary ? 'text-white/70' : 'text-slate-400'}`}>
                  {method.label}
                </p>
                <p className={`font-bold text-[15px] mb-1.5 ${method.primary ? 'text-white' : 'text-[#1E4E8C]'}`}>
                  {method.value}
                </p>
                <p className={`text-[13px] mb-5 ${method.primary ? 'text-white/70' : 'text-slate-500'}`}>
                  {method.desc}
                </p>
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-colors ${method.primary
                  ? 'bg-white text-[#4CAF50]'
                  : 'bg-[#1E4E8C]/8 text-[#1E4E8C] group-hover:bg-[#1E4E8C] group-hover:text-white'
                  }`}>
                  {method.cta}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* -- 4. SEO Schema-friendly bottom block -- */}
      <section className="bg-slate-50 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-500 text-[13px] leading-relaxed">
            Aj Legal Consultant (I) Private Limited provides corporate consultancy services across India including company registration,
            GST filing, ROC / MCA annual compliance, income tax returns, trademark registration,
            and legal secretarial services. Our offices are located in Noida, serving clients pan-India
            including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and all major cities.
            Contact our compliance experts today for a free consultation.
          </p>
        </div>
      </section>
    </>
  );
}

