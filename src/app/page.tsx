"use client"

import Hero from "@/components/Hero"
import CorePillars from "@/components/CorePillars"
import Patents from "@/components/Patents"
import PageLayout from "@/components/PageLayout"

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <CorePillars />
      <Patents />
    </PageLayout>
  )
}
