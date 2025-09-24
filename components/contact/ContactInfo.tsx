import { 
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

const contactDetails = [
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: [
      'General inquiries: info@impactinsights.com',
      'Project proposals: projects@impactinsights.com',
      'Media & partnerships: media@impactinsights.com'
    ]
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: [
      'US: +1 (555) 123-4567',
      'International: +1 (555) 123-4568',
      'WhatsApp: +1 (555) 123-4569'
    ]
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Presence',
    details: [
      'Virtual office with global reach',
      'Regional consultants in 15+ countries',
      'Available across all time zones'
    ]
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM EST',
      'Emergency support: 24/7',
      'Response time: Within 24 hours'
    ]
  }
]

const regionalOffices = [
  {
    region: 'Asia-Pacific',
    countries: ['Vietnam', 'Thailand', 'Philippines', 'Indonesia', 'Australia'],
    contact: 'apac@impactinsights.com'
  },
  {
    region: 'Latin America',
    countries: ['Mexico', 'Brazil', 'Argentina', 'Colombia', 'Peru'],
    contact: 'latinamerica@impactinsights.com'
  },
  {
    region: 'Africa',
    countries: ['Kenya', 'Nigeria', 'South Africa', 'Ghana', 'Tanzania'],
    contact: 'africa@impactinsights.com'
  }
]

export default function ContactInfo() {
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Information
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple ways to reach us and connect with our global team
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactDetails.map((contact, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 mx-auto mb-4">
                <contact.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{contact.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {contact.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Regional Offices */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Regional Presence
          </h3>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {regionalOffices.map((office, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <MapPinIcon className="h-6 w-6 text-primary-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">{office.region}</h4>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Countries Covered:</h5>
                  <div className="flex flex-wrap gap-2">
                    {office.countries.map((country, countryIndex) => (
                      <span key={countryIndex} className="text-sm bg-white text-gray-700 px-3 py-1 rounded-full">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  <strong>Regional Contact:</strong> {office.contact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For urgent project needs or emergency consultations, we offer same-day response 
            and expedited project delivery with our rush service options.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">Same Day</div>
              <div className="text-sm text-gray-600">Emergency Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">+50%</div>
              <div className="text-sm text-gray-600">Rush Project Fee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Emergency Hotline</div>
            </div>
          </div>
          <div className="mt-6">
            <a href="tel:+15551234567" className="btn-primary">
              Call Emergency Line
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}



