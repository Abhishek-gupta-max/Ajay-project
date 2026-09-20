import React from 'react';
import BlogSection from '@/components/sections/BlogSection';

export const metadata = {
  title: 'Blog & Insights | Aj Legal Consultant',
  description: 'Stay updated with the latest news, regulations, and insights on Indian compliance, taxation, and legal frameworks.',
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#1E4E8C] py-16 sm:py-24 border-b border-[#1a4279]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Blog & <span className="text-[#4CAF50]">Insights</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Your trusted source for the latest updates on corporate compliance, tax regulations, and legal advisory in India.
          </p>
        </div>
      </div>

      <BlogSection />
    </div>
  );
}
