import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'

const pricingTiers = [
  {
    name: 'Consultation',
    price: '$200-500',
    period: 'per hour',
    description: 'Expert advice and strategy sessions',
    features: [
      'Initial project assessment',
      'Strategy development',
      'Methodology guidance',
      'Best practice recommendations',
      '1-hour sessions',
      'Follow-up support'
    ],
    bestFor: 'Organizations seeking expert guidance',
    cta: 'Schedule Consultation',
    popular: false
  },
  {
    name: 'Project-Based',
    price: '$10K-100K',
    period: 'per project',
    description: 'Complete M&E framework development',
    features: [
      'Full M&E framework design',
      'Theory of Change development',
      'Data collection tools',
      'Analysis and reporting',
      'Training and capacity building',
      '6-month support'
    ],
    bestFor: 'Comprehensive M&E system implementation',
    cta: 'Request Proposal',
    popular: true
  },
  {
    name: 'Retainer',
    price: '$5K-20K',
    period: 'per month',
    description: 'Ongoing M&E support and monitoring',
    features: [
      'Monthly monitoring reports',
      'Data analysis and insights',
      'Regular check-ins',
      'Tool maintenance',
      'Capacity building',
      'Priority support'
    ],
    bestFor: 'Long-term partnership and support',
    cta: 'Discuss Retainer',
    popular: false
  }
]

const additionalServices = [
  {
    name: 'Training Workshops',
    price: '$2K-10K',
    description: 'Customized training programs for your team',
    duration: '1-5 days'
  },
  {
    name: 'Tools & Templates',
    price: '$500-2K',
    description: 'Standardized M&E packages and templates',
    duration: 'Immediate delivery'
  },
  {
    name: 'Rush Projects',
    price: '+50%',
    description: 'Expedited delivery for urgent needs',
    duration: '2-4 weeks'
  }
]

export default function Pricing() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options to meet your organization's needs and budget
          </p>
        </div>

        {/* Main Pricing Tiers */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-16">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative bg-white p-8 rounded-xl shadow-sm ${
                tier.popular ? 'ring-2 ring-primary-600' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-primary-600 mb-1">{tier.price}</div>
                <div className="text-sm text-gray-500">{tier.period}</div>
                <p className="text-gray-600 mt-2">{tier.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="h-4 w-4 text-primary-600 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Best for:</strong> {tier.bestFor}
                </p>
                <Link 
                  href="/contact" 
                  className={`w-full block py-3 px-6 rounded-lg font-medium transition-colors ${
                    tier.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Additional Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                <div className="text-xl font-bold text-primary-600 mb-1">{service.price}</div>
                <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                <div className="text-xs text-gray-500">{service.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Notes */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Pricing Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Initial consultation and project scoping</li>
                <li>• Customized methodology and approach</li>
                <li>• Expert team assignment</li>
                <li>• Regular progress updates</li>
                <li>• Quality assurance and peer review</li>
                <li>• Final deliverables and presentation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Additional Considerations:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Travel costs for field work (if required)</li>
                <li>• Translation services (if needed)</li>
                <li>• Specialized software licenses</li>
                <li>• Rush delivery fees (+50%)</li>
                <li>• Extended support beyond project scope</li>
                <li>• Custom tool development</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              All pricing is customized based on project scope, timeline, and requirements. 
              Contact us for a detailed proposal tailored to your needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

