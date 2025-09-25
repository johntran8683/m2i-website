import { 
  ClockIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: 'Free Consultation',
    description: 'Get a personalized assessment of your M&E needs',
    contact: 'info@metrics2impact.com',
    action: 'Send Message',
    primary: true
  },
  {
    icon: PhoneIcon,
    title: 'Call Us Directly',
    description: 'Speak with our team for immediate assistance',
    contact: '+1 (555) 012-3456',
    action: 'Call Now',
    primary: false
  },
  {
    icon: ClockIcon,
    title: 'Schedule Meeting',
    description: 'Book a 30-minute consultation call',
    contact: 'Calendly',
    action: 'Book Now',
    primary: false
  }
]

const trustSignals = [
  {
    icon: CheckCircleIcon,
    text: 'Response within 24 hours',
    color: 'text-green-600'
  },
  {
    icon: StarIcon,
    text: 'World Bank-trained experts',
    color: 'text-blue-600'
  },
  {
    icon: GlobeAltIcon,
    text: 'Global reach, 15+ countries',
    color: 'text-purple-600'
  }
]

export default function ContactHero() {
  return (
    <div className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Free Consultation Available
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Ready to Transform Your
            <br />
            <span className="text-primary-200">Development Impact?</span>
          </h1>
          
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our World Bank-trained M&E experts for a free consultation. 
            We'll help you design comprehensive frameworks and achieve measurable results.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center space-x-2 text-primary-100">
                <signal.icon className={`h-5 w-5 ${signal.color}`} />
                <span className="text-sm font-medium">{signal.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              method.primary 
                ? 'bg-white text-gray-900 shadow-xl' 
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
            }`}>
              <div className={`flex items-center justify-center h-16 w-16 rounded-2xl mx-auto mb-6 ${
                method.primary ? 'bg-primary-100' : 'bg-white/20'
              }`}>
                <method.icon className={`h-8 w-8 ${
                  method.primary ? 'text-primary-600' : 'text-white'
                }`} aria-hidden="true" />
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${
                method.primary ? 'text-gray-900' : 'text-white'
              }`}>
                {method.title}
              </h3>
              
              <p className={`text-sm mb-4 ${
                method.primary ? 'text-gray-600' : 'text-primary-100'
              }`}>
                {method.description}
              </p>
              
              <div className={`font-semibold mb-4 ${
                method.primary ? 'text-primary-600' : 'text-white'
              }`}>
                {method.contact}
              </div>
              
              <button className={`font-semibold py-3 px-6 rounded-lg transition-all duration-200 ${
                method.primary 
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl' 
                  : 'bg-white text-primary-600 hover:bg-gray-50'
              }`}>
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Response Guarantee */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Our Response Guarantee
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            We understand that development projects move quickly. That's why we guarantee 
            a response within 24 hours for all inquiries, and same-day response for urgent requests.
          </p>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24 Hours</div>
              <div className="text-sm text-primary-100">Standard Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Same Day</div>
              <div className="text-sm text-primary-100">Urgent Requests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Free</div>
              <div className="text-sm text-primary-100">Initial Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

