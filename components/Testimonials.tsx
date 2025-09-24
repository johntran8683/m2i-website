export default function Testimonials() {
  const testimonials = [
    {
      quote: "Metrics2Impact delivered exceptional M&E frameworks that transformed our gender equality programs. Their World Bank expertise brought credibility and rigor to our evaluation processes.",
      author: "Sarah Johnson",
      role: "Gender Program Manager",
      organization: "IFC - World Bank Group"
    },
    {
      quote: "The comprehensive impact evaluation they conducted for our parenting program provided invaluable insights. Their methodology was thorough and their recommendations actionable.",
      author: "Dr. Maria Rodriguez",
      role: "Program Director",
      organization: "UNICEF"
    },
    {
      quote: "Their capacity building workshops transformed our team's M&E capabilities. We now have the tools and knowledge to conduct rigorous evaluations independently.",
      author: "Ahmed Hassan",
      role: "M&E Coordinator",
      organization: "Regional Development Agency"
    }
  ]

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Testimonials from organizations we've helped achieve greater impact
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="mb-6">
                <svg className="h-8 w-8 text-primary-600" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t pt-6">
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary-600 font-medium">
                  {testimonial.organization}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
