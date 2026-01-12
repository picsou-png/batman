import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MentionsLegales() {
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
          Mentions légales
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Ce site est édité par un particulier.
          </p>

          <div className="space-y-2">
            <p><strong className="text-foreground">Nom du site :</strong> AI Dangers</p>
            <p><strong className="text-foreground">Responsable de publication :</strong> Propriétaire du site</p>
            <p><strong className="text-foreground">Email :</strong> contact@exemple.com</p>
          </div>

          <p>
            <strong className="text-foreground">Hébergement :</strong> Netlify, Inc.
          </p>
        </div>
      </div>
    </main>
  );
}
