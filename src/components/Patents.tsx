export default function Patents() {
  const patents = [
    {
      id: "INORA-008",
      title: "System and Method for Generating Privacy-Compliant Realistic User Profiles",
      description: "Using mathematical modeling we generate a large amount of user data without explicitly collecting user or person specific data."
    },
    {
      id: "INORA-009",
      title: "AI-Powered learner centric system and method thereof",
      description: "This was a truly autonomous system I developed to teach anyone anything, regardless of their background."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        
        <h2 className="font-satoshi-bold font-bold text-3xl md:text-4xl text-quantum-blue mb-12 text-center animate-fade-in">
          Featured Patents
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {patents.map((patent, index) => (
            <div 
              key={patent.id} 
              className="bg-fog-gray rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-quantum-blue/5"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-signal-violet flex items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-satoshi-regular-mono text-sm text-pulse-teal mb-1 animate-pulse-slow">
                    {patent.id}
                  </div>                  
                  <h3 className="font-satoshi-bold font-bold text-xl text-quantum-blue mb-2 hover:text-signal-violet transition-colors">
                    {patent.title}
                  </h3>
                  <p className="font-satoshi-regular text-gray-600">
                    {patent.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
