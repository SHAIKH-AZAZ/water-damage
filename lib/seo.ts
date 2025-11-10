import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateSEO({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  noIndex = false,
  canonical,
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com';
  const fullTitle = title 
    ? `${title} | Water Damage Restoration` 
    : 'Water Damage Restoration Services | 24/7 Emergency Response';
  
  const metaDescription = description || 
    'Professional water damage restoration, flood cleanup, and emergency water removal services. Available 24/7 for residential and commercial properties.';

  return {
    title,
    description: metaDescription,
    keywords: keywords || [],
    alternates: {
      canonical: canonical || siteUrl,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonical || siteUrl,
      siteName: 'Water Damage Restoration Services',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
