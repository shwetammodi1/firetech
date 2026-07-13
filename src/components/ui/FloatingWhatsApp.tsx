import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/918964005455?text=Hello%20Firetech%20Enterprises%2C%20I%20need%20a%20fire%20safety%20quote.'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Show button after 2s
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  // Show tooltip bubble after 4s (only once)
  useEffect(() => {
    if (!visible || dismissed) return
    const t = setTimeout(() => setTooltip(true), 4000)
    return () => clearTimeout(t)
  }, [visible, dismissed])

  // Auto-hide tooltip after 6s
  useEffect(() => {
    if (!tooltip) return
    const t = setTimeout(() => setTooltip(false), 6000)
    return () => clearTimeout(t)
  }, [tooltip])

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

          {/* ── Tooltip bubble ── */}
          <AnimatePresence>
            {tooltip && !dismissed && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative glass-fire rounded-2xl rounded-br-sm border border-fire-500/20 px-4 py-3 max-w-[220px] shadow-xl shadow-black/40"
              >
                <button
                  onClick={() => { setTooltip(false); setDismissed(true) }}
                  aria-label="Dismiss"
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-dark-700 border border-neutral-900/10 flex items-center justify-center text-smoke-500 hover:text-smoke-300 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
                <p className="text-smoke-200 text-xs font-medium leading-snug">
                  👋 Need a fire safety quote?
                </p>
                <p className="text-smoke-500 text-[11px] mt-0.5">
                  Chat with us — we respond in minutes!
                </p>
                {/* Tail */}
                <span className="absolute -bottom-1.5 right-4 w-3 h-3 bg-dark-700/60 border-r border-b border-fire-500/20 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Main FAB button ── */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative group w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#20c25e] flex items-center justify-center shadow-2xl shadow-black/50 hover:shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            {/* Pulse ring — uses CSS keyframe, respects prefers-reduced-motion */}
            <span className="absolute inset-0 rounded-2xl bg-[#25D366]/30 animate-pulse-ring" />
            <MessageCircle className="w-7 h-7 text-white relative z-10" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  )
}
