import { motion } from 'framer-motion'
import { ShieldCheck, Award, Clock, MapPin } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: 'easeOut' } },
}

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    desc:  'We follow strict national & international fire-safety standards on every installation and service call.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    desc:  'ISO 9001:2015 certified processes ensure consistent, high-quality deliverables you can rely on.',
  },
  {
    icon: Clock,
    title: 'Rapid Response',
    desc:  'Same-day emergency response across all service zones — because fire safety cannot wait.',
  },
  {
    icon: MapPin,
    title: 'Pan-India Reach',
    desc:  'From manufacturing plants to commercial high-rises, we serve clients across India with a dedicated field force.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-dark-800 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 70%)' }}
      />

      <Container>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: text content ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <SectionHeader
              eyebrow="About Us"
              title="Who We"
              highlight="Are"
              align="left"
            />

            <motion.p
              variants={fadeUp}
              className="text-smoke-400 text-base leading-relaxed mb-4"
            >
              <strong className="text-smoke-200 font-semibold">Firetech Enterprises</strong> is
              a leading fire safety solutions provider based in India, delivering world-class
              fire-protection equipment, systems, and maintenance services since{' '}
              <span className="text-fire-400 font-medium">2009</span>.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-smoke-400 text-base leading-relaxed mb-8"
            >
              From initial site audits through to full system installation and annual AMC
              contracts, our certified engineers handle every aspect of fire safety — so you
              can focus on running your business.
            </motion.p>

            {/* CTA */}
            <motion.a
              variants={fadeUp}
              href="#contact"
              className="inline-flex items-center gap-2 text-fire-400 font-semibold text-sm border-b border-fire-500/40 hover:border-fire-500 pb-0.5 transition-colors duration-300 group"
            >
              Talk to our experts
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </motion.a>
          </motion.div>

          {/* ── Right: pillar cards grid ── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-fire-500/20 hover:bg-fire-500/[0.03] transition-all duration-400 group"
              >
                <div className="w-11 h-11 rounded-xl bg-fire-500/10 border border-fire-500/20 flex items-center justify-center mb-4 group-hover:bg-fire-500/20 group-hover:border-fire-500/40 transition-all duration-300">
                  <Icon className="w-5 h-5 text-fire-400 group-hover:text-fire-300 transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-smoke-100 text-sm mb-1.5">{title}</h3>
                <p className="text-smoke-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
