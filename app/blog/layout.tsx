import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Damage Blog | Tips, Guides & Expert Advice',
  description: 'Expert water damage prevention tips, restoration guides, and industry insights. Learn how to protect your home from water damage and what to do in emergencies.',
  keywords: 'water damage blog, prevention tips, restoration guides, mold prevention, water damage advice',
  openGraph: {
    title: 'Water Damage Blog',
    description: 'Expert tips and guides on water damage prevention and restoration',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
