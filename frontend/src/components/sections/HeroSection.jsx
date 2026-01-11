import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, AlertTriangle } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToIntro = () => {
    const element = document.querySelector('#intro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1920&q=80"
          alt="Intelligence Artificielle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 md:left-20 opacity-20 animate-float">
        <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-accent" />
      </div>
      <div className="absolute top-1/3 right-10 md:right-24 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <AlertTriangle className="w-10 h-10 md:w-14 md:h-14 text-danger" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-primary-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Une réflexion nécessaire
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            L'Intelligence Artificielle :
            <br />
            <span className="text-gradient-hero">
              Promesse ou Menace ?
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Explorez les deux facettes d'une technologie qui transforme notre monde.
            <br className="hidden sm:block" />
            Le vrai défi : comment l'utilisons-nous ?
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToIntro}
              className="group"
            >
              Découvrir
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => document.querySelector('#comparaison')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir la comparaison
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 md:mt-24 grid grid-cols-3 gap-4 md:gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '77%', label: 'des entreprises utilisent l\'IA' },
            { value: '€15.7T', label: 'impact économique prévu d\'ici 2030' },
            { value: '85M', label: 'emplois transformés' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-primary-foreground/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToIntro}
          className="p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
        >
          <ChevronDown className="w-6 h-6 text-primary-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
