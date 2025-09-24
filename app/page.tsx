import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ProjectsHighlights from '@/components/ProjectsHighlights'
import ImpactNumbers from '@/components/ImpactNumbers'
import ClientLogos from '@/components/ClientLogos'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactNumbers />
      <Services />
      <ProjectsHighlights />
      <ClientLogos />
      <Testimonials />
      <CTA />
    </>
  )
}
