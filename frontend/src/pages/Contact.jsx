import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
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
          Contact
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Pour toute question, vous pouvez nous contacter à l'adresse suivante :
          </p>

          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            <a
              href="mailto:jumbermax@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              jumbermax@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
