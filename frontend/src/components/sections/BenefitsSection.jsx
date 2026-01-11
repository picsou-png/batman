import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, GraduationCap, TrendingUp, Palette, CheckCircle2 } from 'lucide-react';

export const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Heart,
      title: 'Santé',
      description: 'Diagnostic précoce des maladies, médecine personnalisée, découverte de médicaments accélérée.',
      examples: [
        'Détection du cancer avec 94% de précision',
        'Analyse d\'imagerie médicale en temps réel',
        'Prédiction des épidémies',
        'Assistance chirurgicale robotisée',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Éducation',
      description: 'Apprentissage personnalisé, accessibilité accrue, tuteurs virtuels disponibles 24h/24.',
      examples: [
        'Parcours d\'apprentissage adaptatifs',
        'Traduction instantanée des cours',
        'Aide aux devoirs intelligente',
        'Détection précoce des difficultés',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Productivité',
      description: 'Automatisation des tâches répétitives, aide à la décision, optimisation des processus.',
      examples: [
        'Automatisation administrative',
        'Analyse de données massives',
        'Service client 24/7',
        'Optimisation logistique',
      ],
    },
    {
      icon: Palette,
      title: 'Créativité',
      description: 'Nouveaux outils pour artistes, démocratisation de la création, inspiration augmentée.',
      examples: [
        'Génération d\'images et de musique',
        'Aide à l\'écriture et au brainstorming',
        'Design assisté par IA',
        'Restauration d\'œuvres anciennes',
      ],
    },
  ];

  return (
    <section
      id="benefices"
      ref={sectionRef}
      className="section-padding bg-success-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Les opportunités
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Les bénéfices de l'IA
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            L'intelligence artificielle offre des possibilités extraordinaires pour améliorer
            nos vies, résoudre des problèmes complexes et repousser les limites de l'innovation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`card-benefit border-success/20 overflow-hidden transition-all duration-700 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-success/15 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-success" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl md:text-2xl text-foreground mb-2">
                      {benefit.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 pl-[74px]">
                  {benefit.examples.map((example, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-sm text-foreground/80">{example}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '+40%', label: 'de productivité en moyenne' },
            { value: '3.5x', label: 'plus rapide pour le diagnostic' },
            { value: '€500B', label: 'économies potentielles santé' },
            { value: '90%', label: 'de satisfaction utilisateurs' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-card border border-success/20">
              <div className="text-2xl md:text-3xl font-heading font-bold text-success">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
