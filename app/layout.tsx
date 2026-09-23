import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import { constructMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";

// Non-critical interactive components — lazy loaded after initial paint
const GlobalConsultationModal = dynamic(() => import("@/components/modals/GlobalConsultationModal"), { ssr: false });
const ChatbotWidget           = dynamic(() => import("@/components/chatbot/ChatbotWidget"),          { ssr: false });
const MobileStickyCTA         = dynamic(() => import("@/components/layout/MobileStickyCTA"),         { ssr: false });
const CookieConsent           = dynamic(() => import("@/components/layout/CookieConsent"),           { ssr: false });

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = constructMetadata();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AJ Legal Consultant (I) Private Limited",
  "alternateName": "AJ Legal Consultant",
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/aj-logo.png`,
  "image": `${siteConfig.url}/aj-logo.png`,
  "telephone": "+91-9643862867",
  "email": "info@ajlegalconsultant.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "G-16, Ground Floor, Dharmpali Palace, Sector-27",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.57,
    "longitude": 77.35
  },
  "sameAs": [
    "https://www.linkedin.com/in/ajay-pandey-242355a5"
  ],
  "priceRange": "₹₹"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <SiteHeader />
        <main className="flex-1 pt-[112px]">
          {children}
        </main>
        <Footer />
        <GlobalConsultationModal />
        <MobileStickyCTA />
        <ChatbotWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
