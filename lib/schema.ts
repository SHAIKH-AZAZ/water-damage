// Advanced Schema.org structured data generators

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yourwebsite.com/#business",
  "name": "Water Damage Restoration Services",
  "description": "Professional 24/7 water damage restoration, flood cleanup, and emergency water removal services",
  "url": "https://yourwebsite.com",
  "telephone": "+1-800-911-9111",
  "email": "help@watercarepro.com",
  "priceRange": "$$",
  "image": "https://yourwebsite.com/og-image.jpg",
  "logo": "https://yourwebsite.com/logo.png",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "Nationwide"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": [
    "Water Damage Restoration",
    "Flood Cleanup",
    "Emergency Water Removal",
    "Mold Remediation",
    "Structural Drying",
    "Fire Damage Restoration"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/watercarepro",
    "https://www.twitter.com/watercarepro",
    "https://www.instagram.com/watercarepro",
    "https://www.linkedin.com/company/watercarepro"
  ]
});

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Water Damage Restoration Services",
    "telephone": "+1-800-911-9111"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "url": service.url,
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": service.url,
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+1-800-911-9111",
      "contactType": "Emergency Service",
      "availableLanguage": "English",
      "areaServed": "US"
    }
  }
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  text: string;
  date: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Water Damage Restoration Services"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": reviews[0].rating,
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": reviews[0].author
  },
  "reviewBody": reviews[0].text,
  "datePublished": reviews[0].date
});

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Water Damage Restoration Services",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourwebsite.com/logo.png"
    }
  }
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Water Damage Restoration Services",
  "url": "https://yourwebsite.com",
  "logo": "https://yourwebsite.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-911-9111",
    "contactType": "Emergency Service",
    "availableLanguage": ["English"],
    "areaServed": "US"
  },
  "sameAs": [
    "https://www.facebook.com/watercarepro",
    "https://www.twitter.com/watercarepro",
    "https://www.instagram.com/watercarepro",
    "https://www.linkedin.com/company/watercarepro"
  ]
});
