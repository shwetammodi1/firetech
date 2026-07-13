import { motion } from 'framer-motion'
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react'
import Container from '../layout/Container'

const CERTS = [
  {
    code: 'ISO',
    sub: '9001:2015',
    label: 'Quality Management System',
    gradient: 'from-fire-500 to-fire-600',
    border: 'border-fire-500/40',
    bg: 'bg-fire-500/10',
    text: 'text-fire-400',
  },
  {
    code: 'ISI',
    sub: 'Marked',
    label: 'Bureau of Indian Standards',
    gradient: 'from-neutral-400 to-neutral-600',
    border: 'border-neutral-500/40',
    bg: 'bg-neutral-500/10',
    text: 'text-neutral-400',
  },
  {
    code: 'BIS',
    sub: 'Certified',
    label: 'India Standard Mark',
    gradient: 'from-neutral-400 to-neutral-600',
    border: 'border-neutral-500/40',
    bg: 'bg-neutral-500/10',
    text: 'text-neutral-400',
  },
  {
    code: 'MSME',
    sub: 'Registered',
    label: 'Govt. of India',
    gradient: 'from-neutral-400 to-neutral-600',
    border: 'border-neutral-500/40',
    bg: 'bg-neutral-500/10',
    text: 'text-neutral-400',
  },
  {
    code: 'CE',
    sub: 'Certified',
    label: 'European Compliance',
    gradient: 'from-neutral-400 to-neutral-600',
    border: 'border-neutral-500/40',
    bg: 'bg-neutral-500/10',
    text: 'text-neutral-400',
  },
]

const POINTS = [
  'ISO 9001:2015 certified quality management processes',
  'ISI marked products meeting Bureau of Indian Standards',
  'MSME registered — Government of India recognised',
  'CE certified for European market compliance',
  'Regular third-party audits and recertification',
  'All products undergo rigorous in-house testing',
]

export default function ISOBadge() {
  return (
    <section className="relative py-16 bg-dark-900 overflow-hidden">
      {/* Diagonal fire accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(23, 23, 23,0.04) 0%, transparent 50%, rgba(23, 23, 23,0.03) 100%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/30 to-transparent" />

      <Container>
        {/* Section label */}
        <motion.div
          className="flex items-center justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 glass-fire rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-fire-400 uppercase border border-fire-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Our Certifications
          </div>
        </motion.div>

        {/* Cert badges row */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {CERTS.map((cert) => (
            <motion.div
              key={cert.code}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`flex flex-col items-center text-center glass rounded-2xl border ${cert.border} p-5 w-36 hover:scale-105 transition-transform duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl ${cert.bg} border ${cert.border} flex items-center justify-center mb-3`}>
                <Award className={`w-6 h-6 ${cert.text}`} />
              </div>
              <div className={`font-heading font-black text-xl ${cert.text} leading-none`}>{cert.code}</div>
              <div className="text-smoke-300 text-xs font-bold mt-0.5">{cert.sub}</div>
              <div className="text-smoke-600 text-[10px] mt-1.5 leading-tight">{cert.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main ISO card */}
        <motion.div
          className="glass-fire rounded-3xl border border-fire-500/15 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 gap-0">

            {/* Left: ISO emblem */}
            <div className="relative flex flex-col items-center justify-center p-6 sm:p-10 md:p-14 bg-fire-500/[0.06] border-b md:border-b-0 md:border-r border-fire-500/15">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-fire-500/10" />
                <div className="absolute w-48 h-48 rounded-full border border-fire-500/15" />
                <div className="absolute w-32 h-32 rounded-full border border-fire-500/20" />
              </div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-fire-500/15 border-2 border-fire-500/40 flex items-center justify-center mb-6 fire-glow">
                  <Award className="w-12 h-12 text-fire-400" />
                </div>
                <div className="font-heading font-black text-5xl gradient-fire fire-text-glow leading-none">ISO</div>
                <div className="font-heading font-bold text-xl text-smoke-200 mt-1 tracking-widest">9001:2015</div>
                <div className="mt-3 text-smoke-500 text-xs tracking-[0.2em] uppercase font-medium">Quality Management System</div>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-fire-500/10 border border-fire-500/25 text-fire-300 text-xs font-bold tracking-widest uppercase">
                  Certified
                </div>
              </div>
            </div>

            {/* Right: what it means */}
            <div className="flex flex-col justify-center p-6 sm:p-10 md:p-14">
              <div className="inline-flex items-center gap-2 glass-fire rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-fire-400 uppercase border border-fire-500/20 mb-6 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-fire-500 animate-pulse" />
                Quality Certified
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-smoke-100 leading-tight mb-3">
                Our{' '}
                <span className="gradient-fire">Certifications</span>
                {' '}Guarantee Quality
              </h2>
              <p className="text-smoke-500 text-sm leading-relaxed mb-7">
                Firetech Enterprises holds multiple national and international certifications — ISO 9001:2015, ISI Mark, BIS, CE, and MSME registration. Every product undergoes rigorous quality testing before dispatch.
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
