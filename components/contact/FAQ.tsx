'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'How quickly can you start a new project?',
    answer: 'We can typically begin new projects within 1-2 weeks of contract signing. For urgent needs, we offer rush services with same-week start dates for an additional 50% fee.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope: M&E framework design (4-8 weeks), impact evaluations (8-16 weeks), capacity building programs (2-6 weeks), and comprehensive assessments (12-24 weeks).'
  },
  {
    question: 'Do you work with small organizations or only large donors?',
    answer: 'We work with organizations of all sizes, from small local NGOs to large international agencies. Our pricing is flexible and we offer scaled services to meet different budget requirements.'
  },
  {
    question: 'What makes your M&E approach different?',
    answer: 'Our approach combines World Bank-level rigor with practical implementation. We focus on gender equality, capacity building, and sustainable impact measurement that empowers organizations to succeed independently.'
  },
  {
    question: 'Do you provide training and capacity building?',
    answer: 'Yes, capacity building is a core part of our services. We offer customized training programs, workshops, toolkits, and ongoing mentoring to ensure organizations can maintain M&E systems independently.'
  },
  {
    question: 'What languages do you work in?',
    answer: 'Our team is multilingual, working in English, Vietnamese, Spanish, French, and Arabic. We also have regional consultants who speak local languages and understand cultural contexts.'
  },
  {
    question: 'How do you ensure quality in your work?',
    answer: 'We follow rigorous quality assurance processes including peer review, client feedback loops, and adherence to international standards. All deliverables undergo multiple review stages before finalization.'
  },
  {
    question: 'Can you help with proposal writing and grant applications?',
    answer: 'Absolutely. We have extensive experience writing winning proposals for major donors including World Bank, UN agencies, and bilateral organizations. Our success rate is over 85%.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing: consultation ($200-500/hour), project-based ($10K-100K), retainer ($5K-20K/month), and training ($2K-10K). All pricing is customized based on project scope and requirements.'
  },
  {
    question: 'Do you offer remote services or do you travel to project locations?',
    answer: 'We offer both remote and on-site services. For field work, we travel to project locations as needed. Our virtual office model allows us to serve clients globally while maintaining cost-effectiveness.'
  }
]

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Common questions about our services, process, and working with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-xl"
                >
                  <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
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
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="bg-primary-50 p-6 sm:p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Can't find the answer you're looking for? Our team is here to help. 
              Contact us for personalized assistance with your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="mailto:info@metrics2impact.com" className="btn-secondary">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



