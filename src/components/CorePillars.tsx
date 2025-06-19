export default function CorePillars() {
  const pillars = [
    {
      title: "Patented Innovation",
      description: "Our research-first approach has resulted in a robust and growing portfolio of highly specialized patents, designed to push the boundaries of what is possible.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Future-Ready Data",
      description: "We are laying the groundwork to provide curated, high-quality datasets in underrepresented domains, enabling next-gen model training.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: "Domain Expertise",
      description: "We work at the frontier of AI, CV, and emerging systems, building for tomorrow's breakthroughs.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
  ];  return (
    <section className="py-24 bg-fog-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-inter font-bold text-3xl md:text-4xl text-quantum-blue mb-12 text-center animate-fade-in">
          <span className="bg-gradient-to-r from-quantum-blue via-pulse-teal to-signal-violet bg-clip-text text-transparent">Our Core Pillars</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-fog-gray/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="text-pulse-teal mb-6 transform transition-transform duration-500 hover:scale-125 hover:rotate-12 animate-float">
                {pillar.icon}
              </div>
              <h3 className="font-inter font-bold text-2xl mb-4 text-quantum-blue hover:text-signal-violet transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="font-ibm-plex text-gray-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
