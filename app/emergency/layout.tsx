import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Emergency Water Damage Response | Call Now 1-800-911-9111',
  description: 'Emergency water damage restoration available 24/7/365. Fast response for burst pipes, flooding, roof leaks, and appliance failures. Call 1-800-911-9111 now!',
  keywords: 'emergency water damage, 24/7 water restoration, burst pipe emergency, flood emergency, water damage hotline',
  openGraph: {
    title: '24/7 Emergency Water Damage Response',
    description: 'Immediate emergency response for water damage situations',
    type: 'website',
  },
};

export default function EmergencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
