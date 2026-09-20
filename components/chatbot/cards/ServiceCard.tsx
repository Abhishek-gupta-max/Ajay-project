import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  onSelect: () => void;
}

export default function ServiceCard({ title, description, price, onSelect }: ServiceCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm w-full mt-1 mb-2 max-w-[260px]">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
      </div>
      <p className="text-xs text-slate-600 mb-3 leading-relaxed">{description}</p>
      {price && (
        <div className="text-sm font-bold text-primary-700 mb-4">{price}</div>
      )}
      <ul className="space-y-1.5 mb-4">
        {[1, 2].map((_, idx) => (
          <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent-600 mt-0.5 shrink-0" />
            <span>Fast processing</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={onSelect}
        className="w-full text-center text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-lg py-2.5 transition-colors flex items-center justify-center gap-1.5"
      >
        Get Started <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
