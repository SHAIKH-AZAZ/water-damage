import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Free Water Damage Consultation & Estimate',
  description: 'Contact WaterCare Pro for a free consultation and estimate. Available 24/7 for emergency water damage restoration. Call 1-800-911-9111 or fill out our form.',
  keywords: 'water damage contact, free estimate, water restoration consultation, emergency contact',
  openGraph: {
    title: 'Contact WaterCare Pro',
    description: 'Get in touch for a free consultation and estimate',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
