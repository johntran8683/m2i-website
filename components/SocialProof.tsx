import Image from 'next/image'
import { 
  StarIcon,
  ShieldCheckIcon, 
  ClockIcon, 
  CheckBadgeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function SocialProof() {
  const testimonials = [
    {
      quote: "Metrics2Impact's M&E framework increased our program effectiveness by 30%. Their World Bank expertise brought credibility and rigor to our evaluation processes.",
      author: "Sarah Johnson",
      role: "Gender Program Manager",
      organization: "IFC - World Bank Group",
      result: "30% increase in program effectiveness",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "Their impact evaluation saved us $2M in program costs while improving outcomes. The methodology was thorough and recommendations were immediately actionable.",
      author: "Dr. Maria Rodriguez",
      role: "Program Director",
      organization: "UNICEF",
      result: "$2M in cost savings achieved",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "Their capacity building workshops transformed our team's M&E capabilities. We now conduct evaluations independently, saving 40% on external consulting costs.",
      author: "Ahmed Hassan",
      role: "M&E Coordinator",
      organization: "Regional Development Agency",
      result: "40% reduction in consulting costs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&auto=format&fit=crop&w=150&h=150"
    }
  ]

  const clients = [
    { name: 'IFC - World Bank Group', domain: 'ifc.org', featured: true },
    { name: 'UNICEF', domain: 'unicef.org', featured: true },
    { name: 'World Bank', domain: 'worldbank.org', featured: true },
    { name: 'GIZ', domain: 'giz.de', featured: false },
    { name: 'NIRAS', domain: 'niras.com', featured: false },
    { name: 'Government Agencies', domain: 'usa.gov', featured: false },
  ]

  const trustSignals = [
    {
      icon: ShieldCheckIcon,
      title: "Secure & Confidential",
      description: "Enterprise-grade security",
      color: "text-green-600"
    },
    {
      icon: ClockIcon,
      title: "24-Hour Response",
      description: "Guaranteed response time",
      color: "text-blue-600"
    },
    {
      icon: CheckBadgeIcon,
      title: "World Bank Certified",
      description: "Verified credentials",
      color: "text-purple-600"
    },
    {
      icon: GlobeAltIcon,
      title: "Global Experience",
      description: "15+ countries served",
      color: "text-orange-600"
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Signals */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <StarIcon className="w-4 h-4 mr-2" />
            Trusted by Leading Organizations
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Why Organizations Choose Metrics2Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence, security, and client success sets us apart in the M&E consulting space
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 mb-16">
          {trustSignals.map((signal, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-lg bg-gray-100 mb-4 ${signal.color}`}>
                <signal.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {signal.title}
              </h3>
              <p className="text-xs text-gray-600">
                {signal.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Featured Partners</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {clients.filter(client => client.featured).map((client) => (
              <div key={client.name} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-16 w-32 mb-4">
                    <Image
                      src={`https://logo.clearbit.com/${client.domain}?size=256`}
                      alt={`${client.name} logo`}
                      fill
                      sizes="128px"
                      className="object-contain transition-transform duration-200 hover:scale-105"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900">{client.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-600">
              Testimonials from organizations we've helped achieve greater impact
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-primary-600" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Result Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                    ✓ {testimonial.result}
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-primary-600 font-medium">
                        {testimonial.organization}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
