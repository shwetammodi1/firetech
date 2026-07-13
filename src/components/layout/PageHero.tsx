import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  crumb: string
}

export default function PageHero({ title, subtitle, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-28 pb-14 sm:pt-36 sm:pb-20">
      {/* Grayscale image wash */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: 'url(/images/hero-fire.jpg)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.92) 100%)' }}
      />
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 mb-5" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{crumb}</span>
          </nav>

          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-neutral-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Accent rule */}
          <div className="mt-6 flex items-center gap-2">
            <span className="w-12 h-0.5 bg-white rounded-full" />
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span className="w-5 h-px bg-white/30 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
