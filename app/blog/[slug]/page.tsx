import { generateSEO } from '@/lib/seo';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// This would typically come from a CMS or database
const blogPost = {
  title: 'How to Prevent Water Damage in Your Home',
  description: 'Learn essential tips and strategies to protect your home from water damage before it happens. Expert advice from certified restoration professionals.',
  image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop',
  datePublished: '2024-11-01',
  dateModified: '2024-11-01',
  author: 'WaterCare Pro Team',
  content: `
    <h2>Understanding Water Damage Prevention</h2>
    <p>Water damage is one of the most common and costly problems homeowners face. However, with proper prevention strategies, you can significantly reduce your risk.</p>
    
    <h2>1. Regular Maintenance Checks</h2>
    <p>Inspect your home regularly for signs of potential water damage:</p>
    <ul>
      <li>Check pipes and faucets for leaks</li>
      <li>Inspect your roof for missing or damaged shingles</li>
      <li>Clean gutters and downspouts seasonally</li>
      <li>Test your sump pump before rainy season</li>
    </ul>

    <h2>2. Install Water Detection Devices</h2>
    <p>Modern water leak detectors can alert you to problems before they become disasters. Place them near:</p>
    <ul>
      <li>Water heaters</li>
      <li>Washing machines</li>
      <li>Under sinks</li>
      <li>Near sump pumps</li>
    </ul>

    <h2>3. Maintain Your Appliances</h2>
    <p>Regular appliance maintenance can prevent catastrophic failures:</p>
    <ul>
      <li>Replace washing machine hoses every 5 years</li>
      <li>Flush your water heater annually</li>
      <li>Clean refrigerator drip pans</li>
      <li>Inspect dishwasher seals</li>
    </ul>

    <h2>4. Improve Drainage</h2>
    <p>Proper drainage keeps water away from your foundation:</p>
    <ul>
      <li>Ensure downspouts extend at least 6 feet from foundation</li>
      <li>Grade soil away from your home</li>
      <li>Install a French drain if needed</li>
      <li>Keep gutters clean and functional</li>
    </ul>

    <h2>5. Know Your Water Main</h2>
    <p>In an emergency, knowing how to quickly shut off your water main can save thousands in damage. Make sure all family members know its location.</p>

    <h2>Conclusion</h2>
    <p>Prevention is always better than restoration. By following these tips, you can protect your home and avoid costly water damage repairs. If you do experience water damage, contact our 24/7 emergency team immediately.</p>
  `
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return generateSEO({
    title: blogPost.title,
    description: blogPost.description,
    ogImage: blogPost.image,
    canonical: `/blog/${params.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const articleSchema = generateArticleSchema({
    title: blogPost.title,
    description: blogPost.description,
    image: blogPost.image,
    datePublished: blogPost.datePublished,
    dateModified: blogPost.dateModified,
    author: blogPost.author,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://yourwebsite.com' },
    { name: 'Blog', url: 'https://yourwebsite.com/blog' },
    { name: blogPost.title, url: `https://yourwebsite.com/blog/${params.slug}` }
  ]);

  return (
    <>
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema]} />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
        <Navbar />
        
        <article className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <header className="mb-12">
              <h1 className="text-5xl font-bold mb-6">{blogPost.title}</h1>
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                <time dateTime={blogPost.datePublished}>
                  {new Date(blogPost.datePublished).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>•</span>
                <span>By {blogPost.author}</span>
              </div>
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </header>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl text-center">
              <h3 className="text-3xl font-bold mb-4">Need Professional Help?</h3>
              <p className="text-xl mb-6">Our team is available 24/7 for emergency water damage restoration</p>
              <a
                href="tel:+18009119111"
                className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Call Now: 1-800-911-9111
              </a>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
