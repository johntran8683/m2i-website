import Link from 'next/link'
import { 
  AcademicCapIcon,
  GlobeAltIcon,
  LanguageIcon,
  TrophyIcon,
  EnvelopeIcon
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
    email: 'nhung@impactinsights.com',
    image: '/images/nhung-nguyen.jpg',
    region: 'Global'
  },
  {
    name: 'Dr. Sarah Johnson',
    title: 'Senior Gender Specialist',
    bio: 'Expert in gender equality assessments and women\'s economic empowerment with extensive experience in Asia-Pacific region.',
    expertise: ['Gender Assessments', 'Women\'s Empowerment', 'Workplace Equality', 'Policy Analysis'],
    experience: '6+ years',
    languages: ['English', 'Mandarin'],
    achievements: [
      'UN Women Gender Expert Certification',
      'Published 8 peer-reviewed articles',
      'Led 15+ gender assessments'
    ],
    education: 'PhD Gender Studies - University of Melbourne',
    linkedin: '#',
    email: 'sarah@impactinsights.com',
    image: '/images/sarah-johnson.jpg',
    region: 'Asia-Pacific'
  },
  {
    name: 'Michael Rodriguez',
    title: 'Senior Data Analyst',
    bio: 'Statistical analysis expert with specialization in large-scale surveys and data visualization for development programs.',
    expertise: ['Statistical Analysis', 'Survey Design', 'Data Visualization', 'STATA/SPSS'],
    experience: '7+ years',
    languages: ['English', 'Spanish', 'Portuguese'],
    achievements: [
      'Led 20+ large-scale surveys',
      'Advanced STATA certification',
      'Data visualization specialist'
    ],
    education: 'MS Statistics - Universidad de Buenos Aires',
    linkedin: '#',
    email: 'michael@impactinsights.com',
    image: '/images/michael-rodriguez.jpg',
    region: 'Latin America'
  },
  {
    name: 'Dr. Amina Hassan',
    title: 'Senior Economist',
    bio: 'Development economist with expertise in impact evaluation and cost-benefit analysis for African development programs.',
    expertise: ['Impact Evaluation', 'Cost-Benefit Analysis', 'Policy Research', 'Economic Modeling'],
    experience: '5+ years',
    languages: ['English', 'French', 'Arabic'],
    achievements: [
      'World Bank Economic Impact Award',
      'Published 12 research papers',
      'Led 10+ impact evaluations'
    ],
    education: 'PhD Economics - London School of Economics',
    linkedin: '#',
    email: 'amina@impactinsights.com',
    image: '/images/amina-hassan.jpg',
    region: 'Africa'
  }
]

export default function TeamMembers() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Core Team Members
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our senior consultants who bring world-class expertise to every project
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo</span>
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{member.title}</p>
                    <div className="flex items-center justify-center lg:justify-start text-sm text-gray-500 mb-2">
                      <GlobeAltIcon className="h-4 w-4 mr-1" />
                      {member.region}
                    </div>
                    <div className="text-sm text-gray-500">{member.experience}</div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                        <AcademicCapIcon className="h-4 w-4 mr-2 text-primary-600" />
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                        <LanguageIcon className="h-4 w-4 mr-2 text-primary-600" />
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.languages.map((language, langIndex) => (
                          <span key={langIndex} className="text-xs bg-secondary-100 text-secondary-800 px-2 py-1 rounded">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                      <TrophyIcon className="h-4 w-4 mr-2 text-primary-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <li key={achIndex} className="text-xs text-gray-600 flex items-center">
                          <div className="h-1 w-1 bg-primary-400 rounded-full mr-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <strong>Education:</strong> {member.education}
                    </div>
                    <div className="flex space-x-2">
                      <Link 
                        href={`mailto:${member.email}`}
                        className="text-primary-600 hover:text-primary-500"
                      >
                        <EnvelopeIcon className="h-4 w-4" />
                      </Link>
                      <Link 
                        href={member.linkedin}
                        className="text-primary-600 hover:text-primary-500"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

