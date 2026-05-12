import { useState, useEffect } from 'react'
import { Flame, Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

const SECTION_IDS = navLinks.map(l => l.href.replace('#', ''))
const WHATSAPP_URL = 'https://wa.me/917000000000'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [activeId,   setActiveId]   = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy via IntersectionObserver
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

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-xl shadow-black/60 border-b border-fire-900/20'
          : 'bg-transparent',
      ].join(' ')}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2.5 group flex-shrink-0"
            aria-label="Firetech Enterprises — Home"
          >
            <div className="relative">
              <Flame className="w-8 h-8 text-fire-500 transition-colors duration-300 group-hover:text-fire-400" />
              <span className="absolute inset-0 rounded-full bg-fire-500/20 blur-md group-hover:bg-fire-500/30 transition-all duration-300" />
            </div>
            <div className="flex flex-col leading-none select-none">
              <span className="font-heading font-black text-xl tracking-[0.18em] text-white">
                FIRETECH
              </span>
              <span className="text-[9px] tracking-[0.35em] text-fire-400 font-semibold uppercase mt-0.5">
                ENTERPRISES
              </span>
            </div>
          </a>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeId === id
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-300 group',
                    isActive ? 'text-fire-400' : 'text-smoke-400 hover:text-smoke-100',
                  ].join(' ')}
                >
                  {label}
                  <span className={[
                    'absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-fire-500 transition-all duration-300 rounded-full',
                    isActive ? 'w-full' : 'w-0 group-hover:w-full',
                  ].join(' ')} />
                </a>
              )
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-fire-500 hover:bg-fire-600 active:bg-fire-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-fire-900/40 hover:shadow-fire-500/25 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Get a Quote
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-2 -mr-1 text-smoke-400 hover:text-smoke-100 transition-colors duration-300 rounded-lg hover:bg-dark-700/50"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen
              ? <X className="w-6 h-6" />
              : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="bg-dark-900/98 backdrop-blur-md border-t border-white/5 px-4 pt-3 pb-6 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = activeId === href.replace('#', '')
            return (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200',
                  isActive
                    ? 'text-fire-400 bg-fire-500/10 border border-fire-500/20'
                    : 'text-smoke-400 hover:text-smoke-100 hover:bg-dark-700/60',
                ].join(' ')}
              >
                {label}
              </a>
            )
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 bg-fire-500 hover:bg-fire-600 text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Get a Quote on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
