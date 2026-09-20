import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Outfit } from 'next/font/google';

const headingFont = Outfit({ subsets: ['latin'], weight: ['600', '700', '800'] });

interface BlogPost {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
}

const blogData: Record<string, BlogPost> = {
  'gst-collection': {
    title: 'Understanding GST Collection in India',
    date: '01 May, 2026',
    author: 'Aj Legal Consultant',
    category: 'GST',
    image: '/blog/gst-collection.png',
    content: `
      <p class="mb-6">GST Collection is the total indirect tax revenue collected by the government from the supply of goods and services. It serves as a critical indicator of the nation's economic health, reflecting consumer spending and industrial activity across India.</p>
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Why is GST Collection Important?</h3>
      <p class="mb-6">Consistent growth in GST collections points to a robust and expanding economy. It helps the government fund essential public services, infrastructure, and development programs. Moreover, strong collections indicate that businesses are recovering and scaling, leading to higher tax buoyancy.</p>
      <p class="mb-6">For businesses, understanding these trends can help in strategic planning and ensuring they remain compliant with the latest regulations.</p>
    `,
  },
  'startup-india': {
    title: "India's Guide to Startup Registration and Benefits",
    date: '17 Apr, 2026',
    author: 'Aj Legal Consultant',
    category: 'Startup',
    image: '/blog/startup-india.png',
    content: `
      <p class="mb-6">The Startup India initiative was launched to build a strong ecosystem for nurturing innovation and startups in the country that will drive sustainable economic growth and generate large scale employment opportunities.</p>
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Benefits of Registration</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Tax Exemptions:</strong> Startups can get tax exemptions under Section 80IAC of the Income Tax Act for 3 consecutive years.</li>
        <li><strong>Easy Winding Up:</strong> Fast-track closure of businesses within 90 days under the Insolvency and Bankruptcy Code.</li>
        <li><strong>IPR Benefits:</strong> Fast tracking of patent applications and up to 80% rebate in patent filing fees.</li>
      </ul>
      <p class="mb-6">Registering under Startup India opens up numerous funding avenues and connects founders with a vibrant ecosystem of mentors and investors.</p>
    `,
  },
  'ra-licence': {
    title: 'How to Obtain an RA Licence for Your Business',
    date: '15 Apr, 2026',
    author: 'Aj Legal Consultant',
    category: 'Licensing',
    image: '/blog/ra-licence.png',
    content: `
      <p class="mb-6">A Recruiting Agent (RA) Licence is a mandatory requirement for any business or individual engaged in the business of recruiting Indian citizens for employment abroad. It is issued by the Protector General of Emigrants (PGE) under the Ministry of External Affairs.</p>
      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Step-by-Step Process</h3>
      <p class="mb-6">The application process requires careful preparation of documents, including a Bank Guarantee, a demand draft for fees, and proof of office space. Due diligence is conducted by local police before the licence is granted.</p>
      <p class="mb-6">Partnering with a legal consultant ensures that your application is flawless, drastically reducing the chances of rejection and accelerating your business launch.</p>
    `,
  }
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#1E4E8C] py-16 lg:py-24 border-b border-[#1a4279]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest uppercase">
            {post.category}
          </div>
          <h1 className={`${headingFont.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight`}>
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-[14px] text-white/80 font-medium">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Featured Image */}
        <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-xl mb-16 border border-slate-100">
          <Image 
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg prose-slate max-w-none text-slate-600 leading-loose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back Button */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1E4E8C] font-bold text-[15px] hover:text-[#4CAF50] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Blogs
          </Link>
        </div>
      </article>
    </div>
  );
}
