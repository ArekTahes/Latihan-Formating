import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arsaprimasolution.com'
  const lastModified = new Date('2026-03-16')

  const services = [
    { slug: 'service-ac', priority: 0.95 },
    { slug: 'service-mesin-cuci', priority: 0.9 },
    { slug: 'service-kulkas', priority: 0.9 },
    { slug: 'service-freezer', priority: 0.85 },
    { slug: 'service-showcase', priority: 0.85 },
    { slug: 'service-chiller', priority: 0.85 },
    { slug: 'instalasi-listrik', priority: 0.9 },
  ]

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/galeri`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimoni`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servis-ac-surabaya`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/servis-mesin-cuci-surabaya`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servis-kulkas-surabaya`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/instalasi-listrik-surabaya`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map(({ slug, priority }) => ({
    url: `${baseUrl}/layanan/${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority,
  }))

  return [...staticPages, ...servicePages]
}
