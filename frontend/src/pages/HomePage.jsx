import React from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import DangersSection from '@/components/sections/DangersSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ReflectionSection from '@/components/sections/ReflectionSection';
import ConclusionSection from '@/components/sections/ConclusionSection';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <BenefitsSection />
      <DangersSection />
      <ComparisonSection />
      <ReflectionSection />
      <ConclusionSection />
      <Footer />
    </main>
  );
}
