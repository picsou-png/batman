import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Radio, Brain, Eye, Briefcase, XCircle } from 'lucide-react';

export const DangersSection = () => {
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

  const dangers = [
    {
      icon: Radio,
      title: 'Désinformation',
      description: 'Deepfakes, fausses informations générées, manipulation de l\'opinion publique.',
      risks: [
        'Vidéos truquées indétectables',
        'Propagation de fausses nouvelles',
        'Manipulation électorale',
        'Érosion de la confiance médiatique',
      ],
    },
    {
      icon: Brain,
      title: 'Dépendance',
      description: 'Perte de compétences, sur-reliance technologique, atrophie cognitive.',
      risks: [
        'Réduction de l\'esprit critique',
        'Délégation excessive de décisions',
        'Perte de savoir-faire',
        'Vulnérabilité aux pannes',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Biais algorithmiques',
      description: 'Discrimination amplifiée, inégalités renforcées, décisions injustes.',
      risks: [
        'Discrimination à l\'embauche',
        'Profilage racial ou social',
        'Accès inégal aux services',
        'Perpétuation des stéréotypes',
      ],
    },
    {
      icon: Eye,
      title: 'Surveillance',
      description: 'Atteinte à la vie privée, reconnaissance faciale omniprésente, contrôle social.',
      risks: [
        'Surveillance de masse',
        'Profilage comportemental',
        'Perte d\'anonymat',
        'Risques pour les libertés civiles',
      ],
    },
    {
      icon: Briefcase,
      title: 'Impact sur l\'emploi',
      description: 'Automatisation massive, disparition de métiers, inégalités économiques.',
      risks: [
        '85 millions d\'emplois menacés d\'ici 2025',
        'Précarisation du travail',
        'Concentration des richesses',
        'Fracture numérique accrue',
      ],
    },
  ];

  return (
    <section
      id="dangers"
      ref={sectionRef}
      className="section-padding bg-danger-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-danger/10 text-danger text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            Les risques
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Les dangers de l'IA
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comme toute technologie puissante, l'IA comporte des risques significatifs
            qui nécessitent vigilance, régulation et réflexion éthique.
          </p>
        </div>

        {/* Dangers Grid - First Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {dangers.slice(0, 3).map((danger, index) => (
            <Card
              key={index}
              className={`card-danger border-danger/20 overflow-hidden flex flex-col transition-all duration-700 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-danger/15 flex items-center justify-center mb-4">
                  <danger.icon className="w-6 h-6 text-danger" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  {danger.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  {danger.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-2 mt-auto">
                  {danger.risks.map((risk, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-danger/60 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{risk}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dangers Grid - Second Row (Centered) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {dangers.slice(3).map((danger, index) => (
            <Card
              key={index + 3}
              className={`card-danger border-danger/20 overflow-hidden flex flex-col transition-all duration-700 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-danger/15 flex items-center justify-center mb-4">
                  <danger.icon className="w-6 h-6 text-danger" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  {danger.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  {danger.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-2 mt-auto">
                  {danger.risks.map((risk, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-danger/60 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{risk}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warning Banner */}
        <div
          className={`mt-16 p-6 md:p-8 rounded-2xl bg-card border border-danger/30 shadow-soft transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-danger/15 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-danger" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                Un avertissement des experts
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                En 2023, plus de 1000 chercheurs et leaders technologiques ont signé une lettre
                demandant une pause dans le développement des IA les plus avancées, soulignant
                les "risques profonds pour la société et l'humanité".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DangersSection;
