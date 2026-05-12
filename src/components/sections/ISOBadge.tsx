import { motion } from 'framer-motion'
import { Award, CheckCircle2 } from 'lucide-react'
import Container from '../layout/Container'

const POINTS = [
  'Covers design, manufacturing & service delivery',
  'Internationally recognised quality standard',
  'Regular third-party audits & recertification',
  'Applies to all branch offices and field teams',
  'Ensures customer satisfaction at every touchpoint',
  'Documented processes for traceability & accountability',
]

export default function ISOBadge() {
  return (
    <section className="relative py-16 bg-dark-900 overflow-hidden">
      {/* Diagonal fire accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(249,115,22,0.04) 0%, transparent 50%, rgba(239,68,68,0.03) 100%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/30 to-transparent" />

      <Container>
        <motion.div
          className="glass-fire rounded-3xl border border-fire-500/15 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 gap-0">

            {/* ── Left: ISO emblem block ── */}
            <div className="relative flex flex-col items-center justify-center p-6 sm:p-10 md:p-14 bg-fire-500/[0.06] border-b md:border-b-0 md:border-r border-fire-500/15">
              {/* Background rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-fire-500/10" />
                <div className="absolute w-48 h-48 rounded-full border border-fire-500/15" />
                <div className="absolute w-32 h-32 rounded-full border border-fire-500/20" />
              </div>

              {/* Emblem */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-fire-500/15 border-2 border-fire-500/40 flex items-center justify-center mb-6 fire-glow">
                  <Award className="w-12 h-12 text-fire-400" />
                </div>
                <div className="font-heading font-black text-5xl gradient-fire fire-text-glow leading-none">
                  ISO
                </div>
                <div className="font-heading font-bold text-xl text-smoke-200 mt-1 tracking-widest">
                  9001:2015
                </div>
                <div className="mt-3 text-smoke-500 text-xs tracking-[0.2em] uppercase font-medium">
                  Quality Management System
                </div>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-fire-500/10 border border-fire-500/25 text-fire-300 text-xs font-bold tracking-widest uppercase">
                  Certified
                </div>
              </div>
            </div>

            {/* ── Right: what it means ── */}
            <div className="flex flex-col justify-center p-6 sm:p-10 md:p-14">
              <div className="inline-flex items-center gap-2 glass-fire rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-fire-400 uppercase border border-fire-500/20 mb-6 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-fire-500 animate-pulse" />
                Quality Certified
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-3xl text-smoke-100 leading-tight mb-3">
                Our{' '}
                <span className="gradient-fire">ISO Certification</span>
                {' '}Means You Can Trust Us
              </h2>
              <p className="text-smoke-500 text-sm leading-relaxed mb-7">
                Firetech Enterprises holds ISO 9001:2015 certification — the global benchmark for quality management.
                This isn't just a badge; it represents our unwavering commitment to excellence in every service we deliver.
              </p>

              <ul className="grid grid-cols-1 gap-2.5">
                {POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-smoke-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-fire-500 flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
