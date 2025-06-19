"use client"

import PageLayout from "@/components/PageLayout"
import Button from "@/components/Button"

export default function TechnologyPage() {
  const technologies = [
    {
      title: "Drone Technology",
      description: "Autonomous aerial systems for surveillance, delivery, and data collection.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: "AI",
      description: "Advanced artificial intelligence for automation and decision-making.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h1v-4h1m-4 0h1v4h1" />
        </svg>
      ),
    },
    {
      title: "Computer Vision",
      description: "Enabling machines to interpret and understand visual information.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Agentic AI",
      description: "Building AI agents capable of independent reasoning and action.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Blockchain",
      description: "Secure, decentralized ledgers for transparent transactions and data integrity.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M12 8v8" />
        </svg>
      ),
    },
    {
      title: "Neural Networks and Optimizers",
      description: "Designing and training deep learning models for complex tasks.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets and systems from evolving threats.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0v2m0 4h.01" />
        </svg>
      ),
    },
    {
      title: "Data Operations",
      description: "Efficient management, processing, and analysis of large-scale data.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: "Edge AI and Edge Computing",
      description: "Bringing intelligence and computation closer to data sources for real-time insights.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16v4H7v-4M12 12v8m-4-4h8" />
        </svg>
      ),
    },
  ];
  return (
    <PageLayout>
      
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
            <h1 className="font-inter font-bold text-4xl md:text-5xl mb-6">
              Our Technology
            </h1>
            <p className="font-ibm-plex text-lg md:text-xl text-fog-gray/90 max-w-3xl mx-auto">
              Building the future through research, innovation, and technical excellence
            </p>
          </div>
        </div>
      </div>
      
      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-fog-gray rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="text-signal-violet mb-6">
                  {tech.icon}
                </div>
                <h3 className="font-inter font-bold text-2xl mb-4 text-quantum-blue">
                  {tech.title}
                </h3>
                <p className="font-ibm-plex text-gray-600 mb-6">
                  {tech.description}
                </p>
                <Button variant="secondary" size="sm">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Research Section */}
      <section className="py-20 bg-quantum-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Our Research Approach
            </h2>
            <p className="font-ibm-plex text-fog-gray/90">
              We approach every problem with scientific rigor, combining theoretical insights with practical applications to create technologies that make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="bg-pulse-teal/20 text-pulse-teal w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-inter font-bold text-xl mb-4 text-white">
                Literature Research
              </h3>
              <p className="font-ibm-plex text-fog-gray/80">
                We stay at the cutting edge by constantly surveying the latest research in our fields of interest.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="bg-pulse-teal/20 text-pulse-teal w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-inter font-bold text-xl mb-4 text-white">
                Experimentation
              </h3>
              <p className="font-ibm-plex text-fog-gray/80">
                We design and conduct rigorous experiments to validate our hypotheses and refine our approaches.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="bg-pulse-teal/20 text-pulse-teal w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-inter font-bold text-xl mb-4 text-white">
                IP Development
              </h3>
              <p className="font-ibm-plex text-fog-gray/80">
                We identify and protect novel approaches through a comprehensive IP strategy, building a strong patent portfolio.
              </p>
            </div>
          </div>        </div>
      </section>
      
      {/* Patent Highlights */}
      <section className="py-20 bg-fog-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Patent Highlights
            </h2>
            <p className="font-ibm-plex text-gray-600">
              Each patent is built on deep research and represents a meaningful contribution to the field.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="font-ibm-plex-mono text-sm text-pulse-teal mb-2">
                INORA-001
              </div>
              <h3 className="font-inter font-bold text-xl mb-4 text-quantum-blue">
                Autonomous Self-Tuning Neural Optimizer
              </h3>
              <p className="font-ibm-plex text-gray-600 mb-6">
                An optimizer that tunes itself based on contextual meta-feedback.
              </p>
              <a href="/patents" className="font-ibm-plex text-signal-violet hover:text-signal-violet/80 transition-colors flex items-center">
                <span>View Technical Details</span>
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="font-ibm-plex-mono text-sm text-pulse-teal mb-2">
                INORA-003
              </div>
              <h3 className="font-inter font-bold text-xl mb-4 text-quantum-blue">
                Temporal Adaptation Layer
              </h3>
              <p className="font-ibm-plex text-gray-600 mb-6">
                A novel framework for multi-modal systems that adapts over time.
              </p>
              <a href="/patents" className="font-ibm-plex text-signal-violet hover:text-signal-violet/80 transition-colors flex items-center">
                <span>View Technical Details</span>
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="font-ibm-plex-mono text-sm text-pulse-teal mb-2">
                INORA-004
              </div>
              <h3 className="font-inter font-bold text-xl mb-4 text-quantum-blue">
                Modular Drone Surveillance Framework
              </h3>
              <p className="font-ibm-plex text-gray-600 mb-6">
                A scalable, modular system for drone-based area intelligence.
              </p>
              <a href="/patents" className="font-ibm-plex text-signal-violet hover:text-signal-violet/80 transition-colors flex items-center">
                <span>View Technical Details</span>
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-quantum-blue text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="font-inter font-bold text-2xl mb-4 text-white">
                Why Agentic AI is the Future
              </h3>
              <p className="font-ibm-plex text-white/90 mb-6">
                Read our latest technical reflection on creating goal-oriented AI agents.
              </p>
              <a href="/blog" className="font-ibm-plex text-white inline-flex items-center bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                <span>Read the Article</span>
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 bg-white/20 rounded-xl p-6">
              <div className="font-ibm-plex-mono text-xs text-white/80">
                June 15, 2025
              </div>
              <h4 className="font-inter font-bold text-lg mt-2 mb-4 text-white">
                "In the realm of AI, agency is the next frontier..."
              </h4>
              <div className="flex items-center">
                <div className="bg-pulse-teal/20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-ibm-plex text-sm text-white">Abhishek Kumar</div>
                  <div className="font-ibm-plex-mono text-xs text-white/70">Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
