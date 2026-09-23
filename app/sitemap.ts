import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import serviceData from '@/config/serviceData'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url || 'https://ajlegalconsultant.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // ── Dedicated static service pages ──
  const dedicatedServicePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/services/ra-license`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/foreign-company-incorporation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ]

  // ── All dynamic service pages from serviceData ──
  const slugServices = Object.keys(serviceData)

  const slugServicePages: MetadataRoute.Sitemap = slugServices.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    // ── Core public pages ──
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/founder`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/startup-services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // ── Service pages ──
    ...dedicatedServicePages,
    ...slugServicePages,
  ]
}
