import { motion } from 'framer-motion'
import {
  ThumbsUp, Zap, BadgeCheck, HeartHandshake,
  ShieldCheck, Headphones, Banknote, Star,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const REASONS = [
  {
    icon: BadgeCheck,
    title: 'ISO 9001:2015 Certified',
    desc: 'Every process — from procurement to installation — follows internationally certified quality standards.',
    accent: 'text-fire-400',
    bg: 'bg-fire-500/10 border-fire-500/25',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable Service',
    desc: 'Same-day emergency response with dedicated field engineers on standby across all service regions.',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/25',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    desc: 'We don\'t just install and leave. Our AMC clients receive ongoing care, reminders, and priority support.',
    accent: 'text-fire-400',
    bg: 'bg-fire-500/10 border-fire-500/25',
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    desc: 'No hidden costs. Clear quotations, fair pricing, and flexible AMC plans tailored to your budget.',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/25',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Guaranteed',
    desc: 'We ensure all installations meet local fire authority and NBC (National Building Code) requirements.',
    accent: 'text-fire-400',
    bg: 'bg-fire-500/10 border-fire-500/25',
  },
  {
    icon: Star,
    title: 'Proven Track Record',
    desc: '500+ satisfied clients across industries — manufacturing, hospitality, healthcare, education, and more.',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/25',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock helpline for emergencies. Because fire safety issues don\'t follow business hours.',
    accent: 'text-fire-400',
    bg: 'bg-fire-500/10 border-fire-500/25',
  },
  {
    icon: ThumbsUp,
    title: 'Experienced Team',
    desc: 'Our engineers hold national certifications with 15+ years of hands-on field experience across all system types.',
    accent: 'text-sky-400',
    bg: 'bg-sky-500/10 border-sky-500/25',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative section-padding bg-dark-800 overflow-hidden">
      {/* Top-right ambient */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 65%)' }}
      />
      {/* Bottom-left ambient */}
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 65%)' }}
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
            eyebrow="Why Choose Us"
            title="What Sets Us"
            highlight="Apart"
            subtitle="Firetech Enterprises combines certified expertise, responsive service, and genuine care for your safety — making us the preferred fire safety partner across India."
          />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        >
          {REASONS.map(({ icon: Icon, title, desc, accent, bg }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="relative glass rounded-2xl p-6 border border-white/5
                         hover:border-fire-500/20 hover:bg-fire-500/[0.025]
                         transition-all duration-400 group overflow-hidden
                         flex flex-col h-full"
            >
              {/* Top glow on hover */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-fire-500/0 group-hover:bg-fire-500/10 blur-xl transition-all duration-500 pointer-events-none" />

              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${bg} transition-all duration-300 group-hover:scale-110`}>
                <Icon className={`w-5 h-5 ${accent} transition-colors duration-300`} />
              </div>
              <h3 className="font-heading font-bold text-smoke-100 text-sm mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-smoke-500 text-xs leading-relaxed group-hover:text-smoke-400 transition-colors duration-300 flex-1">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
