"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Button from "@/components/Button"
import { useState } from "react"
import LoadingSpinner from "@/components/LoadingSpinner"

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1500);
  };

  const blogPosts = [
    {
      title: "5 Things We Learned Building Agentic AI in Isolation",
      category: "Future AI",
      date: "June 10, 2025",
      excerpt: "Creating autonomous agents requires rethinking our approach to AI development. Here's what we discovered working on our agentic architecture in a focused environment.",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "How to License Your First Patent: A Primer",
      category: "Research Reflections",
      date: "May 28, 2025",
      excerpt: "The patent process can be daunting for first-time inventors. We break down the steps and share lessons from our own journey filing multiple patents.",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "The Future of Computer Vision in Drone Surveillance",
      category: "Product Design",
      date: "May 15, 2025",
      excerpt: "Combining aerial mobility with advanced vision systems opens new possibilities for surveillance and monitoring. We explore the technical challenges and solutions.",
      readTime: "10 min read",
      featured: false
    },
    {
      title: "Why Hinglish Data Matters for Indian AI",
      category: "Data Practices",
      date: "April 22, 2025",
      excerpt: "Training AI on pure Hindi or English misses the linguistic reality of how millions of Indians actually communicate. Here's why mixed-language data is crucial.",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Building Tech for the Next Billion Users",
      category: "Product Design",
      date: "April 5, 2025",
      excerpt: "Creating technology for emerging markets requires rethinking assumptions about user needs, constraints, and contexts. Our approach to inclusive innovation.",
      readTime: "9 min read",
      featured: false
    },
  ];

  // Colors for different categories
  const categoryColors = {
    "Future AI": "bg-signal-violet/20 text-signal-violet",
    "Data Practices": "bg-pulse-teal/20 text-pulse-teal",
    "Product Design": "bg-quantum-blue/20 text-quantum-blue",
    "Research Reflections": "bg-fog-gray text-quantum-blue"
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
              Blog & Insights
            </h1>
            <p className="font-satoshi-regular text-lg md:text-xl text-fog-gray/90 max-w-3xl mx-auto">
              Quick reads, long reflections, and insightful essays on innovation, disruption, and invention.
            </p>
          </div>
        </div>
      </div>
      
      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="bg-fog-gray rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-10">
                  <div className="mb-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-satoshi-regular font-medium ${categoryColors[post.category as keyof typeof categoryColors]}`}>
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-satoshi-bold font-bold text-3xl mb-4 text-quantum-blue">
                    {post.title}
                  </h2>
                  <p className="font-satoshi-regular text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="font-satoshi-regular text-sm text-gray-500">
                      {post.date} • {post.readTime}
                    </div>
                    <button 
                      className="text-signal-violet font-satoshi-regular font-medium hover:text-signal-violet/80 flex items-center"
                      onClick={() => window.alert(`Read full article: ${post.title}`)}
                    >
                      Read Article
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="bg-quantum-blue flex items-center justify-center text-white p-10">
                  <div className="text-center">
                    <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                      <div className="text-pulse-teal mb-4">
                        <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="font-satoshi-bold font-bold text-xl mb-2">Featured Article</h3>
                      <p className="font-satoshi-regular text-fog-gray/90">
                        Our latest and most insightful reflections on AI innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-fog-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-12 text-quantum-blue">Recent Posts</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="mb-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-satoshi-regular font-medium ${categoryColors[post.category as keyof typeof categoryColors]}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="font-satoshi-bold font-bold text-xl mb-4 text-quantum-blue">
                  {post.title}
                </h3>
                <p className="font-satoshi-regular text-gray-600 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="font-satoshi-regular text-sm text-gray-500">
                    {post.date} • {post.readTime}
                  </div>
                  <button 
                    className="text-signal-violet font-satoshi-regular font-medium hover:text-signal-violet/80 flex items-center"
                    onClick={() => window.alert(`Read full article: ${post.title}`)}
                  >
                    Read Article
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi-bold font-bold text-3xl mb-12 text-quantum-blue">Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              className="bg-signal-violet/20 text-signal-violet font-satoshi-regular py-3 px-6 rounded-lg hover:bg-signal-violet/30 transition-colors"
              onClick={() => window.alert("Filter by Future AI")}
            >
              Future AI
            </button>
            <button 
              className="bg-pulse-teal/20 text-pulse-teal font-satoshi-regular py-3 px-6 rounded-lg hover:bg-pulse-teal/30 transition-colors"
              onClick={() => window.alert("Filter by Data Practices")}
            >
              Data Practices
            </button>
            <button 
              className="bg-quantum-blue/20 text-quantum-blue font-satoshi-regular py-3 px-6 rounded-lg hover:bg-quantum-blue/30 transition-colors"
              onClick={() => window.alert("Filter by Product Design")}
            >
              Product Design
            </button>
            <button 
              className="bg-fog-gray text-quantum-blue font-satoshi-regular py-3 px-6 rounded-lg hover:bg-fog-gray/80 transition-colors"
              onClick={() => window.alert("Filter by Research Reflections")}
            >
              Research Reflections
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-quantum-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-satoshi-bold font-bold text-3xl mb-6">
              Stay ahead of the curve
            </h2>
            <p className="font-satoshi-regular text-fog-gray/90 mb-8">
              Get INORA's latest insights and research updates delivered directly to your inbox.
            </p>
            
            {isSubscribed ? (
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="bg-pulse-teal/10 text-pulse-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-satoshi-bold font-bold text-2xl mb-2">Thank You!</h3>
                <p className="font-satoshi-regular text-fog-gray/90">
                  You've successfully subscribed to our newsletter. Keep an eye on your inbox for our latest updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg font-satoshi-regular flex-grow bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="bg-white text-quantum-blue hover:bg-fog-gray whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <LoadingSpinner size="sm" color="default" className="mr-2" />
                      Subscribing...
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
