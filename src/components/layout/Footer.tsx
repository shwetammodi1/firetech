import { Flame, MessageCircle, Phone, Mail, MapPin, Globe, Share2, Rss, ArrowUp } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/918964005455'

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About Us',     href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

const SERVICE_LINKS = [
  'Fire Extinguisher Supply & Refilling',
  'Fire Fighting Systems',
  'Fire Alarm Systems',
  'Annual Maintenance Contract',
  'Fire Safety Audit',
  'Emergency & Exit Lighting',
  'Fire Equipment Supply',
  'Fire Safety Training',
]

const SOCIAL = [
  { icon: Globe,  href: '#', label: 'Website' },
  { icon: Share2, href: '#', label: 'Social' },
  { icon: Rss,    href: '#', label: 'Updates' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-white/5 overflow-hidden">
      {/* Top fire line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/40 to-transparent" />

      {/* Ambient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(239,68,68,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main grid ── */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-2.5 group w-fit">
              <div className="relative">
                <Flame className="w-8 h-8 text-fire-500" />
                <span className="absolute inset-0 rounded-full bg-fire-500/20 blur-md" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-black text-lg tracking-[0.18em] text-white">FIRETECH</span>
                <span className="text-[9px] tracking-[0.35em] text-fire-400 font-semibold uppercase mt-0.5">ENTERPRISES</span>
              </div>
            </a>

            <p className="text-smoke-600 text-sm leading-relaxed">
              India's trusted ISO 9001:2015 certified fire safety partner. Protecting lives and property since 2009.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-smoke-500 hover:text-smoke-200 hover:border-fire-500/30 hover:bg-fire-500/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* ISO badge */}
            <div className="inline-flex items-center gap-2 glass-fire rounded-xl px-4 py-2.5 border border-fire-500/20 w-fit">
              <div className="w-8 h-8 rounded-lg bg-fire-500/20 border border-fire-500/30 flex items-center justify-center">
                <Flame className="w-4 h-4 text-fire-400" />
              </div>
              <div>
                <p className="text-fire-300 text-xs font-bold leading-none">ISO 9001:2015</p>
                <p className="text-smoke-600 text-[10px] mt-0.5">Quality Certified</p>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-heading font-bold text-smoke-200 text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-smoke-600 hover:text-fire-400 text-sm transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-fire-500 transition-all duration-300 rounded-full" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading font-bold text-smoke-200 text-sm uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-smoke-600 hover:text-fire-400 text-sm leading-snug transition-colors duration-300 flex items-start gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 mt-1.5 h-px bg-fire-500 transition-all duration-300 rounded-full flex-shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h3 className="font-heading font-bold text-smoke-200 text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { icon: Phone,   label: '+91 89640 05455',           href: 'tel:+918964005455' },
                { icon: MessageCircle, label: 'Chat on WhatsApp',    href: WHATSAPP_URL },
                { icon: Mail,    label: 'mohtmhs@gmail.com', href: 'mailto:mohtmhs@gmail.com' },
                { icon: MapPin,  label: '296, Shubham Green\'s CAT Road, Indore, MP', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-2.5 text-smoke-600 hover:text-smoke-300 text-sm transition-colors duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-fire-500/70 flex-shrink-0 mt-0.5 group-hover:text-fire-400 transition-colors duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-smoke-700 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Firetech Enterprises. All rights reserved.
            {' '}·{' '}
            <span className="text-fire-600">ISO 9001:2015 Certified</span>
          </p>
          <div className="flex items-center gap-4">
            <span className="text-smoke-700 text-xs">Designed with ❤️ for safety</span>
            {/* Scroll to top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="w-8 h-8 rounded-xl glass border border-white/8 flex items-center justify-center text-smoke-500 hover:text-smoke-200 hover:border-fire-500/30 hover:bg-fire-500/10 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
