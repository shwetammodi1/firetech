import Hero              from '../components/sections/Hero'
import StatsCounter      from '../components/sections/StatsCounter'
import About             from '../components/sections/About'
import WhyUs             from '../components/sections/WhyUs'
import Products          from '../components/sections/Products'
import FreeServiceBanner from '../components/sections/FreeServiceBanner'
import Testimonials      from '../components/sections/Testimonials'
import ClientLogos       from '../components/sections/ClientLogos'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <About />
      <WhyUs />
      <Products />
      <FreeServiceBanner />
      <Testimonials />
      <ClientLogos />
    </>
  )
}
