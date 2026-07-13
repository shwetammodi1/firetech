import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowUpRight } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import Container from '../components/layout/Container'

interface Post {
  title: string
  excerpt: string
  date: string
  category: string
  img: string
}

const POSTS: Post[] = [
  {
    title: 'How Often Should You Refill a Fire Extinguisher?',
    excerpt: 'A practical guide to extinguisher refilling intervals, pressure checks, and the legal requirements every Indian business must follow.',
    date: '12 Jun 2026',
    category: 'Maintenance',
    img: '/images/technician.jpg',
  },
  {
    title: 'Understanding Fire Alarm Systems: Conventional vs Addressable',
    excerpt: 'Which fire alarm system is right for your building? We break down the differences, costs, and ideal use-cases for each type.',
    date: '28 May 2026',
    category: 'Systems',
    img: '/images/firefighter.jpg',
  },
  {
    title: 'Why an Annual Maintenance Contract (AMC) Saves You Money',
    excerpt: 'Reactive repairs cost more than prevention. Here is how a well-structured AMC keeps your premises compliant and your budget predictable.',
    date: '10 May 2026',
    category: 'AMC',
    img: '/images/hero-fire.jpg',
  },
  {
    title: 'Fire Safety Audit Checklist for Commercial Buildings',
    excerpt: 'The essential points our certified engineers inspect during a fire safety audit — and the common gaps we find most often.',
    date: '22 Apr 2026',
    category: 'Audit',
    img: '/images/technician.jpg',
  },
  {
    title: 'Choosing the Right Extinguisher: ABC, CO₂, Foam or K-Type',
    excerpt: 'Different fires need different agents. Learn which extinguisher class protects your kitchen, server room, or workshop best.',
    date: '05 Apr 2026',
    category: 'Products',
    img: '/images/firefighter.jpg',
  },
  {
    title: 'Fire Drill Best Practices Every Workplace Should Follow',
    excerpt: 'A step-by-step approach to running effective evacuation drills that keep your staff prepared and your compliance records clean.',
    date: '18 Mar 2026',
    category: 'Training',
    img: '/images/hero-fire.jpg',
  },
]

export default function BlogsPage() {
  return (
    <>
      <PageHero
        crumb="Blogs"
        title="Fire Safety Insights"
        subtitle="Practical guides, compliance tips and industry updates from the Firetech Enterprises team."
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {POSTS.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group flex flex-col rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:shadow-xl hover:shadow-neutral-900/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-1.5 text-neutral-500 text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <h2 className="font-heading font-bold text-neutral-900 text-lg leading-snug mb-2.5 group-hover:text-black transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-neutral-900 font-semibold text-sm border-b-2 border-neutral-900/20 hover:border-neutral-900 pb-0.5 w-fit transition-colors"
                  >
                    Read Article
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
