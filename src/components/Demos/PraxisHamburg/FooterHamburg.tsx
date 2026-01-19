import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    praxis: [
      { name: 'Über uns', href: '#team' },
      { name: 'Unser Team', href: '#team' },
      { name: 'Karriere', href: '#kontakt' },
    ],
    leistungen: [
      { name: 'Prophylaxe', href: '#leistungen' },
      { name: 'Implantologie', href: '#leistungen' },
      { name: 'Ästhetische Zahnmedizin', href: '#leistungen' },
      { name: 'Angstpatienten', href: '#leistungen' },
    ],
    rechtliches: [
      { name: 'Impressum', href: '#' },
      { name: 'Datenschutz', href: '#' },
      { name: 'AGB', href: '#' },
    ],
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Z</span>
              </div>
              <div>
                <span className="font-bold text-primary text-lg block">Zahnarztpraxis</span>
                <span className="text-muted-foreground text-sm">Hamburg-Eppendorf</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Moderne Zahnmedizin mit Herz. Ihr Zahnarzt in Hamburg-Eppendorf für die ganze Familie.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+4940123456789" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                040 123 456 789
              </a>
              <a href="mailto:info@zahnarzt-eppendorf.de" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                info@zahnarzt-eppendorf.de
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Eppendorfer Landstraße 42, 20249 Hamburg
              </p>
            </div>
          </div>

          {/* Praxis */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Praxis</h4>
            <ul className="space-y-2">
              {footerLinks.praxis.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Leistungen</h4>
            <ul className="space-y-2">
              {footerLinks.leistungen.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {footerLinks.rechtliches.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mini CTA */}
            <div className="mt-6">
              <Button size="sm" className="w-full" asChild>
                <a href="#kontakt">Termin buchen</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Zahnarztpraxis Hamburg-Eppendorf. Alle Rechte vorbehalten.</p>
          <p>Zahnarzt Hamburg | Zahnarzt Eppendorf | Zahnmedizin Hamburg</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
