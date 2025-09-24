"use client"
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const initialSlides = [
  // Futuristic group walking towards digital future with data streams
  '/images/hero-people-digital-path.png',
  // Business growth visualization with glowing charts and dashboards
  '/images/heo-business-analytics.png',
  // Global connectivity with world map and data visualizations
  '/images/hero-global-data-connectivity.png',
]

export default function Hero() {
  const [images, setImages] = useState<string[]>(initialSlides)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (images.length === 0) return
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000)
    return () => clearInterval(id)
  }, [images.length])

  const handleError = (failedIdx: number) => {
    setImages((prev) => {
      if (prev.length <= 1) return prev // keep at least one to avoid empty state
      const next = prev.filter((_, i) => i !== failedIdx)
      // adjust current index to stay in range
      setIndex((i) => (i >= next.length ? 0 : i))
      return next
    })
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {images.map((src, i) => (
          <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={src}
              alt="Technology-driven development and data analytics"
              priority={i === 0}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
              onError={() => handleError(i)}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-primary-900/40" />
          </div>
        ))}
      </div>
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Global Monitoring & Evaluation
                <br />
                <span className="text-primary-200">for Development Impact</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100 max-w-2xl">
                Evidence-led strategies, rigorous evaluations, and real-world insights for programs that change lives.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center"
                >
                  Schedule Consultation
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/services" 
                  className="text-white hover:text-primary-100 font-medium py-3 px-6 rounded-lg border border-white transition-colors duration-200"
                >
                  Explore Our Services
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-8 text-white/90">
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$10M+</div>
                  <div className="text-sm">Programs Evaluated</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  )
}
