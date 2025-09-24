import { 
  BeakerIcon, 
  HeartIcon, 
  ChartBarIcon, 
  AcademicCapIcon 
} from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Evidence-Based',
    description: 'We believe in data-driven decisions and rigorous methodologies that stand up to peer review.',
    icon: BeakerIcon,
    details: [
      'Rigorous research methodologies',
      'Peer-reviewed approaches',
      'Transparent data collection',
      'Quality assurance standards'
    ]
  },
  {
    name: 'Gender Equality',
    description: 'Inclusive approaches are embedded in everything we do, from project design to impact measurement.',
    icon: HeartIcon,
    details: [
      'Gender-disaggregated analysis',
      'Inclusive workplace practices',
      'Women\'s economic empowerment',
      'Gender-sensitive methodologies'
    ]
  },
  {
    name: 'Sustainable Impact',
    description: 'We focus on long-term change that empowers organizations to succeed independently.',
    icon: ChartBarIcon,
    details: [
      'Capacity building focus',
      'Knowledge transfer',
      'Local ownership',
      'Sustainable solutions'
    ]
  },
  {
    name: 'Capacity Building',
    description: 'We don\'t just deliver results—we build the skills and systems for lasting success.',
    icon: AcademicCapIcon,
    details: [
      'Training and mentoring',
      'Tool development',
      'Institutional strengthening',
      'Knowledge sharing'
    ]
  }
]

export default function OurValues() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our work and define our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {values.map((value) => (
            <div key={value.name} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <value.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{value.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {value.description}
              </p>
              
              <ul className="space-y-2">
                {value.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <div className="h-1.5 w-1.5 bg-primary-400 rounded-full mr-3"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

