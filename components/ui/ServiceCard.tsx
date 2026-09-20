import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  slug: string;
  description: string;

  features?: string[];
}

export default function ServiceCard({ title, slug, description, features = [] }: ServiceCardProps) {
  return (
    <div className="service-card-hover bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary-100 transition-all duration-300 p-6 flex flex-col h-full group">
      <div className="flex-1">
        <h3 className="card-title text-xl font-bold text-gray-900 mb-3 transition-colors">
          <Link href={`/services/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className="card-desc text-gray-600 mb-6 text-sm line-clamp-3">
          {description}
        </p>
        
        {features.length > 0 && (
          <ul className="mb-6 space-y-2">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between">

        <Link 
          href={`/services/${slug}`} 
          className="inline-flex items-center text-primary-500 font-semibold text-sm hover:text-primary-600 transition-colors bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-lg"
        >
          View Details
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
