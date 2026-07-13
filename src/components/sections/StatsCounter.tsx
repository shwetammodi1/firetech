import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
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

const INTERVAL = 3400
const TOTAL = STATS.length

function useCountUp(target: number, duration: number, run: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!run) { setCount(0); return }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, duration])
  return count
}

function pos(rel: number) {
  if (rel === 0) return { scale: 1,    y: 0,   opacity: 1 }
  if (rel === 1) return { scale: 0.93, y: -30, opacity: 1 }
  if (rel === 2) return { scale: 0.86, y: -58, opacity: 1 }
  return { scale: 0.82, y: -84, opacity: 0 }  // exiting / hidden above
}

function StatCard({ stat, rel, started }: { stat: Stat; rel: number; started: boolean }) {
  const isFront = rel === 0
  const count = useCountUp(stat.value, 1400, isFront && started)
  const Icon = stat.icon
  const t = pos(rel)

  return (
    <motion.div
      className="absolute inset-x-0 top-0 h-full rounded-[28px] bg-neutral-900 border border-white/8 shadow-2xl shadow-black/40 px-6 sm:px-10 pt-14 pb-10 flex flex-col items-center text-center"
      style={{ zIndex: TOTAL - rel }}
      animate={t}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* red glow */}
      <div
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(230,47,16,0.16) 0%, transparent 60%)' }}
      />
      <div className="relative w-14 h-14 rounded-2xl bg-fire-500 flex items-center justify-center mb-5 shadow-lg shadow-fire-900/40">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="relative font-heading font-black text-6xl sm:text-7xl md:text-8xl text-white leading-none tracking-tight">
        {stat.prefix ?? ''}{count.toLocaleString('en-IN')}
        <span className="text-fire-500">{stat.suffix}</span>
      </div>
      <p className="relative font-heading font-bold text-xl sm:text-2xl text-white mt-4">{stat.label}</p>
      <p className="relative text-neutral-400 text-sm sm:text-base mt-2 max-w-sm leading-relaxed">{stat.desc}</p>
    </motion.div>
  )
}

export default function StatsCounter() {
  const [active, setActive] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const t = setInterval(() => setActive((a) => (a + 1) % TOTAL), INTERVAL)
    return () => clearInterval(t)
  }, [started])

  return (
    <section ref={ref} className="relative section-padding bg-dark-800 overflow-hidden">
      <Container>
        {/* Intro */}
        <div className="flex flex-col items-center text-center mb-14">
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

        {/* Stacked card deck */}
        <div className="relative h-[380px] sm:h-[420px] max-w-xl mx-auto">
          {STATS.map((s, i) => {
            const rel = (i - active + TOTAL) % TOTAL
            return <StatCard key={s.label} stat={s} rel={rel} started={started} />
          })}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {STATS.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              aria-label={`Show ${s.label}`}
              className={[
                'h-2 rounded-full transition-all duration-300',
                i === active ? 'w-8 bg-fire-500' : 'w-2 bg-neutral-300 hover:bg-neutral-400',
              ].join(' ')}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
