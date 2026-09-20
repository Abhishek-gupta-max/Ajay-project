import React from 'react';
import {
  Building2, Receipt, FileText, Scale, Award,
  Users, Clock, Star, ShieldCheck, Globe,
} from 'lucide-react';

/* ── Stats shown above the logo grid ── */
const stats = [
  { value: '10,000+', label: 'Trusted Clients Pan India', icon: Users },
  { value: '16+ Yrs', label: 'Industry Experience', icon: Clock },
  { value: '4.9 / 5', label: 'Average Rating', icon: Star },
  { value: 'Pan-India', label: 'Nationwide Service', icon: Globe },
  { value: 'ISO 9001', label: '2015 Certified', icon: ShieldCheck },
];

/* ── Sector badges ── */
const sectors = [
  'Manufacturing & Export',
  'E-commerce & Retail',
  'IT & Software',
  'Real Estate & Construction',
  'Healthcare & Pharma',
  'Food & FSSAI',
  'Finance & NBFC',
  'Education & NGO',
  'Startups & MSMEs',
  'Import & Trading',
];

/* ── Client logo cards (icon-based placeholders) ── */
// const clients = [
//   { name: 'NovaTech', icon: Cpu, sector: 'IT & Software' },
//   { name: 'BuildCorp', icon: Building2, sector: 'Real Estate' },
//   { name: 'MediCare', icon: HeartHandshake, sector: 'Healthcare' },
//   { name: 'AgriGrow', icon: Leaf, sector: 'Agriculture' },
//   { name: 'SwiftLog', icon: Package, sector: 'Logistics' },
//   { name: 'FinEdge', icon: Landmark, sector: 'Finance' },
//   { name: 'DataPeak', icon: Database, sector: 'IT & SaaS' },
//   { name: 'LayerX', icon: Layers, sector: 'Manufacturing' },
//   { name: 'GlobMart', icon: Globe, sector: 'E-commerce' },
//   { name: 'ViraZap', icon: Zap, sector: 'Startup' },
//   { name: 'ConsultPro', icon: Briefcase, sector: 'Consulting' },
//   { name: 'TrendRise', icon: TrendingUp, sector: 'Retail' },
// ];

/* ── Services used by clients (keyword-rich pill chips) ── */
const usedServices = [
  { icon: Building2, label: 'Company Registration' },
  { icon: Receipt, label: 'GST Filing' },
  { icon: FileText, label: 'ROC / MCA Filing' },
  { icon: Scale, label: 'Legal Compliance' },
  { icon: Award, label: 'Trademark & IP' },
];

export default function ClientsAndPartnersSection() {
  return (
    <section
      id="clients"
      className="bg-white py-8 border-t border-slate-100"
      aria-label="Trusted clients and partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/6 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
            <Users className="w-4 h-4 text-[#1E4E8C]" />
            <span className="text-[14px] font-extrabold text-[#1E4E8C] uppercase tracking-widest">
              Our Clients
            </span>
          </div>
          {/* SEO H2 */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1E4E8C] tracking-tight leading-[1.15] mb-4">
            Trusted by{' '}
            <span className="text-[#4CAF50]">10,000+ Clients</span>
            <br className="hidden sm:block" /> Pan India
          </h2>
          {/* Keyword-rich subheading */}
          <p className="text-slate-500 text-[16px] leading-relaxed max-w-2xl mx-auto">
            From startups to large enterprises, Indian businesses rely on our expert{' '}
            <strong className="text-slate-700 font-semibold">GST filing</strong>,{' '}
            <strong className="text-slate-700 font-semibold">ROC compliance</strong>,{' '}
            <strong className="text-slate-700 font-semibold">company registration</strong>, and{' '}
            <strong className="text-slate-700 font-semibold">legal compliance services</strong>{' '}
            to stay 100% compliant and penalty-free.
          </p>
        </div>

        {/* ── Stats Bar ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center bg-slate-50 border border-slate-100 rounded-2xl px-4 py-5 hover:border-[#1E4E8C]/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <stat.icon className="w-5 h-5 text-[#4CAF50] mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-extrabold text-[#1E4E8C] leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-[11px] font-medium text-slate-500 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Service Pills (keyword chips) ── */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-5">
          {usedServices.map((svc) => (
            <span
              key={svc.label}
              className="inline-flex items-center gap-2 bg-[#1E4E8C]/5 border border-[#1E4E8C]/12 text-[#1E4E8C] text-[12px] font-semibold px-4 py-2 rounded-full hover:bg-[#1E4E8C]/10 transition-colors"
            >
              <svc.icon className="w-3.5 h-3.5 text-[#4CAF50]" />
              {svc.label}
            </span>
          ))}
        </div>

        {/* -- Logo Grid (commented out along with clients data) -- */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center text-center bg-white border border-slate-200 rounded-2xl px-4 py-5 cursor-default hover:border-[#1E4E8C]/30 hover:shadow-lg hover:shadow-[#1E4E8C]/6 hover:-translate-y-1.5 transition-all duration-250"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E4E8C]/6 flex items-center justify-center mb-3 group-hover:bg-[#1E4E8C] transition-colors duration-250">
                <client.icon className="w-6 h-6 text-[#1E4E8C] group-hover:text-white transition-colors duration-250" />
              </div>
              <span className="text-[13px] font-bold text-slate-700 group-hover:text-[#1E4E8C] transition-colors leading-tight">
                {client.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                {client.sector}
              </span>
            </div>
          ))}
        </div> */}

        {/* ── Sector Coverage ── */}
        <div className="border-t border-slate-100 pt-10">
          <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">
            Sectors We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="text-[12px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full hover:bg-[#4CAF50]/8 hover:border-[#4CAF50]/30 hover:text-[#2e7d32] transition-all duration-200 cursor-default"
              >
                {sector}
              </span>
            ))}
          </div>
          <p className="text-center text-slate-400 text-[13px] mt-6 font-medium">
            And many more industries across{' '}
            <span className="font-semibold text-slate-600">Delhi, Mumbai, Bangalore, Hyderabad, Pune, Noida</span>
            {' '}and all major Indian cities.
          </p>
        </div>

      </div>
    </section>
  );
}
