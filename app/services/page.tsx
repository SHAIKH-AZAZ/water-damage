import { generateSEO } from '@/lib/seo';
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaWater, FaHome, FaTools, FaShieldAlt, FaSnowflake, FaFire, FaCheckCircle } from 'react-icons/fa';

export const metadata = generateSEO({
  title: 'Our Services',
  description: 'Comprehensive water damage restoration services including water extraction, structural drying, mold remediation, and emergency flood cleanup. Available 24/7 nationwide.',
  keywords: ['water extraction', 'structural drying', 'mold remediation', 'flood cleanup', 'fire damage restoration', 'emergency water removal'],
  canonical: '/services',
});

const services = [
  {
    icon: FaWater,
    title: "Water Extraction",
    description: "Rapid water removal using industrial-grade equipment to prevent further damage. Our powerful extractors remove standing water quickly and efficiently.",
    features: ["Industrial pumps", "24/7 availability", "Fast response", "Complete removal"]
  },
  {
    icon: FaHome,
    title: "Structural Drying",
    description: "Complete drying of walls, floors, and ceilings with advanced dehumidification technology to prevent mold growth and structural damage.",
    features: ["Advanced dehumidifiers", "Moisture monitoring", "Air movers", "Thermal imaging"]
  },
  {
    icon: FaTools,
    title: "Restoration & Repair",
    description: "Full restoration services to return your property to pre-damage condition, including reconstruction and finishing work.",
    features: ["Complete reconstruction", "Painting & finishing", "Flooring replacement", "Quality guarantee"]
  },
  {
    icon: FaShieldAlt,
    title: "Mold Remediation",
    description: "Professional mold removal and prevention to ensure a healthy environment for you and your family.",
    features: ["Mold inspection", "Safe removal", "Prevention treatment", "Air quality testing"]
  },
  {
    icon: FaSnowflake,
    title: "Freeze Damage Repair",
    description: "Expert repair of burst pipes and freeze-related water damage with emergency response available.",
    features: ["Pipe repair", "Insulation", "Preventive measures", "Emergency service"]
  },
  {
    icon: FaFire,
    title: "Fire & Smoke Damage",
    description: "Water damage cleanup after fire suppression and comprehensive smoke damage restoration services.",
    features: ["Water removal", "Smoke cleanup", "Odor elimination", "Full restoration"]
  }
];

const faqs = [
  {
    question: "How quickly can you respond to an emergency?",
    answer: "We offer 24/7 emergency response and typically arrive within 60 minutes of your call in most service areas."
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes, we work directly with all major insurance companies and can help you navigate the claims process."
  },
  {
    question: "How long does water damage restoration take?",
    answer: "The timeline varies depending on the extent of damage, but most projects are completed within 3-7 days."
  },
  {
    question: "What equipment do you use?",
    answer: "We use industrial-grade water extractors, dehumidifiers, air movers, and thermal imaging cameras for thorough restoration."
  }
];

export default function ServicesPage() {
  const serviceSchemas = services.map(service => 
    generateServiceSchema({
      name: service.title,
      description: service.description,
      url: `https://yourwebsite.com/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`
    })
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://yourwebsite.com' },
    { name: 'Services', url: 'https://yourwebsite.com/services' }
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <SchemaMarkup schema={[...serviceSchemas, breadcrumbSchema, faqSchema]} />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive water damage restoration solutions for residential and commercial properties. 
              Available 24/7 for emergency situations.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <article key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                    <service.icon className="text-3xl text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <FaCheckCircle className="text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-blue-50 p-6 rounded-xl">
                  <summary className="font-bold text-lg cursor-pointer text-gray-800">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need Emergency Service?</h2>
            <p className="text-xl mb-8">Our team is available 24/7 to help you</p>
            <a
              href="tel:+18009119111"
              className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Call Now: 1-800-911-9111
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
