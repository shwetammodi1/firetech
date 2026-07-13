import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Menu, X, ChevronDown, ChevronRight, MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/918964005455'

const PRODUCT_CATEGORIES = [
  { label: 'Fire Extinguishers',   to: '/products#extinguishers' },
  { label: 'Fire Hydrant System',  to: '/products#hydrant' },
  { label: 'Fire Alarm Systems',   to: '/products#alarm' },
  { label: 'Suppression Systems',  to: '/products#suppression' },
  { label: 'Safety Products',      to: '/products#safety' },
]

const NAV_LINKS = [
  { label: 'Home',         to: '/' },
  { label: 'About Us',     to: '/about' },
  { label: 'Products',     to: '/products', dropdown: PRODUCT_CATEGORIES },
  { label: 'Certificates', to: '/certificates' },
  { label: 'Blogs',        to: '/blogs' },
  { label: 'Contact Us',   to: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
    setMobileProductsOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-neutral-200 shadow-sm'
            : 'bg-white/80 backdrop-blur-md border-b border-neutral-100',
        ].join(' ')}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[64px] md:h-[76px]">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Firetech Enterprises — Home">
              <div className="w-9 h-9 rounded-lg bg-neutral-900 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none select-none">
                <span className="font-heading font-black text-[1.05rem] tracking-[0.18em] text-neutral-900">
                  FIRETECH
                </span>
                <span className="text-[8px] tracking-[0.38em] text-neutral-500 font-semibold uppercase mt-[3px]">
                  ENTERPRISES
                </span>
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                link.dropdown ? (
                  <div key={link.to} className="relative group">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => [
                        'flex items-center gap-1 px-4 py-2.5 text-[0.82rem] font-semibold tracking-wide rounded-md transition-colors duration-200',
                        isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900',
                      ].join(' ')}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </NavLink>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                      <div className="w-60 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="flex items-center justify-between px-4 py-2.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors duration-150 group/item"
                          >
                            {item.label}
                            <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => [
                      'px-4 py-2.5 text-[0.82rem] font-semibold tracking-wide rounded-md transition-colors duration-200',
                      isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900',
                    ].join(' ')}
                  >
                    {link.label}
                  </NavLink>
                )
              ))}
            </div>

            {/* ── Right: CTA + hamburger ── */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-neutral-900 hover:bg-black text-white text-[0.8rem] font-bold tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Get a Quote
              </a>

              <button
                className={[
                  'lg:hidden relative w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300',
                  isMenuOpen
                    ? 'bg-neutral-900 border-neutral-900 text-white'
                    : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50',
                ].join(' ')}
                onClick={() => setIsMenuOpen(prev => !prev)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] lg:hidden bg-white flex flex-col overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-5 border-b border-neutral-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center">
                    <Flame className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-heading font-black text-sm tracking-[0.18em] text-neutral-900">FIRETECH</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col px-4 py-4 gap-0.5 flex-1">
                {NAV_LINKS.map((link) => (
                  link.dropdown ? (
                    <div key={link.to}>
                      <button
                        onClick={() => setMobileProductsOpen(o => !o)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.label}
                                to={item.to}
                                className="block px-4 py-2.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) => [
                        'px-4 py-3 rounded-lg text-sm font-semibold transition-colors',
                        isActive ? 'text-white bg-neutral-900' : 'text-neutral-700 hover:bg-neutral-50',
                      ].join(' ')}
                    >
                      {link.label}
                    </NavLink>
                  )
                ))}
              </nav>

              <div className="px-4 py-5 border-t border-neutral-100">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-neutral-900 hover:bg-black text-white font-heading font-bold text-sm px-5 py-3.5 rounded-xl transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get a Quote on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
