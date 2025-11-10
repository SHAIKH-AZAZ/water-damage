import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | WaterCare Pro - 15+ Years of Excellence',
  description: 'Learn about WaterCare Pro, a leading water damage restoration company with 15+ years of experience, 10,000+ projects completed, and 50+ expert technicians nationwide.',
  keywords: 'water damage company, restoration experts, IICRC certified, water damage professionals',
  openGraph: {
    title: 'About WaterCare Pro',
    description: 'Leading water damage restoration experts with 15+ years of experience',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
