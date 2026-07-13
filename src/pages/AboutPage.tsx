import { motion } from 'framer-motion'
import {
  ShieldCheck, Award, Target, Eye, Heart, Zap, CheckCircle2,
  Factory, Landmark, Building2, GraduationCap, Truck, Users,
} from 'lucide-react'
import PageHero          from '../components/layout/PageHero'
import Container         from '../components/layout/Container'
import StatsCounter      from '../components/sections/StatsCounter'
import CertStrip         from '../components/sections/CertStrip'
import FreeServiceBanner from '../components/sections/FreeServiceBanner'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

/* ─────────────────────────────────────────
   Company overview + leadership (image + text)
   ───────────────────────────────────────── */
function Overview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-fire-500/60 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-fire-500/60 rounded-br-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/20 ring-1 ring-neutral-900/10">
              <img src="/images/firefighter.jpg" alt="Firetech fire safety team at work" className="w-full h-[380px] sm:h-[460px] object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 left-6 bg-fire-500 rounded-2xl shadow-xl px-6 py-4 text-white">
              <p className="font-heading font-black text-3xl leading-none">15+</p>
              <p className="text-xs mt-1 opacity-90">Years of Leadership</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-fire-500" />
              <span className="text-fire-500 text-xs font-bold uppercase tracking-[0.28em]">About Company</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading font-black text-3xl sm:text-4xl md:text-[2.75rem] leading-tight text-smoke-100 mb-6">
              Protecting Lives Through Trusted <span className="gradient-fire">Fire Safety</span> Since 2009
            </motion.h2>
            <motion.p variants={fadeUp} className="text-smoke-500 text-base leading-relaxed mb-4">
              <strong className="text-smoke-200 font-semibold">Firetech Enterprises</strong> was founded in
              2009 with a single mission — to protect lives and property from the devastating impact of fire.
              Over the past 15 years we have grown into one of India's most trusted fire safety solutions
              providers, serving businesses across industries with certified, high-quality protection.
            </motion.p>
            <motion.p variants={fadeUp} className="text-smoke-500 text-base leading-relaxed mb-6">
              Our <span className="text-fire-600 font-semibold">ISO 9001:2015</span> certified processes ensure
              every extinguisher, alarm and system we supply meets the strictest national and international
              standards. From site audits and system design to installation, refilling and annual maintenance
              contracts, our certified engineers handle every aspect of fire safety.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {['ISO 9001:2015 Certified', 'Certified Expert Engineers', 'Pan-India Service Reach', 'Same-Day Emergency Response'].map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-smoke-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-fire-500 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   Vision & Mission
   ───────────────────────────────────────── */
const VM = [
  { icon: Eye, title: 'Our Vision', text: 'To be India\'s most trusted and innovative fire safety partner — setting the benchmark for quality, reliability and service across every industry we protect.' },
  { icon: Target, title: 'Our Mission', text: 'To safeguard lives and property by delivering certified, high-performance fire safety solutions, backed by expert guidance, rapid response and an unwavering commitment to integrity.' },
]

function VisionMission() {
  return (
    <section className="section-padding bg-dark-800">
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          {VM.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl bg-neutral-950 p-8 sm:p-10 overflow-hidden group"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 20% 20%, rgba(230,47,16,0.18) 0%, transparent 60%)' }} />
              <div className="relative w-14 h-14 rounded-2xl bg-fire-500 flex items-center justify-center mb-6 shadow-lg shadow-fire-900/40">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="relative font-heading font-black text-2xl text-white mb-3">{title}</h3>
              <p className="relative text-neutral-400 text-base leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   Core Values
   ───────────────────────────────────────── */
const VALUES = [
  { icon: ShieldCheck,  title: 'Safety First',  desc: 'Every decision we make puts the safety of people and property above all else.' },
  { icon: Award,        title: 'Reliability',   desc: 'Dependable products and services you can count on, day after day.' },
  { icon: Heart,        title: 'Integrity',     desc: 'Honest advice, transparent pricing and ethical business practices, always.' },
  { icon: CheckCircle2, title: 'Consistency',   desc: 'Uniform, high-quality standards across every project and every client.' },
  { icon: Zap,          title: 'Rapid Response','desc': 'Fast, flexible support and same-day response when it matters most.' },
]

function CoreValues() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-fire-500" />
            <span className="text-fire-500 text-xs font-bold uppercase tracking-[0.28em]">What Drives Us</span>
            <span className="w-8 h-px bg-fire-500" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-smoke-100">Our Core <span className="gradient-fire">Values</span></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {VALUES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass card-hover rounded-2xl p-6 border border-neutral-900/5 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-fire-500/10 border border-fire-500/20 flex items-center justify-center mb-4 group-hover:bg-fire-500 transition-all duration-300">
                <Icon className="w-6 h-6 text-fire-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-smoke-100 text-sm mb-1.5">{title}</h3>
              <p className="text-smoke-500 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   Area of Application
   ───────────────────────────────────────── */
const SECTORS = [
  { icon: Factory,       label: 'Industrial Plants' },
  { icon: Landmark,      label: 'Government & PSUs' },
  { icon: Building2,     label: 'Corporate Offices' },
  { icon: Landmark,      label: 'Banks & Institutions' },
  { icon: Building2,     label: 'Hospitals & Clinics' },
  { icon: Truck,         label: 'Warehouses & Logistics' },
  { icon: Building2,     label: 'Hotels & Malls' },
  { icon: GraduationCap, label: 'Schools & Colleges' },
]

function AreaOfApplication() {
  return (
    <section className="section-padding bg-dark-800">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-fire-500" />
            <span className="text-fire-500 text-xs font-bold uppercase tracking-[0.28em]">Industries We Serve</span>
            <span className="w-8 h-px bg-fire-500" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-smoke-100">Area of <span className="gradient-fire">Application</span></h2>
          <p className="text-smoke-500 text-base sm:text-lg max-w-2xl mt-4">
            From factories and hospitals to banks and warehouses — we secure premises of every kind across India.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SECTORS.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="glass rounded-2xl p-6 flex flex-col items-center text-center border border-neutral-900/5 hover:border-fire-500/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-fire-500/10 flex items-center justify-center mb-3 group-hover:bg-fire-500 transition-all duration-300">
                <Icon className="w-6 h-6 text-fire-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="font-heading font-bold text-smoke-100 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ─────────────────────────────────────────
   Three feature cards
   ───────────────────────────────────────── */
const FEATURES = [
  { icon: Truck, title: 'Timely Delivery',   desc: 'On-time supply and installation, so your premises are protected without delay.' },
  { icon: Users, title: 'Expert Certified Team', desc: 'Trained, certified engineers who handle every project with precision and care.' },
  { icon: Award, title: 'ISI-Marked Quality', desc: 'Only BIS / ISI-marked products that meet the highest safety standards.' },
]

function Features() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass card-hover rounded-2xl p-8 border border-neutral-900/5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-fire-500 flex items-center justify-center mb-5 shadow-lg shadow-fire-900/30">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-smoke-100 text-lg mb-2">{title}</h3>
              <p className="text-smoke-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="About Firetech Enterprises"
        subtitle="India's trusted, ISO 9001:2015 certified fire safety partner — protecting lives and property across India since 2009."
      />
      <Overview />
      <VisionMission />
      <CoreValues />
      <AreaOfApplication />
      <StatsCounter />
      <Features />
      <CertStrip />
      <FreeServiceBanner />
    </>
  )
}
