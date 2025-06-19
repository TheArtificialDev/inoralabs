import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-inter font-bold text-4xl md:text-5xl text-quantum-blue mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-inter font-bold text-2xl mb-4">Reach Out</h2>
                <p className="font-ibm-plex text-gray-600 mb-6">
                  Whether you're interested in licensing our technologies, exploring a research partnership, or just want to learn more about what we do, we'd love to hear from you.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="text-pulse-teal flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-ibm-plex-mono text-sm text-quantum-blue">Email</div>
                      <a href="mailto:info@inoralabs.com" className="font-ibm-plex text-signal-violet hover:underline">
                        info@inoralabs.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-pulse-teal flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-ibm-plex-mono text-sm text-quantum-blue">Location</div>
                      <div className="font-ibm-plex text-gray-600">
                        San Francisco, CA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
