import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaPhoneAlt, FaClock, FaBolt, FaShieldAlt } from 'react-icons/fa';

export const metadata = generateSEO({
  title: '24/7 Emergency Water Damage Service',
  description: 'Emergency water damage restoration available 24/7. Fast response within 60 minutes. Call now for immediate assistance with floods, burst pipes, and water emergencies.',
  keywords: ['emergency water damage', '24/7 water removal', 'emergency flood cleanup', 'burst pipe repair', 'immediate water extraction'],
  canonical: '/emergency',
});

export default function EmergencyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://yourwebsite.com' },
    { name: 'Emergency Service', url: 'https://yourwebsite.com/emergency' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <main className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
        <Navbar />
        
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-red-600">
              24/7 Emergency Service
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              Water damage doesn't wait. Neither do we.
            </p>
            <a
              href="tel:+18009119111"
              className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-16 py-6 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all animate-pulse"
            >
              <FaPhoneAlt className="inline mr-3" />
              CALL NOW: 1-800-911-9111
            </a>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why <span className="text-red-600">Every Minute</span> Counts
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-red-600">Within Minutes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Water spreads throughout property</li>
                  <li>• Furniture begins absorbing water</li>
                  <li>• Drywall starts to swell</li>
                  <li>• Metal surfaces begin to tarnish</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Within Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Drywall begins to break down</li>
                  <li>• Wood floors swell and warp</li>
                  <li>• Mold and mildew start growing</li>
                  <li>• Electrical hazards develop</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-xl mb-12">
              <h3 className="text-3xl font-bold mb-4 text-center">Our Emergency Response</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <FaPhoneAlt className="text-5xl mx-auto mb-3" />
                  <h4 className="font-bold mb-2">1. Call Us</h4>
                  <p className="text-sm">24/7 availability</p>
                </div>
                <div className="text-center">
                  <FaClock className="text-5xl mx-auto mb-3" />
                  <h4 className="font-bold mb-2">2. Fast Response</h4>
                  <p className="text-sm">Arrive in 60 min</p>
                </div>
                <div className="text-center">
                  <FaBolt className="text-5xl mx-auto mb-3" />
                  <h4 className="font-bold mb-2">3. Quick Action</h4>
                  <p className="text-sm">Immediate extraction</p>
                </div>
                <div className="text-center">
                  <FaShieldAlt className="text-5xl mx-auto mb-3" />
                  <h4 className="font-bold mb-2">4. Protection</h4>
                  <p className="text-sm">Prevent further damage</p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-center mb-8">Common Water Emergencies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Burst or frozen pipes",
                "Sewage backups",
                "Flooding from storms",
                "Appliance malfunctions",
                "Roof leaks",
                "Toilet overflows",
                "Water heater failures",
                "Foundation cracks"
              ].map((emergency, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-red-600 text-2xl">⚠️</span>
                  <span className="text-gray-800 font-medium">{emergency}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Don't Wait - Call Now!</h2>
            <p className="text-xl mb-8">Every minute of delay increases damage and costs</p>
            <a
              href="tel:+18009119111"
              className="inline-block bg-white text-red-600 px-16 py-6 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all"
            >
              📞 1-800-911-9111
            </a>
            <p className="mt-6 text-lg">Available 24 hours a day, 7 days a week, 365 days a year</p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
