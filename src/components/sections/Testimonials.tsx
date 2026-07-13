import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

interface Testimonial {
  name: string
  role: string
  company: string
  industry: string
  rating: number
  text: string
  initials: string
  color: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rajesh Sharma',
    role: 'Facility Manager',
    company: 'Sharma Industries Pvt. Ltd.',
    industry: 'Manufacturing',
    rating: 5,
    text: 'Firetech Enterprises has been our fire safety partner for over 6 years. Their AMC team is prompt, professional, and thorough. Our factory passed the fire authority inspection with zero remarks — credit goes entirely to their rigorous maintenance.',
    initials: 'RS',
    color: 'bg-fire-500/20 text-fire-300',
  },
  {
    name: 'Priya Nair',
    role: 'Operations Head',
    company: 'Horizon Hospitality Group',
    industry: 'Hospitality',
    rating: 5,
    text: "We engaged Firetech for fire alarm and sprinkler installation across three of our hotels. The team was highly organized, completed the work well within deadline, and ensured minimal disruption to guests. Their post-installation support has been outstanding.",
    initials: 'PN',
    color: 'bg-neutral-500/20 text-neutral-300',
  },
  {
    name: 'Dr. Anil Mehta',
    role: 'Administrator',
    company: 'Lifeline Multi-Specialty Hospital',
    industry: 'Healthcare',
    rating: 5,
    text: 'For a hospital, fire safety is not optional — it\'s critical. Firetech understood this from day one. They designed a comprehensive fire protection system that met all NBC and NABH requirements. Highly recommended for healthcare facilities.',
    initials: 'AM',
    color: 'bg-neutral-500/20 text-neutral-300',
  },
  {
    name: 'Kavya Reddy',
    role: 'Principal',
    company: 'Sunrise International School',
    industry: 'Education',
    rating: 5,
    text: "From the first site audit to the final fire drill training for our staff, Firetech was exemplary. They're not just equipment suppliers — they're genuine safety partners. Our entire school is now fully compliant and our staff feel confident in emergencies.",
    initials: 'KR',
    color: 'bg-neutral-500/20 text-neutral-300',
  },
  {
    name: 'Suresh Patel',
    role: 'General Manager',
    company: 'Patel Warehousing Solutions',
    industry: 'Logistics',
    rating: 5,
    text: 'Our warehouses span 2 lakh sq ft and the fire risk is significant. Firetech designed and installed a complete hydrant and sprinkler system tailored to our layout. Their team was knowledgeable, efficient, and the pricing was transparent throughout.',
    initials: 'SP',
    color: 'bg-fire-500/20 text-fire-300',
  },
  {
    name: 'Meena Joshi',
    role: 'Compliance Officer',
    company: 'TechPark IT Solutions',
    industry: 'Technology',
    rating: 5,
    text: "We needed to achieve fire NOC for our new office building on a tight timeline. Firetech's team worked weekends and late evenings to get our system installed and certified in time. Exceptional dedication and zero compromise on quality.",
    initials: 'MJ',
    color: 'bg-neutral-500/20 text-neutral-300',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'text-neutral-400 fill-neutral-400' : 'text-smoke-700'}`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = TESTIMONIALS.length
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const prev = () => setActive((a) => (a - 1 + total) % total)
  const next = () => setActive((a) => (a + 1) % total)

  // Auto-advance every 5 seconds, pause on hover
  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % total)
    }, 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, total])

  const t = TESTIMONIALS[active]

  return (
    <section id="testimonials" className="relative section-padding bg-dark-900 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(230, 47, 16,0.05) 0%, transparent 65%)' }}
      />

      <Container size="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Client Stories"
            title="Trusted by"
            highlight="500+ Clients"
            subtitle="Real feedback from real clients across industries — because your trust is our greatest achievement."
          />
        </motion.div>

        {/* Main testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass rounded-3xl border border-slate-900/6 overflow-hidden mb-8">
            <div className="grid md:grid-cols-[1fr_2fr] gap-0">

              {/* Left sidebar */}
              <div className="relative flex flex-col items-center justify-center p-6 md:p-10 bg-fire-500/[0.04] border-b md:border-b-0 md:border-r border-slate-900/5">
                {/* Avatar */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-heading font-black mb-4 border border-slate-900/10 ${t.color}`}>
                  {t.initials}
                </div>
                <p className="font-heading font-bold text-smoke-100 text-base text-center">{t.name}</p>
                <p className="text-smoke-500 text-xs mt-0.5 text-center">{t.role}</p>
                <div className="flex items-center gap-1.5 mt-2 text-smoke-600 text-xs">
                  <Building2 className="w-3 h-3 flex-shrink-0" />
                  <span className="text-center leading-tight">{t.company}</span>
                </div>
                <div className="mt-3">
                  <StarRating rating={t.rating} />
                </div>
                <div className="mt-3 px-3 py-1 rounded-full bg-dark-600/60 border border-slate-900/5 text-smoke-600 text-[10px] font-medium tracking-wide uppercase">
                  {t.industry}
                </div>
              </div>

              {/* Right: quote */}
              <div className="flex flex-col justify-center p-6 md:p-12">
                <Quote className="w-10 h-10 text-fire-500/25 mb-4 flex-shrink-0" />
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="text-smoke-300 text-base sm:text-lg leading-relaxed font-light italic"
                  >
                    "{t.text}"
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation row */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-1">
            {/* Prev / Next */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full glass border border-slate-900/8 flex items-center justify-center text-smoke-400 hover:text-smoke-100 hover:border-fire-500/30 hover:bg-fire-500/10 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full glass border border-slate-900/8 flex items-center justify-center text-smoke-400 hover:text-smoke-100 hover:border-fire-500/30 hover:bg-fire-500/10 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={[
                    'rounded-full transition-all duration-300',
                    i === active
                      ? 'w-6 h-2 bg-fire-500'
                      : 'w-2 h-2 bg-smoke-700 hover:bg-smoke-500',
                  ].join(' ')}
                />
              ))}
            </div>

            {/* Counter */}
            <p className="text-smoke-600 text-xs font-medium tabular-nums">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
          </div>
        </motion.div>

        {/* Mini avatar strip */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              title={t.name}
              className={[
                'w-10 h-10 rounded-xl flex items-center justify-center text-xs font-heading font-black border transition-all duration-300',
                i === active
                  ? `${t.color} border-fire-500/40 scale-110 shadow-lg shadow-fire-900/30`
                  : 'bg-dark-600/50 text-smoke-500 border-slate-900/5 hover:border-fire-500/20',
              ].join(' ')}
            >
              {t.initials}
            </button>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
