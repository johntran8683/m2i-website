import { Metadata } from 'next'
import CompanyStory from '@/components/about/CompanyStory'
import OurValues from '@/components/about/OurValues'
// import LeadershipTeam from '@/components/about/LeadershipTeam'
import WhyChooseUs from '@/components/about/WhyChooseUs'

export const metadata: Metadata = {
  title: 'About Us - Metrics2Impact',
  description: 'Learn about our mission, values, and the expert team behind Metrics2Impact. From World Bank expertise to your development impact.',
}

export default function AboutPage() {
  return (
    <>
      <CompanyStory />
      <OurValues />
      <WhyChooseUs />
    </>
  )
}

