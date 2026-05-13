import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Menu, X, MessageCircle, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

const SECTION_IDS = navLinks.map(l => l.href.replace('#', ''))
const WHATSAPP_URL = 'https://wa.me/918964005455'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [activeId,   setActiveId]   = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-50% 0px -45% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-dark-900/90 backdrop-blur-xl border-b border-fire-500/10 shadow-2xl shadow-black/60'
            : 'bg-gradient-to-b from-dark-900/60 to-transparent backdrop-blur-sm',
        ].join(' ')}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Soft orange glow bottom border — visible when scrolled */}
        {scrolled && (
          <div
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.5) 30%, rgba(249,115,22,0.8) 50%, rgba(249,115,22,0.5) 70%, transparent 100%)',
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] md:h-[76px]">

            {/* ── Logo ── */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="Firetech Enterprises — Home"
            >
              {/* Icon wrapper with glow ring */}
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 rounded-xl bg-fire-500/10 border border-fire-500/25 flex items-center justify-center group-hover:bg-fire-500/20 group-hover:border-fire-500/50 transition-all duration-300">
                  <Flame className="w-5 h-5 text-fire-500 group-hover:text-fire-400 transition-colors duration-300" />
                </div>
                {/* Subtle glow blob */}
                <div className="absolute inset-0 rounded-xl bg-fire-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Text mark */}
              <div className="flex flex-col leading-none select-none">
                <span className="font-heading font-black text-[1.1rem] tracking-[0.2em] text-white group-hover:text-smoke-100 transition-colors duration-300">
                  FIRETECH
                </span>
                <span className="text-[8px] tracking-[0.4em] text-fire-400/80 font-semibold uppercase mt-[3px] group-hover:text-fire-300 transition-colors duration-300">
                  ENTERPRISES
                </span>
              </div>
            </a>

            {/* ── Desktop nav — absolutely centered ── */}
            <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2">
                {navLinks.map(({ label, href }) => {
                  const id = href.replace('#', '')
                  const isActive = activeId === id
                  return (
                    <a
                      key={href}
                      href={href}
                      aria-current={isActive ? 'page' : undefined}
                      className={[
                        'relative px-5 py-2.5 text-[0.8125rem] font-semibold tracking-wide transition-colors duration-300 group rounded-lg',
                        isActive
                          ? 'text-fire-400'
                          : 'text-smoke-400 hover:text-smoke-100 hover:bg-white/[0.04]',
                      ].join(' ')}
                    >
                      {label}
                      {/* Animated underline */}
                      <span
                        className={[
                          'absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300',
                          'bg-gradient-to-r from-fire-500 to-ember-500',
                          isActive ? 'w-5' : 'w-0 group-hover:w-5',
                        ].join(' ')}
                      />
                      {/* Active dot */}
                      {isActive && (
                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-fire-500" />
                      )}
                    </a>
                  )
                })}
              </div>
            </div>

            {/* ── Right side: CTA + hamburger ── */}
            <div className="flex items-center gap-3 flex-shrink-0">

              {/* Desktop CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 relative overflow-hidden group
                           bg-fire-500 hover:bg-fire-400 text-white
                           text-[0.8125rem] font-bold tracking-wide
                           px-5 py-2.5 rounded-full
                           transition-all duration-300
                           shadow-lg shadow-fire-900/40 hover:shadow-fire-500/30
                           hover:-translate-y-0.5 active:scale-95 active:translate-y-0"
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <MessageCircle className="w-3.5 h-3.5 flex-shrink-0 relative z-10" />
                <span className="relative z-10">Get a Quote</span>
              </a>

              {/* Mobile hamburger */}
              <button
                className={[
                  'md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center',
                  'transition-all duration-300 border',
                  isMenuOpen
                    ? 'bg-fire-500/15 border-fire-500/30 text-fire-400'
                    : 'bg-white/[0.04] border-white/8 text-smoke-400 hover:text-smoke-100 hover:bg-white/[0.07] hover:border-white/15',
                ].join(' ')}
                onClick={() => setIsMenuOpen(prev => !prev)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu overlay + panel ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />

            {/* Side drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] md:hidden
                         bg-dark-900/98 backdrop-blur-xl
                         border-l border-white/5
                         flex flex-col overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-fire-500/10 border border-fire-500/25 flex items-center justify-center">
                    <Flame className="w-4 h-4 text-fire-500" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-heading font-black text-sm tracking-[0.2em] text-white">FIRETECH</span>
                    <span className="text-[7px] tracking-[0.35em] text-fire-400/80 font-semibold uppercase mt-0.5">ENTERPRISES</span>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center text-smoke-500 hover:text-smoke-200 hover:bg-white/[0.08] transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-4 gap-1 flex-1">
                {navLinks.map(({ label, href }, i) => {
                  const isActive = activeId === href.replace('#', '')
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      aria-current={isActive ? 'page' : undefined}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                      className={[
                        'flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200',
                        isActive
                          ? 'text-fire-400 bg-fire-500/10 border border-fire-500/20'
                          : 'text-smoke-400 hover:text-smoke-100 hover:bg-white/[0.04] border border-transparent',
                      ].join(' ')}
                    >
                      <span>{label}</span>
                      <ChevronRight className={[
                        'w-4 h-4 transition-all duration-200',
                        isActive ? 'text-fire-500 opacity-100' : 'opacity-0 group-hover:opacity-60',
                      ].join(' ')} />
                    </motion.a>
                  )
                })}
              </nav>

              {/* Drawer footer CTA */}
              <div className="px-4 py-5 border-t border-white/5 flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2.5 bg-fire-500 hover:bg-fire-400 text-white font-heading font-bold text-sm px-5 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-fire-900/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get a Quote on WhatsApp
                </a>
                <p className="text-smoke-700 text-[11px] text-center">
                  Fast response · ISO Certified · Pan-India
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
