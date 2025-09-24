import { 
  GlobeAltIcon,
  AcademicCapIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

const associateNetwork = [
  {
    name: 'Lisa Chen',
    title: 'Capacity Building Specialist',
    region: 'Asia-Pacific',
    expertise: ['Training Design', 'Institutional Strengthening', 'Knowledge Transfer'],
    experience: '4+ years',
    background: 'Former UNICEF training coordinator'
  },
  {
    name: 'Ahmed Hassan',
    title: 'M&E Coordinator',
    region: 'Middle East & Africa',
    expertise: ['Program Monitoring', 'Data Collection', 'Reporting'],
    experience: '5+ years',
    background: 'Regional development agency experience'
  },
  {
    name: 'Maria Rodriguez',
    title: 'Gender Consultant',
    region: 'Latin America',
    expertise: ['Gender Assessments', 'Women\'s Empowerment', 'Policy Analysis'],
    experience: '3+ years',
    background: 'Government gender policy advisor'
  },
  {
    name: 'Dr. James Kim',
    title: 'Research Specialist',
    region: 'Asia-Pacific',
    expertise: ['Policy Research', 'Impact Studies', 'Academic Writing'],
    experience: '6+ years',
    background: 'University research center director'
  },
  {
    name: 'Fatima Al-Zahra',
    title: 'Data Analyst',
    region: 'Africa',
    expertise: ['Statistical Analysis', 'Survey Management', 'Data Visualization'],
    experience: '4+ years',
    background: 'International NGO data specialist'
  },
  {
    name: 'Carlos Mendez',
    title: 'Field Coordinator',
    region: 'Latin America',
    expertise: ['Field Research', 'Community Engagement', 'Local Partnerships'],
    experience: '5+ years',
    background: 'Community development practitioner'
  }
]

const networkStats = [
  {
    icon: GlobeAltIcon,
    number: '15+',
    label: 'Countries Covered',
    description: 'Global network of local experts'
  },
  {
    icon: AcademicCapIcon,
    number: '10+',
    label: 'Associate Consultants',
    description: 'Specialized expertise across sectors'
  },
  {
    icon: BriefcaseIcon,
    number: '5+',
    label: 'Years Average Experience',
    description: 'Senior-level local knowledge'
  }
]

export default function AssociateNetwork() {
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Associate Network
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our global network of specialized consultants brings local expertise and cultural sensitivity to every project
          </p>
        </div>

        {/* Network Statistics */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-16">
          {networkStats.map((stat, index) => (
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

        {/* Associate Profiles */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {associateNetwork.map((associate, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="text-center mb-4">
                <div className="aspect-square bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Photo</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{associate.name}</h3>
                <p className="text-primary-600 font-medium text-sm mb-2">{associate.title}</p>
                <div className="flex items-center justify-center text-xs text-gray-500 mb-2">
                  <GlobeAltIcon className="h-3 w-3 mr-1" />
                  {associate.region}
                </div>
                <div className="text-xs text-gray-500">{associate.experience}</div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                <div className="flex flex-wrap gap-1">
                  {associate.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-white text-gray-700 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-xs text-gray-600">
                <strong>Background:</strong> {associate.background}
              </div>
            </div>
          ))}
        </div>

        {/* Network Benefits */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Our Network Matters
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">Local Knowledge</div>
              <div className="text-sm text-gray-600">Deep understanding of local contexts and cultural nuances</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">Language Skills</div>
              <div className="text-sm text-gray-600">Native language capabilities for effective communication</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">Regional Networks</div>
              <div className="text-sm text-gray-600">Established relationships with local organizations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">Cost Effective</div>
              <div className="text-sm text-gray-600">Reduced travel costs and faster project delivery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

