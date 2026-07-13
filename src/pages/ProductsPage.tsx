import PageHero          from '../components/layout/PageHero'
import ProductCatalog    from '../components/sections/ProductCatalog'
import FreeServiceBanner from '../components/sections/FreeServiceBanner'

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumb="Products"
        title="Our Products"
        subtitle="Explore our complete range of fire safety solutions — extinguishers, hydrant systems, suppression systems and safety accessories."
      />
      <ProductCatalog />
      <FreeServiceBanner />
    </>
  )
}
