"use client"

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Newsletter from './Newsletter';

interface PageLayoutProps {
  children: React.ReactNode;
  showNewsletter?: boolean;
}

export default function PageLayout({ children, showNewsletter = false }: PageLayoutProps) {
  return (
    <main className="min-h-screen">
      <Navbar />
      {children}
      
      {/* Newsletter section removed to avoid duplication with the one in Footer */}
      
      <Footer />
    </main>
  );
}
