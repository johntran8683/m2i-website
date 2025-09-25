import { 
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
  ClockIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const contactDetails = [
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: [
      'General inquiries: info@metrics2impact.com',
      'Project proposals: projects@metrics2impact.com'
    ],
    primary: true
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: [
      'US: +1 (555) 012-3456',
      'WhatsApp: +1 (555) 012-3457'
    ],
    primary: false
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Reach',
    details: [
      'Virtual office with global reach',
      'Regional consultants in 15+ countries'
    ],
    primary: false
  },
  {
    icon: ClockIcon,
    title: 'Response Time',
    details: [
      'Standard: Within 24 hours',
      'Urgent: Same day response'
    ],
    primary: false
  }
]

const regionalOffices = [
  {
    region: 'Asia-Pacific',
    countries: ['Vietnam', 'Thailand', 'Philippines', 'Indonesia'],
    contact: 'apac@metrics2impact.com'
  },
  {
    region: 'Latin America',
    countries: ['Mexico', 'Brazil', 'Argentina', 'Colombia'],
    contact: 'latinamerica@metrics2impact.com'
  },
  {
    region: 'Africa',
    countries: ['Kenya', 'Nigeria', 'South Africa', 'Ghana'],
    contact: 'africa@metrics2impact.com'
  }
]

export default function ContactInfo() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple ways to reach us and connect with our global team
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactDetails.map((contact, index) => (
            <div key={index} className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
              contact.primary ? 'card-elevated' : 'card'
            }`}>
              <div className={`flex items-center justify-center h-12 w-12 rounded-lg mx-auto mb-4 ${
                contact.primary ? 'bg-primary-100' : 'bg-gray-100'
              }`}>
                <contact.icon className={`h-6 w-6 ${
                  contact.primary ? 'text-primary-600' : 'text-gray-600'
                }`} aria-hidden="true" />
              </div>
              <h3 className={`text-lg font-semibold mb-4 ${
                contact.primary ? 'text-gray-900' : 'text-gray-900'
              }`}>
                {contact.title}
              </h3>
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
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <MapPinIcon className="h-6 w-6 text-primary-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">{office.region}</h4>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Countries Covered:</h5>
                  <div className="flex flex-wrap gap-2">
                    {office.countries.map((country, countryIndex) => (
                      <span key={countryIndex} className="text-sm bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
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
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 rounded-2xl text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            For urgent project needs or emergency consultations, we offer same-day response 
            and expedited project delivery with our rush service options.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Same Day</div>
              <div className="text-sm text-primary-100">Emergency Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">+50%</div>
              <div className="text-sm text-primary-100">Rush Project Fee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-primary-100">Emergency Hotline</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15550123456" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Call Emergency Line
            </a>
            <a href="mailto:emergency@metrics2impact.com" className="text-white hover:text-primary-100 font-medium py-3 px-6 rounded-lg border border-white/30 hover:border-white/50 transition-colors duration-200">
              Send Urgent Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}



