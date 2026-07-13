import { motion } from 'framer-motion'
import Container from '../layout/Container'

const enquire = (p: string) =>
  `https://wa.me/918964005455?text=${encodeURIComponent('Hello Firetech Enterprises, I would like details / a quote for: ' + p + '.')}`

interface Product {
  name: string
  type: string      // Portable / Wheeled / Wall Mounted ...
  rating: string    // Class A/B/C ...
  spec: string      // capacity / size
  img: string
}

interface Category {
  id: string
  name: string
  blurb: string
  products: Product[]
}

const EXT   = '/images/extinguisher.jpg'
const CO2   = '/images/co2.jpg'
const FOAM  = '/images/foam.jpg'
const HYD   = '/images/firefighter.jpg'
const VALVE = '/images/hydrant-valve.jpg'
const SUP   = '/images/sprinkler.jpg'
const ALM   = '/images/smoke-detector.jpg'
const CALL  = '/images/call-point.jpg'
const EXIT  = '/images/exit-sign.jpg'
const BLKT  = '/images/fire-blanket.jpg'
const ACC   = '/images/technician.jpg'

const CATEGORIES: Category[] = [
  {
    id: 'extinguishers',
    name: 'Fire Extinguishers',
    blurb: 'Portable, modular and trolley-mounted extinguishers for every class of fire.',
    products: [
      { name: 'ABC Portable Fire Extinguisher', type: 'Portable', rating: 'Class A/B/C', spec: '1, 2, 4, 6, 9 KG', img: EXT },
      { name: 'ABC Modular Fire Extinguisher', type: 'Ceiling Mounted', rating: 'Class A/B/C', spec: '5, 10 KG', img: EXT },
      { name: 'ABC Modular (SS Body)', type: 'Ceiling Mounted', rating: 'Class A/B/C', spec: '5 KG', img: EXT },
      { name: 'ABC Automatic Modular', type: 'Automatic', rating: 'Class A/B/C', spec: '5 KG', img: EXT },
      { name: 'ABC Wheeled (CO₂ Type)', type: 'Wheeled', rating: 'Class A/B/C', spec: '25, 50 KG', img: EXT },
      { name: 'ABC Wheeled (Stored Pressure)', type: 'Wheeled', rating: 'Class A/B/C', spec: '25, 50 KG', img: EXT },
      { name: 'BC Dry Powder', type: 'Portable', rating: 'Class B/C', spec: '1, 2 KG', img: EXT },
      { name: 'CO₂ Portable', type: 'Portable', rating: 'Class B/C', spec: '2, 3, 4.5 KG', img: CO2 },
      { name: 'CO₂ Wheeled', type: 'Wheeled', rating: 'Class B/C', spec: '9, 22.5 KG', img: CO2 },
      { name: 'Clean Agent Portable', type: 'Portable', rating: 'Class A/B/C', spec: '2, 4, 6 KG', img: EXT },
      { name: 'Clean Agent Modular', type: 'Ceiling Mounted', rating: 'Class A/B/C', spec: '2, 4 KG', img: EXT },
      { name: 'Clean Agent SS', type: 'Portable', rating: 'Class A/B/C', spec: '4 KG', img: EXT },
      { name: 'Mechanical Foam (AFFF)', type: 'Portable', rating: 'Class A/B', spec: '9, 50 L', img: FOAM },
      { name: 'Water Mist', type: 'Portable', rating: 'Class A/K', spec: '6, 9 L', img: FOAM },
      { name: 'Water CO₂', type: 'Portable', rating: 'Class A', spec: '9 L', img: FOAM },
      { name: 'K-Type Kitchen', type: 'Wall Mounted', rating: 'Class K', spec: '6, 9 L', img: FOAM },
    ],
  },
  {
    id: 'hydrant',
    name: 'Fire Hydrant System',
    blurb: 'End-to-end hydrant, hose and coupling systems for high-rise and industrial premises.',
    products: [
      { name: 'Hose Pipe Type A (GM Coupling)', type: 'RRL Reinforced', rating: 'IS 636', spec: '63mm × 15m', img: HYD },
      { name: 'Hose Pipe Type A (SS Coupling)', type: 'RRL Reinforced', rating: 'IS 636', spec: '63mm × 15m', img: HYD },
      { name: 'Hose Pipe Type B (SS Coupling)', type: 'RRL Reinforced', rating: 'IS 636', spec: '63mm × 15m', img: HYD },
      { name: 'Hose Reel Drum (GM Nozzle)', type: 'Wall Mounted', rating: 'Swinging', spec: '20 / 30 m', img: HYD },
      { name: 'Hose Reel Drum Indian (SS Nozzle)', type: 'Wall Mounted', rating: 'Swinging', spec: '20 / 30 m', img: HYD },
      { name: 'Hydrant Valve', type: 'Gunmetal', rating: 'Single / Double', spec: '63mm', img: VALVE },
      { name: 'Branch Pipe (SS)', type: 'Stainless Steel', rating: 'Short / Long', spec: '63mm', img: VALVE },
      { name: 'Nozzle (SS / GM)', type: 'Metal', rating: 'Jet / Spray', spec: '63mm', img: VALVE },
      { name: 'Instantaneous Coupling', type: 'GM / SS', rating: 'Male / Female', spec: '63mm', img: VALVE },
      { name: 'Hose Box (MS Type)', type: 'Mild Steel', rating: 'Single / Double', spec: 'Wall Mount', img: HYD },
      { name: 'Hose Box (FRP Type)', type: 'FRP', rating: 'Single / Double', spec: 'Wall Mount', img: HYD },
    ],
  },
  {
    id: 'suppression',
    name: 'Fire Suppression System',
    blurb: 'Automatic detection & suppression that stops fire before it spreads.',
    products: [
      { name: 'Sprinklers (UL Listed)', type: 'Pendant / Upright', rating: '68 °C', spec: '15 / 20 mm', img: SUP },
      { name: 'Clean Agent Suppression', type: 'Room Flooding', rating: 'Class A/B/C', spec: 'Modular', img: SUP },
      { name: 'CO₂ Flooding System', type: 'Total Flooding', rating: 'Class B/C', spec: 'High Pressure', img: CO2 },
      { name: 'CO₂ Based Suppression', type: 'Total Flooding', rating: 'Class B/C', spec: 'IHP', img: CO2 },
      { name: 'Kitchen Wet Chemical', type: 'Hood System', rating: 'Class K', spec: 'Auto / Manual', img: SUP },
      { name: 'Gas-Based (DLP) System', type: 'Modular', rating: 'Class A/B/C', spec: 'Server / Panel', img: SUP },
      { name: 'Deluge & Foam System', type: 'Open Head', rating: 'Class A/B', spec: 'Industrial', img: SUP },
    ],
  },
  {
    id: 'safety',
    name: 'Fire Alarm & Accessories',
    blurb: 'Detection, alarm and safety accessories to keep your premises compliant.',
    products: [
      { name: 'Optical Smoke Detector', type: 'Ceiling Mount', rating: 'Conventional', spec: 'Photoelectric', img: ALM },
      { name: 'Heat Detector', type: 'Ceiling Mount', rating: 'Fixed / RoR', spec: '57 / 90 °C', img: ALM },
      { name: 'Manual Call Point', type: 'Wall Mount', rating: 'Break Glass', spec: 'Resettable', img: CALL },
      { name: 'Fire Alarm Control Panel', type: 'Wall Mount', rating: 'Conventional', spec: '2 / 4 / 8 Zone', img: CALL },
      { name: 'Fire Alarm Notification System', type: 'Wall Mount', rating: 'Sounder', spec: 'Hooter / Strobe', img: CALL },
      { name: 'Extinguisher Wall Brackets', type: 'Wall Mount', rating: 'MS', spec: 'ABC / CO₂', img: EXT },
      { name: 'CO₂ Cartridge', type: 'Refill', rating: 'Sealed', spec: 'Assorted', img: CO2 },
      { name: 'Fire Bucket Stand', type: 'Free Standing', rating: '4 Bucket', spec: 'With Sand', img: ACC },
      { name: 'First Aid Kit', type: 'Wall / Portable', rating: 'SP 26 Person', spec: 'Medical', img: ACC },
      { name: 'Emergency Exit Light', type: 'Wall Mount', rating: 'LED', spec: '2 / 3 Hr', img: EXIT },
      { name: 'Fire Blanket', type: 'Wall Mount', rating: 'Class F', spec: '1.2 × 1.2 m', img: BLKT },
      { name: 'Safety Signage Set', type: 'Photo-luminescent', rating: 'IS 12349', spec: 'Assorted', img: EXIT },
    ],
  },
]

function ProductCard({ p }: { p: Product }) {
  return (
    <motion.a
      href={enquire(p.name)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-smoke-100/10 shadow-sm hover:shadow-xl hover:shadow-fire-900/10 hover:border-fire-500/40 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-neutral-50">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-smoke-200 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm">
          {p.type}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <span className="inline-flex w-fit items-center gap-1 bg-fire-500/10 text-fire-600 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-2">
          {p.rating}
        </span>
        <h3 className="font-heading font-bold text-smoke-100 text-[0.95rem] leading-snug group-hover:text-fire-600 transition-colors">
          {p.name}
        </h3>
        <p className="text-smoke-500 text-xs mt-1">Capacity: <span className="text-smoke-300 font-semibold">{p.spec}</span></p>

        <span className="mt-3 inline-flex items-center gap-1 text-fire-600 text-xs font-bold group-hover:gap-2 transition-all">
          Enquire / Get Quote →
        </span>
      </div>
    </motion.a>
  )
}

export default function ProductCatalog() {
  const total = CATEGORIES.reduce((n, c) => n + c.products.length, 0)

  return (
    <section className="relative py-14 sm:py-20 bg-dark-800">
      <Container>
        <p className="text-smoke-500 text-sm mb-10">
          Showing <span className="text-fire-600 font-bold">{total}+</span> fire safety products across{' '}
          <span className="text-smoke-200 font-semibold">{CATEGORIES.length}</span> categories.
        </p>

        <div className="flex flex-col gap-16">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              {/* Category header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7 pb-4 border-b border-smoke-100/10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-7 rounded-full bg-fire-500" />
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-smoke-100">{cat.name}</h2>
                    <span className="bg-fire-500/10 text-fire-600 text-xs font-bold px-2.5 py-1 rounded-full">
                      {cat.products.length} items
                    </span>
                  </div>
                  <p className="text-smoke-500 text-sm mt-2 ml-4">{cat.blurb}</p>
                </div>
              </div>

              {/* Products grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {cat.products.map((p) => (
                  <ProductCard key={cat.id + p.name} p={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
