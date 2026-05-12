import { motion } from 'framer-motion'
import { MessageCircle, Phone, ChevronDown, ShieldCheck, Award, Users } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/917000000000?text=Hello%20Firetech%20Enterprises%2C%20I%20need%20a%20fire%20safety%20quote.'
const PHONE_URL    = 'tel:+917000000000'

/* ── Floating ember particle ── */
function Ember({ style }: { style: React.CSSProperties }) {
  return (
    <motion.span
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{ y: [0, -120, -240], opacity: [0, 1, 0], scale: [0.5, 1, 0.3] }}
      transition={{
        duration: style['--dur'] as number ?? 4,
        repeat: Infinity,
        delay: style['--delay'] as number ?? 0,
        ease: 'easeOut',
      }}
    />
  )
}

const EMBERS = [
  { left: '10%',  bottom: '5%',  width: 4,  height: 4,  background: '#f97316', '--dur': 3.5, '--delay': 0    },
  { left: '20%',  bottom: '8%',  width: 6,  height: 6,  background: '#ef4444', '--dur': 4.2, '--delay': 0.4  },
  { left: '35%',  bottom: '3%',  width: 3,  height: 3,  background: '#fb923c', '--dur': 3.8, '--delay': 0.8  },
  { left: '50%',  bottom: '6%',  width: 5,  height: 5,  background: '#f97316', '--dur': 4.5, '--delay': 1.2  },
  { left: '62%',  bottom: '4%',  width: 4,  height: 4,  background: '#fbbf24', '--dur': 3.2, '--delay': 0.2  },
  { left: '75%',  bottom: '7%',  width: 6,  height: 6,  background: '#ef4444', '--dur': 4.0, '--delay': 0.6  },
  { left: '85%',  bottom: '5%',  width: 3,  height: 3,  background: '#fb923c', '--dur': 3.6, '--delay': 1.0  },
  { left: '93%',  bottom: '9%',  width: 5,  height: 5,  background: '#f97316', '--dur': 4.3, '--delay': 1.4  },
  { left: '5%',   bottom: '12%', width: 4,  height: 4,  background: '#fbbf24', '--dur': 5.0, '--delay': 2.0  },
  { left: '42%',  bottom: '10%', width: 3,  height: 3,  background: '#ef4444', '--dur': 4.8, '--delay': 1.8  },
  { left: '58%',  bottom: '14%', width: 5,  height: 5,  background: '#f97316', '--dur': 3.9, '--delay': 2.4  },
  { left: '28%',  bottom: '2%',  width: 4,  height: 4,  background: '#fb923c', '--dur': 4.1, '--delay': 0.9  },
]

const STATS = [
  { icon: ShieldCheck, value: '500+',  label: 'Clients Protected'  },
  { icon: Award,       value: 'ISO',   label: '9001:2015 Certified' },
  { icon: Users,       value: '15+',   label: 'Years Experience'    },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Dark layered background ── */}
      <div className="absolute inset-0 bg-dark-900" />

      {/* ── Radial fire glow from bottom-center ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 110%, rgba(249,115,22,0.22) 0%, rgba(234,88,12,0.1) 40%, transparent 70%)',
        }}
      />

      {/* ── Top-left ambient ── */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)',
        }}
      />

      {/* ── Top-right ambient ── */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)',
        }}
      />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(249,115,22,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Ember particles ── */}
      {EMBERS.map((e, i) => (
        <Ember key={i} style={e as React.CSSProperties} />
      ))}

      {/* ── Bottom fire gradient fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(5,5,7,0.9) 0%, transparent 100%)',
        }}
      />

      {/* ═══════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          className="flex flex-col items-center text-center gap-6"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* ── ISO badge pill ── */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 glass-fire rounded-full px-5 py-2 text-xs font-semibold tracking-widest text-fire-400 uppercase border border-fire-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              ISO 9001:2015 Certified · Trusted Since 2009
            </div>
          </motion.div>

          {/* ── Main headline ── */}
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
            <h1 className="font-heading font-black leading-[1.0] tracking-tight">
              <span className="block text-smoke-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                FIRETECH
              </span>
              <span
                className="block gradient-fire fire-text-glow text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-1"
              >
                ENTERPRISES
              </span>
            </h1>
          </motion.div>

          {/* ── Tagline ── */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-smoke-400 text-base sm:text-lg md:text-xl max-w-2xl font-body font-light leading-relaxed"
          >
            India's trusted partner for{' '}
            <span className="text-fire-400 font-medium">Fire Safety</span>,{' '}
            <span className="text-fire-400 font-medium">AMC Services</span>, and{' '}
            <span className="text-fire-400 font-medium">Fire Fighting Systems</span>.
            Protecting lives and property with premium-grade solutions.
          </motion.p>

          {/* ── Divider line ── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-fire-500 to-transparent"
          />

          {/* ── CTA buttons ── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            {/* Primary — WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-fire-500 hover:bg-fire-400 text-white font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 overflow-hidden shadow-xl shadow-fire-900/50 hover:shadow-fire-500/30 hover:-translate-y-1 active:scale-95"
            >
              {/* shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              Get Free Quote on WhatsApp
            </a>

            {/* Secondary — Call */}
            <a
              href={PHONE_URL}
              className="group inline-flex items-center gap-3 glass-fire hover:bg-fire-900/30 text-smoke-100 font-heading font-semibold text-sm sm:text-base px-8 py-4 rounded-full border border-fire-500/30 hover:border-fire-500/60 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              <Phone className="w-5 h-5 text-fire-400 group-hover:text-fire-300 transition-colors flex-shrink-0" />
              Call Us Now
            </a>
          </motion.div>

          {/* ── Trust micro-copy ── */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-smoke-600 text-xs tracking-wide mt-1"
          >
            ✓ Free site inspection &nbsp;·&nbsp; ✓ Same-day response &nbsp;·&nbsp; ✓ Pan-India service
          </motion.p>

          {/* ── Stats row ── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mt-8 w-full max-w-2xl"
          >
            {STATS.map(({ icon: Icon, value, label }, idx) => (
              <div key={label} className="flex items-center gap-0">
                <div className="flex flex-col items-center px-6 py-4 glass rounded-2xl sm:rounded-none sm:first:rounded-l-2xl sm:last:rounded-r-2xl border border-white/5 hover:border-fire-500/20 transition-all duration-300 hover:bg-fire-500/5 group w-full sm:min-w-[140px]">
                  <Icon className="w-6 h-6 text-fire-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-heading font-black text-2xl text-smoke-100 gradient-fire">{value}</span>
                  <span className="text-smoke-500 text-xs mt-0.5 font-medium tracking-wide">{label}</span>
                </div>
                {idx < STATS.length - 1 && (
                  <div className="hidden sm:block w-px h-16 bg-white/5" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-smoke-600 hover:text-fire-400 transition-colors duration-300 group"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.a>
    </section>
  )
}
