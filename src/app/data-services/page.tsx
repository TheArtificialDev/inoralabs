"use client"

import PageLayout from "@/components/PageLayout"
import Button from "@/components/Button"

export default function DataServicesPage() {
  const dataServices = [
    {
      title: "Custom Dataset Creation",
      description: "We specialize in creating custom, high-quality datasets for training AI models in domains where data is scarce or specialized knowledge is required.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: "Data Annotation & Labeling",
      description: "Our expert annotation teams provide high-precision labeling for images, video, and text data, with rigorous quality control processes.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "Synthetic Data Generation",
      description: "When real-world data is limited, expensive, or raises privacy concerns, our synthetic data generation services can create diverse, realistic training data.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Data Quality Assessment",
      description: "Our automated and manual data evaluation services help identify and address biases, errors, and quality issues in your existing datasets.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];
  return (
    <PageLayout>
      
      {/* Hero Section */}
      <div className="bg-signal-violet text-white pt-32 pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-satoshi-bold font-bold text-4xl md:text-5xl mb-6">
              Data Services
            </h1>
            <p className="font-satoshi-regular text-lg md:text-xl text-fog-gray/90 max-w-3xl mx-auto">
              High-quality data is the foundation of exceptional AI. We provide specialized data services to power your most ambitious projects.
            </p>
          </div>
        </div>
      </div>
        {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl md:text-4xl text-quantum-blue mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {dataServices.map((service, index) => (
              <div key={index} className="bg-fog-gray rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="text-pulse-teal mb-6">
                  {service.icon}
                </div>
                <h3 className="font-satoshi-bold font-bold text-2xl mb-4 text-quantum-blue">
                  {service.title}
                </h3>
                <p className="font-satoshi-regular text-gray-600 mb-6">
                  {service.description}
                </p>
                <Button variant="secondary" size="sm">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Compliance & Quality */}
      <section className="py-20 bg-quantum-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-satoshi-bold font-bold text-3xl md:text-4xl mb-6">
              Compliance & Quality
            </h2>
            <p className="font-satoshi-regular text-fog-gray/90">
              Our pipelines follow strict quality benchmarks and include anonymization, human oversight, and validation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="bg-pulse-teal/20 text-pulse-teal w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-white">
                Privacy & Anonymization
              </h3>
              <p className="font-satoshi-regular text-fog-gray/80">
                All sensitive data is handled with rigorous anonymization processes to protect privacy.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="bg-pulse-teal/20 text-pulse-teal w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-white">
                Human Oversight
              </h3>
              <p className="font-satoshi-regular text-fog-gray/80">
                Expert human reviewers ensure quality, consistency and accuracy throughout our data pipelines.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="bg-pulse-teal/20 text-pulse-teal w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-white">
                Validation Protocols
              </h3>
              <p className="font-satoshi-regular text-fog-gray/80">
                Multi-stage validation ensures that all data meets or exceeds quality benchmarks before delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-20 bg-fog-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl md:text-4xl text-quantum-blue mb-12 text-center">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Training Hinglish Chatbots
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Our specialized text corpora enable better understanding of code-mixed language patterns common in Indian English conversations.
              </p>
            </div>
            {/* 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Vision Models for Rural India
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Our diverse visual datasets capture the unique aspects of rural Indian environments for more accurate computer vision applications.
              </p>
            </div>
            {/* 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Drone Surveillance in Agritech
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Our specialized drone imagery datasets help agricultural models identify crop health, pest infestations, and irrigation issues with high accuracy.
              </p>
            </div>
            {/* 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M12 8v8" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Medical Imaging Diagnostics
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                AI-powered analysis of X-rays and MRIs for faster, more accurate medical diagnoses.
              </p>
            </div>
            {/* 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Financial Fraud Detection
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Leveraging transaction data to identify and prevent fraudulent activities in real time.
              </p>
            </div>
            {/* 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Smart City Traffic Analytics
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Real-time traffic flow and congestion analysis for urban planning and smart city solutions.
              </p>
            </div>
            {/* 7 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Retail Customer Insights
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Analyzing in-store and online behavior to optimize product placement and marketing.
              </p>
            </div>
            {/* 8 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Voice Recognition for Regional Languages
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Building robust voice assistants for underrepresented Indian languages and dialects.
              </p>
            </div>
            {/* 9 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8M8 8v8" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Satellite Image Analysis
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Extracting actionable insights from satellite imagery for disaster response and land use.
              </p>
            </div>
            {/* 10 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Document OCR & Automation
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Automating document processing and extraction for finance, legal, and government sectors.
              </p>
            </div>
            {/* 11 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Industrial IoT Data Streams
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Integrating and analyzing sensor data from industrial equipment for predictive maintenance.
              </p>
            </div>
            {/* 12 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-pulse-teal/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                Personalized Learning Analytics
              </h3>
              <p className="font-satoshi-regular text-gray-600">
                Using data to tailor educational content and track student progress for better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-signal-violet text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-satoshi-bold font-bold text-3xl mb-4">
              Need domain-specific data? Let's talk.
            </h2>
            <p className="font-satoshi-regular text-fog-gray/90 max-w-2xl mx-auto mb-8">
              Our team can help you identify and build the right dataset for your specific AI and machine learning needs.
            </p>
            <a href="/contact">
              <Button className="bg-white text-signal-violet hover:bg-fog-gray">
                Request a Sample →
              </Button>
            </a>
          </div>
        </div>      </section>
    </PageLayout>
  )
}
