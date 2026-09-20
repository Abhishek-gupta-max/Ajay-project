'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit (past the Hero)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/90 backdrop-blur-lg border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:hidden">
      <div className="flex items-center gap-3">
        <a 
          href="tel:9643862867" 
          className="flex items-center justify-center w-12 h-12 bg-slate-100 text-slate-700 rounded-xl font-bold active:bg-slate-200"
        >
          <Phone className="w-5 h-5" />
        </a>
        <Link 
          href="/contact" 
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#E65C00] text-white h-12 rounded-xl font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all"
        >
          Get Free Consultation
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

