import Link from 'next/link'
import { 
  AcademicCapIcon,
  GlobeAltIcon,
  LanguageIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

const teamMembers = [
  {
    name: 'Nhung Nguyen',
    title: 'Founder & Principal Consultant',
    bio: '8+ years of M&E experience at IFC - World Bank Group, specializing in gender equality and economic inclusion. Led evaluations across Asia-Pacific, Latin America, and fragile states.',
    expertise: ['Gender Equality', 'Impact Evaluation', 'Survey Design', 'Capacity Building'],
    experience: '8+ years',
    languages: ['English', 'Vietnamese', 'Spanish'],
    achievements: [
      'IFC Corporate Performance Award (2020)',
      'World Bank Training Best Paper Award (2016)',
      'NZ-ASEAN Full Scholarship (2012-2014)',
      'Co-authored 4 flagship IFC publications'
    ],
    education: 'MA Economics (First Class Honours) - Lincoln University, New Zealand',
    linkedin: '#',
    image: '/images/nhung-nguyen.jpg'
  }
]

const associateTeam = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Senior Gender Specialist',
    expertise: ['Gender Assessments', 'Women\'s Empowerment', 'Workplace Equality'],
    region: 'Asia-Pacific',
    experience: '6+ years'
  },
  {
    name: 'Michael Rodriguez',
    title: 'Senior Data Analyst',
    expertise: ['Statistical Analysis', 'Survey Design', 'Data Visualization'],
    region: 'Latin America',
    experience: '7+ years'
  },
  {
    name: 'Dr. Amina Hassan',
    title: 'Senior Economist',
    expertise: ['Impact Evaluation', 'Cost-Benefit Analysis', 'Policy Research'],
    region: 'Africa',
    experience: '5+ years'
  },
  {
    name: 'Lisa Chen',
    title: 'Capacity Building Specialist',
    expertise: ['Training Design', 'Institutional Strengthening', 'Knowledge Transfer'],
    region: 'Global',
    experience: '4+ years'
  }
]

export default function LeadershipTeam() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Leadership Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            World-class expertise from international development professionals
          </p>
        </div>

        {/* Principal Consultant */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Principal Consultant
          </h3>
          
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Photo</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-primary-600 font-medium">{member.title}</p>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <AcademicCapIcon className="h-5 w-5 mr-2 text-primary-600" />
                        Expertise
                      </h5>
                      <ul className="space-y-1">
                        {member.expertise.map((skill, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="h-1.5 w-1.5 bg-primary-400 rounded-full mr-2"></div>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <GlobeAltIcon className="h-5 w-5 mr-2 text-primary-600" />
                        Languages
                      </h5>
                      <ul className="space-y-1">
                        {member.languages.map((language, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <LanguageIcon className="h-4 w-4 mr-2 text-primary-600" />
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <TrophyIcon className="h-5 w-5 mr-2 text-primary-600" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="h-1.5 w-1.5 bg-primary-400 rounded-full mr-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-sm text-gray-500 mb-4">
                      <strong>Education:</strong> {member.education}
                    </p>
                    <Link 
                      href={member.linkedin}
                      className="text-primary-600 hover:text-primary-500 font-medium text-sm"
                    >
                      View LinkedIn Profile →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Associate Team */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Senior Associates
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {associateTeam.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-primary-600 font-medium text-sm mb-2">{member.title}</p>
                <p className="text-gray-500 text-xs mb-3">{member.region} • {member.experience}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Global Network
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented M&E professionals, gender specialists, 
            and development experts to join our growing team.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

