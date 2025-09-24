import { BriefcaseIcon, GlobeAmericasIcon, ChartBarIcon, ClipboardDocumentListIcon, BookOpenIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function ImpactNumbers() {
  const stats = [
    {
      number: '50+',
      label: 'Projects Completed',
      description: 'Across multiple sectors and regions',
      icon: BriefcaseIcon
    },
    {
      number: '15+',
      label: 'Countries',
      description: 'Asia-Pacific, Latin America, Africa',
      icon: GlobeAmericasIcon
    },
    {
      number: '$10M+',
      label: 'Programs Evaluated',
      description: 'Development investments assessed',
      icon: ChartBarIcon
    },
    {
      number: '20+',
      label: 'Large-scale Surveys',
      description: '700 to 30,000 sample sizes',
      icon: ClipboardDocumentListIcon
    },
    {
      number: '4',
      label: 'Flagship Publications',
      description: 'IFC/World Bank reports',
      icon: BookOpenIcon
    },
    {
      number: '8+',
      label: 'Awards Received',
      description: 'Professional recognition',
      icon: TrophyIcon
    }
  ]

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Global Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Proven results across international development projects
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 mb-3">
                <stat.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
