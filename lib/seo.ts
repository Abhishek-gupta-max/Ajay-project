import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = "/aj-logo.png",
  url = "/",
  noIndex = false,
}: SEOProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
  const canonicalUrl = url.startsWith('http') ? url : `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image.startsWith('/') ? '' : '/'}${image}`;
  const fullTitle = title 
    ? (title.includes('AJ Legal Consultant') ? title : `${title} | ${siteConfig.name}`)
    : siteConfig.name;

  return {
    title: fullTitle,
    description,
    keywords: [
      "company registration India",
      "private limited company registration",
      "LLP registration",
      "GST registration",
      "GST filing",
      "ROC filing",
      "MCA compliance",
      "income tax filing",
      "trademark registration",
      "FSSAI registration",
      "RA licence registration",
      "recruiting agent licence",
      "business compliance services",
      "AJ Legal Consultant"
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
