import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.ajlegalconsultant.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // ── Static service pages (dedicated pages) ──
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

  // ── Dynamic [slug] service pages ──
  const slugServices = [
    'private-limited-company',
    'company-compliance',
    'gst-registration',
    'itr-filing',
    'business-compliance',
    'llp-registration',
    'one-person-company',
    'section-8-company',
    'startup-india',
    'trademark',
    'fssai',
    'roc-filing',
    'income-tax-return',
    'msme-registration',
  ]

  const slugServicePages: MetadataRoute.Sitemap = slugServices.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    // ── Core pages ──
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
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

    // ── Dedicated & dynamic service pages ──
    ...dedicatedServicePages,
    ...slugServicePages,
  ]
}
