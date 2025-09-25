import Image from 'next/image'
import Link from 'next/link'
import { 
  BriefcaseIcon, 
  GlobeAmericasIcon, 
  ChartBarIcon, 
  ClipboardDocumentListIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function ResultsImpact() {
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
      number: '25%',
      label: 'Average Improvement',
      description: 'In program effectiveness',
      icon: ClipboardDocumentListIcon
    }
  ]

  const caseStudies = [
    {
      title: "Gender-Responsive M&E Framework",
      client: "IFC - World Bank Group",
      result: "30% increase in program effectiveness",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "National Skills Development Program",
      client: "Government of Colombia", 
      result: "$2.5M in cost savings achieved",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Health Access Survey & Impact",
      client: "UNICEF",
      result: "25% reduction in maternal mortality",
      image: "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&auto=format&fit=crop&w=400&h=300"
    }
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Proven Results Across Global Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our World Bank-trained team delivers measurable impact for development organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 mb-4">
                <stat.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
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

        {/* Case Studies Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Recent Success Stories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our M&E expertise has delivered measurable improvements for leading organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group">
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                  <Image
                    src={study.image}
                    alt={`${study.title} case study`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{study.client}</p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  {study.result}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Case Studies
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
