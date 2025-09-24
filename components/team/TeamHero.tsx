import { 
  AcademicCapIcon,
  GlobeAltIcon,
  TrophyIcon,
  UsersIcon
} from '@heroicons/react/24/outline'

const teamStats = [
  {
    icon: UsersIcon,
    number: '15+',
    label: 'Expert Consultants',
    description: 'Multidisciplinary team across regions'
  },
  {
    icon: AcademicCapIcon,
    number: '8+',
    label: 'Years Average Experience',
    description: 'Senior-level expertise'
  },
  {
    icon: GlobeAltIcon,
    number: '15+',
    label: 'Countries Covered',
    description: 'Global reach and local knowledge'
  },
  {
    icon: TrophyIcon,
    number: '20+',
    label: 'Professional Awards',
    description: 'Recognition and excellence'
  }
]

export default function TeamHero() {
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Expert Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            World-class professionals with deep expertise in monitoring, evaluation, gender equality, 
            and international development. From World Bank experience to your project success.
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Team Overview */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Our Team Stands Out
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  <strong>World Bank Credentials:</strong> Principal consultant with 8+ years at IFC
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  <strong>Global Experience:</strong> Projects across Asia-Pacific, Latin America, Africa
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  <strong>Gender Expertise:</strong> Specialized knowledge in gender equality and inclusion
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                  <strong>Multilingual:</strong> English, Vietnamese, Spanish, French capabilities
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Expertise Areas
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">M&E Specialists</h3>
                  <p className="text-sm text-gray-600">Framework design, impact evaluation, monitoring systems</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Gender Experts</h3>
                  <p className="text-sm text-gray-600">Gender assessments, women's empowerment, workplace equality</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Data Analysts</h3>
                  <p className="text-sm text-gray-600">Statistical analysis, survey design, data visualization</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Regional Experts</h3>
                  <p className="text-sm text-gray-600">Local knowledge, cultural sensitivity, regional networks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

