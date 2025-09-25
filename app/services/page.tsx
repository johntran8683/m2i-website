import { Metadata } from 'next'
import ServicesOverview from '@/components/services/ServicesOverview'
import ServiceDetails from '@/components/services/ServiceDetails'
import Process from '@/components/services/Process'
import Pricing from '@/components/services/Pricing'

export const metadata: Metadata = {
  title: 'Services - Metrics2Impact',
  description: 'Comprehensive M&E services including framework design, impact evaluations, gender assessments, and capacity building for development organizations.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesOverview />
      <ServiceDetails />
      <Process />
      <Pricing />
    </>
  )
}

