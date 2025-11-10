# Quick SEO Reference Guide

## 🚀 Quick Start (5 Minutes)

### 1. Update Your Domain
```bash
# Edit .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. Add Required Images to `/public`:
- `og-image.jpg` (1200x630px)
- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)
- `favicon.ico`

### 3. Get Google Verification Code
1. Go to https://search.google.com/search-console
2. Add your property
3. Copy verification code
4. Update in `app/layout.tsx`

### 4. Deploy and Test
```bash
npm run build
npm start
```

## 📝 How to Add SEO to New Pages

### Example: Creating a new page with SEO

```typescript
// app/new-page/page.tsx
import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = generateSEO({
  title: 'Your Page Title',
  description: 'Your page description (150-160 characters)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  canonical: '/new-page',
});

export default function NewPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://yourwebsite.com' },
    { name: 'New Page', url: 'https://yourwebsite.com/new-page' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <main>
        <h1>Your Page Title</h1>
        {/* Your content */}
      </main>
    </>
  );
}
```

## 🎨 Image SEO Best Practices

```tsx
// Always include descriptive alt text
<img 
  src="/image.jpg" 
  alt="Detailed description of what's in the image"
  width={600}
  height={400}
  loading="lazy"
/>

// For hero images, use loading="eager"
<img 
  src="/hero.jpg" 
  alt="Description"
  loading="eager"
/>
```

## 📊 Schema Markup Examples

### Service Schema
```typescript
import { generateServiceSchema } from '@/lib/schema';

const schema = generateServiceSchema({
  name: 'Water Extraction',
  description: 'Professional water extraction service',
  url: 'https://yourwebsite.com/services/water-extraction'
});
```

### FAQ Schema
```typescript
import { generateFAQSchema } from '@/lib/schema';

const faqs = [
  {
    question: 'How fast can you respond?',
    answer: 'We respond within 60 minutes.'
  }
];

const schema = generateFAQSchema(faqs);
```

### Article Schema (for blog posts)
```typescript
import { generateArticleSchema } from '@/lib/schema';

const schema = generateArticleSchema({
  title: 'Blog Post Title',
  description: 'Post description',
  image: '/blog-image.jpg',
  datePublished: '2024-11-01',
  dateModified: '2024-11-01',
  author: 'Author Name'
});
```

## 🔍 Testing Checklist

### Before Launch:
- [ ] All images have alt text
- [ ] Domain updated in .env.local
- [ ] OG image created (1200x630px)
- [ ] Favicon added
- [ ] Test on mobile device
- [ ] Run PageSpeed Insights
- [ ] Validate schema markup

### After Launch:
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for main pages
- [ ] Set up Google Analytics
- [ ] Monitor for crawl errors
- [ ] Check mobile usability

## 📱 Social Media Preview

Test how your pages look when shared:
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

## 🎯 Priority Keywords to Target

### Primary Keywords:
- water damage restoration
- emergency water removal
- flood cleanup
- water damage repair

### Secondary Keywords:
- 24/7 water damage service
- burst pipe repair
- mold remediation
- water extraction service

### Long-tail Keywords:
- water damage restoration near me
- emergency flood cleanup service
- how to fix water damage
- water damage restoration cost

## 📈 Monitoring

### Weekly:
- Check Google Search Console
- Review analytics
- Monitor keyword rankings

### Monthly:
- Update blog content
- Check for broken links
- Review competitor SEO

## 🆘 Common Issues & Fixes

### Issue: Pages not indexed
**Fix**: Submit sitemap to Google Search Console

### Issue: Low PageSpeed score
**Fix**: Optimize images, enable caching, minimize JavaScript

### Issue: Schema errors
**Fix**: Test with https://validator.schema.org/

### Issue: Mobile usability issues
**Fix**: Test with https://search.google.com/test/mobile-friendly

## 📞 Important URLs

- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- PageSpeed Insights: https://pagespeed.web.dev/
- Schema Validator: https://validator.schema.org/
- Rich Results Test: https://search.google.com/test/rich-results

## 💡 Pro Tips

1. **Update content regularly** - Fresh content ranks better
2. **Get reviews** - Reviews improve local SEO
3. **Build backlinks** - Quality over quantity
4. **Optimize for mobile** - Most traffic is mobile
5. **Use internal linking** - Helps with site structure
6. **Monitor Core Web Vitals** - Affects rankings
7. **Write for humans first** - Then optimize for search engines
8. **Be patient** - SEO takes 3-6 months to show results

## 🎓 Learning Resources

- Google SEO Starter Guide: https://developers.google.com/search/docs/beginner/seo-starter-guide
- Schema.org Documentation: https://schema.org/docs/documents.html
- Web.dev SEO: https://web.dev/learn/seo/
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo

---

**Need Help?** Check `SEO-IMPLEMENTATION.md` for detailed documentation.
