import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function ConnectExpertCard() {
  return (
    <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 shadow-sm w-full mt-1 max-w-[260px]">
      <h4 className="font-bold text-primary-900 text-sm mb-1">Talk to a Human</h4>
      <p className="text-xs text-primary-800 mb-4 opacity-90">Our compliance experts are available right now to help you.</p>
      
      <div className="flex flex-col gap-2">
        <a 
          href="https://wa.me/9110204280165" 
          target="_blank" 
          rel="noreferrer"
          className="w-full text-center text-xs font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg py-2.5 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
        </a>
        <a 
          href="tel:9643862867" 
          className="w-full text-center text-xs font-semibold bg-white hover:bg-slate-50 text-primary-700 border border-primary-200 rounded-lg py-2.5 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
        >
          <PhoneCall className="w-3.5 h-3.5" /> Call Now
        </a>
      </div>
    </div>
  );
}

