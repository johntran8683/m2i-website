'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes Metrics2Impact different from other M&E consultants?",
      answer: "Our team includes former World Bank specialists with deep expertise in international development. We've worked on 50+ projects across 15+ countries, delivering an average 25% improvement in program effectiveness. Our comprehensive approach combines rigorous methodology with practical implementation support."
    },
    {
      question: "How long does a typical M&E project take?",
      answer: "Project timelines vary based on scope and complexity. A comprehensive M&E framework typically takes 6-8 weeks, while impact evaluations range from 3-6 months. We provide detailed timelines during our free consultation and always deliver on time with 95% client satisfaction."
    },
    {
      question: "Do you work with organizations outside of the development sector?",
      answer: "Yes! While we specialize in international development, we also serve NGOs, government agencies, private foundations, and corporate social responsibility programs. Our methodologies are adaptable to various sectors and organizational needs."
    },
    {
      question: "What is included in your free consultation?",
      answer: "Our free consultation includes a 1-hour assessment of your current M&E needs, identification of key challenges, recommendations for improvement, and a customized project proposal. There's no obligation, and you'll receive actionable insights regardless of whether you choose to work with us."
    },
    {
      question: "Can you help with gender-sensitive M&E frameworks?",
      answer: "Absolutely! Gender equality is a core expertise area. We've developed gender-responsive evaluation frameworks for major organizations including IFC and UNICEF, helping them achieve 30% improvements in gender-focused program outcomes."
    },
    {
      question: "What if we need ongoing M&E support after the initial project?",
      answer: "We offer flexible retainer arrangements for ongoing support, including monthly monitoring reports, data analysis, capacity building, and tool maintenance. Many of our clients choose long-term partnerships to ensure sustainable M&E capabilities."
    },
    {
      question: "Do you provide training for our internal team?",
      answer: "Yes! Our capacity building services include customized training workshops, hands-on mentoring, and tool development. We've helped organizations reduce external consulting costs by 40% by building internal M&E capabilities."
    },
    {
      question: "What is your response time for new inquiries?",
      answer: "We respond to all inquiries within 24 hours and provide free consultations within 48 hours. For urgent projects, we offer expedited services with 2-4 week delivery times."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our M&E services, processes, and expertise
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-xl"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Our team is here to help. Get personalized answers during your free consultation.
              </p>
              <a 
                href="/contact" 
                className="btn-primary"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
