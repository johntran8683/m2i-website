import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Gender-Responsive Evaluation Framework',
    sector: 'Gender Equality',
    region: 'Southeast Asia',
    kpi: '20%↑ program effectiveness',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&auto=format&fit=crop&w=1600&h=1000',
  },
  {
    title: 'National Skills Development Program M&E',
    sector: 'Education & Skills',
    region: 'Latin America',
    kpi: '30k+ participants tracked',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&auto=format&fit=crop&w=1600&h=1000',
  },
  {
    title: 'Health Access Survey & Impact',
    sector: 'Health',
    region: 'Sub-Saharan Africa',
    kpi: '12 regions, 8 KPIs',
    image: 'https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&auto=format&fit=crop&w=1600&h=1000',
  },
]

export default function ProjectsPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl">Selected evaluations and research projects delivered across sectors and regions.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-56 w-full">
                <Image
                  src={p.image}
                  alt={`${p.title} - ${p.region}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="text-sm font-medium bg-black/40 backdrop-blur px-2 py-1 rounded">{p.sector}</div>
                  <div className="text-sm font-medium bg-white/20 backdrop-blur px-2 py-1 rounded">{p.region}</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{p.title}</h3>
                <div className="mt-2 text-sm text-gray-600">{p.kpi}</div>
                <div className="mt-4">
                  <Link href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">Read case study →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


