import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaAward, FaCertificate, FaUsers, FaClock } from 'react-icons/fa';

export const metadata = generateSEO({
  title: 'About Us',
  description: 'Learn about our professional water damage restoration company. IICRC certified technicians with over 15 years of experience serving residential and commercial properties nationwide.',
  keywords: ['water damage company', 'IICRC certified', 'professional restoration', 'experienced technicians'],
  canonical: '/about',
});

const stats = [
  { icon: FaUsers, number: "10,000+", label: "Satisfied Customers" },
  { icon: FaClock, number: "15+", label: "Years Experience" },
  { icon: FaAward, number: "500+", label: "5-Star Reviews" },
  { icon: FaCertificate, number: "100%", label: "Licensed & Insured" }
];

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://yourwebsite.com' },
    { name: 'About', url: 'https://yourwebsite.com/about' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
        <Navbar />
        
        <article className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
              About <span className="gradient-text">WaterCare Pro</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                With over 15 years of experience in water damage restoration, WaterCare Pro has become 
                a trusted name in emergency water removal and property restoration services. Our team of 
                IICRC certified professionals is dedicated to providing fast, efficient, and thorough 
                restoration services 24/7.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                We understand that water damage can be devastating. Our mission is to provide immediate 
                response, professional service, and complete restoration to help you get back to normal 
                as quickly as possible. We treat every property as if it were our own.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Why Choose Us</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>24/7 Emergency Response:</strong> We're always available when you need us most</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>IICRC Certified:</strong> Our technicians are trained and certified professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Advanced Equipment:</strong> We use the latest technology for efficient restoration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Insurance Assistance:</strong> We work directly with your insurance company</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Satisfaction Guaranteed:</strong> We stand behind our work with a complete guarantee</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <stat.icon className="text-4xl text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today for a free consultation</p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Get Free Estimate
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
