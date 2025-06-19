"use client"

import { useState } from 'react'
import Button from './Button'
import LoadingSpinner from './LoadingSpinner'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [error, setError] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact', {
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
      
      setFormSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Contact form submission error:', err);
    } finally {
      setIsSubmitting(false)
    }
  }
  
  if (formSubmitted) {
    return (
      <div className="bg-fog-gray rounded-2xl p-8 text-center">
        <div className="bg-pulse-teal/10 text-pulse-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-inter font-bold text-2xl mb-2">Thank You!</h3>
        <p className="font-ibm-plex text-gray-600 mb-4">
          We've received your message and will get back to you shortly.
        </p>
      </div>
    )
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-fog-gray rounded-2xl p-8">
      <h3 className="font-inter font-bold text-2xl mb-6">Get in Touch</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-ibm-plex text-sm text-quantum-blue mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-signal-violet/50 focus:border-signal-violet font-ibm-plex"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block font-ibm-plex text-sm text-quantum-blue mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-signal-violet/50 focus:border-signal-violet font-ibm-plex"
            required
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block font-ibm-plex text-sm text-quantum-blue mb-1">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-signal-violet/50 focus:border-signal-violet font-ibm-plex"
            required
          >
            <option value="">Select an option</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="licensing">Licensing Inquiry</option>
            <option value="research">Research Collaboration</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block font-ibm-plex text-sm text-quantum-blue mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-signal-violet/50 focus:border-signal-violet font-ibm-plex"
            required
          ></textarea>
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
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
