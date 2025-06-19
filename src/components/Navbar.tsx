"use client"

import Link from 'next/link'
import Button from './Button'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  
  useEffect(() => {
    // Only hide navbar initially on the homepage
    const isHomePage = pathname === '/'
    setIsVisible(!isHomePage)
    
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // If we're on the homepage
        if (isHomePage) {
          // Show navbar if not at the very top (scrollY > 0)
          if (window.scrollY > 0) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        } else {
          // Always visible on other pages
          setIsVisible(true)
        }
        
        // Remember the last scroll position
        setLastScrollY(window.scrollY)
      }
    }
    
    // Check scroll position immediately
    controlNavbar()
    
    // Add scroll event listener
    window.addEventListener('scroll', controlNavbar)
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [pathname])
  
  // Function to handle mouse hover at the top of the screen
  const handleMouseAtTop = () => {
    if (pathname === '/' && lastScrollY === 0) {
      setIsVisible(true);
    }
  }

  // Function to handle mouse leave from the top area
  const handleMouseLeave = () => {
    if (pathname === '/' && lastScrollY === 0) {
      setIsVisible(false);
    }
  }

  return (
    <>
      {/* Invisible hover area at the top of the screen */}
      {pathname === '/' && !isVisible && (
        <div 
          className="fixed top-0 left-0 right-0 h-16 z-40"
          onMouseEnter={handleMouseAtTop}
        />
      )}
      
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-fog-gray transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        onMouseEnter={handleMouseAtTop}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="font-satoshi-bold font-bold text-quantum-blue text-2xl">
              INORA LABs
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/technology" className="font-satoshi-regular text-quantum-blue hover:text-signal-violet transition-colors">
                Technology
              </Link>
              <Link href="/data-services" className="font-satoshi-regular text-quantum-blue hover:text-signal-violet transition-colors">
                Data Services
              </Link>
              <Link href="/patents" className="font-satoshi-regular text-quantum-blue hover:text-signal-violet transition-colors">
                Patents
              </Link>
              <Link href="/research" className="font-satoshi-regular text-quantum-blue hover:text-signal-violet transition-colors">
                Research
              </Link>
              <Link href="/blog" className="font-satoshi-regular text-quantum-blue hover:text-signal-violet transition-colors">
                Blog
              </Link>
              <Link href="/about" className="font-satoshi-regular text-quantum-blue hover:text-signal-violet transition-colors">
                About
              </Link>
              <Link href="/careers" className="font-satoshi-regular text-quantum-blue hover:text-signal-violet transition-colors">
                Careers
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="sm">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-quantum-blue hover:bg-fog-gray"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-fog-gray">
            <div className="px-4 pt-2 pb-3 space-y-3">
              <Link 
                href="/technology" 
                className="block font-satoshi-regular text-quantum-blue hover:text-signal-violet py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Technology
              </Link>
              <Link 
                href="/data-services" 
                className="block font-satoshi-regular text-quantum-blue hover:text-signal-violet py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Data Services
              </Link>
              <Link 
                href="/patents" 
                className="block font-satoshi-regular text-quantum-blue hover:text-signal-violet py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Patents
              </Link>
              <Link 
                href="/research" 
                className="block font-satoshi-regular text-quantum-blue hover:text-signal-violet py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Research
              </Link>
              <Link 
                href="/blog" 
                className="block font-satoshi-regular text-quantum-blue hover:text-signal-violet py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="block font-satoshi-regular text-quantum-blue hover:text-signal-violet py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/careers" 
                className="block font-satoshi-regular text-quantum-blue hover:text-signal-violet py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <div className="py-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="secondary" size="sm" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
