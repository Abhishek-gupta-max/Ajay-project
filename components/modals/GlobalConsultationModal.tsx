'use client';

import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Shield, ArrowRight, Loader2, Star } from 'lucide-react';

// Unified Dictionary for specific mappings
const serviceData: Record<string, { title: string; description: string; benefits: string[] }> = {
  "Private Limited Company": {
    title: "Private Limited Company Registration",
    description: "Register your Pvt Ltd company with expert guidance and fast approval.",
    benefits: [
      "Fast Registration (24-48 hrs)",
      "Govt Approved Process",
      "Dedicated Professional Support"
    ]
  },
  "GST Registration": {
    title: "GST Registration Services",
    description: "Get GST registered quickly and stay tax compliant.",
    benefits: [
      "Easy Documentation",
      "Expert Filing",
      "Affordable Pricing"
    ]
  },
  "Trademark Filing": {
    title: "Trademark Registration",
    description: "Protect your brand legally with trademark registration.",
    benefits: [
      "Brand Protection",
      "Legal Security",
      "Quick Filing"
    ]
  },
  "default": {
    title: "Expert Legal & Compliance Consultation",
    description: "Get personalized guidance from our top legal and financial experts.",
    benefits: [
      "Free Initial Consultation",
      "100% Confidential",
      "End-to-End Support"
    ]
  }
};

export default function GlobalConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState('default');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [animatingIn, setAnimatingIn] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    // Global generic click interceptor
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Attempt to find if the clicked node (or its parent) is an anchor
      const anchor = target.closest('a');
      const actionElement = target.closest('[data-modal="consultation"]');
      
      const el = actionElement || anchor;
      
      if (el) {
        // Only target anchors where path is specifically "#"
        if (el.tagName.toLowerCase() === 'a') {
            const href = el.getAttribute('href');
            if (href !== '#' && !href?.startsWith('#consult')) {
                return; // Not an empty pound link, let browser navigate normally!
            }
        }

        e.preventDefault();
        
        const extractedText = el.getAttribute('data-service') || (el as HTMLElement).innerText.trim();
        
        // Match against exact string keys, else synthesize dynamically
        if (serviceData[extractedText]) {
          setService(extractedText);
        } else {
          if (extractedText && extractedText.length > 2 && extractedText.length <= 40) {
            // Intelligent Fallback: synthesize dynamic content!
            serviceData[extractedText] = {
               title: `${extractedText} Consultation`,
               description: `Talk to our experts today about your ${extractedText} requirements for expert precision and rapid turnaround.`,
               benefits: [
                 "Free Initial Consultation",
                 "100% Confidential",
                 "Fast & Secure Process"
               ]
            };
            setService(extractedText);
          } else {
            setService('default');
          }
        }
        
        setIsOpen(true);
        setIsSuccess(false);
        setIsSubmitting(false);
        
        // Trigger CSS transition
        setTimeout(() => setAnimatingIn(true), 10);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const close = () => {
    setAnimatingIn(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms coincides with transition duration map
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Phone validation
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setPhoneError('Please enter a valid phone number (7–15 digits).');
      return;
    }
    // Email validation (optional field)
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setPhoneError('');
    setEmailError('');

    // Get name from the form
    const form = e.currentTarget;
    const nameInput = form.querySelector<HTMLInputElement>('input[type="text"]:not([readonly])');
    const name = nameInput?.value?.trim() || 'Not provided';

    setIsSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, service }),
      });
      setPhone('');
      setEmail('');
      if (nameInput) nameInput.value = '';
      const textarea = form.querySelector('textarea');
      if (textarea) textarea.value = '';
    } catch (err) {
      console.error('[ConsultationModal] Lead submission failed:', err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  if (!isOpen) return null;

  const content = serviceData[service];

  return (
    // Overlay Window
    <div className={`fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 md:p-6 transition-all duration-300 ${animatingIn ? 'bg-slate-900/60 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none pointer-events-none'}`}>
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={close} />

      {/* Primary Layout Container Component */}
      <div className={`relative w-full max-w-5xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row bg-slate-50 transition-all duration-300 transform h-[90vh] md:h-auto max-h-screen origin-bottom md:origin-center ${
          animatingIn ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full md:translate-y-4 opacity-0 scale-95'
        }`}
      >
        {/* Floating Close X Handle */}
        <button 
          onClick={close}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-500 hover:bg-white hover:text-slate-900 transition-all border border-slate-200 shadow-sm focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* --- LEFT DESKTOP / TOP MOBILE COMPONENT --- */}
        <div className="w-full md:w-5/12 bg-white p-8 md:p-12 border-r border-slate-100 flex flex-col pt-16 md:pt-6 overflow-y-auto shrink-0 z-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              {content.title}
            </h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
              {content.description}
            </p>

            <ul className="space-y-4 mb-6 md:mb-10">
              {content.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium text-[15px]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges Wrapper */}
          <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
             <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-secondary-50 flex items-center justify-center shadow-sm shrink-0">
                  <Star className="w-5 h-5 text-secondary-500 fill-secondary-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[13px] uppercase tracking-wide">5000+ Businesses</h4>
                  <p className="text-xs text-slate-500">Successfully served across India</p>
                </div>
             </div>
             
             <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shadow-sm shrink-0">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[13px] uppercase tracking-wide">100% Secure</h4>
                  <p className="text-xs text-slate-500">Your data is strictly confidential</p>
                </div>
             </div>
          </div>
        </div>


        {/* --- RIGHT DESKTOP / BOTTOM MOBILE COMPONENT --- */}
        <div className="w-full md:w-7/12 bg-slate-50 p-6 sm:p-8 md:p-12 flex items-center justify-center relative overflow-y-auto z-0 shrink-0 border-t md:border-t-0 border-slate-200">
           {/* Ambient Glass Blob background logic */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
           
           <div className="w-full max-w-md bg-white/60 md:bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white relative z-10 transition-all duration-500">
              
              {isSuccess ? (
                /* Post-Submit Success Flow */
                <div className="text-center py-10 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0 transition-transform scale-110">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                  <p className="text-slate-600 mb-4 max-w-[250px] mx-auto">
                    Our expert will contact you shortly 🚀
                  </p>
                  <button 
                    onClick={close}
                    className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors w-full"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                /* Primary Interactive Form */
                <div className="transition-opacity duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 tracking-tight">Request Free Consultation</h3>
                  <p className="text-sm text-slate-500 mb-6">Fill out the details below and we&apos;ll get back to you.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* ReadOnly Auto-Filled Service */}
                    <div>
                      <label className="block text-[12px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Selected Service</label>
                      <input 
                        type="text" 
                        value={service === 'default' ? 'General Consultation' : service}
                        readOnly
                        className="w-full px-4 py-3.5 bg-slate-100/50 border border-slate-200 rounded-xl text-sm font-bold text-primary-700 cursor-not-allowed select-none focus:outline-none" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
                        <input required type="text" placeholder="John Doe" className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Phone <span className="text-red-500">*</span></label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9+\-\s()]/g, '');
                            setPhone(val);
                            setPhoneError('');
                          }}
                          maxLength={17}
                          className={`w-full px-4 py-3.5 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm ${phoneError ? 'border-red-400' : 'border-slate-200'}`}
                        />
                        {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Email Address <span className="text-slate-400 font-normal normal-case">(Optional)</span></label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                        className={`w-full px-4 py-3.5 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm ${emailError ? 'border-red-400' : 'border-slate-200'}`}
                      />
                      {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Message</label>
                      <textarea 
                        rows={3}
                        placeholder={`Tell us about your ${service === 'default' ? 'legal' : service} requirement...`}
                        className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full mt-2 py-4 bg-primary-600 hover:bg-primary-700 disabled:opacity-70 disabled:hover:bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-600/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                       {isSubmitting ? (
                         <>Processing <Loader2 className="w-5 h-5 animate-spin" /></>
                       ) : (
                         <>Request Free Consultation <ArrowRight className="w-5 h-5" /></>
                       )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-3 pb-2">
                      By submitting, you agree to our Terms of Service & Privacy.
                    </p>
                  </form>
                </div>
              )}
           </div>
        </div>

      </div>
    </div>
  );
}
