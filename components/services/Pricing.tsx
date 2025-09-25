import Link from 'next/link'

export default function Pricing() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for a customized proposal tailored to your organization's specific needs and budget.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
          >
            Get Custom Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

