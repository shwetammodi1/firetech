import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

const WHATSAPP_BASE = 'https://wa.me/918964005455?text='

interface Product {
  name: string
  category: string
  desc: string
  tag?: string
  img: string
}

const PRODUCTS: Product[] = [
  { name: 'ABC Dry Powder Extinguisher', category: 'Fire Extinguisher', tag: 'Best Seller',
    desc: 'Multi-purpose ISI marked extinguisher effective on Class A, B & C fires. Available from 1 kg to 75 kg.', img: '/images/extinguisher.jpg' },
  { name: 'CO₂ Fire Extinguisher', category: 'Fire Extinguisher',
    desc: 'Zero residue, safe on live electrical equipment. Ideal for server rooms, switchgear panels and labs.', img: '/images/co2.jpg' },
  { name: 'AFFF Foam Extinguisher', category: 'Fire Extinguisher',
    desc: 'Creates a cooling foam blanket over burning liquids, preventing re-ignition. Effective on Class A & B fires.', img: '/images/foam.jpg' },
  { name: 'Clean Agent Extinguisher', category: 'Fire Extinguisher', tag: 'Premium',
    desc: 'FM-200 / Novec 1230 clean agent. No damage to electronics. Perfect for data centres and clean rooms.', img: '/images/extinguisher.jpg' },
  { name: 'Fire Hydrant System', category: 'Fire System',
    desc: 'Complete wet/dry riser hydrant systems with pumps, hose reels, landing valves and fire cabinets.', img: '/images/hydrant-valve.jpg' },
  { name: 'Fire Alarm System', category: 'Detection',
    desc: 'Conventional and addressable panels with smoke detectors, heat detectors, call points and sounders.', img: '/images/call-point.jpg' },
  { name: 'Gas Suppression System', category: 'Suppression', tag: 'Specialist',
    desc: 'Total flooding suppression using clean agent or CO₂. Engineered for data centres and server rooms.', img: '/images/sprinkler.jpg' },
  { name: 'K-Type Kitchen Extinguisher', category: 'Fire Extinguisher',
    desc: 'Wet chemical formulation suppresses cooking-oil fires and prevents re-ignition in commercial kitchens.', img: '/images/foam.jpg' },
]

function ProductCard({ p }: { p: Product }) {
  const enquireUrl = WHATSAPP_BASE + encodeURIComponent(`Hello Firetech Enterprises, I would like to enquire about: ${p.name}`)
  return (
    <article
      data-card
      className="flex-none w-[82%] sm:w-[47%] lg:w-[calc(25%-15px)] snap-start
                 group flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-900/8
                 shadow-sm hover:shadow-xl hover:shadow-fire-900/10 hover:border-fire-500/40
                 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-neutral-50">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {p.tag && (
          <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase text-white bg-fire-500 rounded-full px-2.5 py-1 shadow">
            {p.tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <span className="text-[10px] font-bold tracking-widest uppercase text-smoke-600 mb-1.5">{p.category}</span>
        <h3 className="font-heading font-bold text-smoke-100 text-base mb-2 leading-snug group-hover:text-fire-600 transition-colors duration-300">
          {p.name}
        </h3>
        <p className="text-smoke-500 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">{p.desc}</p>
        <a
          href={enquireUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-fire-600 border border-fire-500/30 hover:text-white hover:bg-fire-500 hover:border-fire-500 rounded-lg px-4 py-2 transition-all duration-300 w-fit"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Enquire Now
        </a>
      </div>
    </article>
  )
}

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (dir: number) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]') as HTMLElement | null
    const step = card ? card.offsetWidth + 20 : el.clientWidth
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    const atStart = el.scrollLeft <= 8
    let next = el.scrollLeft + dir * step
    if (dir > 0 && atEnd) next = 0
    if (dir < 0 && atStart) next = el.scrollWidth
    el.scrollTo({ left: next, behavior: 'smooth' })
  }

  useEffect(() => {
    const t = setInterval(() => scrollByCard(1), 3800)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="products" className="relative section-padding bg-dark-800 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(230, 47, 16,0.05) 0%, transparent 65%)' }}
      />

      <Container>
        {/* Header + arrows */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-4">
          <div className="flex-1">
            <SectionHeader
              eyebrow="Our Products"
              title="Efficient Fire Safety"
              highlight="Instruments"
              subtitle="Advanced fire safety instruments engineered for reliability, performance and protection across industrial and commercial environments."
              align="left"
            />
          </div>
          <div className="hidden lg:flex items-center gap-3 pb-14 flex-shrink-0">
            <button onClick={() => scrollByCard(-1)} aria-label="Previous products"
              className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center text-smoke-200 hover:text-white hover:bg-fire-500 hover:border-fire-500 transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollByCard(1)} aria-label="Next products"
              className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center text-smoke-200 hover:text-white hover:bg-fire-500 hover:border-fire-500 transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrolling track */}
        <motion.div
          ref={trackRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-1 px-1
                     [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </motion.div>

        {/* Mobile arrows + CTA */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex lg:hidden items-center gap-3">
            <button onClick={() => scrollByCard(-1)} aria-label="Previous products"
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-smoke-200 hover:text-white hover:bg-fire-500 hover:border-fire-500 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollByCard(1)} aria-label="Next products"
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-smoke-200 hover:text-white hover:bg-fire-500 hover:border-fire-500 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <a
            href="/products"
            className="ml-auto inline-flex items-center gap-2 bg-fire-500 hover:bg-fire-600 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-fire-900/40 hover:-translate-y-0.5 active:scale-95"
          >
            View All Products
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}
