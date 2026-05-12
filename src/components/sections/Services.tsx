import { motion } from 'framer-motion'
import {
  Flame, ShieldAlert, BellRing, Lightbulb,
  Wrench, ClipboardCheck, Truck, GraduationCap,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

interface Service {
  icon: React.ElementType
  title: string
  desc: string
  tag?: string
  accent: string   // tailwind bg class for icon wrapper
}

const SERVICES: Service[] = [
  {
    icon: Flame,
    title: 'Fire Extinguisher Supply & Refilling',
    desc:  'Supply, installation, and periodic refilling of all classes of fire extinguishers — CO₂, ABC, Water, Foam, and DCP types.',
    tag:   'Most Popular',
    accent: 'bg-fire-500/15 border-fire-500/30',
  },
  {
    icon: ShieldAlert,
    title: 'Fire Fighting Systems',
    desc:  'Design, supply & installation of hydrant systems, sprinkler systems, and deluge/foam systems for industrial and commercial premises.',
    accent: 'bg-ember-500/15 border-ember-500/30',
  },
  {
    icon: BellRing,
    title: 'Fire Alarm Systems',
    desc:  'Conventional and addressable fire alarm systems including smoke detectors, heat detectors, manual call points, and hooters.',
    accent: 'bg-fire-600/15 border-fire-600/30',
  },
  {
    icon: Lightbulb,
    title: 'Emergency & Exit Lighting',
    desc:  'LED emergency lighting systems and illuminated exit signs ensuring safe evacuation during power failures.',
    accent: 'bg-amber-500/15 border-amber-500/30',
  },
  {
    icon: Wrench,
    title: 'Annual Maintenance Contract (AMC)',
    desc:  'Comprehensive AMC plans covering routine inspections, servicing, and emergency call-outs to keep all fire equipment compliant.',
    tag:   'Best Value',
    accent: 'bg-fire-500/15 border-fire-500/30',
  },
  {
    icon: ClipboardCheck,
    title: 'Fire Safety Audit',
    desc:  'Detailed on-site fire risk assessment with a written report, compliance gap analysis, and prioritised action plan.',
    accent: 'bg-ember-500/15 border-ember-500/30',
  },
  {
    icon: Truck,
    title: 'Fire Equipment Supply',
    desc:  'Supply of branded fire safety equipment — hose reels, fire blankets, sand buckets, and safety signage for all building types.',
    accent: 'bg-fire-600/15 border-fire-600/30',
  },
  {
    icon: GraduationCap,
    title: 'Fire Safety Training',
    desc:  'Practical on-site training programs for staff on fire prevention, correct use of extinguishers, and emergency evacuation drills.',
    accent: 'bg-amber-500/15 border-amber-500/30',
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { icon: Icon, title, desc, tag, accent } = service
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="relative glass rounded-2xl p-6 border border-white/5
                 hover:border-fire-500/25 hover:bg-fire-500/[0.025]
                 transition-all duration-400 group cursor-default overflow-hidden"
    >
      {/* Top-right corner glow on hover */}
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-fire-500/0 group-hover:bg-fire-500/10 transition-all duration-500 blur-xl" />

      {/* Tag badge */}
      {tag && (
        <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase text-fire-300 bg-fire-500/10 border border-fire-500/25 rounded-full px-2.5 py-0.5">
          {tag}
        </span>
      )}

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${accent} transition-all duration-300 group-hover:scale-110`}>
        <Icon className="w-6 h-6 text-fire-400 group-hover:text-fire-300 transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-smoke-100 text-base mb-2.5 leading-snug group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-smoke-500 text-sm leading-relaxed group-hover:text-smoke-400 transition-colors duration-300">
        {desc}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/0 to-transparent group-hover:via-fire-500/40 transition-all duration-500" />
    </motion.article>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative section-padding bg-dark-900 overflow-hidden">
      {/* Background ambients */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 65%)' }}
      />

      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeader
            eyebrow="What We Offer"
            title="Our Fire Safety"
            highlight="Services"
            subtitle="From supply and installation to audits and training — we cover every dimension of fire safety for your premises."
          />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 glass-fire rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-heading font-bold text-smoke-100 text-lg">
              Not sure what you need?
            </p>
            <p className="text-smoke-500 text-sm mt-0.5">
              Book a free site inspection — our engineer will assess your premises and recommend the right solution.
            </p>
          </div>
          <a
            href="https://wa.me/917000000000?text=Hello%20Firetech%2C%20I%20would%20like%20to%20book%20a%20free%20site%20inspection."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-fire-500 hover:bg-fire-400 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-fire-900/40 hover:shadow-fire-500/25 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
          >
            Book Free Inspection
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
