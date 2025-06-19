"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Button from "@/components/Button"
import Link from "next/link"

export default function AboutPage() {
  const coreValues = [
    {
      title: "Integrity",
      description: "Our work stands on ethical rigor. We believe in doing what's right, even when it's difficult.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Curiosity",
      description: "We explore problems with an open, inventive mindset. We question assumptions and seek new perspectives.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Precision",
      description: "Every line of research is executed with care. We value thoroughness and attention to detail in all our work.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
    },
    {
      title: "Impact",
      description: "We aim to build what matters. Our goal is to create technologies that make a meaningful difference.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Playfulness",
      description: "Innovation thrives in freedom and exploration. We believe in creating an environment that encourages experimentation.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-quantum-blue text-white pt-32 pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-satoshi-bold font-bold text-4xl md:text-5xl mb-6">
              About INORA LABs
            </h1>
            <p className="font-satoshi-regular text-lg md:text-xl text-fog-gray/90 max-w-3xl mx-auto">
              We're on a mission to turn bold ideas into real-world innovations, pushing the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
      
      {/* Founding Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-satoshi-bold font-bold text-3xl mb-6 text-quantum-blue">Our Founding Story</h2>
              <p className="font-satoshi-regular text-gray-600 mb-6">
                INORA LABs began in 2023 as a vision to turn high-level ideas into real-world innovations. What started as a small experiment has grown into a driving force in India's research ecosystem.
              </p>
              <p className="font-satoshi-regular text-gray-600 mb-6">
                We identified a gap between theoretical research and practical application, especially in the fields of AI, computer vision, and drone technology. Our approach combines rigorous research with a focus on creating technologies that solve real problems.
              </p>
              <p className="font-satoshi-regular text-gray-600">
                Today, we continue to push tech frontiers across multiple verticals, developing patented technologies that power the next generation of intelligent systems.
              </p>
            </div>
            <div className="bg-fog-gray rounded-2xl p-10">
              <div className="border-l-4 border-signal-violet pl-6">
                <h3 className="font-satoshi-bold font-bold text-2xl mb-4 text-quantum-blue">Founder's Note</h3>
                <p className="font-satoshi-regular text-gray-600 italic mb-6">
                  "I started INORA with a simple belief—that our boldest ideas deserve to be built. Every breakthrough begins with the willingness to try. Our work is driven by the conviction that innovation should not be confined to papers and presentations, but should live in the real world, making a tangible difference."
                </p>
                <div className="font-satoshi-regular font-medium text-quantum-blue">
                  Abhishek Kumar, Founder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-fog-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-12 text-quantum-blue text-center">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="text-pulse-teal mb-6">
                  {value.icon}
                </div>
                <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                  {value.title}
                </h3>
                <p className="font-satoshi-regular text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-quantum-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-6">
            Join us on our journey
          </h2>
          <p className="font-satoshi-regular text-fog-gray/90 max-w-2xl mx-auto mb-8">
            We're always looking for partners, collaborators, and curious minds to join us in our mission to Engineer the Edge of Possibility..
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-quantum-blue hover:bg-fog-gray">
                Get in Touch
              </Button>
            </Link>
            <Link href="/careers">
              <Button size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/20 text-white">
                Explore Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
