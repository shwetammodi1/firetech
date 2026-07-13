import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

const CLIENTS = [
  { name: 'Tata Group',          abbr: 'TG' },
  { name: 'Reliance Industries', abbr: 'RI' },
  { name: 'HDFC Bank',           abbr: 'HB' },
  { name: 'Infosys Ltd.',        abbr: 'IN' },
  { name: 'Wipro',               abbr: 'WI' },
  { name: 'L&T Infrastructure',  abbr: 'LT' },
  { name: 'Adani Group',         abbr: 'AG' },
  { name: 'Bajaj Auto',          abbr: 'BA' },
  { name: 'Mahindra & Mahindra', abbr: 'MM' },
  { name: 'ONGC',                abbr: 'OC' },
  { name: 'Bharat Petroleum',    abbr: 'BP' },
  { name: 'Coal India',          abbr: 'CI' },
]

/* Duplicate for seamless infinite loop */
const ROW_A = [...CLIENTS, ...CLIENTS]
const ROW_B = [...CLIENTS.slice(6), ...CLIENTS.slice(0, 6), ...CLIENTS.slice(6), ...CLIENTS.slice(0, 6)]

function ClientBadge({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center gap-3 bg-dark-700/60 border border-slate-900/[0.06] rounded-xl px-5 py-3 flex-shrink-0 mx-2 hover:border-fire-500/20 hover:bg-dark-700/80 transition-all duration-300 group">
      <div className="w-9 h-9 rounded-lg bg-fire-500/10 border border-fire-500/20 flex items-center justify-center text-fire-400 font-heading font-black text-xs flex-shrink-0 group-hover:bg-fire-500/20 transition-all duration-300">
        {abbr}
      </div>
      <span className="text-smoke-400 text-sm font-medium whitespace-nowrap group-hover:text-smoke-300 transition-colors duration-300">
        {name}
      </span>
    </div>
  )
}

export default function ClientLogos() {
  return (
    <section className="relative py-16 bg-dark-800 overflow-hidden">
      {/* Top / bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/30 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Our Clients"
            title="Trusted by Leading"
            highlight="Brands"
            subtitle="Businesses across industries trust Firetech Enterprises for certified fire safety instruments and compliance."
          />
        </motion.div>
      </Container>

      {/* Row 1 — left to right */}
      <div className="relative overflow-hidden mt-6">
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #f8fafc 0%, transparent 100%)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, #f8fafc 0%, transparent 100%)' }}
        />
        <div className="flex animate-marquee py-1">
          {ROW_A.map((c, i) => (
            <ClientBadge key={`a-${i}`} name={c.name} abbr={c.abbr} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative overflow-hidden mt-3">
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #f8fafc 0%, transparent 100%)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, #f8fafc 0%, transparent 100%)' }}
        />
        <div className="flex animate-marquee-reverse py-1">
          {ROW_B.map((c, i) => (
            <ClientBadge key={`b-${i}`} name={c.name} abbr={c.abbr} />
          ))}
        </div>
      </div>
    </section>
  )
}
