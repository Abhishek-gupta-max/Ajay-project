"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown, Menu, X, Building2, Landmark,
  FileText, Receipt, Users, Award, Briefcase, Banknote,
  Star, ShieldCheck, Zap, TrendingUp, ChevronRight, Globe
} from "lucide-react";
import { Outfit } from "next/font/google";

const headerFont = Outfit({ subsets: ["latin"], weight: ["600", "700", "800"] });

/* -----------------------------------------
   MEGA MENU DATA
----------------------------------------- */
const megaMenuData = [
  {
    name: "Startup",
    columns: [
      {
        title: "Company Registration",
        icon: <Building2 className="w-4 h-4" />,
        links: [
          { title: "Private Limited Company", url: "/services/private-limited-company" },
          { title: "One Person Company (OPC)", url: "/services/one-person-company" },
          { title: "LLP Registration", url: "/services/llp-registration" },
          { title: "Public Limited Company", url: "/services/public-limited-company" },
          { title: "Partnership Firm", url: "/services/partnership-firm" },
          { title: "Sole Proprietorship", url: "/services/sole-proprietorship" },
        ],
      },
      {
        title: "Special Entities",
        icon: <Landmark className="w-4 h-4" />,
        links: [
          { title: "Section 8 Company", url: "/services/section-8-company" },
          { title: "Nidhi Company", url: "/services/nidhi-company" },
          { title: "Producer Company", url: "/services/producer-company" },
          { title: "Trust Registration", url: "/services/trust-registration" },
          { title: "Society Registration", url: "/services/society-registration" },
          { title: "Indian Subsidiary", url: "/services/indian-subsidiary" },
        ],
      },
      {
        title: "Government Schemes",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "Startup India Registration", url: "/services/startup-india" },
          { title: "Udyam (MSME) Registration", url: "/services/udyam-msme" },
        ],
      },
      {
        title: "Brand & Digital",
        icon: <Globe className="w-4 h-4" />,
        links: [
          { title: "Logo Design", url: "/services/logo-design" },
          { title: "Website Development", url: "/services/business-website" },
          { title: "Digital Marketing", url: "/services/digital-marketing" },
        ],
      },
    ],
    popular: ["Private Limited Company", "LLP Registration", "Udyam (MSME) Registration"],
  },
  {
    name: "RA Licence",
    columns: [
      {
        title: "RA Registration",
        icon: <Award className="w-4 h-4" />,
        links: [
          { title: "RA License Registration", url: "/services/ra-license" },
          { title: "RA License Renewal", url: "/services/ra-renewal" },
          { title: "RA Registration Amendment", url: "/services/ra-amendment" },
          { title: "RA License Revocation", url: "/services/ra-revocation" },
        ],
      },
      {
        title: "Update & Enhancement",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "Branch Office open/Shutdown", url: "/services/branch-office" },
          { title: "Director Removal From RC", url: "/services/director-removal" },
          { title: "Update contact details in RC", url: "/services/contact-update" },
          { title: "Capacity Enhancement", url: "/services/capacity-enhancement" },
        ],
      },
      {
        title: "Brand & Digital",
        icon: <Globe className="w-4 h-4" />,
        links: [
          { title: "Logo Design", url: "/services/logo-design" },
          { title: "Website Development", url: "/services/business-website" },
          { title: "Digital Marketing", url: "/services/digital-marketing" },
        ],
      },
    ],
    popular: ["RA License", "Security Training", "IATA"],
  },
  {
    name: "Licenses",
    columns: [
      {
        title: "Food & Export",
        icon: <Award className="w-4 h-4" />,
        links: [
          { title: "FSSAI License", url: "/services/fssai-registration" },
          { title: "FSSAI Renewal", url: "/services/fssai-renewal" },
          { title: "Import Export Code (IEC)", url: "/services/iec-registration" },
          { title: "IEC Modification", url: "/services/iec-modification" },
          { title: "APEDA Registration", url: "/services/apeda" },
          { title: "Spice Board Registration", url: "/services/spice-board" },
        ],
      },
      {
        title: "Certifications",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "BIS Certification", url: "/services/bis-certification" },
          { title: "CE Certification", url: "/services/ce-certification" },
          { title: "NSIC Registration", url: "/services/nsic" },
          { title: "RCMC Registration", url: "/services/rcmc" },
        ],
      },
      {
        title: "Drug & Medical",
        icon: <FileText className="w-4 h-4" />,
        links: [
          { title: "Cosmetic License", url: "/services/cosmetic-license" },
          { title: "Drug License", url: "/services/drug-license" },
          { title: "CDSCO Registration", url: "/services/cdsco" },
        ],
      },
      {
        title: "Tour & Travel",
        icon: <Users className="w-4 h-4" />,
        links: [
          { title: "IATA Registration", url: "/services/iata" },
          { title: "Tourism Licence", url: "/services/tourism-license" },
          { title: "Hajj & Umrah Licence", url: "/services/hajj-umrah-license" },
        ],
      },
    ],
    popular: ["FSSAI License", "IEC Registration", "Drug License"],
  },
  {
    name: "GST",
    columns: [
      {
        title: "Registration",
        icon: <FileText className="w-4 h-4" />,
        links: [
          { title: "GST Registration", url: "/services/gst-registration" },
          { title: "GST for Foreigners", url: "/services/gst-foreigners" },
          { title: "Virtual Office + GSTIN", url: "/services/virtual-office-gst" },
          { title: "GST Amendment", url: "/services/gst-amendment" },
          { title: "GST Revocation", url: "/services/gst-revocation" },
        ],
      },
      {
        title: "Return Filing",
        icon: <Receipt className="w-4 h-4" />,
        links: [
          { title: "GST Return Filing", url: "/services/gst-return" },
          { title: "GST Nil Return", url: "/services/gst-nil-return" },
          { title: "GSTR-9 Annual Filing", url: "/services/gstr-9" },
          { title: "GST LUT Filing", url: "/services/gst-lut" },
        ],
      },
      {
        title: "Compliance",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "GST Notice Reply", url: "/services/gst-notice" },
          { title: "GST E-Way Bill", url: "/services/gst-eway" },
        ],
      },
    ],
    popular: ["GST Registration", "GST Return Filing"],
  },
  {
    name: "Income Tax",
    columns: [
      {
        title: "ITR Filing",
        icon: <Receipt className="w-4 h-4" />,
        links: [
          { title: "ITR For Salaried Person", url: "/services/itr-filing" },
          { title: "Business ITR", url: "/services/business-itr" },
          { title: "HUF ITR", url: "/services/huf-itr" },
          { title: "Company ITR", url: "/services/company-itr" },
          { title: "ITR For Trust / NGO", url: "/services/ngo-itr" },
          { title: "Back Dated ITR", url: "/services/back-dated-itr" },
        ],
      },
      {
        title: "TDS",
        icon: <FileText className="w-4 h-4" />,
        links: [
          { title: "TDS For Properties Sell & Buy", url: "/services/tds-return" },
          { title: "TAN Registration", url: "/services/tan-registration" },
          { title: "15CA-15CB Filing", url: "/services/15ca-15cb" },
          { title: "Lower Rate TDS Deduction", url: "/services/lower-rate-tds" },
        ],
      },
      {
        title: "Notices & Advisory",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "Income Tax Notice Handling", url: "/services/it-notice" },
        ],
      },
    ],
    popular: ["Income Tax Return Filing", "TDS Return Filing"],
  },
  {
    name: "MCA / ROC",
    columns: [
      {
        title: "Director Changes",
        icon: <Users className="w-4 h-4" />,
        links: [
          { title: "Director DIN e KYC Update", url: "/services/din-ekyc" },
          { title: "Director Change", url: "/services/director-change" },
          { title: "Remove Director", url: "/services/remove-director" },
          { title: "Appointment of Director", url: "/services/appoint-director" },
        ],
      },
      {
        title: "Company Changes",
        icon: <Building2 className="w-4 h-4" />,
        links: [
          { title: "Registered Office Change", url: "/services/office-change" },
          { title: "Company Name Change", url: "/services/name-change" },
          { title: "MOA Amendment of Pvt. Ltd.", url: "/services/moa-amendment" },
          { title: "MOA Amendment of Public Limited", url: "/services/moa-amendment-public" },
          { title: "MOA Amendment of Section 8", url: "/services/moa-amendment-sec8" },
          { title: "AOA Amendment", url: "/services/aoa-amendment" },
          { title: "Increase Authorized Capital", url: "/services/capital-increase" },
          { title: "Share Transfer", url: "/services/share-transfer" },
        ],
      },
      {
        title: "ROC Filings",
        icon: <FileText className="w-4 h-4" />,
        links: [
          { title: "ADT-1 Filing", url: "/services/adt-1" },
          { title: "ADT-3 Filing", url: "/services/adt-3" },
          { title: "INC 20A", url: "/services/inc-20a" },
          { title: "LLP Form 11 Filing", url: "/services/llp-form-11" },
          { title: "Dormant Status Filing", url: "/services/dormant-status" },
        ],
      },
      {
        title: "Annual Compliance",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "Company Annual Compliance", url: "/services/company-compliance" },
          { title: "LLP Compliance", url: "/services/llp-compliance" },
          { title: "OPC Compliance", url: "/services/opc-compliance" },
          { title: "Statutory Audit", url: "/services/statutory-audit" },
        ],
      },
      {
        title: "Conversions & Winding Up",
        icon: <TrendingUp className="w-4 h-4" />,
        links: [
          { title: "OPC to PVT. Conversion", url: "/services/opc-to-pvt-conversion" },
          { title: "PVT. to Public Ltd Conversion", url: "/services/pvt-to-public-conversion" },
          { title: "Pvt. Ltd. Winding up", url: "/services/pvt-ltd-winding-up" },
          { title: "LLP Winding Up", url: "/services/llp-winding-up" },
          { title: "Sec-8 Winding Up", url: "/services/sec-8-winding-up" },
          { title: "Nidhi Winding Up", url: "/services/nidhi-winding-up" },
          { title: "Indian Subsidiary Windup", url: "/services/indian-subsidiary-windup" },
        ],
      },
      {
        title: "Finance & Registration",
        icon: <Banknote className="w-4 h-4" />,
        links: [
          { title: "JanSamarth Registration", url: "/services/jansamarth-registration" },
          { title: "Credit Management Analysis", url: "/services/credit-management-analysis" },
        ],
      },
      {
        title: "Company Registration",
        icon: <Landmark className="w-4 h-4" />,
        links: [
          { title: "Private Limited Company", url: "/services/private-limited-company" },
          { title: "LLP Registration", url: "/services/llp-registration" },
          { title: "One Person Company", url: "/services/one-person-company" },
          { title: "Public Limited Company", url: "/services/public-limited-company" },
          { title: "Section 8 Company", url: "/services/section-8-company" },
          { title: "Business Registration License", url: "/services/business-registration-license" },
          { title: "Nidhi Company Registration", url: "/services/nidhi-company" },
          { title: "Indian Subsidiary Registration", url: "/services/indian-subsidiary" },
        ],
      },
    ],
    popular: ["Company Annual Compliance", "Director DIN e KYC Update"],
  },
  {
    name: "HR & Payroll",
    columns: [
      {
        title: "PF & ESIC",
        icon: <Users className="w-4 h-4" />,
        links: [
          { title: "PF Registration", url: "/services/pf-registration" },
          { title: "PF Return Filing", url: "/services/pf-return" },
          { title: "ESIC Registration", url: "/services/esic-registration" },
          { title: "ESIC Return Filing", url: "/services/esic-return" },
        ],
      },
      {
        title: "Payroll & Labour",
        icon: <Banknote className="w-4 h-4" />,
        links: [
          { title: "Payroll Management", url: "/services/payroll" },
          { title: "HR Compliance", url: "/services/hr-compliance" },
          { title: "Labour Law Compliance", url: "/services/labour-law" },
          { title: "Professional Tax Registration", url: "/services/professional-tax" },
        ],
      },
      {
        title: "Quick Links",
        icon: <Zap className="w-4 h-4" />,
        links: [
          { title: "ESIC Registration", url: "/services/esic-registration" },
          { title: "PF Return Filing", url: "/services/pf-return" },
        ],
      },
    ],
    popular: ["PF Registration", "ESIC Registration"],
  },
  {
    name: "Consulting",
    columns: [
      {
        title: "Accounting",
        icon: <Briefcase className="w-4 h-4" />,
        links: [
          { title: "Accounting Services", url: "/services/accounting" },
          { title: "Bookkeeping", url: "/services/bookkeeping" },
          { title: "Professional Support", url: "/services/ca-support" },
          { title: "Tax Planning", url: "/services/tax-planning" },
        ],
      },
      {
        title: "Business Advisory",
        icon: <TrendingUp className="w-4 h-4" />,
        links: [
          { title: "Business Plan Preparation", url: "/services/business-plan" },
          { title: "Project Report", url: "/services/project-report" },
          { title: "Vendor Assessment", url: "/services/vendor-assessment" },
          { title: "Due Diligence", url: "/services/due-diligence" },
          { title: "Mergers & Acquisitions", url: "/services/mergers-acquisitions" },
        ],
      },
      {
        title: "Audits",
        icon: <ShieldCheck className="w-4 h-4" />,
        links: [
          { title: "Cyber Security Audit", url: "/services/cyber-audit" },
          { title: "EHS Audit", url: "/services/ehs-audit" },
        ],
      },
    ],
    popular: ["Accounting Services", "Due Diligence"],
  },
  {
    name: "Trade & Shop",
    columns: [
      {
        title: "Certificate",
        icon: <Banknote className="w-4 h-4" />,
        links: [
          { title: "UP Labour Certificate", url: "/services/up-labour-certificate" },
          { title: "Kerala Labour Certificate", url: "/services/kerala-labour-certificate" },
          { title: "Himachal Labour Certificate", url: "/services/himachal-labour-certificate" },
          { title: "Tamilnadu Labour Certificate", url: "/services/tn-labour-certificate" },
          { title: "Andra Pradesh Labour Certificate", url: "/services/ap-labour-certificate" },
          { title: "Delhi Labour Certificate", url: "/services/delhi-labour-certificate" },
          { title: "Karnatka Labour Certificate", url: "/services/karnatka-labour-certificate" },
          { title: "Pan India Labour Certificate", url: "/services/pan-india-labour-certificate" },
        ],
      },
      {
        title: "Quick Links",
        icon: <Zap className="w-4 h-4" />,
        links: [
          { title: "Term Loan", url: "/services/term-loan" },
          { title: "Bank Guarantee", url: "/services/bank-guarantee" },
        ],
      },
    ],
    popular: ["Business Loan", "Working Capital"],
  },
];

/* -----------------------------------------
   MEGA MENU DROPDOWN
----------------------------------------- */
function MegaMenuDropdown({ menu, closeMenu }: { menu: typeof megaMenuData[0]; closeMenu: () => void }) {
  // Initialize with the first two items as a dynamic default, ignoring the hardcoded 'popular' array
  const defaultPopular = menu.columns.flatMap(c => c.links).slice(0, 2).map(l => l.title);
  const [popularServices, setPopularServices] = useState<string[]>(defaultPopular);

  useEffect(() => {
    try {
      const trackingKey = 'aj_service_clicks';
      const clicks = JSON.parse(localStorage.getItem(trackingKey) || '{}');
      const allLinks = menu.columns.flatMap(c => c.links);

      const sorted = [...allLinks]
        .filter(l => (clicks[l.title] || 0) > 0)
        .sort((a, b) => (clicks[b.title] || 0) - (clicks[a.title] || 0));

      if (sorted.length > 0) {
        setPopularServices(sorted.slice(0, 2).map(l => l.title));
      }
    } catch {
      // ignore
    }
  }, [menu]);

  const handleLinkClick = (title: string) => {
    try {
      const trackingKey = 'aj_service_clicks';
      const clicks = JSON.parse(localStorage.getItem(trackingKey) || '{}');
      clicks[title] = (clicks[title] || 0) + 1;
      localStorage.setItem(trackingKey, JSON.stringify(clicks));
    } catch { }
    closeMenu();
  };

  // Calculate explicit width to prevent box from unexpectedly shrinking against viewport edges
  const boxWidth = menu.columns.length * 240 + 40;

  return (
    <div
      className="bg-white backdrop-blur-xl border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden shadow-2xl"
      style={{ width: `${boxWidth}px`, maxWidth: '95vw' }}
    >
      {/* Popular strip */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-3.5 flex items-center gap-3">
        <Star className="w-4 h-4 text-[#1E4E8C] shrink-0" />
        <span className="text-xs font-bold text-[#1E4E8C] uppercase tracking-wider mr-2">Popular:</span>
        {popularServices.map((p, i) => {
          const matchingLink = menu.columns.flatMap(c => c.links).find(l => l.title === p);
          return (
            <Link
              href={matchingLink?.url || '#'}
              key={i}
              onClick={() => { if (matchingLink) handleLinkClick(matchingLink.title); }}
              className="menu-item-hover text-[11px] font-bold bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-full cursor-pointer transition-colors shadow-sm"
            >
              <span className="relative z-10">{p}</span>
            </Link>
          );
        })}
      </div>

      {/* Grid adjusting based on columns count, giving each column 250px base width so text never wraps too tightly */}
      <div className="grid gap-2 p-4" style={{ gridTemplateColumns: `repeat(${menu.columns.length}, minmax(0, 1fr))` }}>
        {menu.columns.map((col, idx) => (
          <div key={idx} className={`flex flex-col p-3 rounded-xl hover:bg-slate-50/50 transition-colors ${idx < menu.columns.length - 1 ? "border-r border-slate-50" : ""}`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E4E8C] flex items-center justify-center shadow-sm border border-blue-100/50 shrink-0">
                {React.cloneElement(col.icon as React.ReactElement, { className: 'w-4 h-4' })}
              </div>
              <h3 className="text-[11px] font-bold tracking-wider text-[#1E4E8C] uppercase px-1">{col.title}</h3>
            </div>
            <ul className="space-y-1">
              {col.links.map((link, lidx) => (
                <li key={lidx}>
                  <Link
                    href={link.url}
                    onClick={() => handleLinkClick(link.title)}
                    className="menu-item-hover block px-3 py-2 rounded-lg text-[13px] font-medium text-slate-600 transition-all flex items-center justify-between group border border-transparent"
                  >
                    <span className="relative z-10">{link.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -mr-2 group-hover:opacity-100 group-hover:mr-0 transition-all text-[#4CAF50] relative z-10" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -----------------------------------------
   MAIN HEADER
----------------------------------------- */
export default function Header({ isCompact = false }: { isCompact?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const [mobileColumnOpen, setMobileColumnOpen] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-40 border-b ${isCompact ? 'bg-white shadow-md border-slate-200/50' : 'bg-white border-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isCompact ? 'h-[60px]' : 'h-[72px]'}`}>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-40 h-10 sm:w-48 sm:h-12">
                <Image
                  src="/biglogo.png"
                  alt="Aj Legal Consultant Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Mega Nav */}
          <nav className="hidden xl:flex items-center h-full relative">
            {megaMenuData.map((menu) => {
              return (
                <div
                  key={menu.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(menu.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`${headerFont.className} flex items-center gap-0.5 px-3 py-2 rounded-lg text-[15px] font-bold whitespace-nowrap transition-colors ${activeMenu === menu.name ? "text-[#1E4E8C] bg-blue-50" : "text-[#1E4E8C] hover:text-[#4CAF50] hover:bg-slate-50"}`}>
                    {menu.name}
                    <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${activeMenu === menu.name ? "rotate-180" : ""}`} />
                  </button>

                  {/* Active indicator bar */}
                  {activeMenu === menu.name && (
                    <div className="absolute bottom-0 left-4 right-4 h-[3px] bg-[#4CAF50] rounded-t-lg" />
                  )}
                </div>
              );
            })}
            <Link
              href="/founder"
              className={`${headerFont.className} flex items-center px-3 py-2 rounded-lg text-[15px] font-bold whitespace-nowrap transition-colors text-[#1E4E8C] hover:text-[#4CAF50] hover:bg-slate-50`}
            >
              Meet Our Founder
            </Link>
          </nav>

          {/* Render active Mega Menu globally relative to the max-w-[1400px] header wrapper */}
          <div className="hidden xl:block">
            {activeMenu && (
              <div
                className="absolute top-[100%] left-1/2 -translate-x-1/2 z-50 pt-2"
                onMouseEnter={() => handleMouseEnter(activeMenu)}
                onMouseLeave={handleMouseLeave}
              >
                <MegaMenuDropdown
                  menu={megaMenuData.find(m => m.name === activeMenu)!}
                  closeMenu={() => setActiveMenu(null)}
                />
              </div>
            )}
          </div>
          {/* Mobile: hamburger */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu — two-level accordion */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 absolute left-0 w-full h-[100dvh] pb-32 overflow-y-auto z-40 shadow-xl">
          <div className="px-4 py-2 flex flex-col">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 border-b border-gray-50 text-sm font-semibold text-[#1E4E8C]">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 border-b border-gray-50 text-sm font-semibold text-[#1E4E8C]">About</Link>
            <Link href="/founder" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 border-b border-gray-50 text-sm font-semibold text-[#1E4E8C]">Meet Our Founder</Link>

            {/* Level-1: menu categories */}
            {megaMenuData.map((menu) => (
              <div key={menu.name} className="border-b border-gray-50">
                <button
                  onClick={() => {
                    const next = mobileCategoryOpen === menu.name ? null : menu.name;
                    setMobileCategoryOpen(next);
                    setMobileColumnOpen(null); // reset sub-accordion when switching category
                  }}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-[#1E4E8C]"
                >
                  <span>{menu.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCategoryOpen === menu.name ? "rotate-180 text-[#4CAF50]" : "text-slate-400"}`} />
                </button>

                {mobileCategoryOpen === menu.name && (
                  <div className="pb-2">
                    {/* Level-2: columns as sub-accordions */}
                    {menu.columns.map((col, idx) => {
                      const colKey = `${menu.name}__${idx}`;
                      const isColOpen = mobileColumnOpen === colKey;
                      return (
                        <div key={idx} className="mx-2 mb-1 rounded-xl overflow-hidden border border-slate-100">
                          <button
                            onClick={() => setMobileColumnOpen(isColOpen ? null : colKey)}
                            className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-50 hover:bg-blue-50/60 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-white text-[#1E4E8C] flex items-center justify-center shadow-sm border border-blue-100/60 shrink-0">
                                {React.cloneElement(col.icon as React.ReactElement, { className: 'w-3 h-3' })}
                              </div>
                              <span className="text-[11.5px] font-bold text-[#1E4E8C] uppercase tracking-wide">{col.title}</span>
                            </div>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isColOpen ? "rotate-180 text-[#4CAF50]" : "text-slate-400"}`} />
                          </button>

                          {isColOpen && (
                            <div className="bg-white px-1 py-1">
                              {col.links.map((link, lidx) => (
                                <Link
                                  key={lidx}
                                  href={link.url}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center justify-between px-3 py-2 mx-1 mb-0.5 text-[13px] font-medium text-slate-600 rounded-lg hover:bg-blue-50 hover:text-[#1E4E8C] transition-colors group"
                                >
                                  <span>{link.title}</span>
                                  <ChevronRight className="w-3 h-3 text-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            <div className="p-4 mt-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center bg-[#4CAF50] hover:bg-[#43A047] text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
