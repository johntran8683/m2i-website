import { 
  ClockIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    description: 'Send us a detailed message about your project needs',
    contact: 'info@impactinsights.com',
    action: 'Send Email'
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    description: 'Speak directly with our team for immediate assistance',
    contact: '+1 (555) 123-4567',
    action: 'Schedule Call'
  },
  {
    icon: ClockIcon,
    title: 'Schedule Consultation',
    description: 'Book a free 30-minute consultation to discuss your needs',
    contact: 'Calendly Link',
    action: 'Book Meeting'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Availability',
    description: 'We work across all time zones and regions',
    contact: '24/7 Response',
    action: 'Contact Us'
  }
]

export default function ContactHero() {
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Ready to transform your development impact? Contact our expert team for a free consultation 
            and discover how we can help your organization achieve greater results.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 mx-auto mb-4">
                <method.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{method.description}</p>
              <div className="text-primary-600 font-medium mb-3">{method.contact}</div>
              <button className="text-sm text-primary-600 hover:text-primary-500 font-medium">
                {method.action} →
              </button>
            </div>
          ))}
        </div>

        {/* Response Time */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quick Response Guarantee
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We understand that development projects move quickly. That's why we guarantee a response 
            within 24 hours for all inquiries, and same-day response for urgent requests.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">24 Hours</div>
              <div className="text-sm text-gray-600">Standard Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">Same Day</div>
              <div className="text-sm text-gray-600">Urgent Requests</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">Free</div>
              <div className="text-sm text-gray-600">Initial Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

