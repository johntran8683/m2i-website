import { 
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CogIcon,
  ChartBarIcon,
  PresentationChartBarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const processSteps = [
  {
    step: 1,
    title: 'Consultation',
    description: 'Understanding your needs and objectives',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-blue-500'
  },
  {
    step: 2,
    title: 'Design',
    description: 'Customized approach and methodology',
    icon: DocumentTextIcon,
    color: 'bg-green-500'
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'Expert execution with quality standards',
    icon: CogIcon,
    color: 'bg-purple-500'
  },
  {
    step: 4,
    title: 'Analysis',
    description: 'Thorough analysis and reporting',
    icon: ChartBarIcon,
    color: 'bg-orange-500'
  },
  {
    step: 5,
    title: 'Presentation',
    description: 'Findings and knowledge transfer',
    icon: PresentationChartBarIcon,
    color: 'bg-red-500'
  },
  {
    step: 6,
    title: 'Support',
    description: 'Ongoing partnership and follow-up',
    icon: CheckCircleIcon,
    color: 'bg-teal-500'
  }
]

export default function Process() {
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach that ensures quality, transparency, and sustainable impact
          </p>
        </div>

        {/* Timeline Process */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center mb-4">
                  <div className={`relative z-10 flex items-center justify-center h-12 w-12 rounded-full ${step.color} shadow-lg`}>
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-2 text-xs font-bold text-gray-500">STEP {step.step}</div>
                </div>
                
                {/* Step Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Our Process Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
              <div className="text-xs text-gray-500 mt-1">Based on project completion surveys</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">On-Time Delivery</div>
              <div className="text-xs text-gray-500 mt-1">Projects completed within timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Repeat Clients</div>
              <div className="text-xs text-gray-500 mt-1">Organizations that work with us again</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

