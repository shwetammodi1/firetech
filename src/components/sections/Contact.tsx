import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../layout/Container'

const WHATSAPP_URL = 'https://wa.me/917000000000?text=Hello%20Firetech%20Enterprises%2C%20I%20have%20an%20enquiry.'
const PHONE        = '+91 70000 00000'
const EMAIL        = 'info@firetechenterprises.in'
const ADDRESS      = 'Mumbai, Maharashtra — Pan-India Service'

const INFO_ITEMS = [
  { icon: Phone,   label: 'Call Us',      value: PHONE,   href: 'tel:+917000000000' },
  { icon: Mail,    label: 'Email Us',     value: EMAIL,   href: `mailto:${EMAIL}` },
  { icon: MapPin,  label: 'Location',     value: ADDRESS, href: '#' },
  { icon: Clock,   label: 'Working Hours', value: 'Mon–Sat: 9 AM – 7 PM', href: '#' },
]

const SERVICES_LIST = [
  'Fire Extinguisher Supply & Refilling',
  'Fire Fighting System Installation',
  'Fire Alarm System',
  'Annual Maintenance Contract (AMC)',
  'Fire Safety Audit',
  'Fire Safety Training',
  'Emergency Lighting',
  'Other',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

type FormState = 'idle' | 'submitting' | 'success'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  })
  const [formState, setFormState] = useState<FormState>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // Build WhatsApp message from form data
    const msg = encodeURIComponent(
      `Hello Firetech Enterprises,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    )
    // Simulate a tiny delay then redirect to WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/917000000000?text=${msg}`, '_blank', 'noopener,noreferrer')
      setFormState('success')
    }, 600)
  }

  const inputClass = [
    'w-full bg-dark-700/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-smoke-200',
    'placeholder:text-smoke-700 focus:outline-none focus:border-fire-500/50 focus:bg-dark-700/80',
    'transition-all duration-300',
  ].join(' ')

  return (
    <section id="contact" className="relative section-padding bg-dark-800 overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 65%)' }}
      />

      <Container>
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeader
            eyebrow="Get In Touch"
            title="Let's Protect Your"
            highlight="Premises"
            subtitle="Fill in the form below and our expert will reach out within the hour. Or reach us directly via WhatsApp."
          />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 items-start">

          {/* ── Left: contact info ── */}
          <motion.div
            className="flex flex-col gap-5"
            initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* WhatsApp big CTA */}
            <motion.a
              variants={fadeUp}
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 glass-fire rounded-2xl border border-fire-500/20 p-5 hover:border-fire-500/40 hover:bg-fire-500/[0.06] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-fire-500/20 border border-fire-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-fire-400" />
              </div>
              <div>
                <p className="font-heading font-bold text-smoke-100 text-sm">Chat on WhatsApp</p>
                <p className="text-smoke-500 text-xs mt-0.5">Get instant response — usually under 5 minutes</p>
              </div>
              <span className="ml-auto text-fire-500 group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
            </motion.a>

            {/* Info items */}
            {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                className="flex items-center gap-4 glass rounded-2xl border border-white/5 p-5 hover:border-fire-500/20 hover:bg-fire-500/[0.03] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-fire-500/10 border border-fire-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-fire-500/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-fire-400" />
                </div>
                <div>
                  <p className="text-smoke-600 text-[10px] uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                  <p className="text-smoke-300 text-sm font-medium">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* ── Right: enquiry form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="glass rounded-3xl border border-white/6 p-8">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-fire-500/15 border border-fire-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-fire-400" />
                  </div>
                  <h3 className="font-heading font-black text-xl text-smoke-100">Redirecting to WhatsApp!</h3>
                  <p className="text-smoke-500 text-sm max-w-xs">
                    Your message has been prepared. Complete it in WhatsApp to reach us instantly.
                  </p>
                  <button
                    onClick={() => { setFormState('idle'); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }}
                    className="text-fire-400 text-sm font-medium hover:text-fire-300 transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <h3 className="font-heading font-bold text-smoke-100 text-lg mb-1">Send Us an Enquiry</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-smoke-600 text-xs uppercase tracking-wider font-semibold mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label className="block text-smoke-600 text-xs uppercase tracking-wider font-semibold mb-1.5">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className={inputClass}
                        autoComplete="tel"
                        pattern="[0-9+\s\-()]{7,15}"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-smoke-600 text-xs uppercase tracking-wider font-semibold mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label className="block text-smoke-600 text-xs uppercase tracking-wider font-semibold mb-1.5">Service Required</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>Select a service…</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-smoke-600 text-xs uppercase tracking-wider font-semibold mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your premises and requirements…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="group mt-1 flex items-center justify-center gap-2.5 bg-fire-500 hover:bg-fire-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-fire-900/40 hover:shadow-fire-500/25 hover:-translate-y-0.5 active:scale-95"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Opening WhatsApp…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        Send Enquiry via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-smoke-700 text-[11px] text-center">
                    Your information is safe with us. We never share your details with third parties.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
