import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata = generateSEO({
  title: 'Contact Us',
  description: 'Contact our water damage restoration experts for a free consultation and estimate. Available 24/7 for emergency service. Call 1-800-911-9111 or fill out our contact form.',
  keywords: ['contact water damage', 'free estimate', 'water damage consultation', 'emergency contact'],
  canonical: '/contact',
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://yourwebsite.com' },
    { name: 'Contact', url: 'https://yourwebsite.com/contact' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
        <Navbar />
        
        <section className="pt-32 pb-8 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team for a free consultation and estimate. 
              We're here to help 24/7.
            </p>
          </div>
        </section>

        <Contact />
        <Footer />
      </main>
    </>
  );
}
