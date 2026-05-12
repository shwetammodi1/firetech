import { motion } from 'framer-motion'
import { Flame, MessageCircle, ArrowRight } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/917000000000?text=Hello%20Firetech%2C%20I%20would%20like%20to%20claim%20the%20free%20fire%20safety%20check.'

export default function FreeServiceBanner() {
  return (
    <section className="relative py-10 overflow-hidden bg-dark-800">
      {/* Top + bottom fire lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/50 to-transparent" />

      {/* Background fire sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(249,115,22,0.07) 0%, rgba(239,68,68,0.05) 50%, rgba(249,115,22,0.07) 100%)',
        }}
      />

      {/* Floating flame icons (decorative) */}
      <Flame className="absolute left-4 top-1/2 -translate-y-1/2 w-24 h-24 text-fire-500/5 pointer-events-none hidden md:block" />
      <Flame className="absolute right-4 top-1/2 -translate-y-1/2 w-24 h-24 text-fire-500/5 pointer-events-none hidden md:block rotate-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: text */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-fire-500/15 border border-fire-500/30 items-center justify-center flex-shrink-0 fire-glow">
              <Flame className="w-6 h-6 text-fire-400" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-0.5">
                <span className="text-fire-400 text-xs font-bold tracking-widest uppercase">
                  Limited Time Offer
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-fire-500 animate-pulse" />
              </div>
              <p className="font-heading font-black text-lg sm:text-xl text-smoke-100">
                Get Your{' '}
                <span className="gradient-fire">FREE Fire Safety Check</span>
                {' '}— Worth ₹2,000
              </p>
              <p className="text-smoke-500 text-xs mt-0.5">
                Book a no-obligation site inspection. Valid for new clients only. Limited slots available.
              </p>
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col xs:flex-row items-center gap-3 flex-shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-fire-500 hover:bg-fire-400 text-white font-heading font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-fire-900/40 hover:shadow-fire-500/30 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              Claim Free Check
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
