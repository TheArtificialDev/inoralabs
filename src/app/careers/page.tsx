"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Button from "@/components/Button"
import { useState } from "react"
import LoadingSpinner from "@/components/LoadingSpinner"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: "",
    experience: "",
    portfolio: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        interests: "",
        experience: "",
        portfolio: ""
      });
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error('Career form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      title: "Freedom to Experiment",
      description: "We believe in giving our team the space to try new ideas and approaches without fear of failure.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: "No Red Tape",
      description: "We keep bureaucracy to a minimum. Good ideas should be implemented, not stuck in approval cycles.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
    },
    {
      title: "Access to Pioneering Tech",
      description: "Work with cutting-edge technologies and contribute to research that pushes the boundaries of what's possible.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Work Directly with the Founder",
      description: "No layers of management to navigate. Get direct feedback and guidance from the founder.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
              Careers at INORA LABs
            </h1>
            <p className="font-satoshi-regular text-lg md:text-xl text-fog-gray/90 max-w-3xl mx-auto">
              Join us in our mission to Engineer the Edge of Possibility. and build technologies that shape the future.
            </p>
          </div>
        </div>
      </div>
      
      {/* Working at INORA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-satoshi-bold font-bold text-3xl mb-6 text-quantum-blue">Working at INORA</h2>
            <p className="font-satoshi-regular text-lg text-gray-600">
              We're not hiring yet—but we're always watching. If you're bold, self-driven, and live for moonshots, we want to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-fog-gray rounded-2xl p-8">
              <h3 className="font-satoshi-bold font-bold text-2xl mb-6 text-quantum-blue">What We Look For</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 font-satoshi-regular text-gray-600">
                    <span className="font-medium text-quantum-blue">Bold thinkers:</span> People who aren't afraid to pursue ambitious ideas and challenge conventional wisdom.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 font-satoshi-regular text-gray-600">
                    <span className="font-medium text-quantum-blue">Self-starters:</span> Individuals who take initiative and don't need constant direction to make progress.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 font-satoshi-regular text-gray-600">
                    <span className="font-medium text-quantum-blue">Continuous learners:</span> Those who are constantly expanding their knowledge and skills.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 font-satoshi-regular text-gray-600">
                    <span className="font-medium text-quantum-blue">Problem solvers:</span> People who see challenges as opportunities and find creative solutions.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="bg-quantum-blue text-white rounded-2xl p-8">
              <h3 className="font-satoshi-bold font-bold text-2xl mb-6">Areas of Interest</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="ml-3 font-satoshi-regular text-fog-gray/90">
                    <span className="font-medium text-white">Machine Learning & AI:</span> Researchers and engineers with experience in deep learning, reinforcement learning, and NLP.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="ml-3 font-satoshi-regular text-fog-gray/90">
                    <span className="font-medium text-white">Computer Vision:</span> Specialists in image processing, object detection, and visual analysis.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <p className="ml-3 font-satoshi-regular text-fog-gray/90">
                    <span className="font-medium text-white">Drone Technology:</span> Engineers with knowledge of aerial systems, flight control, and sensor integration.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-pulse-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <p className="ml-3 font-satoshi-regular text-fog-gray/90">
                    <span className="font-medium text-white">Data Science:</span> Professionals skilled in data collection, preprocessing, and analysis for AI training.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-fog-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-12 text-quantum-blue text-center">Why Work Here?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-signal-violet mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                  {benefit.title}
                </h3>
                <p className="font-satoshi-regular text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-satoshi-bold font-bold text-3xl mb-6 text-quantum-blue text-center">Join Our Interest List</h2>
            <p className="font-satoshi-regular text-gray-600 text-center mb-12">
              Leave your details, and we'll reach out when positions open that match your skills and interests.
            </p>
            
            {isSubmitted ? (
              <div className="bg-fog-gray rounded-2xl p-8 text-center">
                <div className="bg-pulse-teal/10 text-pulse-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-satoshi-bold font-bold text-2xl mb-2 text-quantum-blue">Thank You!</h3>
                <p className="font-satoshi-regular text-gray-600 mb-4">
                  We've added you to our talent pool. We'll be in touch when opportunities arise that match your profile.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-fog-gray rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-satoshi-regular text-sm text-quantum-blue mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-signal-violet/50 focus:border-signal-violet font-satoshi-regular"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-satoshi-regular text-sm text-quantum-blue mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-signal-violet/50 focus:border-signal-violet font-satoshi-regular"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interests" className="block font-satoshi-regular text-sm text-quantum-blue mb-1">
                      Areas of Interest
                    </label>
                    <select
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-signal-violet/50 focus:border-signal-violet font-satoshi-regular"
                      required
                    >
                      <option value="">Select primary area of interest</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="cv">Computer Vision</option>
                      <option value="drone">Drone Technology</option>
                      <option value="data">Data Science</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block font-satoshi-regular text-sm text-quantum-blue mb-1">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-signal-violet/50 focus:border-signal-violet font-satoshi-regular"
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="portfolio" className="block font-satoshi-regular text-sm text-quantum-blue mb-1">
                      Portfolio/GitHub URL (optional)
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-signal-violet/50 focus:border-signal-violet font-satoshi-regular"
                    />
                  </div>
                  
                  {error && (
                    <div className="text-red-500 text-sm mt-2">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <LoadingSpinner size="sm" color="light" className="mr-2" />
                          Submitting...
                        </span>
                      ) : (
                        "Express Interest"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
