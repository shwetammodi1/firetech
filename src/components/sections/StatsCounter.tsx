import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../layout/Container'

interface StatItem {
  value: number
  suffix: string
  label: string
  prefix?: string
}

const STATS: StatItem[] = [
  { value: 500,  suffix: '+', label: 'Clients Protected'         },
  { value: 15,   suffix: '+', label: 'Years in Business'         },
  { value: 5000, suffix: '+', label: 'Fire Equipment Serviced'   },
  { value: 100,  suffix: '%', label: 'Client Satisfaction Rate'  },
  { value: 25,   suffix: '+', label: 'Cities Covered'            },
  { value: 3,    suffix: '',  label: 'ISO Certifications', prefix: '' },
]

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])

  return count
}

function StatCard({ item, started }: { item: StatItem; started: boolean }) {
  const count = useCountUp(item.value, 2200, started)
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6 glass rounded-2xl border border-slate-900/5 hover:border-fire-500/20 hover:bg-fire-500/[0.03] transition-all duration-300 group">
      <div className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl gradient-fire fire-text-glow leading-none mb-2">
        {item.prefix ?? ''}{count}{item.suffix}
      </div>
      <p className="text-smoke-500 text-sm font-medium tracking-wide group-hover:text-smoke-400 transition-colors duration-300">
        {item.label}
      </p>
    </div>
  )
}

export default function StatsCounter() {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.35 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative py-16 overflow-hidden">
      {/* fire line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/40 to-transparent" />
      {/* fire line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/40 to-transparent" />

      {/* ambient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(230, 47, 16,0.06) 0%, transparent 70%)' }}
      />

      <Container>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} item={stat} started={started} />
          ))}
        </motion.div>
      </Container>
    </div>
  )
}
