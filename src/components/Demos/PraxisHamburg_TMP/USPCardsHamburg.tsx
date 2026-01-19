import { Stethoscope, Users, MapPin, MessageSquare } from 'lucide-react';

const USPCards = () => {
  const usps = [
    {
      icon: Stethoscope,
      title: 'Modernste Ausstattung',
      description: 'Digitales Röntgen, 3D-Diagnostik und schmerzarme Behandlungsmethoden für Ihr Wohlbefinden.',
    },
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Qualifizierte Zahnärzte und freundliches Praxisteam mit langjähriger Erfahrung.',
    },
    {
      icon: MapPin,
      title: 'Zentrale Lage',
      description: 'Direkt in Hamburg-Eppendorf, sehr gute Anbindung an ÖPNV und ausreichend Parkplätze.',
    },
    {
      icon: MessageSquare,
      title: 'Transparente Beratung',
      description: 'Ausführliche Aufklärung über alle Behandlungsoptionen und transparente Kostenübersicht.',
    },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-card card-hover cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <usp.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{usp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPCards;
