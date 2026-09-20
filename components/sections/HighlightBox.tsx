import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

export default function HighlightBox() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          {/* Decorative background blur */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-primary-500/20 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <div className="relative bg-white border border-amber-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            {/* Icon area */}
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0 border border-amber-100/50">
              <AlertTriangle className="w-8 h-8 text-amber-500 animate-pulse-slow" />
            </div>
            
            {/* Content area */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[11px] font-black text-amber-600 uppercase tracking-[0.2em] mb-2 flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Important Note
              </h3>
              <p className="text-slate-700 text-lg md:text-xl font-bold leading-relaxed tracking-tight">
                Aj Legal Consultant follows a <span className="text-primary-600">&ldquo;One Window Total Compliance&rdquo;</span> approach, 
                but final approvals, licenses, and certifications are solely issued by respective government authorities.
              </p>
            </div>
            
            {/* Micro-badge */}
            <div className="hidden lg:flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 shrink-0">
              <Info className="w-4 h-4 text-slate-400" />
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Official Compliance Notice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
