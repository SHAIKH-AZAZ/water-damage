# 🚀 DEPLOYMENT GUIDE

## Quick Deploy to Vercel (Recommended)

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Vercel Dashboard
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Deploy! ✅

---

## Deploy to Netlify

```bash
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

---

## Deploy to AWS Amplify

1. Push to GitHub
2. Go to AWS Amplify Console
3. Connect repository
4. Build settings:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## Environment Variables

Create `.env.production`:
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_PHONE=+18009119111
NEXT_PUBLIC_EMAIL=contact@yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Custom Domain Setup

### Vercel
1. Go to Project Settings
2. Click "Domains"
3. Add your domain
4. Update DNS records

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

---

## Performance Optimization

### 1. Enable Image Optimization
Already configured in `next.config.ts`

### 2. Add Analytics
```typescript
// In app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### 3. Enable Compression
Automatically handled by Vercel/Netlify

---

## SEO Checklist

- [x] Meta tags configured
- [x] Schema.org markup added
- [x] Sitemap generated
- [x] Robots.txt configured
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics
- [ ] Set up Google Business Profile
- [ ] Create social media accounts

---

## Post-Deployment

1. **Test on real devices**
2. **Run Lighthouse audit**
3. **Check mobile responsiveness**
4. **Verify all links work**
5. **Test contact form**
6. **Check loading speed**

---

## Monitoring

### Add Error Tracking (Sentry)
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

### Add Analytics
- Google Analytics
- Hotjar for heatmaps
- Microsoft Clarity

---

## Backup & Version Control

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin YOUR_REPO_URL
git push -u origin main
```

---

## SSL Certificate

- **Vercel**: Automatic SSL
- **Netlify**: Automatic SSL
- **Custom**: Use Let's Encrypt

---

## CDN Configuration

Already optimized with:
- Next.js Image Optimization
- Static asset caching
- Edge network delivery

---

## Final Checklist

- [ ] Update all placeholder content
- [ ] Replace phone numbers
- [ ] Add real images
- [ ] Configure domain
- [ ] Set up SSL
- [ ] Add analytics
- [ ] Test on mobile
- [ ] Submit to search engines
- [ ] Set up email
- [ ] Configure backups

---

## 🎉 You're Live!

Your water damage restoration website is now deployed and ready to generate leads!
