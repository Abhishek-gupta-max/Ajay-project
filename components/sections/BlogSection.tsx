import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, Calendar, Folder, MessageCircle, ArrowRight } from 'lucide-react';
import { Outfit } from 'next/font/google';

const headingFont = Outfit({ subsets: ['latin'], weight: ['600', '700', '800'] });

const recentPosts = [
  {
    title: "Understanding GST Collection in India",
    date: "01 May, 2026",
    image: "/blog/gst-collection.png",
    href: "/blog/gst-collection",
  },
  {
    title: "India's Guide to Startup Registration and Benefits",
    date: "17 Apr, 2026",
    image: "/blog/startup-india.png",
    href: "/blog/startup-india",
  },
  {
    title: "How to Obtain an RA Licence for Your Business",
    date: "15 Apr, 2026",
    image: "/blog/ra-licence.png",
    href: "/blog/ra-licence",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1E4E8C]/6 border border-[#1E4E8C]/15 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[11px] font-bold text-[#1E4E8C] uppercase tracking-widest">Latest Insights</span>
          </div>
          <h2 className={`${headingFont.className} text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#1E4E8C] mb-4 leading-tight tracking-tight`}>
            Our Latest <span className="text-[#4CAF50]">Blogs</span>
          </h2>
          <p className="text-slate-500 text-[16px] leading-relaxed max-w-2xl">
            Stay updated with the latest news, regulations, and insights on Indian compliance, taxation, and legal frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Featured Post */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
              <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                <Image 
                  src="/blog/gst-collection.png"
                  alt="GST Collection in India"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className={`${headingFont.className} text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-[#1E4E8C] transition-colors`}>
                  Understanding GST Collection in India
                </h3>
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-[13px] text-slate-500 font-medium mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span>By <span className="text-[#1E4E8C]">Aj Legal Consultant</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>Published On <span className="text-[#1E4E8C]">01 May 2026</span></span>
                  </div>
                  <div className="flex items-center gap-1.5 hidden sm:flex">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Updated On <span className="text-[#1E4E8C]">07 May 2026</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Folder className="w-4 h-4 text-slate-400" />
                    <span>Category <span className="text-[#1E4E8C]">GST</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-slate-400" />
                    <span>0 Comment</span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  GST Collection is the total indirect tax revenue. The government collects it from the supply of goods and services. It can be considered as a key indicator of economic health. This specifies consumer spending and industrial activity across India.
                </p>

                <Link 
                  href="/blog/gst-collection"
                  className="inline-flex items-center gap-2 text-[#4CAF50] font-bold text-sm hover:text-[#388E3C] transition-colors w-fit group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          </div>

          {/* Recent Posts Sidebar */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h3 className={`${headingFont.className} text-xl font-bold text-slate-900 mb-6 flex items-center gap-3`}>
              <div className="w-1.5 h-6 bg-[#4CAF50] rounded-full"></div>
              Recent Posts
            </h3>
            
            <div className="space-y-6">
              {recentPosts.map((post, idx) => (
                <div key={idx} className="group">
                  <Link href={post.href} className="flex gap-4 items-start">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                      <Image 
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-[14px] sm:text-[15px] text-slate-800 leading-snug group-hover:text-[#1E4E8C] transition-colors mb-2 line-clamp-3">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[12px] text-slate-500 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                  {idx < recentPosts.length - 1 && (
                    <div className="h-px bg-slate-100 w-full mt-6"></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100">
              <Link 
                href="/blog"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-50 hover:bg-slate-100 text-[#1E4E8C] rounded-xl font-bold text-sm transition-colors border border-slate-200"
              >
                View All Posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
