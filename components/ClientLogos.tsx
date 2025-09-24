import Image from 'next/image'

export default function ClientLogos() {
  const clients = [
    { name: 'IFC - World Bank Group', domain: 'ifc.org' },
    { name: 'UNICEF', domain: 'unicef.org' },
    { name: 'World Bank', domain: 'worldbank.org' },
    { name: 'GIZ', domain: 'giz.de' },
    { name: 'NIRAS', domain: 'niras.com' },
    { name: 'Government Agencies', domain: 'usa.gov' },
  ]

  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Leading Organizations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We partner with international organizations, governments, and NGOs worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex flex-col items-center">
                <div className="relative h-10 w-28">
                  <Image
                    src={`https://logo.clearbit.com/${client.domain}?size=256`}
                    alt={`${client.name} logo`}
                    fill
                    sizes="112px"
                    className="object-contain transition-transform duration-200 hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-2 text-xs text-gray-500 text-center line-clamp-2 max-w-[10rem]">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            And many more organizations across{' '}
            <span className="font-semibold text-primary-600">15+ countries</span>
          </p>
        </div>
      </div>
    </div>
  )
}
