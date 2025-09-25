import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/outline'

export default function ClientLogos() {
  const clients = [
    { 
      name: 'IFC - World Bank Group', 
      domain: 'ifc.org',
      description: 'Corporate Performance Award Winner',
      featured: true
    },
    { 
      name: 'UNICEF', 
      domain: 'unicef.org',
      description: 'Health Impact Assessment',
      featured: true
    },
    { 
      name: 'World Bank', 
      domain: 'worldbank.org',
      description: 'Former Specialist Team',
      featured: true
    },
    { 
      name: 'GIZ', 
      domain: 'giz.de',
      description: 'Development Cooperation',
      featured: false
    },
    { 
      name: 'NIRAS', 
      domain: 'niras.com',
      description: 'International Consulting',
      featured: false
    },
    { 
      name: 'Government Agencies', 
      domain: 'usa.gov',
      description: 'Policy Evaluation',
      featured: false
    },
  ]

  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <StarIcon className="w-4 h-4 mr-2" />
            Trusted Partners
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Trusted by Leading Organizations Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with international organizations, governments, and NGOs across 15+ countries. 
            Our World Bank-trained team delivers results that exceed expectations.
          </p>
        </div>

        {/* Featured Clients */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Featured Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.filter(client => client.featured).map((client) => (
              <div key={client.name} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
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
                  <h4 className="font-semibold text-gray-900 mb-2">{client.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{client.description}</p>
                  <div className="flex items-center text-primary-600 text-sm font-medium">
                    <StarIcon className="h-4 w-4 mr-1" />
                    Featured Partner
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Clients */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">All Partners</h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                <div className="flex flex-col items-center">
                  <div className="relative h-8 w-20 mb-2">
                    <Image
                      src={`https://logo.clearbit.com/${client.domain}?size=256`}
                      alt={`${client.name} logo`}
                      fill
                      sizes="80px"
                      className="object-contain transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-xs text-gray-500 text-center line-clamp-2 max-w-[8rem]">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Join Our Growing Network of Partners
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking to partner with organizations committed to evidence-based development. 
              Let's discuss how we can help you achieve greater impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-primary-600 text-white hover:bg-primary-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Become a Partner
              </a>
              <a 
                href="/projects" 
                className="text-primary-600 hover:text-primary-700 font-medium py-3 px-6 rounded-lg border border-primary-200 hover:border-primary-300 transition-colors duration-200"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
