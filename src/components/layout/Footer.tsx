import { Link } from 'react-router-dom'
import { Flame, Phone, Mail, MapPin, MessageCircle, Globe, Share2, Rss, Send, ArrowUp } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/918964005455'

const QUICK_LINKS = [
  { label: 'Home',         to: '/' },
  { label: 'About Us',     to: '/about' },
  { label: 'Products',     to: '/products' },
  { label: 'Certificates', to: '/certificates' },
  { label: 'Blogs',        to: '/blogs' },
  { label: 'Contact Us',   to: '/contact' },
]

const PRODUCT_LINKS = [
  { label: 'Fire Extinguishers',       to: '/products#extinguishers' },
  { label: 'Fire Hydrant System',      to: '/products#hydrant' },
  { label: 'Fire Suppression System',  to: '/products#suppression' },
  { label: 'Fire Alarm & Accessories', to: '/products#safety' },
]

const SOCIAL = [
  { icon: Globe,         href: '#',          label: 'Website' },
  { icon: Share2,        href: '#',          label: 'Social' },
  { icon: Rss,           href: '#',          label: 'Updates' },
  { icon: MessageCircle, href: WHATSAPP_URL, label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-neutral-400 overflow-hidden">
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Main grid ── */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <div className="w-10 h-10 rounded-lg bg-fire-500 flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-black text-lg tracking-[0.18em] text-white">FIRETECH</span>
                <span className="text-[9px] tracking-[0.35em] text-neutral-500 font-semibold uppercase mt-0.5">ENTERPRISES</span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs">
              Ensure fire safety, save life & property. India's trusted ISO 9001:2015 certified fire
              safety partner — protecting lives and property since 2009.
            </p>

            {/* Social */}
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-3">Stay Connected</p>
              <div className="flex items-center gap-2.5">
                {SOCIAL.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-neutral-950 hover:bg-white hover:border-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-px bg-white transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">Our Products</h3>
            <ul className="flex flex-col gap-3">
              {PRODUCT_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-px bg-white transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">Get in Touch</h3>
            <ul className="flex flex-col gap-3.5 mb-6">
              <li>
                <a href="tel:+918964005455" className="flex items-start gap-2.5 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" /> +91 89640 05455
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-sm hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:mohtmhs@gmail.com" className="flex items-start gap-2.5 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" /> mohtmhs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 296, Shubham Green's, CAT Road, Indore, MP
              </li>
            </ul>

            {/* Newsletter */}
            <form
              onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_URL, '_blank') }}
              className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 p-1 focus-within:border-neutral-600 transition-colors"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none min-w-0"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-9 h-9 rounded-full bg-white text-neutral-950 flex items-center justify-center hover:bg-neutral-200 transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Firetech Enterprises. All Rights Reserved. · ISO 9001:2015 Certified
          </p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="text-neutral-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-neutral-500 hover:text-white text-xs transition-colors">Terms &amp; Conditions</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-neutral-950 hover:bg-white hover:border-white transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
