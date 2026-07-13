import PageHero    from '../components/layout/PageHero'
import ISOBadge    from '../components/sections/ISOBadge'
import ClientLogos from '../components/sections/ClientLogos'

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        crumb="Certificates"
        title="Certifications & Compliance"
        subtitle="Nationally and internationally certified quality you can rely on — every product tested and audited to the highest standards."
      />
      <ISOBadge />
      <ClientLogos />
    </>
  )
}
