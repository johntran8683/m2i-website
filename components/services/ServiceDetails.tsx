import { 
  ChartBarIcon, 
  MagnifyingGlassIcon, 
  CpuChipIcon, 
  AcademicCapIcon,
  CheckCircleIcon,
  ClockIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const serviceDetails = [
  {
    id: 'monitoring-evaluation',
    name: 'M&E Excellence',
    icon: ChartBarIcon,
    description: 'Comprehensive monitoring and evaluation frameworks that drive evidence-based decision making.',
    approach: 'We design robust M&E systems that align with international best practices and donor requirements.',
    deliverables: [
      'Theory of Change and Logic Models',
      'Results Framework and Indicators',
      'Data Collection Tools and Protocols',
      'Monitoring Dashboards',
      'Evaluation Reports',
      'Recommendations for Program Improvement'
    ],
    timeline: '4-12 weeks',
    team: '2-4 specialists',
    methodology: [
      'Stakeholder consultation and needs assessment',
      'Framework design and validation',
      'Tool development and testing',
      'Data collection and analysis',
      'Report writing and presentation',
      'Capacity building and handover'
    ]
  },
  {
    id: 'research-advisory',
    name: 'Research & Advisory',
    icon: MagnifyingGlassIcon,
    description: 'Evidence-based research and strategic advisory services for informed development decisions.',
    approach: 'We conduct rigorous research using mixed-methods approaches to provide actionable insights.',
    deliverables: [
      'Research Proposals and Protocols',
      'Data Collection Instruments',
      'Statistical Analysis Reports',
      'Policy Briefs and Recommendations',
      'Gender Assessment Reports',
      'SDG Progress Reports'
    ],
    timeline: '6-16 weeks',
    team: '3-5 specialists',
    methodology: [
      'Literature review and gap analysis',
      'Research design and methodology',
      'Data collection and validation',
      'Statistical and qualitative analysis',
      'Report writing and peer review',
      'Dissemination and advocacy'
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    icon: CpuChipIcon,
    description: 'Advanced data collection, analysis, and visualization for actionable insights.',
    approach: 'We leverage cutting-edge tools and methodologies to transform data into strategic insights.',
    deliverables: [
      'Survey Design and Sampling Plans',
      'Data Collection Management',
      'Statistical Analysis Reports',
      'Interactive Dashboards',
      'Data Visualization Tools',
      'Quality Assurance Reports'
    ],
    timeline: '3-10 weeks',
    team: '2-3 specialists',
    methodology: [
      'Survey design and pilot testing',
      'Sample selection and recruitment',
      'Data collection and quality control',
      'Statistical analysis and modeling',
      'Visualization and dashboard creation',
      'Results interpretation and reporting'
    ]
  },
  {
    id: 'capacity-building',
    name: 'Capacity Building',
    icon: AcademicCapIcon,
    description: 'Training and institutional strengthening for sustainable M&E capabilities.',
    approach: 'We build lasting capacity through hands-on training and institutional support.',
    deliverables: [
      'Training Curricula and Materials',
      'Workshop Facilitation',
      'Toolkits and Guidelines',
      'Mentoring and Coaching',
      'Institutional Assessment Reports',
      'Sustainability Plans'
    ],
    timeline: '2-8 weeks',
    team: '2-4 specialists',
    methodology: [
      'Capacity needs assessment',
      'Training design and customization',
      'Workshop delivery and facilitation',
      'Hands-on practice and mentoring',
      'Tool development and adaptation',
      'Follow-up support and evaluation'
    ]
  }
]

export default function ServiceDetails() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Service Details
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Detailed information about our approach, deliverables, and methodology for each service area
          </p>
        </div>

        <div className="space-y-16">
          {serviceDetails.map((service) => (
            <div key={service.id} id={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={
                    service.id === 'monitoring-evaluation' ? 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&auto=format&fit=crop&w=1600&h=900' :
                    service.id === 'research-advisory' ? 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&auto=format&fit=crop&w=1600&h=900' :
                    service.id === 'data-analytics' ? 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&auto=format&fit=crop&w=1600&h=900' :
                    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&auto=format&fit=crop&w=1600&h=900'
                  }
                  alt={`${service.name} header`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute left-6 -bottom-6 h-12 w-12 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
              </div>
              <div className="p-8 pt-10">
                <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
              
              <p className="text-gray-600 mb-6 text-lg">
                {service.description}
              </p>
              
              <p className="text-gray-700 mb-8">
                {service.approach}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2 text-primary-600" />
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-primary-400 rounded-full mr-3"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <ClockIcon className="h-5 w-5 mr-2 text-primary-600" />
                    Project Timeline
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Duration:</strong> {service.timeline}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Team Size:</strong> {service.team}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <UsersIcon className="h-5 w-5 mr-2 text-primary-600" />
                    Our Methodology
                  </h4>
                  <ul className="space-y-2">
                    {service.methodology.map((step, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-secondary-400 rounded-full mr-3"></div>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

