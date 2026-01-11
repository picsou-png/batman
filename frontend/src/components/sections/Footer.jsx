import React from 'react';
import { Brain, Heart, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const resources = [
    { name: 'AI Ethics Guidelines (UNESCO)', url: 'https://www.unesco.org/en/artificial-intelligence' },
    { name: 'Future of Life Institute', url: 'https://futureoflife.org/' },
    { name: 'AI Now Institute', url: 'https://ainowinstitute.org/' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-primary-foreground/10">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">IA & Société</span>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Un site dédié à la réflexion sur les enjeux de l'intelligence artificielle.
              Ni pour, ni contre : informer pour mieux décider.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              Contenu à visée pédagogique et informative.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Ressources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: '#intro', label: 'Introduction' },
                { href: '#benefices', label: 'Bénéfices' },
                { href: '#dangers', label: 'Dangers' },
                { href: '#comparaison', label: 'Comparaison' },
                { href: '#reflexion', label: 'Réflexion' },
                { href: '#conclusion', label: 'Conclusion' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} IA & Société. Tous droits réservés.
            </p>
            <p className="flex items-center gap-1 text-sm text-primary-foreground/60">
              Fait avec <Heart className="w-4 h-4 text-danger" /> pour un avenir éclairé
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
