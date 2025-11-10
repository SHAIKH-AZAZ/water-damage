import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Services | Professional Solutions 24/7',
  description: 'Comprehensive water damage restoration services including emergency water extraction, structural drying, mold remediation, and complete restoration. Available 24/7 nationwide.',
  keywords: 'water damage services, emergency water extraction, structural drying, mold remediation, flood cleanup, water restoration, burst pipe repair',
  openGraph: {
    title: 'Water Damage Restoration Services',
    description: 'Professional water damage restoration services available 24/7',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
