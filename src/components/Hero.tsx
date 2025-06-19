"use client"

import { usePathname } from 'next/navigation'
import Button from './Button'
import Link from 'next/link'

export default function Hero() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  return (
    <div className={`relative overflow-hidden bg-quantum-blue text-white ${isHomePage ? 'pt-24' : 'pt-32'} pb-16`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>{/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">          <h1 className="font-satoshi-bold font-extrabold text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-tight animate-fade-in-down">
            <span className="bg-gradient-to-r from-white via-white to-fog-gray/80 bg-clip-text text-transparent drop-shadow-lg">
              Engineering the Edge of Possibility..
            </span>
          </h1>
          <p className="font-satoshi-regular text-lg md:text-xl lg:text-2xl text-fog-gray/90 max-w-4xl mx-auto mb-10 animate-fade-in">
            Researching and developing cutting-edge tools in Artificial Intelligence, Computer Vision, Drone Technology, and Agentic AI Systems.
          </p><div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up">
            <Link href="/data-services">
              <Button size="lg" className="px-8 py-4 text-lg transform hover:scale-105 transition-transform duration-300">
                Explore Data Services
              </Button>
            </Link>
            <Link href="/technology">
              <Button variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 border-white/20 text-white px-8 py-4 text-lg transform hover:scale-105 transition-transform duration-300">
                Explore Technology
              </Button>
            </Link>
          </div>
        </div>
      </div>      {/* Stats Strip */}
      <div className="relative mt-24 bg-white/5 py-10 backdrop-blur-sm animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-all duration-500 hover:bg-white/10 rounded-lg p-4 border border-transparent hover:border-white/10 animate-float">              <div className="text-4xl md:text-5xl font-satoshi-bold font-bold text-pulse-teal animate-pulse-slow">7</div>
              <div className="text-sm md:text-base text-fog-gray/80 mt-2">Patents Filed</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-500 hover:bg-white/10 rounded-lg p-4 border border-transparent hover:border-white/10" style={{ animationDelay: '1s' }}>
              <div className="text-4xl md:text-5xl font-satoshi-bold font-bold text-pulse-teal animate-pulse-slow">100K+</div>
              <div className="text-sm md:text-base text-fog-gray/80 mt-2">Data Samples</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-500 hover:bg-white/10 rounded-lg p-4 border border-transparent hover:border-white/10 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-4xl md:text-5xl font-satoshi-bold font-bold text-pulse-teal animate-pulse-slow">5</div>
              <div className="text-sm md:text-base text-fog-gray/80 mt-2">Licenses Granted</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-500 hover:bg-white/10 rounded-lg p-4 border border-transparent hover:border-white/10" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl md:text-5xl font-satoshi-bold font-bold text-pulse-teal animate-pulse-slow">20+</div>
              <div className="text-sm md:text-base text-fog-gray/80 mt-2">Research Articles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
