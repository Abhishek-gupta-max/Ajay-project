'use client';

import { useEffect, useState } from 'react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

const COOKIE_KEY = 'aj_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so it slides in after page load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const saveConsent = async (action: 'accepted' | 'declined') => {
    try {
      await fetch('/api/cookie-consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
    } catch (err) {
      console.error('Failed to save cookie consent', err);
    }
  };

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
    saveConsent('accepted');
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
    saveConsent('declined');
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] w-[95vw] max-w-2xl"
      style={{ animation: 'cookieSlideUp 0.45s cubic-bezier(0.22,1,0.36,1) both' }}
    >
      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translate(-50%, 40px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Icon */}
        <div className="shrink-0 w-11 h-11 rounded-xl bg-[#1E4E8C]/10 flex items-center justify-center">
          <Cookie className="w-5 h-5 text-[#1E4E8C]" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5 mb-0.5">
            <ShieldCheck className="w-4 h-4 text-[#4CAF50] shrink-0" />
            We use cookies
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            We use cookies to improve your browsing experience, analyse site traffic, and personalise content.
            By clicking <strong>Accept</strong>, you consent to our use of cookies. Read our{' '}
            <a href="/privacy-policy" className="text-[#1E4E8C] hover:underline font-medium">Privacy Policy</a>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="flex-1 sm:flex-none px-5 py-2 text-xs font-bold text-white bg-[#1E4E8C] hover:bg-[#163665] rounded-lg transition-colors shadow-sm"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            aria-label="Close"
            className="hidden sm:flex w-8 h-8 items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
