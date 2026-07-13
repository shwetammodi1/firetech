import PageHero          from '../components/layout/PageHero'
import About             from '../components/sections/About'
import StatsCounter      from '../components/sections/StatsCounter'
import WhyUs             from '../components/sections/WhyUs'
import FreeServiceBanner from '../components/sections/FreeServiceBanner'

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="About Firetech Enterprises"
        subtitle="India's trusted, ISO 9001:2015 certified fire safety partner — protecting lives and property across India since 2009."
      />
      <About />
      <StatsCounter />
      <WhyUs />
      <FreeServiceBanner />
    </>
  )
}
