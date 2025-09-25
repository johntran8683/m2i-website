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
    <div className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
            Detailed Service Information
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Deep Dive Into Our
            <br />
            <span className="text-primary-600">Expertise</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive methodology, deliverables, and timelines for each service area. 
            Understand exactly how we deliver world-class M&E solutions.
          </p>
        </div>

        <div className="space-y-20">
          {serviceDetails.map((service, index) => (
            <div key={service.id} id={service.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              {/* Header Section */}
              <div className="relative h-56 w-full overflow-hidden">
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
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute left-8 -bottom-8 h-16 w-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-gray-100">
                  <service.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                </div>
                <div className="absolute top-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm text-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Service {index + 1}
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{service.name}</h3>
                  <p className="text-white/90 text-lg max-w-md">{service.description}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.approach}
                  </p>
                </div>
              
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Deliverables */}
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-6 flex items-center text-lg">
                      <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                        <CheckCircleIcon className="h-5 w-5 text-white" />
                      </div>
                      Key Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <div className="h-2 w-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Timeline & Team */}
                  <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-6 flex items-center text-lg">
                      <div className="h-8 w-8 bg-secondary-600 rounded-lg flex items-center justify-center mr-3">
                        <ClockIcon className="h-5 w-5 text-white" />
                      </div>
                      Project Details
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white/70 p-4 rounded-xl">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Duration</div>
                        <div className="text-lg text-secondary-700 font-bold">{service.timeline}</div>
                      </div>
                      <div className="bg-white/70 p-4 rounded-xl">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Team Size</div>
                        <div className="text-lg text-secondary-700 font-bold">{service.team}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Methodology */}
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-6 flex items-center text-lg">
                      <div className="h-8 w-8 bg-accent-600 rounded-lg flex items-center justify-center mr-3">
                        <UsersIcon className="h-5 w-5 text-white" />
                      </div>
                      Our Methodology
                    </h4>
                    <ul className="space-y-3">
                      {service.methodology.map((step, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <div className="h-2 w-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
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

