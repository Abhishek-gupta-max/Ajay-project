import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function LeadCaptureCard({ onSubmit }: { onSubmit: () => void }) {
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (digits.length >= 10) {
      try {
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone, service: 'Callback Request (Chatbot)' }),
        });
      } catch (err) {
        console.error('[LeadCaptureCard] Submission failed:', err);
      }
      onSubmit();
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm w-full mt-1 max-w-[260px]">
      <div className="w-8 h-8 rounded-full bg-secondary-50 flex items-center justify-center text-secondary-600 mb-3 border border-secondary-100">
        <Phone className="w-4 h-4" />
      </div>
      <h4 className="font-bold text-slate-900 text-sm mb-1">Request a callback</h4>
      <p className="text-xs text-slate-600 mb-4">Enter your number and an expert will call you shortly.</p>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/[^0-9+\-\s()]/g, ''))}
          maxLength={17}
          placeholder="+91 Mobile Number"
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 mb-3"
        />
        <button 
          type="submit"
          disabled={phone.length < 10}
          className="w-full text-center text-xs font-semibold bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white rounded-lg py-2.5 transition-colors flex items-center justify-center gap-1.5"
        >
          Request Call <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
