import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Ce site peut utiliser des cookies à des fins de diffusion publicitaire
            via Google AdSense.
          </p>

          <p>
            Google peut utiliser des cookies pour afficher des annonces
            adaptées aux centres d'intérêt des utilisateurs.
          </p>

          <p>
            Vous pouvez désactiver la publicité personnalisée dans les paramètres Google.
          </p>
        </div>
      </div>
    </main>
  );
}
