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
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Transform Your Development Programs
                <br />
                <span className="text-primary-200">with World Bank-Trained M&E Experts</span>
              </h1>
              <p className="text-xl leading-8 text-gray-100 max-w-2xl mb-8">
                Increase program effectiveness by 25% with our comprehensive M&E frameworks. 
                Trusted by 50+ organizations worldwide, including IFC, UNICEF, and World Bank.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/services" 
                  className="text-white hover:text-primary-100 font-medium py-4 px-8 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-200"
                >
                  View Our Services
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">25%</div>
                  <div className="text-sm text-gray-200">Average Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-200">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-sm text-gray-200">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  )
}
