import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding SQLite database...')

  // Clear existing data
  await prisma.contact.deleteMany()
  await prisma.client.deleteMany()
  await prisma.publication.deleteMany()
  await prisma.project.deleteMany()
  await prisma.teamMember.deleteMany()

  // Create Team Members
  const teamMembers = await Promise.all([
    prisma.teamMember.create({
      data: {
        name: 'Nhung Nguyen',
        title: 'Founder & Principal Consultant',
        bio: '8+ years of M&E experience at IFC - World Bank Group, specializing in gender equality and economic inclusion. Led evaluations across Asia-Pacific, Latin America, and fragile states.',
        expertise: JSON.stringify(['Gender Equality', 'Impact Evaluation', 'Survey Design', 'Capacity Building']),
        experience: 8,
        languages: JSON.stringify(['English', 'Vietnamese', 'Spanish']),
        linkedin: 'https://linkedin.com/in/nhung-nguyen',
        email: 'nhung@impactinsights.com',
        image: '/images/nhung-nguyen.jpg',
        isActive: true
      }
    }),
    prisma.teamMember.create({
      data: {
        name: 'Dr. Sarah Johnson',
        title: 'Senior Gender Specialist',
        bio: 'Expert in gender equality assessments and women\'s economic empowerment with extensive experience in Asia-Pacific region.',
        expertise: JSON.stringify(['Gender Assessments', 'Women\'s Empowerment', 'Workplace Equality', 'Policy Analysis']),
        experience: 6,
        languages: JSON.stringify(['English', 'Mandarin']),
        linkedin: 'https://linkedin.com/in/sarah-johnson',
        email: 'sarah@impactinsights.com',
        image: '/images/sarah-johnson.jpg',
        isActive: true
      }
    }),
    prisma.teamMember.create({
      data: {
        name: 'Michael Rodriguez',
        title: 'Senior Data Analyst',
        bio: 'Statistical analysis expert with specialization in large-scale surveys and data visualization for development programs.',
        expertise: JSON.stringify(['Statistical Analysis', 'Survey Design', 'Data Visualization', 'STATA/SPSS']),
        experience: 7,
        languages: JSON.stringify(['English', 'Spanish', 'Portuguese']),
        linkedin: 'https://linkedin.com/in/michael-rodriguez',
        email: 'michael@impactinsights.com',
        image: '/images/michael-rodriguez.jpg',
        isActive: true
      }
    }),
    prisma.teamMember.create({
      data: {
        name: 'Dr. Amina Hassan',
        title: 'Senior Economist',
        bio: 'Development economist with expertise in impact evaluation and cost-benefit analysis for African development programs.',
        expertise: JSON.stringify(['Impact Evaluation', 'Cost-Benefit Analysis', 'Policy Research', 'Economic Modeling']),
        experience: 5,
        languages: JSON.stringify(['English', 'French', 'Arabic']),
        linkedin: 'https://linkedin.com/in/amina-hassan',
        email: 'amina@impactinsights.com',
        image: '/images/amina-hassan.jpg',
        isActive: true
      }
    })
  ])

  // Create Clients
  const clients = await Promise.all([
    prisma.client.create({
      data: {
        name: 'IFC - World Bank Group',
        logo: '/logos/ifc-logo.png',
        website: 'https://www.ifc.org',
        description: 'International Finance Corporation, member of the World Bank Group',
        sector: 'Development Finance',
        region: 'Global',
        isActive: true
      }
    }),
    prisma.client.create({
      data: {
        name: 'UNICEF',
        logo: '/logos/unicef-logo.png',
        website: 'https://www.unicef.org',
        description: 'United Nations Children\'s Fund',
        sector: 'Child Development',
        region: 'Global',
        isActive: true
      }
    }),
    prisma.client.create({
      data: {
        name: 'World Bank',
        logo: '/logos/world-bank-logo.png',
        website: 'https://www.worldbank.org',
        description: 'International financial institution',
        sector: 'Development Finance',
        region: 'Global',
        isActive: true
      }
    }),
    prisma.client.create({
      data: {
        name: 'GIZ',
        logo: '/logos/giz-logo.png',
        website: 'https://www.giz.de',
        description: 'German development agency',
        sector: 'International Development',
        region: 'Global',
        isActive: true
      }
    }),
    prisma.client.create({
      data: {
        name: 'NIRAS',
        logo: '/logos/niras-logo.png',
        website: 'https://www.niras.com',
        description: 'International development consulting firm',
        sector: 'Development Consulting',
        region: 'Global',
        isActive: true
      }
    })
  ])

  // Create Projects
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: 'Gender Equality in Workplace Childcare',
        client: 'IFC - World Bank Group',
        description: 'Comprehensive evaluation of workplace childcare programs and their impact on gender equality in the workplace.',
        challenge: 'Limited data on the effectiveness of workplace childcare programs in promoting gender equality and women\'s economic participation.',
        solution: 'Designed and implemented a comprehensive evaluation framework including baseline surveys, impact assessment, and capacity building for 50+ companies across 15 countries.',
        results: 'Report cited by 50+ companies globally, improved workplace practices in 15 countries, $2M+ in new gender-focused investments, 4 flagship publications co-authored.',
        category: 'Gender Equality',
        region: 'Global',
        duration: '18 months',
        budget: '$500,000',
        image: '/images/projects/workplace-childcare.jpg',
        isPublished: true
      }
    }),
    prisma.project.create({
      data: {
        title: 'Parenting Program Impact Evaluation',
        client: 'UNICEF',
        description: 'Mid-term impact evaluation of UNICEF\'s parenting program across multiple countries.',
        challenge: 'Need to assess the effectiveness of parenting interventions and identify best practices for scaling successful programs.',
        solution: 'Conducted mixed-methods evaluation including household surveys, focus group discussions, and statistical analysis to measure program impact.',
        results: 'Identified key success factors, provided recommendations for program improvement, influenced policy decisions in 3 countries.',
        category: 'Impact Evaluation',
        region: 'Asia-Pacific',
        duration: '12 months',
        budget: '$200,000',
        image: '/images/projects/parenting-program.jpg',
        isPublished: true
      }
    }),
    prisma.project.create({
      data: {
        title: 'SDG Monitoring Framework Development',
        client: 'Government of Vietnam',
        description: 'Development of comprehensive SDG monitoring framework for national implementation.',
        challenge: 'Lack of systematic approach to track progress towards Sustainable Development Goals at national level.',
        solution: 'Designed integrated monitoring system with indicators, data collection protocols, and reporting mechanisms aligned with global SDG framework.',
        results: 'Framework adopted by government, improved data quality, enhanced reporting to UN, influenced policy decisions.',
        category: 'SDG Monitoring',
        region: 'Asia-Pacific',
        duration: '8 months',
        budget: '$150,000',
        image: '/images/projects/sdg-monitoring.jpg',
        isPublished: true
      }
    }),
    prisma.project.create({
      data: {
        title: 'Women\'s Economic Empowerment Assessment',
        client: 'GIZ',
        description: 'Comprehensive assessment of women\'s economic empowerment programs in Latin America.',
        challenge: 'Limited understanding of factors that contribute to successful women\'s economic empowerment interventions.',
        solution: 'Conducted gender-disaggregated analysis, stakeholder consultations, and impact assessment across 5 countries.',
        results: 'Identified best practices, provided policy recommendations, influenced program design for future interventions.',
        category: 'Gender Assessment',
        region: 'Latin America',
        duration: '10 months',
        budget: '$300,000',
        image: '/images/projects/women-empowerment.jpg',
        isPublished: true
      }
    }),
    prisma.project.create({
      data: {
        title: 'Large-Scale Survey Management',
        client: 'NIRAS',
        description: 'Management of large-scale household survey across multiple countries for development program evaluation.',
        challenge: 'Need for high-quality data collection across diverse contexts with varying levels of infrastructure and capacity.',
        solution: 'Designed and managed survey covering 30,000 households across 8 countries using standardized protocols and quality assurance measures.',
        results: 'High-quality dataset, improved survey methodologies, capacity building for local partners, informed program decisions.',
        category: 'Survey Management',
        region: 'Africa',
        duration: '15 months',
        budget: '$800,000',
        image: '/images/projects/survey-management.jpg',
        isPublished: true
      }
    })
  ])

  // Create Publications
  const publications = await Promise.all([
    prisma.publication.create({
      data: {
        title: 'Gender Equality in the Workplace: The Role of Childcare',
        type: 'report',
        description: 'Flagship report examining the impact of workplace childcare on gender equality and women\'s economic participation.',
        url: 'https://www.ifc.org/gender-childcare-report',
        pdfUrl: '/publications/gender-childcare-report.pdf',
        authors: JSON.stringify(['Nhung Nguyen', 'Dr. Sarah Johnson']),
        publishedAt: new Date('2023-06-15'),
        isPublished: true
      }
    }),
    prisma.publication.create({
      data: {
        title: 'SME Financing in Vietnam: A Gender Perspective',
        type: 'article',
        description: 'Peer-reviewed journal article analyzing gender disparities in SME financing and recommendations for improvement.',
        url: 'https://doi.org/10.1016/j.worlddev.2023.106123',
        pdfUrl: '/publications/sme-financing-vietnam.pdf',
        authors: JSON.stringify(['Nhung Nguyen']),
        publishedAt: new Date('2023-03-20'),
        isPublished: true
      }
    }),
    prisma.publication.create({
      data: {
        title: 'Best Practices in Development Program Evaluation',
        type: 'whitepaper',
        description: 'Comprehensive guide to best practices in monitoring and evaluation for development programs.',
        url: '/publications/best-practices-evaluation',
        pdfUrl: '/publications/best-practices-evaluation.pdf',
        authors: JSON.stringify(['Nhung Nguyen', 'Michael Rodriguez', 'Dr. Amina Hassan']),
        publishedAt: new Date('2023-09-10'),
        isPublished: true
      }
    }),
    prisma.publication.create({
      data: {
        title: 'SDG Progress Tracking: Methodological Approaches',
        type: 'report',
        description: 'Technical report on methodological approaches for tracking progress towards Sustainable Development Goals.',
        url: '/publications/sdg-tracking-methods',
        pdfUrl: '/publications/sdg-tracking-methods.pdf',
        authors: JSON.stringify(['Dr. Amina Hassan', 'Nhung Nguyen']),
        publishedAt: new Date('2023-11-05'),
        isPublished: true
      }
    }),
    prisma.publication.create({
      data: {
        title: 'Gender Mainstreaming in Development Projects',
        type: 'blog',
        description: 'Blog post discussing practical approaches to gender mainstreaming in development projects.',
        url: '/blog/gender-mainstreaming-development',
        authors: JSON.stringify(['Dr. Sarah Johnson']),
        publishedAt: new Date('2023-12-01'),
        isPublished: true
      }
    })
  ])

  // Create Sample Contacts
  const contacts = await Promise.all([
    prisma.contact.create({
      data: {
        name: 'John Smith',
        email: 'john.smith@example.org',
        organization: 'Example Development Organization',
        service: 'M&E Framework Design',
        message: 'We are looking for assistance with developing a comprehensive M&E framework for our new education program in Africa.',
        phone: '+1-555-0123',
        isRead: true
      }
    }),
    prisma.contact.create({
      data: {
        name: 'Maria Garcia',
        email: 'maria.garcia@ngo.org',
        organization: 'International NGO',
        service: 'Gender Assessment',
        message: 'Interested in conducting a gender equality assessment for our women\'s empowerment program in Latin America.',
        phone: '+52-555-0456',
        isRead: false
      }
    }),
    prisma.contact.create({
      data: {
        name: 'Ahmed Hassan',
        email: 'ahmed.hassan@government.gov',
        organization: 'Ministry of Development',
        service: 'Impact Evaluation',
        message: 'We need to conduct an impact evaluation of our poverty reduction program. Would like to discuss your services.',
        phone: '+20-555-0789',
        isRead: true
      }
    })
  ])

  console.log('✅ SQLite database seeded successfully!')
  console.log(`📊 Created:`)
  console.log(`   - ${teamMembers.length} team members`)
  console.log(`   - ${clients.length} clients`)
  console.log(`   - ${projects.length} projects`)
  console.log(`   - ${publications.length} publications`)
  console.log(`   - ${contacts.length} contacts`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding SQLite database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })



