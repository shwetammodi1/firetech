import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

const WA = (p: string) =>
  `https://wa.me/918964005455?text=${encodeURIComponent('Hello Firetech Enterprises, I would like details about ' + p + '.')}`

interface Category {
  id: string
  name: string
  img: string
  desc: string
  items: string[]
}

const CATEGORIES: Category[] = [
  {
    id: 'extinguishers',
    name: 'Fire Extinguishers',
    img: '/images/extinguisher.jpg',
    desc: 'Portable and trolley-mounted extinguishers for every class of fire — supplied, installed and refilled to IS standards.',
    items: ['ABC Dry Powder', 'CO₂ & Clean Agent', 'Mechanical Foam (AFFF)', 'K-Type Kitchen'],
  },
  {
    id: 'hydrant',
    name: 'Fire Hydrant Systems',
    img: '/images/firefighter.jpg',
    desc: 'End-to-end hydrant and hose-reel systems — pumps, valves, piping and landing valves engineered for high-rise and industrial sites.',
    items: ['Internal & External Hydrants', 'Hose Reel Drums', 'Pump House & Jockey Pumps', 'Landing Valves'],
  },
  {
    id: 'alarm',
    name: 'Fire Alarm Systems',
    img: '/images/smoke-detector.jpg',
    desc: 'Conventional and addressable fire detection — smoke & heat detectors, manual call points, panels and hooters.',
    items: ['Smoke & Heat Detectors', 'Addressable Panels', 'Manual Call Points', 'Sounders & Hooters'],
  },
  {
    id: 'suppression',
    name: 'Fire Suppression Systems',
    img: '/images/sprinkler.jpg',
    desc: 'Automatic sprinkler, clean-agent and kitchen suppression systems that detect and extinguish fire before it spreads.',
    items: ['Sprinkler Systems', 'Clean Agent (Novec / FM-200)', 'Kitchen Suppression', 'Deluge & Foam'],
  },
  {
    id: 'safety',
    name: 'Safety Products & Equipment',
    img: '/images/technician.jpg',
    desc: 'A complete range of fire safety accessories, PPE and signage to keep your premises compliant and evacuation-ready.',
    items: ['Fire Blankets & Sand Buckets', 'Emergency & Exit Lighting', 'Safety Signage', 'PPE & Fire Suits'],
  },
]

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  return (
    <motion.article
      id={cat.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-900/8 hover:border-fire-500/40 hover:shadow-2xl hover:shadow-fire-900/10 hover:-translate-y-1 transition-all duration-300 scroll-mt-28"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-neutral-100">
        <img
          src={cat.img}
          alt={cat.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-5 right-5 font-heading font-black text-white text-xl drop-shadow-lg">
          {cat.name}
        </h3>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-smoke-500 text-sm leading-relaxed mb-4">{cat.desc}</p>

        <ul className="grid grid-cols-1 gap-2 mb-6">
          {cat.items.map((it) => (
            <li key={it} className="flex items-center gap-2 text-smoke-600 text-sm">
              <Check className="w-4 h-4 text-fire-500 flex-shrink-0" />
              {it}
            </li>
          ))}
        </ul>

        <a
          href={WA(cat.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 bg-fire-500 hover:bg-fire-600 text-white font-heading font-bold text-sm px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
        >
          Enquire Now
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.article>
  )
}

export default function ProductCategories() {
  return (
    <section className="relative section-padding bg-dark-900 overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="Our Products"
          title="All Fire Solutions"
          highlight="Under One Roof"
          subtitle="From extinguishers to complete fire-fighting systems — advanced, certified fire safety instruments for every industrial and commercial need."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
