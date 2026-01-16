import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      lines: ['Eppendorfer Landstraße 42', '20249 Hamburg'],
    },
    {
      icon: Phone,
      title: 'Telefon',
      lines: ['040 123 456 789'],
      link: 'tel:+4940123456789',
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      lines: ['Mo–Fr: 8:00–18:00 Uhr', 'Sa: nach Vereinbarung'],
    },
  ];

  return (
    <section id="kontakt" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Kontakt & Anfahrt</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Besuchen Sie uns in Eppendorf
          </h2>
          <p className="text-muted-foreground text-lg">
            Wir freuen uns auf Ihren Besuch! Vereinbaren Sie jetzt Ihren Termin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card rounded-xl p-5 shadow-card text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    info.link ? (
                      <a key={i} href={info.link} className="block text-muted-foreground text-sm hover:text-accent transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-muted-foreground text-sm">{line}</p>
                    )
                  ))}
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="bg-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-3">Termin vereinbaren</h3>
              <p className="opacity-90 mb-6">
                Rufen Sie uns an oder schreiben Sie uns – wir melden uns schnellstmöglich bei Ihnen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="flex-1" asChild>
                  <a href="tel:+4940123456789">
                    <Phone className="w-5 h-5 mr-2" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex-1 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="mailto:info@zahnarzt-eppendorf.de">
                    E-Mail schreiben
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card rounded-xl overflow-hidden shadow-card h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.2!2d9.9847!3d53.5917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f5a8b5a5b5b%3A0x0!2sEppendorfer+Landstra%C3%9Fe+42%2C+20249+Hamburg!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Zahnarztpraxis Hamburg-Eppendorf"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
