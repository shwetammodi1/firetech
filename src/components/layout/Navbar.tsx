import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Menu, X, ChevronDown, ChevronRight, MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/918964005455'

const PRODUCT_CATEGORIES = [
  { label: 'Fire Extinguishers',       to: '/products#extinguishers' },
  { label: 'Fire Hydrant System',      to: '/products#hydrant' },
  { label: 'Fire Suppression System',  to: '/products#suppression' },
  { label: 'Fire Alarm & Accessories', to: '/products#safety' },
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
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
    setMobileProductsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const linkClasses = ({ isActive }: { isActive: boolean }) => [
    'px-4 xl:px-5 py-2.5 text-[0.95rem] font-semibold uppercase tracking-wide rounded-full transition-all duration-200',
    isActive
      ? 'bg-fire-500 text-white shadow-lg shadow-fire-900/40'
      : 'text-neutral-200 hover:text-white hover:bg-white/10',
  ].join(' ')

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between gap-3 bg-neutral-950/95 backdrop-blur-xl rounded-full pl-3 pr-3 sm:pl-4 sm:pr-4 h-[62px] md:h-[70px] shadow-xl shadow-black/30 border border-white/5"
            aria-label="Main navigation"
          >
            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Firetech Enterprises — Home">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                <Flame className="w-6 h-6 text-fire-500" />
              </div>
              <div className="hidden sm:flex flex-col leading-none select-none">
                <span className="font-heading font-black text-base md:text-lg tracking-[0.16em] text-white">FIRETECH</span>
                <span className="text-[8px] tracking-[0.36em] text-fire-400 font-bold uppercase mt-[3px]">ENTERPRISES</span>
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                link.dropdown ? (
                  <div key={link.to} className="relative group">
                    <NavLink to={link.to} className={linkClasses}>
                      <span className="inline-flex items-center gap-1">
                        {link.label}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      </span>
                    </NavLink>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                      <div className="w-64 bg-neutral-950 rounded-2xl shadow-2xl border border-white/10 overflow-hidden py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="flex items-center justify-between px-5 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-fire-500 transition-colors duration-150 group/item"
                          >
                            {item.label}
                            <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClasses}>
                    {link.label}
                  </NavLink>
                )
              ))}
            </div>

            {/* ── Right: CTA + hamburger ── */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 bg-fire-500 hover:bg-fire-600 text-white text-[0.85rem] font-bold uppercase tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                Enquire Now
              </a>

              <button
                className={[
                  'lg:hidden relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300',
                  isMenuOpen ? 'bg-fire-500 text-white' : 'bg-white/10 text-white hover:bg-white/20',
                ].join(' ')}
                onClick={() => setIsMenuOpen(prev => !prev)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] lg:hidden bg-neutral-950 flex flex-col overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Flame className="w-5 h-5 text-fire-500" />
                  </div>
                  <span className="font-heading font-black text-base tracking-[0.16em] text-white">FIRETECH</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col px-4 py-4 gap-1 flex-1">
                {NAV_LINKS.map((link) => (
                  link.dropdown ? (
                    <div key={link.to}>
                      <button
                        onClick={() => setMobileProductsOpen(o => !o)}
                        className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[0.95rem] font-semibold uppercase tracking-wide text-neutral-200 hover:bg-white/10 transition-colors"
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
                                className="block px-4 py-2.5 text-sm text-neutral-400 hover:text-fire-500 transition-colors"
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
                        'px-4 py-3.5 rounded-xl text-[0.95rem] font-semibold uppercase tracking-wide transition-colors',
                        isActive ? 'text-white bg-fire-500' : 'text-neutral-200 hover:bg-white/10',
                      ].join(' ')}
                    >
                      {link.label}
                    </NavLink>
                  )
                ))}
              </nav>

              <div className="px-4 py-5 border-t border-white/10">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-fire-500 hover:bg-fire-600 text-white font-heading font-bold uppercase tracking-wide text-sm px-5 py-3.5 rounded-full transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
