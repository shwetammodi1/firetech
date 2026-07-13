import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Clock, Wrench, Star, MapPin, ShieldCheck } from 'lucide-react'
import Container from '../layout/Container'

interface Stat {
  icon: React.ElementType
  value: number
  prefix?: string
  suffix: string
  label: string
  desc: string
}

const STATS: Stat[] = [
  { icon: Users,       value: 500,  suffix: '+', label: 'Clients Protected',    desc: 'Trusted by businesses across industries for certified, reliable fire safety.' },
  { icon: Clock,       value: 15,   suffix: '+', label: 'Years of Experience',  desc: 'Protecting lives and property across India since 2009.' },
  { icon: Wrench,      value: 5000, suffix: '+', label: 'Equipment Serviced',   desc: 'Extinguishers, alarms and systems supplied, installed and maintained.' },
  { icon: Star,        value: 100,  suffix: '%', label: 'Client Satisfaction',  desc: 'Rapid response and dependable service — every single time.' },
  { icon: MapPin,      value: 25,   suffix: '+', label: 'Cities Covered',       desc: 'Pan-India service reach with a dedicated field force.' },
  { icon: ShieldCheck, value: 3,    suffix: '',  label: 'ISO Certifications',   desc: 'ISO 9001:2015 certified quality management processes.' },
]

const INTERVAL = 3800

function useCountUp(target: number, duration = 1600, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])
  return count
}

function Spotlight({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.value, 1500, started)
  const Icon = stat.icon
  return (
    <div className="flex flex-col items-start">
      <div className="w-14 h-14 rounded-2xl bg-fire-500 flex items-center justify-center mb-6 shadow-lg shadow-fire-900/40">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="font-heading font-black text-6xl sm:text-7xl md:text-8xl text-white leading-none tracking-tight">
        {stat.prefix ?? ''}{count.toLocaleString('en-IN')}
        <span className="text-fire-500">{stat.suffix}</span>
      </div>
      <p className="font-heading font-bold text-xl sm:text-2xl text-white mt-4">{stat.label}</p>
      <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-md leading-relaxed">{stat.desc}</p>
    </div>
  )
}

export default function StatsCounter() {
  const [active, setActive] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // start when in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  // auto-advance
  useEffect(() => {
    if (!started) return
    const t = setInterval(() => setActive((a) => (a + 1) % STATS.length), INTERVAL)
    return () => clearInterval(t)
  }, [started, active])

  const stat = STATS[active]

  return (
    <section ref={ref} className="relative section-padding bg-dark-800 overflow-hidden">
      <Container>
        {/* Intro */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-fire-500" />
            <span className="text-fire-500 text-xs font-bold uppercase tracking-[0.28em]">About Company</span>
            <span className="w-8 h-px bg-fire-500" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-smoke-100 leading-tight">
            Numbers That <span className="gradient-fire">Speak Trust</span>
          </h2>
          <p className="text-smoke-500 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            A decade and a half of protecting India's businesses — delivering certified fire safety with
            proven reliability and compliance.
          </p>
        </div>

        {/* Premium dark showcase card */}
        <div className="relative rounded-3xl bg-neutral-950 overflow-hidden shadow-2xl shadow-black/30">
          {/* red glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 80% at 15% 30%, rgba(230,47,16,0.22) 0%, transparent 60%)' }}
          />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-7 sm:p-10 lg:p-14">
            {/* Spotlight (rotating) */}
            <div className="flex flex-col justify-center min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <Spotlight stat={stat} started={started} />
                </motion.div>
              </AnimatePresence>

              {/* progress bar */}
              <div className="mt-8 h-1 w-full max-w-xs rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  key={active}
                  className="h-full bg-fire-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                />
              </div>
            </div>

            {/* Tab list (clickable) */}
            <div className="flex flex-col gap-2.5 justify-center">
              {STATS.map((s, i) => {
                const Icon = s.icon
                const isActive = i === active
                return (
                  <button
                    key={s.label}
                    onClick={() => setActive(i)}
                    className={[
                      'group flex items-center gap-4 rounded-2xl px-4 sm:px-5 py-3.5 text-left transition-all duration-300 border',
                      isActive
                        ? 'bg-fire-500/15 border-fire-500/40'
                        : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06]',
                    ].join(' ')}
                  >
                    <div className={[
                      'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300',
                      isActive ? 'bg-fire-500 text-white' : 'bg-white/10 text-neutral-300 group-hover:text-white',
                    ].join(' ')}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={[
                        'font-heading font-bold text-sm sm:text-base transition-colors duration-300',
                        isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white',
                      ].join(' ')}>
                        {s.label}
                      </p>
                    </div>
                    <div className={[
                      'font-heading font-black text-lg sm:text-xl transition-colors duration-300 flex-shrink-0',
                      isActive ? 'text-fire-500' : 'text-neutral-500',
                    ].join(' ')}>
                      {s.prefix ?? ''}{s.value.toLocaleString('en-IN')}{s.suffix}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
