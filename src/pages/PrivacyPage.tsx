import PageHero  from '../components/layout/PageHero'
import Container from '../components/layout/Container'

const SECTIONS: { h: string; p: string[] }[] = [
  {
    h: 'Introduction',
    p: [
      'Firetech Enterprises ("we", "us", "our") is committed to protecting the privacy of everyone who visits our website or engages our fire safety services. This Privacy Policy explains what information we collect, how we use it, and the choices you have.',
    ],
  },
  {
    h: 'Information We Collect',
    p: [
      'We may collect information you voluntarily provide — such as your name, phone number, email address, company name and site details — when you request a quote, book an inspection, or contact us via WhatsApp, phone or our enquiry forms.',
      'We may also collect limited technical information automatically, such as your browser type and pages visited, to improve our website experience.',
    ],
  },
  {
    h: 'How We Use Your Information',
    p: [
      'Your information is used solely to respond to your enquiries, provide quotations, schedule site inspections and AMC services, and keep you informed about your fire safety requirements. We do not sell or rent your personal information to any third party.',
    ],
  },
  {
    h: 'Data Security',
    p: [
      'We apply reasonable technical and organisational measures to protect your information against unauthorised access, disclosure or misuse. However, no method of transmission over the internet is completely secure.',
    ],
  },
  {
    h: 'Your Rights',
    p: [
      'You may request access to, correction of, or deletion of the personal information we hold about you at any time by contacting us using the details on our Contact page.',
    ],
  },
  {
    h: 'Contact Us',
    p: [
      'If you have any questions about this Privacy Policy, please reach us at mohtmhs@gmail.com or +91 89640 05455.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumb="Privacy Policy" title="Privacy Policy" subtitle="How Firetech Enterprises collects, uses and protects your information." />
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
