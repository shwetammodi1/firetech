import Hero              from '../components/sections/Hero'
import About             from '../components/sections/About'
import Services          from '../components/sections/Services'
import Products          from '../components/sections/Products'
import StatsCounter      from '../components/sections/StatsCounter'
import WhyUs             from '../components/sections/WhyUs'
import ISOBadge          from '../components/sections/ISOBadge'
import FreeServiceBanner from '../components/sections/FreeServiceBanner'
import Testimonials      from '../components/sections/Testimonials'
import ClientLogos       from '../components/sections/ClientLogos'
import Contact           from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StatsCounter />
      <Products />
      <FreeServiceBanner />
      <Services />
      <WhyUs />
      <ISOBadge />
      <Testimonials />
      <ClientLogos />
      <Contact />
    </>
  )
}
