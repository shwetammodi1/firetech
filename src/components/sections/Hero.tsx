import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, ChevronLeft, ChevronRight } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/918964005455?text=Hello%20Firetech%20Enterprises%2C%20I%20need%20a%20fire%20safety%20quote.'
const PHONE_URL    = 'tel:+918964005455'

interface Slide {
  line1: string
  line2: string
  red: string
  sub: string
  img: string
}

const SLIDES: Slide[] = [
  {
    line1: 'Premium Grade',
    line2: 'Fire',
    red: 'Extinguishers',
    sub: 'Equip your premises with best-in-class fire extinguishers — designed for rapid response and reliable protection.',
    img: '/images/extinguisher.jpg',
  },
  {
    line1: 'All Fire Solutions',
    line2: 'Under One',
    red: 'Roof',
    sub: 'Comprehensive fire safety system design, installation and maintenance for absolute peace of mind.',
    img: '/images/sprinkler.jpg',
  },
  {
    line1: 'Smart Fire Alarm',
    line2: '& Detection',
    red: 'Systems',
    sub: 'Advanced smoke & heat detection, panels and alarms for early warning and complete safety.',
    img: '/images/smoke-detector.jpg',
  },
  {
    line1: 'Trusted Fire Safety',
    line2: 'Partner Since',
    red: '2009',
    sub: 'ISO 9001:2015 certified — protecting lives and property across India with certified expertise.',
    img: '/images/firefighter.jpg',
  },
]

const EMBERS = Array.from({ length: 10 }, (_, i) => ({
  left: `${8 + i * 9}%`,
  bottom: `${3 + (i % 4) * 3}%`,
  size: 3 + (i % 3),
  dur: 3.4 + (i % 5) * 0.4,
  delay: (i % 6) * 0.35,
  color: i % 2 ? '#f59e0b' : '#fbbf24',
}))

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  const go = (dir: number) => setIndex((p) => (p + dir + SLIDES.length) % SLIDES.length)
  const slide = SLIDES[index]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950"
      aria-label="Hero"
    >
      {/* Red radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 75% 45%, rgba(230,47,16,0.28) 0%, rgba(230,47,16,0.06) 40%, transparent 72%)' }}
      />
      {/* Dotted perspective floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'linear-gradient(to top, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
        }}
      />
      {/* Embers */}
      {EMBERS.map((e, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ left: e.left, bottom: e.bottom, width: e.size, height: e.size, background: e.color }}
          animate={{ y: [0, -110, -220], opacity: [0, 1, 0], scale: [0.5, 1, 0.3] }}
          transition={{ duration: e.dur, repeat: Infinity, delay: e.delay, ease: 'easeOut' }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ── Left: rotating text ── */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <h1 className="font-heading font-black leading-[0.98] tracking-tight text-white text-4xl sm:text-6xl md:text-7xl">
                  {slide.line1}
                  <br />
                  {slide.line2}{' '}
                  <span className="text-fire-500">{slide.red}</span>
                </h1>
                <p className="mt-6 text-neutral-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {slide.sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-fire-500 hover:bg-fire-600 text-white font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-fire-900/40 hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free Quote
              </a>
              <a
                href={PHONE_URL}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-sm sm:text-base px-8 py-4 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                <Phone className="w-5 h-5 text-fire-400" />
                Call Us Now
              </a>
            </div>

            {/* Dots + arrows */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={[
                      'h-2 rounded-full transition-all duration-300',
                      i === index ? 'w-8 bg-fire-500' : 'w-2 bg-white/30 hover:bg-white/50',
                    ].join(' ')}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => go(-1)} aria-label="Previous slide" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={() => go(1)} aria-label="Next slide" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ── Right: rotating product image ── */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-fire-500/25 blur-3xl" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -40 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative w-full max-w-sm sm:max-w-md"
              >
                <img
                  src={slide.img}
                  alt={`${slide.line1} ${slide.line2} ${slide.red}`}
                  className="w-full h-[280px] sm:h-[420px] object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-black/50"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
