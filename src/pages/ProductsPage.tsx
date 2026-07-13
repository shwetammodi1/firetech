import PageHero          from '../components/layout/PageHero'
import ProductCategories from '../components/sections/ProductCategories'
import Services          from '../components/sections/Services'
import FreeServiceBanner from '../components/sections/FreeServiceBanner'

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumb="Products"
        title="Our Products & Solutions"
        subtitle="Advanced fire safety instruments and services — engineered for reliability, performance and protection across industrial and commercial environments."
      />
      <ProductCategories />
      <Services />
      <FreeServiceBanner />
    </>
  )
}
