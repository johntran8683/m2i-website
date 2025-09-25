import { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactFAQ from '@/components/contact/FAQ'

export const metadata: Metadata = {
  title: 'Contact Us - Metrics2Impact',
  description: 'Get in touch with our World Bank-trained M&E experts. Free consultation available. Response within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactFAQ />
    </>
  )
}
