"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const phoneVal = formData.get('phone') as string;
    const phoneDigits = phoneVal.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setPhoneError('Please enter a valid phone number (7–15 digits).');
      setLoading(false);
      return;
    }
    setPhoneError('');

    const payload = {
      name: formData.get('name') as string,
      phone: phoneVal,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    const formElement = e.currentTarget;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      setSuccess(true);
      formElement.reset();
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 p-8 rounded-2xl border border-green-200 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-600">Our legal expert will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-100">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Book a Free Consultation</h2>
        <p className="text-gray-500">Tell us what you need help with, and we&apos;ll get back to you within 2 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
          <input 
            required 
            type="text" 
            id="name" 
            name="name" 
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all duration-200" 
            placeholder="John Doe" 
          />
        </div>

        <div>
           <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
           <input 
             required 
             type="tel" 
             id="phone" 
             name="phone"
             maxLength={17}
             onChange={(e) => {
               e.target.value = e.target.value.replace(/[^0-9+\-\s()]/g, '');
               setPhoneError('');
             }}
             className={`w-full px-4 py-3 bg-gray-50 rounded-xl border focus:bg-white focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all duration-200 ${phoneError ? 'border-red-400' : 'border-gray-200'}`}
             placeholder="+91 98765 43210" 
           />
           {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">Select Service</label>
          <select 
            id="service" 
            name="service" 
            required
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all duration-200 appearance-none"
          >
            <option value="" disabled>Choose a service...</option>
            <option value="Company Registration">Company Registration</option>
            <option value="Trademark &amp; IP">Trademark &amp; IP</option>
            <option value="Tax &amp; Compliance">Tax &amp; Compliance</option>
            <option value="Legal Drafting">Legal Drafting</option>
            <option value="Other">Other Query</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Details</label>
          <textarea 
            required 
            id="message" 
            name="message" 
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all duration-200 resize-none" 
            placeholder="Tell us briefly about your requirement..." 
          />
        </div>

        {/* Error message */}
        {error && (
          <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(240,112,37,0.39)] hover:shadow-[0_6px_20px_rgba(240,112,37,0.23)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none mt-2 flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Request Free Consultation'
          )}
        </button>
        
        <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1.5">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Your information is secure and encrypted.
        </p>
      </form>
    </div>
  );
}
