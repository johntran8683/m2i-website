import Link from 'next/link'
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function FinalCTA() {
  return (
    <div className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Transform Your Development Impact?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Partner with our World Bank-trained M&E experts to design comprehensive frameworks, 
            conduct rigorous evaluations, and build sustainable capacity for lasting change.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="text-white hover:text-primary-100 font-medium py-4 px-8 rounded-lg border border-white/30 hover:border-white/50 transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-12">
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

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary-200" />
                <a href="tel:+1-555-0123" className="text-white hover:text-primary-100 transition-colors">
                  +1 (555) 012-3456
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-primary-200" />
                <a href="mailto:info@metrics2impact.com" className="text-white hover:text-primary-100 transition-colors">
                  info@metrics2impact.com
                </a>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-primary-100">
                Response within 24 hours • Free consultation available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
