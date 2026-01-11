import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export const ComparisonSection = () => {
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

  const comparisons = [
    {
      domain: 'Santé',
      benefit: 'Diagnostic plus précis et rapide, médecine personnalisée',
      danger: 'Erreurs médicales algorithmiques, déshumanisation des soins',
    },
    {
      domain: 'Travail',
      benefit: 'Automatisation des tâches répétitives, gain de productivité',
      danger: 'Suppression massive d\'emplois, précarisation',
    },
    {
      domain: 'Information',
      benefit: 'Accès facilité au savoir, traduction instantanée',
      danger: 'Deepfakes, désinformation à grande échelle',
    },
    {
      domain: 'Éducation',
      benefit: 'Apprentissage personnalisé, accessibilité accrue',
      danger: 'Dépendance cognitive, plagiat facilité',
    },
    {
      domain: 'Sécurité',
      benefit: 'Détection des menaces, prévention des crimes',
      danger: 'Surveillance de masse, atteinte aux libertés',
    },
    {
      domain: 'Créativité',
      benefit: 'Nouveaux outils artistiques, démocratisation',
      danger: 'Dévaluation du travail humain, droits d\'auteur',
    },
  ];

  return (
    <section
      id="comparaison"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <ArrowRight className="w-4 h-4" />
            Face à face
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bénéfices vs Dangers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chaque domaine d'application de l'IA présente son lot d'opportunités
            et de risques. Voici une mise en parallèle pour y voir plus clair.
          </p>
        </div>

        {/* Legend */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-success" />
            <span className="text-sm text-muted-foreground">Bénéfice</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-danger" />
            <span className="text-sm text-muted-foreground">Danger</span>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="space-y-4">
          {comparisons.map((item, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-border/50 transition-all duration-700 hover:shadow-medium ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[140px_1fr_1fr] gap-0">
                  {/* Domain Label */}
                  <div className="bg-muted p-4 md:p-6 flex items-center justify-center md:justify-start">
                    <span className="font-heading font-semibold text-foreground">
                      {item.domain}
                    </span>
                  </div>
                  
                  {/* Benefit */}
                  <div className="p-4 md:p-6 bg-success/5 border-t md:border-t-0 md:border-l border-border/50">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        {item.benefit}
                      </p>
                    </div>
                  </div>
                  
                  {/* Danger */}
                  <div className="p-4 md:p-6 bg-danger/5 border-t md:border-t-0 md:border-l border-border/50">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        {item.danger}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ce tableau illustre une réalité fondamentale : <span className="text-foreground font-medium">l'IA n'est pas
            intrinsèquement bonne ou mauvaise</span>. Son impact dépend entièrement de la façon
            dont nous choisissons de la développer, de la réguler et de l'utiliser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
