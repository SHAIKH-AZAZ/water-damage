# Setup Guide

## ✅ Installation Complete!

Your water damage restoration website is now ready. The development server is running at:

**http://localhost:3000**

## 🎨 Features Included

✨ **Modern Design**
- Animated hero section with Three.js water effects
- Smooth scroll animations with Framer Motion
- Responsive mobile-first design
- Glass morphism effects

🚀 **SEO Optimized**
- Schema.org structured data for LocalBusiness
- Meta tags and Open Graph
- Sitemap generation
- Semantic HTML

📱 **Sections**
1. Hero - Eye-catching CTA with 3D animations
2. Services - 6 service cards with icons
3. Process - 5-step restoration process
4. Emergency - 24/7 availability showcase
5. Testimonials - Customer reviews
6. Contact - Form with contact info
7. Footer - Links and social media

## 🛠️ Customization

### 1. Update Contact Information
Edit these files:
- `components/Hero.tsx` - Phone number in CTA
- `components/Navbar.tsx` - Header phone
- `components/Contact.tsx` - Contact details
- `components/Footer.tsx` - Footer info

### 2. Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary: #0066cc;    /* Main blue */
  --secondary: #00a8e8;  /* Light blue */
  --accent: #ff6b35;     /* Orange accent */
}
```

### 3. Replace Images
Update image URLs in:
- `components/Hero.tsx` - Hero image
- `components/Testimonials.tsx` - Customer avatars

### 4. Update Business Info
Edit `app/layout.tsx` - Schema markup with your:
- Business name
- Phone number
- Address
- Service areas

### 5. Configure Domain
Update `app/sitemap.ts` with your actual domain

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy

Deploy to Vercel (recommended):
```bash
npm install -g vercel
vercel
```

Or other platforms:
- Netlify
- AWS Amplify
- Digital Ocean

## 📝 Environment Variables

Create `.env.local` for:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_PHONE=+18009119111
NEXT_PUBLIC_EMAIL=help@yourdomain.com
```

## 🎯 Performance Tips

- Images are lazy-loaded
- Three.js only loads on client
- Animations use GPU acceleration
- Code splitting enabled

## 📞 Support

For issues or questions, check:
- Next.js docs: https://nextjs.org/docs
- Three.js docs: https://threejs.org/docs
- Framer Motion: https://www.framer.com/motion

Enjoy your new website! 🎉
