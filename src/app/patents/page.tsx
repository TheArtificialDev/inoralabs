"use client"

import PageLayout from "@/components/PageLayout"
import Button from "@/components/Button"
import Link from "next/link"

export default function PatentsPage() {
  const patents = [
    {
      id: "INORA-008",
      title: "Proactive Task Automation System (PTAS)",
      domain: "Automation/AI",
      year: "2025",
      status: "Filed",
      description: "Coming soon"
    },
    {
      id: "INORA-009",
      title: "Cognition-Driven API Reliability and Enhancement System (CARES)",
      domain: "APIs/AI Reliability",
      year: "2025",
      status: "Filed",
      description: "Coming soon"
    },
    {
      id: "INORA-010",
      title: "AI-Augmented Human Emulation and Task Orchestration System (AAHETOS)",
      domain: "Agentic AI/Automation",
      year: "2025",
      status: "Filed",
      description: "Coming soon"
    },
    {
      id: "INORA-011",
      title: "Adaptive Multi-Language Code Orchestration and Explanation Framework (AMCOEF)",
      domain: "AI/Programming Languages",
      year: "2025",
      status: "Filed",
      description: "Coming soon"
    },
    {
      id: "INORA-012",
      title: "System and Method for Generating Privacy-Compliant Realistic User Profiles",
      domain: "Data Privacy/AI",
      year: "2025",
      status: "Published",
      description: "Coming soon"
    },
    {
      id: "INORA-013",
      title: "AI-Powered learner centric system and method thereof",
      domain: "EdTech/AI",
      year: "2024",
      status: "Published",
      description: "Coming soon"
    },
  ];

  // Define colors for different statuses
  const statusColors = {
    "Filed": "bg-fog-gray text-quantum-blue",
    "Granted": "bg-pulse-teal/20 text-pulse-teal",
    "Licensed": "bg-signal-violet/20 text-signal-violet",
    "Published": "bg-pulse-teal/10 text-pulse-teal"
  };
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
            <h1 className="font-satoshi-bold font-bold text-4xl md:text-5xl mb-6">
              Patents & IP
            </h1>
            <p className="font-satoshi-regular text-lg md:text-xl text-fog-gray/90 max-w-3xl mx-auto">
              Explore the heart of our innovation—the intellectual properties that define tomorrow's systems.
            </p>
          </div>
        </div>
      </div>
      
      {/* Patents Directory */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-12 text-quantum-blue">Patent Directory</h2>
          
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-fog-gray">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-satoshi-bold font-semibold text-quantum-blue sm:pl-6">Patent ID</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-satoshi-bold font-semibold text-quantum-blue">Title</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-satoshi-bold font-semibold text-quantum-blue">Domain</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-satoshi-bold font-semibold text-quantum-blue">Filing Year</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-satoshi-bold font-semibold text-quantum-blue">Status</th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {patents.map((patent) => (
                  <tr key={patent.id} className="hover:bg-fog-gray/30 transition-colors">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-satoshi-regular-mono text-pulse-teal sm:pl-6">{patent.id}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-satoshi-regular font-medium text-quantum-blue">{patent.title}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-satoshi-regular text-gray-600">{patent.domain}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-satoshi-regular text-gray-600">{patent.year}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-satoshi-regular font-medium ${statusColors[patent.status as keyof typeof statusColors]}`}>
                        {patent.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-satoshi-regular sm:pr-6">
                      <span className="text-signal-violet font-medium">Coming soon</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Licensing Process */}
      <section className="py-20 bg-fog-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-12 text-quantum-blue">Licensing Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-quantum-blue text-white flex items-center justify-center text-xl font-satoshi-bold font-bold mb-6">1</div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">Initial Interest</h3>
              <p className="font-satoshi-regular text-gray-600 mb-6">
                Contact us with your licensing needs. Tell us which patents you're interested in and your use case.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-quantum-blue text-white flex items-center justify-center text-xl font-satoshi-bold font-bold mb-6">2</div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">Review</h3>
              <p className="font-satoshi-regular text-gray-600 mb-6">
                We'll schedule a briefing and IP demo to showcase the technology and discuss potential applications.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-quantum-blue text-white flex items-center justify-center text-xl font-satoshi-bold font-bold mb-6">3</div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">Agreement</h3>
              <p className="font-satoshi-regular text-gray-600 mb-6">
                We'll work together to create customized license terms that suit your business needs and use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Snapshots */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-12 text-quantum-blue">Case Snapshots</h2>
          
          <div className="bg-fog-gray rounded-2xl p-8 shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 rounded-full bg-signal-violet flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-satoshi-bold font-bold text-xl mb-2 text-quantum-blue">
                  INORA-002 licensed to X-Corp
                </h3>
                <p className="font-satoshi-regular text-gray-600 mb-4">
                  Our Dynamic Drone Pathing System is now powering X-Corp's aerial surveillance solutions, enabling efficient drone pathing in high-wind environments.
                </p>
                <div className="flex items-center text-sm font-satoshi-regular text-gray-500">
                  <span>Licensed in 2024</span>
                  <span className="mx-2">•</span>
                  <span>Drone Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* CTA Section */}
      <section className="py-12 bg-quantum-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-6">
            Interested in licensing our technology?
          </h2>
          <p className="font-satoshi-regular text-fog-gray/90 max-w-2xl mx-auto mb-6">
            We're open to partnerships and licensing arrangements that help bring our innovations to market and create impact.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-quantum-blue hover:bg-fog-gray transform hover:scale-105 transition-transform duration-300">
              Contact Us About Licensing
            </Button>
          </Link>
        </div>      </section>
    </PageLayout>
  )
}
