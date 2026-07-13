import { ShieldCheck } from 'lucide-react'

const CERTS = [
  'ISO 9001:2015',
  'BIS Certified',
  'ISI Marked',
  'CE Compliant',
  'MSME Registered',
  'FSSAI Approved',
  'Make in India',
  'TÜV Austria',
]

export default function CertStrip() {
  // duplicate the list so the marquee loops seamlessly
  const items = [...CERTS, ...CERTS]

  return (
    <section className="relative py-9 bg-white border-y border-neutral-100 overflow-hidden">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-neutral-500 mb-6 px-4">
        Certified &amp; Compliant · Trusted Quality You Can Rely On
      </p>

      <div className="relative overflow-hidden">
        {/* edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #ffffff 0%, transparent 100%)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, #ffffff 0%, transparent 100%)' }}
        />

        <div className="flex animate-marquee gap-4 w-max">
          {items.map((cert, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 flex-shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 hover:border-fire-500/40 hover:bg-fire-500/[0.04] transition-colors duration-300"
            >
              <ShieldCheck className="w-4 h-4 text-fire-500 flex-shrink-0" />
              <span className="font-heading font-bold text-sm text-neutral-800 whitespace-nowrap">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
