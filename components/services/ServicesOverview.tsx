import Link from 'next/link'
import Image from 'next/image'
import { 
  ChartBarIcon, 
  MagnifyingGlassIcon, 
  CpuChipIcon, 
  AcademicCapIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'M&E Excellence',
    description: 'Comprehensive monitoring and evaluation frameworks that drive evidence-based decision making.',
    icon: ChartBarIcon,
    href: '#monitoring-evaluation',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&auto=format&fit=crop&w=1400&h=900',
    features: [
      'Theory of Change Development',
      'Log-frame & Results Framework Design',
      'Baseline/Midline/Endline Evaluations',
      'Real-time Monitoring Systems',
      'Impact Assessment & Attribution',
      'Donor Reporting & Compliance'
    ],
    outcomes: [
      'Clear project logic and measurable outcomes',
      'Robust data collection systems',
      'Evidence-based program improvements',
      'Enhanced donor confidence and funding'
    ]
  },
  {
    name: 'Research & Advisory',
    description: 'Evidence-based research and strategic advisory services for informed development decisions.',
    icon: MagnifyingGlassIcon,
    href: '#research-advisory',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&auto=format&fit=crop&w=1400&h=900',
    features: [
      'Gender Equality Assessments',
      'SDG Indicator Tracking & Reporting',
      'Policy Analysis & Recommendations',
      'Market Research & Feasibility Studies',
      'Sector-specific Research',
      'Knowledge Management Systems'
    ],
    outcomes: [
      'Data-driven policy recommendations',
      'Gender-sensitive program design',
      'SDG alignment and reporting',
      'Strategic decision support'
    ]
  },
  {
    name: 'Data & Analytics',
    description: 'Advanced data collection, analysis, and visualization for actionable insights.',
    icon: CpuChipIcon,
    href: '#data-analytics',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&auto=format&fit=crop&w=1400&h=900',
    features: [
      'Survey Design & Management (700-30,000 samples)',
      'Statistical Analysis (STATA, SPSS, Power BI, Tableau)',
      'Data Visualization & Dashboards',
      'Gender-disaggregated Data Analysis',
      'Big Data & Predictive Analytics',
      'Quality Assurance & Validation'
    ],
    outcomes: [
      'High-quality data collection',
      'Advanced statistical insights',
      'Interactive data visualizations',
      'Gender-disaggregated findings'
    ]
  },
  {
    name: 'Capacity Building',
    description: 'Training and institutional strengthening for sustainable M&E capabilities.',
    icon: AcademicCapIcon,
    href: '#capacity-building',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&auto=format&fit=crop&w=1400&h=900',
    features: [
      'M&E Training Workshops',
      'Data Collection & Analysis Training',
      'Gender Sensitivity Training',
      'Result-based Management',
      'Proposal Writing & Grant Development',
      'Institutional Strengthening'
    ],
    outcomes: [
      'Enhanced organizational capabilities',
      'Sustainable M&E systems',
      'Gender-sensitive approaches',
      'Improved proposal success rates'
    ]
  }
]

export default function ServicesOverview() {
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for development organizations seeking evidence-based impact. 
            From World Bank expertise to your development success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-44 w-full">
                <Image
                  src={service.image}
                  alt={`${service.name} illustration`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute left-6 -bottom-6 h-12 w-12 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
              </div>
              <div className="p-8 pt-10">
                <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
              
                <p className="text-gray-600 mb-6 text-lg">
                  {service.description}
                </p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">What We Deliver:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 bg-primary-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Expected Outcomes:</h3>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 bg-secondary-400 rounded-full mr-3"></div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              
                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-500 font-medium"
                >
                  Learn more about {service.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us for a free consultation to discuss your M&E needs and how we can help 
              your organization achieve greater impact.
            </p>
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

