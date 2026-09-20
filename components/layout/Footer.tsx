import React from 'react';
import Link from 'next/link';

import {
  Phone, Mail, MapPin, ChevronRight,
  Facebook, Youtube, MessageCircle, Star, CheckCircle2
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-2">

      {/* Main Footer Background — Deep Brand Blue */}
      <div className="bg-[#1E4E8C] pt-16 md:pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-6">

            {/* Column 1: Brand Info */}
            <div className="flex flex-col">
              <Link href="/" className="mb-4 inline-block">
                {/* <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm relative overflow-hidden">
                  <Image src="/logo.png" alt="AJ Logo" fill className="object-contain p-1.5" />
                </div> */}
                {/* <span className="text-2xl font-bold text-white tracking-tight">AJ Accounting</span> */}
              </Link>
              {/* <p className="text-white/60 text-sm leading-relaxed mb-4 pr-4">
                Independent consultancy service provider offering professional assistance and documentation support for corporate compliance, licenses, and legal documentation.
              </p> */}
              <div className="flex flex-col gap-2.5">
                {<span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-white/80 w-fit tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" /> 16+ Years Experience
                </span>}
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-white/80 w-fit tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" /> 10,000+ Trusted Clients Pan India
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-white/80 w-fit tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" /> ISO 9001:2015 Certified
                </span>
              </div>
            </div>

            {/* Column 2: Popular Services */}
            <div>
              <h4 className="text-[13px] font-bold mb-4 text-white tracking-widest uppercase">Popular Services</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Company Registration', url: '#' },
                  { name: 'GST Services', url: '#' },
                  { name: 'Trademark Filing', url: '#' },
                  { name: 'FSSAI License', url: '#' },
                  { name: 'Income Tax Filing', url: '#' },
                  { name: 'Startup India Registration', url: 'https://www.startupindia.gov.in/content/sih/en/startupgov/validate-startup-recognition.html#' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.url}
                      target={item.url.startsWith('http') ? '_blank' : undefined}
                      rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white/60 hover:text-[#4CAF50] text-[15px] transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#4CAF50] shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="text-[13px] font-bold mb-4 text-white tracking-widest uppercase">Resources</h4>
              <ul className="space-y-4">
                {['About Us', 'Meet Our Founder', 'Blog', 'Contact Us', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === 'About Us' ? '/about' : item === 'Meet Our Founder' ? '/founder' : item === 'Contact Us' ? '/contact' : `/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="text-white/60 hover:text-[#4CAF50] text-[15px] transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#4CAF50] shrink-0" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-[13px] font-bold mb-4 text-white tracking-widest uppercase">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-4 text-white/80 text-[15px]">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <a href="https://share.google/Q7IlTOBy0cWA23NYq" target="_blank" rel="noopener noreferrer" className="hover:text-[#4CAF50] transition-colors leading-relaxed mt-1">
                    No G 16, Dharmpali Palace,<br />Sector 27, Noida 201301
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/80 text-[15px]">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="tel:+911204280165"
                    className="hover:text-[#4CAF50] transition-colors duration-200"
                  >
                    9643862867
                  </a>
                </li>
                <li className="flex items-center gap-4 text-white/80 text-[15px]">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <a href="mailto:info@ajlegalconsultant.com" className="hover:text-[#4CAF50] transition-colors">
                    info@ajlegalconsultant.com
                  </a>
                </li>
              </ul>

              <div className="mt-4 p-5 rounded-2xl bg-white/[0.07] border border-white/15 border-l-2 border-l-[#4CAF50]">
                <p className="text-[11px] font-bold text-white uppercase tracking-widest mb-1.5 opacity-80">Support Hours</p>
                <p className="text-sm font-medium text-white/70">Mon - Sat, 10:00 AM - 7:00 PM</p>
              </div>
            </div>

          </div>
          {/* Disclaimer Section */}
          <div className="pt-8 mt-4 border-t border-white/15">
            <h3 className="text-white/90 text-[18px] font-extrabold mb-3 tracking-wide">Disclaimer</h3>
            <p className="text-white/50 text-[14px] leading-relaxed text-justify">
              This platform is a privately owned enterprise and holds no affiliation, endorsement, or connection with any government department or agency. The forms provided here are not for official government registrations; they are used solely to gather client details so we can effectively assess your business requirements. By accessing and using this site, you acknowledge that we operate as a private consultancy. The assistance we offer is based on customer requests, and the payments collected are processed as platform service fees. We retain the right to outsource matters to third-party professionals when deemed appropriate. Please note that our brand is currently undergoing a name change, so stay tuned for upcoming announcements. Furthermore, this platform does not provide legal advice, representation, or substitute for formal legal services. If you require legal counsel, we strongly advise consulting with a qualified lawyer or registered law firm.
            </p>
          </div>


          {/* Social Proof & Social Media Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between py-10 border-t border-white/15 gap-5">

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="flex -space-x-3">
                {['A', 'R', 'N', 'P'].map((initial, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#1E4E8C] bg-[#163665] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-white font-bold text-sm tracking-tighter">{initial}</span>
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 mb-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#4CAF50] text-[#4CAF50]" />
                  ))}
                </div>
                <p className="text-sm text-white/60"><span className="text-white font-bold tracking-tight">4.9/5 Average Rating</span> &nbsp;|&nbsp; 1000+ professionals</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#4CAF50] border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#4CAF50] border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm">
                <Instagram className="w-5 h-5" />
              </a> */}
              <a href="https://www.facebook.com/Accountingworksave/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#4CAF50] border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.whatsapp.com/channel/0029VaEiRvAHFxP4QWzlK03m" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Channel" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#4CAF50] border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@Ajaccountinggroup" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#4CAF50] border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-6 pt-6 text-[13px] font-medium text-white/40 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} Aj Legal Consultant (I) Private Limited. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

