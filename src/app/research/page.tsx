"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Button from "@/components/Button"
import Link from "next/link"

export default function ResearchPage() {
  const researchPapers = [
    {
      title: "Multi-Modal Sensory Fusion in Real-Time Systems",
      category: "Technical Paper",
      year: "2025",
      authors: "Kumar, A., Singh, R., Patel, S.",
      abstract: "This paper introduces a novel approach to sensory data fusion for real-time processing in autonomous systems. We demonstrate a 37% improvement in latency compared to traditional methods.",
      link: "#"
    },
    {
      title: "The Linguistic Relevance of Hinglish in AI Training",
      category: "White Paper",
      year: "2024",
      authors: "Kumar, A., Gupta, M.",
      abstract: "An exploration of the importance of code-mixed languages like Hinglish in training more culturally aware AI systems for the Indian market.",
      link: "#"
    },
    {
      title: "Autonomous Agent Decision Making Under Uncertainty",
      category: "Technical Paper",
      year: "2024",
      authors: "Kumar, A., Sharma, V.",
      abstract: "We present a framework for enabling AI agents to make decisions in environments with limited or uncertain information, with applications in resource-constrained settings.",
      link: "#"
    },
    {
      title: "Edge Computing Optimization for Drone Systems",
      category: "Technical Paper",
      year: "2024",
      authors: "Kumar, A., Mehta, P.",
      abstract: "A study on optimizing computational workloads for drone-based systems with limited processing capabilities, enabling more complex operations.",
      link: "#"
    },
    {
      title: "Future of Data Collection in Rural India",
      category: "White Paper",
      year: "2023",
      authors: "Kumar, A.",
      abstract: "A comprehensive look at the challenges and opportunities in collecting high-quality data from rural Indian contexts for AI training.",
      link: "#"
    },
  ];

  // Colors for different categories
  const categoryColors = {
    "Technical Paper": "bg-pulse-teal/20 text-pulse-teal",
    "White Paper": "bg-signal-violet/20 text-signal-violet",
    "Article": "bg-fog-gray text-quantum-blue"
  };

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
              Research & Publications
            </h1>
            <p className="font-satoshi-regular text-lg md:text-xl text-fog-gray/90 max-w-3xl mx-auto">
              We are committed to open dialogue, peer-reviewed contribution, and impactful documentation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-12 text-quantum-blue">Research Categories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-fog-gray rounded-2xl p-8">
              <div className="text-pulse-teal mb-4">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">Technical Papers</h3>
              <p className="font-satoshi-regular text-gray-600">
                Core algorithms, systems architecture, performance benchmarks, and detailed experimental results.
              </p>
            </div>
            
            <div className="bg-fog-gray rounded-2xl p-8">
              <div className="text-pulse-teal mb-4">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">White Papers</h3>
              <p className="font-satoshi-regular text-gray-600">
                Domain analyses, conceptual frameworks, roadmap recommendations, and industry insights.
              </p>
            </div>
            
            <div className="bg-fog-gray rounded-2xl p-8">
              <div className="text-pulse-teal mb-4">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">Articles</h3>
              <p className="font-satoshi-regular text-gray-600">
                Commentary, reflections, and ongoing studies designed to provoke thought and discussion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 bg-fog-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-12 text-quantum-blue">Recent Publications</h2>
          
          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="md:w-3/4 mb-4 md:mb-0 md:pr-8">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-satoshi-regular font-medium mb-4 ${categoryColors[paper.category as keyof typeof categoryColors]}`}>
                      {paper.category}
                    </span>
                    <h3 className="font-satoshi-bold font-bold text-xl mb-2 text-quantum-blue">
                      {paper.title}
                    </h3>
                    <p className="font-satoshi-regular text-gray-500 mb-2">
                      {paper.authors} • {paper.year}
                    </p>
                    <p className="font-satoshi-regular text-gray-600">
                      {paper.abstract}
                    </p>
                  </div>
                  <div className="md:w-1/4 flex justify-end items-center">
                    <a 
                      href={paper.link} 
                      className="inline-flex items-center font-satoshi-regular text-signal-violet hover:text-signal-violet/80"
                      onClick={(e) => {
                        e.preventDefault();
                        window.alert(`Download link for: ${paper.title}`);
                      }}
                    >
                      <span className="mr-2">Read Paper</span>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-quantum-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-6">
            Interested in collaborating on research?
          </h2>
          <p className="font-satoshi-regular text-fog-gray/90 max-w-2xl mx-auto mb-8">
            We're always open to research partnerships and academic collaborations that push the boundaries of what's possible.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-quantum-blue hover:bg-fog-gray">
              Contact Our Research Team
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
