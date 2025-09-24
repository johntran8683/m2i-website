import Link from 'next/link'
import { 
  CheckCircleIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

const openPositions = [
  {
    title: 'Senior M&E Consultant',
    location: 'Remote (Global)',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead M&E framework design and impact evaluations for international development projects.'
  },
  {
    title: 'Gender Specialist',
    location: 'Asia-Pacific',
    type: 'Contract',
    experience: '3+ years',
    description: 'Conduct gender equality assessments and design inclusive development programs.'
  },
  {
    title: 'Data Analyst',
    location: 'Latin America',
    type: 'Part-time',
    experience: '4+ years',
    description: 'Manage large-scale surveys and statistical analysis for development programs.'
  }
]

const requirements = [
  {
    icon: AcademicCapIcon,
    title: 'Education & Experience',
    items: [
      'Master\'s degree in relevant field (Economics, Statistics, Development Studies)',
      '5+ years of M&E experience in international development',
      'Experience with major donors (World Bank, UN, bilateral agencies)',
      'Proven track record of successful project delivery'
    ]
  },
  {
    icon: GlobeAltIcon,
    title: 'Language & Regional Expertise',
    items: [
      'Fluent in English (required)',
      'Additional languages preferred (Spanish, French, Arabic, Mandarin)',
      'Regional expertise in Asia-Pacific, Latin America, or Africa',
      'Cultural sensitivity and local knowledge'
    ]
  },
  {
    icon: BriefcaseIcon,
    title: 'Technical Skills',
    items: [
      'Advanced proficiency in STATA, SPSS, or R',
      'Experience with data visualization tools (Tableau, Power BI)',
      'Survey design and management experience',
      'Gender analysis and mainstreaming expertise'
    ]
  }
]

const benefits = [
  'Competitive compensation based on experience',
  'Flexible remote work arrangements',
  'Professional development opportunities',
  'Access to global network of experts',
  'Work on high-impact development projects',
  'Collaborative and inclusive work environment'
]

export default function JoinTeam() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Our Global Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented M&E professionals, gender specialists, 
            and development experts to join our growing team.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Current Openings
          </h3>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="lg:flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h4>
                    <p className="text-gray-600 mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <GlobeAltIcon className="h-4 w-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <BriefcaseIcon className="h-4 w-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <AcademicCapIcon className="h-4 w-4 mr-1" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Link href="/contact" className="btn-primary">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What We're Looking For
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirements.map((requirement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-100">
                    <requirement.icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  </div>
                  <h4 className="ml-3 text-lg font-semibold text-gray-900">{requirement.title}</h4>
                </div>
                
                <ul className="space-y-2">
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What We Offer
          </h3>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See the Right Position?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always interested in connecting with talented professionals. 
            Send us your CV and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Send Your CV
            </Link>
            <Link href="/contact" className="btn-secondary">
              General Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

