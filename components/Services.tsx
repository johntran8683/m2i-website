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
    description: 'Comprehensive monitoring and evaluation frameworks, impact assessments, and real-time monitoring systems.',
    icon: ChartBarIcon,
    href: '/services/monitoring-evaluation',
    features: ['Theory of Change Development', 'Log-frame Design', 'Impact Evaluations', 'Real-time Monitoring'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&auto=format&fit=crop&w=1200&h=800'
  },
  {
    name: 'Research & Advisory',
    description: 'Gender equality assessments, policy analysis, SDG tracking, and evidence-based recommendations.',
    icon: MagnifyingGlassIcon,
    href: '/services/research-advisory',
    features: ['Gender Assessments', 'Policy Analysis', 'SDG Tracking', 'Market Research'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&auto=format&fit=crop&w=1200&h=800'
  },
  {
    name: 'Data & Analytics',
    description: 'Survey design, statistical analysis, data visualization, and gender-disaggregated data analysis.',
    icon: CpuChipIcon,
    href: '/services/data-analytics',
    features: ['Survey Design', 'Statistical Analysis', 'Data Visualization', 'Big Data Analytics'],
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&auto=format&fit=crop&w=1200&h=800'
  },
  {
    name: 'Capacity Building',
    description: 'Training workshops, skill development, gender sensitivity training, and institutional strengthening.',
    icon: AcademicCapIcon,
    href: '/services/capacity-building',
    features: ['M&E Training', 'Data Analysis Training', 'Gender Sensitivity', 'Proposal Writing'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&auto=format&fit=crop&w=1200&h=800'
  }
]

export default function Services() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for development organizations seeking evidence-based impact
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.name} className="group card overflow-hidden">
              <div className="relative h-40 w-full">
                <Image
                  src={service.image}
                  alt={`${service.name} illustration`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute left-4 -bottom-6 h-12 w-12 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:translate-y-[-2px] transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              
                <div className="mb-6">
                  <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-1.5 w-1.5 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                  </ul>
                </div>

                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Learn more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </div>
  )
}
