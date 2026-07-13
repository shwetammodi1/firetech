import PageHero  from '../components/layout/PageHero'
import Container from '../components/layout/Container'

const SECTIONS: { h: string; p: string[] }[] = [
  {
    h: 'Acceptance of Terms',
    p: [
      'By accessing and using the Firetech Enterprises website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of our website and services.',
    ],
  },
  {
    h: 'Our Services',
    p: [
      'Firetech Enterprises supplies, installs and maintains fire safety equipment and systems including fire extinguishers, hydrant systems, alarm systems, suppression systems and related accessories, along with AMC, audits and training.',
      'All product specifications, capacities and images shown on this website are indicative. Final specifications are confirmed at the time of quotation and order.',
    ],
  },
  {
    h: 'Quotations & Pricing',
    p: [
      'Quotations are valid for the period stated on them and are subject to change based on site conditions, product availability and applicable taxes. A quotation does not constitute a binding contract until confirmed in writing by both parties.',
    ],
  },
  {
    h: 'Warranty & Maintenance',
    p: [
      'Products are covered by the manufacturer warranty where applicable. Servicing, refilling and maintenance are provided as per the agreed AMC or service contract. Regular maintenance is essential to keep equipment compliant and functional.',
    ],
  },
  {
    h: 'Limitation of Liability',
    p: [
      'While we follow strict national and international fire safety standards, Firetech Enterprises shall not be liable for any indirect or consequential loss arising from misuse, tampering, or failure to maintain equipment as recommended.',
    ],
  },
  {
    h: 'Contact',
    p: [
      'For any questions regarding these Terms & Conditions, contact us at mohtmhs@gmail.com or +91 89640 05455.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero crumb="Terms & Conditions" title="Terms & Conditions" subtitle="The terms that govern the use of our website and services." />
      <section className="section-padding bg-white">
        <Container size="md">
          <div className="flex flex-col gap-10">
            {SECTIONS.map(({ h, p }) => (
              <div key={h}>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-smoke-100 mb-3 flex items-center gap-3">
                  <span className="w-1.5 h-6 rounded-full bg-fire-500" />
                  {h}
                </h2>
                {p.map((para, i) => (
                  <p key={i} className="text-smoke-500 text-[0.95rem] leading-relaxed mb-3">{para}</p>
                ))}
              </div>
            ))}
            <p className="text-smoke-600 text-xs pt-4 border-t border-neutral-100">
              Last updated: July 2026 · Firetech Enterprises
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
