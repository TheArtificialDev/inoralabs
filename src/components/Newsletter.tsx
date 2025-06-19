"use client"

import { useState } from 'react';
import Button from './Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Newsletter subscription error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-quantum-blue to-signal-violet text-white py-6 px-4 rounded-2xl shadow-lg animate-fade-in">
      <div className="max-w-md mx-auto">
        <h3 className="font-satoshi-bold font-bold text-xl mb-2 text-white">Stay Updated on AI Innovation</h3>
        <p className="text-sm text-white/90 mb-4">
          Subscribe to our newsletter and be the first to know about:
        </p>
        <ul className="text-sm text-white/80 mb-6 space-y-1">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-pulse-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Cutting-edge research in AI and Computer Vision</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-pulse-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>New patent filings and technology breakthroughs</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-pulse-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Exclusive insights and early access to demos</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-pulse-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Industry trends and collaboration opportunities</span>
          </li>
        </ul>
        
        {isSubmitted ? (
          <div className="bg-pulse-teal/20 text-pulse-teal px-4 py-3 rounded-lg text-center">
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm mt-1 text-white/80">We've sent a confirmation email to your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full bg-white/10 backdrop-blur-sm pr-10 border-white/20 text-white placeholder-white/60 focus:ring-pulse-teal focus:border-pulse-teal rounded-md py-2 px-4 ${error ? 'border-red-500' : 'border-white/20'}`}
                  placeholder="Your email address"
                  required
                />
              </div>
              {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-white text-quantum-blue hover:bg-fog-gray transform hover:scale-105 transition-transform duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'} 
            </Button>
          </form>
        )}
        
        <p className="text-xs text-white/60 mt-4 text-center">
          We respect your privacy. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
