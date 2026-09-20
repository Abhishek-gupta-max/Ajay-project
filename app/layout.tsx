import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import { constructMetadata } from "@/lib/seo";

// Non-critical interactive components — lazy loaded after initial paint
const GlobalConsultationModal = dynamic(() => import("@/components/modals/GlobalConsultationModal"), { ssr: false });
const ChatbotWidget           = dynamic(() => import("@/components/chatbot/ChatbotWidget"),          { ssr: false });
const MobileStickyCTA         = dynamic(() => import("@/components/layout/MobileStickyCTA"),         { ssr: false });
const CookieConsent           = dynamic(() => import("@/components/layout/CookieConsent"),           { ssr: false });

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
