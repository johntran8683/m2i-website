import { 
  CheckCircleIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  TrophyIcon,
  UsersIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

const advantages = [
  {
    icon: GlobeAltIcon,
    title: 'Global Expertise',
    description: 'Experience across 15+ countries in Asia-Pacific, Latin America, and Africa',
    details: ['Local knowledge', 'Cultural sensitivity', 'Regional networks', 'Language capabilities']
  },
  {
    icon: AcademicCapIcon,
    title: 'World Bank Credentials',
    description: 'Founder with 8+ years at IFC - World Bank Group, Gender & Economic Inclusion',
    details: ['IFC Corporate Performance Award', 'World Bank Training Award', 'Flagship publications', 'Peer recognition']
  },
  {
    icon: TrophyIcon,
    title: 'Proven Track Record',
    description: 'Successfully managed 50+ projects and secured $2M+ in donor funding',
    details: ['$10M+ programs evaluated', '20+ large-scale surveys', '4 flagship publications', '8+ professional awards']
  },
  {
    icon: UsersIcon,
    title: 'Expert Team',
    description: 'Multidisciplinary team with deep expertise in M&E, gender equality, and development',
    details: ['Gender specialists', 'Data analysts', 'Regional experts', 'Sector specialists']
  },
  {
    icon: DocumentTextIcon,
    title: 'Rigorous Methodology',
    description: 'Evidence-based approaches with peer-reviewed methodologies and quality assurance',
    details: ['Theory of Change', 'Mixed-methods research', 'Statistical rigor', 'Quality standards']
  },
  {
    icon: CheckCircleIcon,
    title: 'Sustainable Impact',
    description: 'Focus on capacity building and knowledge transfer for lasting organizational change',
    details: ['Training programs', 'Tool development', 'Institutional strengthening', 'Local ownership']
  }
]

export default function WhyChooseUs() {
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Metrics2Impact?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From World Bank expertise to your development impact—here's what sets us apart
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div key={index} className="group relative bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors mb-4">
                <advantage.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {advantage.description}
              </p>
              
              <ul className="space-y-1">
                {advantage.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                    <div className="h-1 w-1 bg-primary-400 rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Development Impact?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Partner with our expert team to design comprehensive M&E frameworks, 
            conduct rigorous evaluations, and build sustainable capacity for lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Schedule Consultation
            </a>
            <a href="/services" className="btn-secondary">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

