import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = "/images/og-image.png",
  url = siteConfig.url,
}: SEOProps = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description,
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [image],
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
  };
}
