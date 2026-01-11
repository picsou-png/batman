import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Scale, Users } from 'lucide-react';

export const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'L\'IA repousse les limites de ce qui est possible',
    },
    {
      icon: Scale,
      title: 'Équilibre',
      description: 'Entre opportunités et risques, un juste milieu à trouver',
    },
    {
      icon: Users,
      title: 'Responsabilité',
      description: 'L\'humain reste au cœur des décisions',
    },
  ];

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="section-padding bg-gradient-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Introduction
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pourquoi l'IA divise-t-elle autant ?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            L'intelligence artificielle fascine et inquiète à parts égales. D'un côté, elle promet
            des avancées révolutionnaires dans la médecine, l'éducation et notre quotidien.
            De l'autre, elle soulève des questions fondamentales sur l'emploi, la vie privée
            et notre autonomie.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src="https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?auto=format&fit=crop&w=800&q=80"
                alt="Collaboration humain-IA"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-card rounded-xl p-4 shadow-medium border border-border max-w-[200px]">
              <p className="text-sm font-medium text-foreground">
                "La technologie n'est ni bonne ni mauvaise, mais elle n'est pas neutre."
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Melvin Kranzberg</p>
            </div>
          </div>

          {/* Text Side */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
              Un tournant technologique majeur
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Depuis l'émergence de ChatGPT et des IA génératives, le débat public s'est intensifié.
              Les experts, les gouvernements et les citoyens s'interrogent : comment encadrer
              cette technologie pour en maximiser les bénéfices tout en minimisant les risques ?
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ce site vous invite à explorer les deux faces de cette pièce technologique.
              Sans parti pris, nous présentons les arguments des deux camps pour vous permettre
              de forger votre propre opinion éclairée.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Plus de 4 milliards de personnes impactées
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className={`border-border/50 hover-lift transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
