import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = generateSEO({
  title: 'Water Damage Blog & Resources',
  description: 'Expert tips, guides, and resources about water damage prevention, restoration, and emergency response. Learn from industry professionals.',
  keywords: ['water damage tips', 'restoration guide', 'flood prevention', 'water damage blog'],
  canonical: '/blog',
});

const blogPosts = [
  {
    slug: 'how-to-prevent-water-damage',
    title: 'How to Prevent Water Damage in Your Home',
    excerpt: 'Learn essential tips and strategies to protect your home from water damage before it happens.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
    date: '2024-11-01',
    category: 'Prevention'
  },
  {
    slug: 'what-to-do-after-flood',
    title: 'What to Do Immediately After a Flood',
    excerpt: 'Step-by-step guide on the critical actions to take in the first hours after flooding occurs.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop',
    date: '2024-10-28',
    category: 'Emergency'
  },
  {
    slug: 'signs-of-hidden-water-damage',
    title: '10 Signs of Hidden Water Damage',
    excerpt: 'Discover the warning signs of water damage that might be lurking behind your walls.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    date: '2024-10-25',
    category: 'Tips'
  },
  {
    slug: 'mold-after-water-damage',
    title: 'Understanding Mold Growth After Water Damage',
    excerpt: 'Everything you need to know about mold prevention and remediation after water incidents.',
    image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=400&fit=crop',
    date: '2024-10-20',
    category: 'Mold'
  },
  {
    slug: 'insurance-claims-water-damage',
    title: 'Navigating Insurance Claims for Water Damage',
    excerpt: 'A comprehensive guide to filing and maximizing your water damage insurance claim.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    date: '2024-10-15',
    category: 'Insurance'
  },
  {
    slug: 'winter-pipe-protection',
    title: 'Protecting Your Pipes This Winter',
    excerpt: 'Essential winterization tips to prevent frozen and burst pipes during cold weather.',
    image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=600&h=400&fit=crop',
    date: '2024-10-10',
    category: 'Prevention'
  }
];

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://yourwebsite.com' },
    { name: 'Blog', url: 'https://yourwebsite.com/blog' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
        <Navbar />
        
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
              Water Damage <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Expert advice, tips, and resources to help you prevent, manage, and recover from water damage.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <time className="text-gray-500 text-sm">{post.date}</time>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need Immediate Help?</h2>
            <p className="text-xl mb-8">Don't wait - contact our emergency team now</p>
            <a
              href="tel:+18009119111"
              className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Call: 1-800-911-9111
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
