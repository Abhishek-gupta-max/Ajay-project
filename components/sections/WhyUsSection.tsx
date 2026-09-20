import React from 'react';
import {
  Award, Users, FileCheck, ShieldCheck,
  UserCheck, Clock, Zap, Headset, IndianRupee
} from 'lucide-react';
import { Outfit } from 'next/font/google';

const headingFont = Outfit({ subsets: ['latin'], weight: ['600', '700', '800'] });

const whyUsData = [
  {
    title: 'Recognized by Govt. of India',
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: '5 Lakh+ Happy Customers Across India',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'ISO Certified',
    icon: <FileCheck className="w-6 h-6" />,
  },
  {
    title: 'Data Security & Trust',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Trained & Professional Experts',
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: 'On Time Service',
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: 'Super Fast Service',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Quick Response Team',
    icon: <Headset className="w-6 h-6" />,
  },
  {
    title: 'Affordable',
    icon: <IndianRupee className="w-6 h-6" />,
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1E4E8C] text-sm font-bold tracking-wide mb-6">
            <Award className="w-4 h-4" />
            <span>Why Choose Us</span>
          </div> */}
          <h2 className={`${headingFont.className} text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight`}>
            Why Choose <span className="text-[#4CAF50]">Us</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We deliver exceptional quality and trusted professional services that set us apart from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsData.map((item, idx) => (
            <div
              key={idx}
              className="card-hover group flex items-center gap-4 p-5 rounded-2xl bg-slate-100 shadow-sm cursor-default border border-transparent"
            >
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-[#1E4E8C] group-hover:text-[#4CAF50] transition-colors duration-300 relative z-10">
                {item.icon}
              </div>
              <h3 className="font-bold text-[15px] sm:text-base text-slate-700 group-hover:text-white transition-colors duration-300 leading-snug relative z-10">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
