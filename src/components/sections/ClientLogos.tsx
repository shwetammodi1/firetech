import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

const CLIENTS = [
  { name: 'Indian Oil',       logo: '/images/logos/indianoil.png' },
  { name: 'Bharat Petroleum', logo: '/images/logos/bpcl.png' },
  { name: 'NTPC',             logo: '/images/logos/ntpc.png' },
  { name: 'Adani Group',      logo: '/images/logos/adani.png' },
  { name: 'HDFC Bank',        logo: '/images/logos/hdfc.png' },
  { name: 'State Bank',       logo: '/images/logos/sbi.png' },
  { name: 'Infosys',          logo: '/images/logos/infosys.png' },
  { name: 'Wipro',            logo: '/images/logos/wipro.png' },
]

/* Duplicate for seamless infinite loop */
const ROW_A = [...CLIENTS, ...CLIENTS]
const ROW_B = [...CLIENTS.slice(4), ...CLIENTS.slice(0, 4), ...CLIENTS.slice(4), ...CLIENTS.slice(0, 4)]

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center bg-white border border-neutral-200 rounded-2xl px-8 py-5 flex-shrink-0 mx-2.5 h-24 w-52 shadow-sm hover:shadow-md hover:border-fire-500/30 transition-all duration-300 group">
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="max-h-12 max-w-[150px] object-contain group-hover:scale-105 transition-transform duration-400"
      />
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
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #fafafa 0%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #fafafa 0%, transparent 100%)' }} />
        <div className="flex animate-marquee py-2">
          {ROW_A.map((c, i) => (
            <LogoCard key={`a-${i}`} name={c.name} logo={c.logo} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative overflow-hidden mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #fafafa 0%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #fafafa 0%, transparent 100%)' }} />
        <div className="flex animate-marquee-reverse py-2">
          {ROW_B.map((c, i) => (
            <LogoCard key={`b-${i}`} name={c.name} logo={c.logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
