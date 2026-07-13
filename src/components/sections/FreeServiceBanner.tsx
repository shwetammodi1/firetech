import { motion } from 'framer-motion'
import { ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/918964005455?text=Hello%20Firetech%2C%20I%20would%20like%20to%20claim%20the%20free%20fire%20safety%20check.'

export default function FreeServiceBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background photograph */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{ backgroundImage: 'url(/images/firefighter.jpg)' }}
      />
      {/* Navy gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,6,23,0.92) 0%, rgba(15,23,42,0.85) 45%, rgba(23, 23, 23,0.55) 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/10 border border-white/20 backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
              <span className="text-neutral-200 text-xs font-bold tracking-widest uppercase">
                Limited Time Offer
              </span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight drop-shadow-lg">
              Get Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #cfcfcf 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                FREE Fire Safety Audit
              </span>
              {' '}— Worth ₹2,000
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Book a no-obligation site inspection by our certified engineers. Valid for new
              clients only — limited slots available each month.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="flex-shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-fire-500 hover:bg-fire-400 text-white font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-neutral-900/50 hover:shadow-neutral-500/40 hover:-translate-y-1 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              Claim Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <p className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
              No spam · Same-day response
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
