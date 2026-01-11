import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake, BookOpen, Users, ArrowUp, Sparkles } from 'lucide-react';

export const ConclusionSection = () => {
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

  const actions = [
    {
      icon: BookOpen,
      title: 'S\'informer',
      description: 'Comprendre l\'IA pour mieux appréhender ses enjeux',
    },
    {
      icon: Users,
      title: 'Participer',
      description: 'S\'engager dans le débat public sur l\'éthique de l\'IA',
    },
    {
      icon: Handshake,
      title: 'Responsabiliser',
      description: 'Exiger des pratiques éthiques des entreprises tech',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="conclusion"
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Conclusion
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vers un usage responsable de l'IA
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            L'intelligence artificielle n'est ni notre salut ni notre perte.
            Elle est ce que nous en faisons collectivement.
          </p>
        </div>

        {/* Main Message */}
        <Card
          className={`max-w-4xl mx-auto mb-16 bg-card border-border shadow-medium overflow-hidden transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6 leading-relaxed">
                Au terme de cette exploration, une certitude émerge : <strong className="text-foreground">le véritable
                enjeu n'est pas l'IA elle-même, mais les choix que nous faisons autour d'elle</strong>.
                Qui la développe ? Dans quel but ? Avec quelles garanties éthiques ?
              </p>
              <p className="mb-6 leading-relaxed">
                Les bénéfices de l'IA sont réels et considérables. La médecine peut sauver
                plus de vies, l'éducation peut atteindre plus de personnes, la créativité
                peut s'épanouir de nouvelles façons. Mais ces promesses ne se réaliseront
                que si nous restons vigilants face aux dérives potentielles.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">L'avenir de l'IA dépend de nous</strong> — citoyens,
                entreprises, gouvernements. Chaque choix compte : les produits que nous utilisons,
                les régulations que nous soutenons, les valeurs que nous défendons.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {actions.map((action, index) => (
            <Card key={index} className="border-border/50 hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <action.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div
          className={`text-center transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-8">
            Le futur de l'IA s'écrit aujourd'hui.
            <br />
            <span className="text-secondary">Quel chapitre voulez-vous écrire ?</span>
          </p>
          
          <Button
            variant="default"
            size="xl"
            onClick={scrollToTop}
            className="group"
          >
            Relire depuis le début
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
