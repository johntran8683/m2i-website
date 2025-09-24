import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function CTA() {
  return (
    <div className="section-padding bg-primary-600">
      <div className="container-max">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Development Impact?
          </h2>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Partner with our expert team to design comprehensive M&E frameworks, 
            conduct rigorous evaluations, and build sustainable capacity for lasting change.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center"
            >
              Schedule Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="text-white hover:text-primary-100 font-medium py-3 px-6 rounded-lg border border-white transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
              <div className="text-sm text-primary-100">Initial project assessment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Global Reach</div>
              <div className="text-sm text-primary-100">15+ countries experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Proven Results</div>
              <div className="text-sm text-primary-100">$10M+ programs evaluated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
