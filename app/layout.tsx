import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/schema";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com'),
  title: {
    default: "Water Damage Restoration Services | 24/7 Emergency Response",
    template: "%s | Water Damage Restoration"
  },
  description: "Professional water damage restoration, flood cleanup, and emergency water removal services. Available 24/7 for residential and commercial properties. Fast response, certified technicians.",
  keywords: ["water damage restoration", "flood cleanup", "emergency water removal", "water damage repair", "mold remediation", "water extraction", "24/7 emergency service"],
  authors: [{ name: "Water Damage Restoration Services" }],
  creator: "Water Damage Restoration Services",
  publisher: "Water Damage Restoration Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Water Damage Restoration Services | 24/7 Emergency Response",
    description: "Professional water damage restoration services available 24/7",
    url: '/',
    siteName: 'Water Damage Restoration Services',
    locale: 'en_US',
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Water Damage Restoration Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Damage Restoration Services | 24/7 Emergency Response',
    description: 'Professional water damage restoration services available 24/7',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [
    generateLocalBusinessSchema(),
    generateOrganizationSchema()
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com'} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0284c7" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Analytics />
        {children}
        <SchemaMarkup schema={schemas} />
      </body>
    </html>
  );
}
