export default function CompanyStory() {
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About Metrics2Impact
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Where Insight Powers Missions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Story
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-600">
              <p>
                Founded by Nhung Nguyen, a seasoned M&E professional with 8+ years of experience at the World Bank Group, 
                Metrics2Impact was born from a vision to democratize world-class monitoring and evaluation expertise.
              </p>
              <p>
                Having led evaluations across Asia-Pacific, Latin America, and fragile states, our founder recognized the 
                critical need for rigorous, evidence-based approaches in international development. Too many organizations 
                struggle with inadequate M&E frameworks, leading to missed opportunities for learning and impact.
              </p>
              <p>
                Today, we partner with development organizations worldwide, bringing World Bank-level expertise to projects 
                that create lasting change in communities around the globe.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To empower development organizations with evidence-based solutions that create measurable, 
              inclusive impact through rigorous monitoring, evaluation, and capacity building.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              A world where every development intervention creates sustainable, measurable change that 
              advances gender equality and inclusive growth.
            </p>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">8+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">15+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">$10M+</div>
            <div className="text-sm text-gray-600">Programs Evaluated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">4</div>
            <div className="text-sm text-gray-600">Flagship Publications</div>
          </div>
        </div>
      </div>
    </div>
  )
}

