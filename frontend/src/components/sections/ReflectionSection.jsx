import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle, User, Settings, Shield, Target } from 'lucide-react';

export const ReflectionSection = () => {
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

  const perspectives = [
    {
      icon: User,
      title: 'L\'humain au centre',
      description: 'L\'IA est un outil créé par et pour les humains. Sa valeur dépend de nos intentions et de nos choix.',
    },
    {
      icon: Settings,
      title: 'La conception compte',
      description: 'Les biais et dangers ne sont pas inhérents à l\'IA mais reflètent souvent nos propres préjugés sociétaux.',
    },
    {
      icon: Shield,
      title: 'La régulation est clé',
      description: 'Sans cadre éthique et légal, même la meilleure technologie peut être détournée.',
    },
    {
      icon: Target,
      title: 'L\'intention fait la différence',
      description: 'Un même algorithme peut sauver des vies ou violer des libertés selon son utilisation.',
    },
  ];

  return (
    <section
      id="reflexion"
      ref={sectionRef}
      className="section-padding bg-gradient-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 text-accent" />
            La vraie question
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            L'IA est-elle le problème...
            <br />
            <span className="text-secondary">ou notre manière de l'utiliser ?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Avant de condamner ou de célébrer l'intelligence artificielle, posons-nous
            la question essentielle : qui est vraiment responsable de ses effets ?
          </p>
        </div>

        {/* Central Quote */}
        <div
          className={`relative max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Card className="bg-card border-secondary/30 shadow-glow-primary overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="text-6xl md:text-8xl text-secondary/20 font-serif leading-none mb-4">"</div>
              <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                L'IA amplifie ce que nous y mettons. Si nous y intégrons nos biais,
                elle les reproduira. Si nous y mettons notre sagesse, elle la multipliera.
              </blockquote>
              <cite className="text-muted-foreground not-italic">
                — Réflexion sur l'éthique de l'IA
              </cite>
            </CardContent>
          </Card>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-secondary/30" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-secondary/30" />
        </div>

        {/* Perspectives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {perspectives.map((item, index) => (
            <Card
              key={index}
              className={`border-border/50 hover-lift transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Points */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Ce n'est pas l'outil qui pose problème...
              </h3>
              <ul className="space-y-3">
                {[
                  'Un couteau peut cuisiner ou blesser',
                  'Internet peut informer ou désinformer',
                  'L\'énergie nucléaire peut éclairer ou détruire',
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl text-foreground">
                ...mais son utilisation
              </h3>
              <ul className="space-y-3">
                {[
                  'Qui développe l\'IA et avec quelles valeurs ?',
                  'Qui décide de son déploiement ?',
                  'Qui bénéficie de ses avantages ?',
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection;
