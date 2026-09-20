'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  FileCheck,
  Briefcase,
  Users,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Building,
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function ForeignCompanyIncorporation() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: 'Foreign Company Incorporation', message: '' });
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
        setForm({ name: '', phone: '', email: '', service: 'Foreign Company Incorporation', message: '' });
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

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12">

          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-8 space-y-4 md:space-y-10">

            {/* 1. Hero Section */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-[80px] opacity-60 -mr-20 -mt-20 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 shadow-sm mb-6">
                  <span className="text-[11px] font-bold text-primary-600 uppercase tracking-widest">Business Registration</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                  Incorporation of Foreign Company in India
                </h1>
                <p className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
                  Expand your business globally by registering a foreign company in India with expert legal support and hassle-free compliance.
                </p>

                {/* Trust Bar inside Hero */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
                    <Star className="w-4 h-4 fill-[#4CAF50] text-[#4CAF50]" /> 4.9 Rating
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
                    <Building className="w-4 h-4 text-primary-600" /> 10000+ Companies Registered
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
                    <Clock className="w-4 h-4 text-accent-600" /> Fast Processing
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-green-600" /> 100% Secure
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3.5 bg-[#4CAF50] hover:bg-[#43A047] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#4CAF50]/25 hover:-translate-y-0.5">
                    Get Free Consultation <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-3.5 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-xl font-bold transition-all flex items-center justify-center">
                    Talk to Expert
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#4CAF50] text-[#4CAF50]" />)}
                </div>
                <h4 className="font-bold text-slate-900 text-[17px]">98% Satisfaction</h4>
                <p className="text-[13px] text-slate-500 mt-1">From happy clients</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-[17px]">13,000+</h4>
                <p className="text-[13px] text-slate-500 mt-1">Consultations Assisted</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-2xl flex items-center justify-center mb-3">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-[17px]">16+ Years</h4>
                <p className="text-[13px] text-slate-500 mt-1">Industry Experience</p>
              </div>
            </div>

            {/* 3. Overview */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-primary-500"></span>
                Overview of Incorporation
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-[15px] leading-relaxed">
                <p className="mb-4">Foreign companies can establish their presence in India through various structures such as Liaison Office, Branch Office, or Subsidiary Company.</p>
                <p>This allows global businesses to operate legally, expand their reach, and access the Indian market efficiently with full compliance to RBI and MCA guidelines.</p>
              </div>
            </div>

            {/* 4. Company Structure */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-secondary-500"></span>
                Types of Business Structures Available
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Liaison Office', 'Branch Office', 'Wholly Owned Subsidiary', 'Joint Venture'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-primary-50 hover:border-primary-100 transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-primary-600/50 group-hover:text-primary-600 shrink-0 transition-colors" />
                    <span className="font-semibold text-slate-800 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Documents Required */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-primary-500"></span>
                Documents Required
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12">
                {/* Company Docs */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                      <Building className="w-5 h-5" />
                    </div>
                    <h3 className="text-[17px] font-bold text-slate-900">Company Documents</h3>
                  </div>
                  <ul className="space-y-3.5">
                    {['Certificate of Incorporation', 'MOA & AOA', 'Board Resolution'].map((doc, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FileCheck className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-[15px]">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Director Docs */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-secondary-50 text-secondary-600 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-[17px] font-bold text-slate-900">Director Documents</h3>
                  </div>
                  <ul className="space-y-3.5">
                    {['Passport', 'Address Proof', 'Photograph'].map((doc, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FileCheck className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-[15px]">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Process Section */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-accent-500"></span>
                Step-by-Step Process
              </h2>
              <div className="space-y-4">
                {[
                  'Consultation & Planning',
                  'Document Collection',
                  'RBI / MCA Approval',
                  'Registration & Setup',
                  'Compliance Setup'
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-primary-600 group-hover:text-white font-bold text-lg flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-primary-600 transition-all shadow-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1 p-4 sm:p-5 rounded-2xl border border-slate-100 bg-white shadow-sm font-semibold text-slate-700 text-[15px] sm:text-[17px] group-hover:border-primary-100 group-hover:shadow-md transition-all">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Final CTA */}
            <div className="bg-gradient-to-br from-[#020617] to-primary-900 rounded-3xl p-8 sm:p-14 shadow-xl border border-primary-800 text-center relative overflow-hidden mt-5">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 relative z-10 tracking-tight">Need Help Setting Up Your Business in India?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <button className="px-8 py-3.5 bg-[#4CAF50] hover:bg-[#43A047] text-white rounded-xl font-bold flex items-center justify-center transition-all shadow-lg hover:shadow-[#4CAF50]/25 hover:-translate-y-0.5">
                  Get Free Consultation
                </button>
                <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-xl font-bold transition-all flex items-center justify-center backdrop-blur-sm">
                  Contact Expert
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <div className="lg:col-span-4 mt-4 lg:mt-0">
            <div className="sticky top-28 space-y-3">

              {/* Lead Capture Form Card */}
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">Start Your Registration</h3>
                <p className="text-sm text-slate-500 mb-4">Fill the form below and our expert will call you shortly.</p>

                {submitted ? (
                  <div className="py-8 text-center border border-slate-100 rounded-2xl bg-slate-50 mt-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Request Received!</h3>
                    <p className="text-slate-500 text-[13px] mb-4">Our expert will call you shortly.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: 'Foreign Company Incorporation', message: '' }); }} className="text-primary-600 text-[13px] font-bold hover:underline">Submit another query</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                      <input required value={form.name} onChange={set('name')} type="text" placeholder="John Doe" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                      <input required value={form.phone} onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        if (val.length <= 10) {
                          setForm(f => ({ ...f, phone: val }));
                        }
                      }} type="tel" maxLength={10} placeholder="9876543210" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                      <input required value={form.email} onChange={set('email')} type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Select Service</label>
                      <select required value={form.service} onChange={set('service')} className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm text-slate-700">
                        <option value="Foreign Company Incorporation">Foreign Company Incorporation</option>
                        <option value="Private Limited Company">Private Limited Company</option>
                        <option value="GST Registration">GST Registration</option>
                        <option value="Other Services">Other Services</option>
                      </select>
                    </div>
                    <button disabled={loading} type="submit" className="w-full mt-4 py-4 bg-primary-600 hover:bg-primary-700 disabled:opacity-70 text-white rounded-xl font-bold shadow-lg shadow-primary-600/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                      {loading ? 'Submitting...' : 'Get Callback'} {!loading && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info Snippet */}
              <div className="bg-slate-900 rounded-3xl shadow-lg border border-slate-800 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-600 rounded-full blur-[60px] opacity-40 pointer-events-none"></div>
                <h3 className="text-[15px] font-bold mb-6 uppercase tracking-widest text-primary-400">Direct Contact</h3>
                <ul className="space-y-5 relative z-10">
                  <li>
                    <a href="tel:9643862867" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors border border-white/5 shadow-sm">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-[15px] tracking-wide">9643862867</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@ajlegalconsultant.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors border border-white/5 shadow-sm">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-sm tracking-wide">info@ajlegalconsultant.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/9110204280165" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#25D366] transition-colors border border-white/5 shadow-sm">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-[15px] tracking-wide">WhatsApp Chat</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

