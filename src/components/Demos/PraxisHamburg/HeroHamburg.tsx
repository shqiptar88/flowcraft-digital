import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dental.jpg';

const Hero = () => {
  const trustBullets = [
    'Modernste Ausstattung & Technologie',
    'Angstpatienten herzlich willkommen',
    'Alle Kassen & Privatpatienten',
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Ihr Lächeln in{' '}
                <span className="text-accent">besten Händen</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Willkommen in Ihrer Zahnarztpraxis im Herzen von Hamburg-Eppendorf. 
                Moderne Zahnmedizin mit persönlicher Betreuung für Ihre Zahngesundheit.
              </p>
            </div>

            {/* Trust Bullets */}
            <ul className="space-y-3">
              {trustBullets.map((bullet, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="#kontakt">
                  Termin vereinbaren
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8" asChild>
                <a href="#leistungen">Leistungen ansehen</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg-custom">
              <img
                src={heroImage}
                alt="Moderne Zahnarztpraxis Hamburg-Eppendorf"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-primary">4.9/5 Sterne</p>
                  <p className="text-sm text-muted-foreground">230+ Bewertungen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
