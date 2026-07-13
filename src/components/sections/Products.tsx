import { motion } from 'framer-motion'
import {
  Flame, Wind, Droplets, Zap, ShieldAlert,
  BellRing, Package, Thermometer,
  MessageCircle,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

const WHATSAPP_BASE =
  'https://wa.me/918964005455?text='

interface Product {
  icon: React.ElementType
  name: string
  category: string
  desc: string
  tag?: string
  iconAccent: string
  iconText: string
}

const PRODUCTS: Product[] = [
  {
    icon: Flame,
    name: 'ABC Dry Powder Extinguisher',
    category: 'Fire Extinguisher',
    desc: 'Multi-purpose ISI marked extinguisher effective on Class A, B & C fires. Available from 1 kg to 75 kg for offices, factories, and vehicles.',
    tag: 'Best Seller',
    iconAccent: 'bg-fire-500/15 border-fire-500/30',
    iconText: 'text-fire-500',
  },
  {
    icon: Wind,
    name: 'CO₂ Fire Extinguisher',
    category: 'Fire Extinguisher',
    desc: 'Zero residue, safe on live electrical equipment. Ideal for server rooms, switchgear panels, labs, and offices.',
    iconAccent: 'bg-fire-500/15 border-fire-500/30',
    iconText: 'text-fire-500',
  },
  {
    icon: Droplets,
    name: 'AFFF Foam Extinguisher',
    category: 'Fire Extinguisher',
    desc: 'Creates a cooling foam blanket over burning liquids, preventing re-ignition. Highly effective on Class A & B fires.',
    iconAccent: 'bg-fire-500/15 border-fire-500/30',
    iconText: 'text-fire-500',
  },
  {
    icon: Zap,
    name: 'Clean Agent Extinguisher',
    category: 'Fire Extinguisher',
    desc: 'FM-200 / Novec 1230 clean agent. No ozone depletion, no damage to electronics. Perfect for data centres and clean rooms.',
    tag: 'Premium',
    iconAccent: 'bg-fire-500/15 border-fire-500/30',
    iconText: 'text-fire-500',
  },
  {
    icon: ShieldAlert,
    name: 'Fire Hydrant System',
    category: 'Fire System',
    desc: 'Complete wet/dry riser hydrant systems with pumps, hose reels, landing valves, and fire cabinets for large commercial and industrial premises.',
    iconAccent: 'bg-fire-600/15 border-fire-600/30',
    iconText: 'text-fire-500',
  },
  {
    icon: BellRing,
    name: 'Fire Alarm System',
    category: 'Detection',
    desc: 'Conventional and addressable control panels with smoke detectors, heat detectors, manual call points, and sounder units.',
    iconAccent: 'bg-fire-500/15 border-fire-500/30',
    iconText: 'text-fire-500',
  },
  {
    icon: Package,
    name: 'Gas Suppression System',
    category: 'Suppression',
    desc: 'Total flooding suppression using clean agent or CO₂. Engineered for data centres, server rooms, and archive vaults.',
    tag: 'Specialist',
    iconAccent: 'bg-fire-500/15 border-fire-500/30',
    iconText: 'text-fire-500',
  },
  {
    icon: Thermometer,
    name: 'K-Type Kitchen Extinguisher',
    category: 'Fire Extinguisher',
    desc: 'Wet chemical formulation reacts with cooking oils to form a soapy foam layer, suppressing flames and preventing re-ignition in commercial kitchens.',
    iconAccent: 'bg-fire-500/15 border-fire-500/30',
    iconText: 'text-fire-500',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

function ProductCard({ product }: { product: Product }) {
  const { icon: Icon, name, category, desc, tag, iconAccent, iconText } = product
  const enquireUrl =
    WHATSAPP_BASE +
    encodeURIComponent(`Hello Firetech Enterprises, I would like to enquire about: ${name}`)

  return (
    <motion.article
      variants={fadeUp}
      className="relative glass rounded-2xl p-6 border border-neutral-900/5
                 hover:border-fire-500/25 hover:bg-fire-500/[0.025]
                 transition-all duration-400 group overflow-hidden
                 flex flex-col h-full"
    >
      {/* Corner glow on hover */}
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-fire-500/0 group-hover:bg-fire-500/10 transition-all duration-500 blur-xl pointer-events-none" />

      {/* Tag badge */}
      {tag && (
        <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase text-fire-300 bg-fire-500/10 border border-fire-500/25 rounded-full px-2.5 py-0.5">
          {tag}
        </span>
      )}

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${iconAccent} transition-all duration-300 group-hover:scale-110`}
      >
        <Icon className={`w-6 h-6 ${iconText} transition-colors duration-300`} />
      </div>

      {/* Category */}
      <span className="text-[10px] font-bold tracking-widest uppercase text-smoke-600 mb-1.5">
        {category}
      </span>

      {/* Name */}
      <h3 className="font-heading font-bold text-smoke-100 text-base mb-2.5 leading-snug group-hover:text-fire-500 transition-colors duration-300">
        {name}
      </h3>

      {/* Description */}
      <p className="text-smoke-500 text-sm leading-relaxed group-hover:text-smoke-400 transition-colors duration-300 flex-1 mb-5">
        {desc}
      </p>

      {/* Enquire button */}
      <a
        href={enquireUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-bold text-fire-500 border border-fire-500/25 hover:border-fire-500/50 hover:bg-fire-500/10 rounded-lg px-4 py-2 transition-all duration-300 w-fit"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        Enquire Now
      </a>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/0 to-transparent group-hover:via-fire-500/40 transition-all duration-500" />
    </motion.article>
  )
}

export default function Products() {
  return (
    <section id="products" className="relative section-padding bg-dark-800 overflow-hidden">
      {/* Background ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(230, 47, 16,0.05) 0%, transparent 65%)',
        }}
      />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <SectionHeader
            eyebrow="Our Products"
            title="Efficient Fire Safety"
            highlight="Instruments"
            subtitle="We deliver advanced fire safety instruments engineered for reliability, performance, and protection across diverse industrial and commercial environments."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </motion.div>

        {/* View full catalogue CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://wa.me/918964005455?text=Hello%20Firetech%20Enterprises%2C%20I%20would%20like%20to%20see%20your%20complete%20product%20catalogue."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-fire-500 hover:bg-fire-400 text-white font-heading font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-fire-900/40 hover:shadow-fire-500/30 hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            View Full Product Catalogue
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
