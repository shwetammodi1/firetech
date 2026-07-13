import { motion } from 'framer-motion'
import { ShieldCheck, Award, Clock, MapPin } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: 'easeOut' as const } },
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
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235,0.10) 0%, transparent 70%)' }}
      />

      <Container>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">

          {/* ── Left: image with floating badge ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Decorative blue frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-fire-500/60 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-fire-500/60 rounded-br-3xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/10">
              <img
                src="/images/technician.jpg"
                alt="Firetech certified engineer installing a fire safety system"
                className="w-full h-[340px] sm:h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-6 left-6 sm:left-8 bg-white rounded-2xl shadow-xl shadow-slate-900/15 border border-slate-900/5 px-5 py-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-fire-500 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-heading font-black text-xl text-smoke-100 leading-none">15+ Years</p>
                <p className="text-smoke-500 text-xs mt-1">of trusted fire safety expertise</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: text content ── */}
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
              <span className="text-fire-500 font-semibold">2009</span>.
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
              className="inline-flex items-center gap-2 text-fire-500 font-semibold text-sm border-b-2 border-fire-500/40 hover:border-fire-500 pb-0.5 transition-colors duration-300 group"
            >
              Talk to our experts
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </motion.a>
          </motion.div>
        </div>

        {/* ── Pillar cards row ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="glass card-hover rounded-2xl p-6 border border-slate-900/5 group"
            >
              <div className="w-11 h-11 rounded-xl bg-fire-500/10 border border-fire-500/20 flex items-center justify-center mb-4 group-hover:bg-fire-500 group-hover:border-fire-500 transition-all duration-300">
                <Icon className="w-5 h-5 text-fire-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-smoke-100 text-sm mb-1.5">{title}</h3>
              <p className="text-smoke-500 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
