import PageHero from '../components/layout/PageHero'
import Contact  from '../components/sections/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        title="Get in Touch"
        subtitle="Talk to our fire safety experts — book a free site inspection and get a same-day response."
      />
      <Contact />
    </>
  )
}
