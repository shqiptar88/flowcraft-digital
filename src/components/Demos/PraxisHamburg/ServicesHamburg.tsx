import { Sparkles, Shield, Heart, Smile, Baby, Scissors, Syringe, Stethoscope } from 'lucide-react';
import serviceTreatment from '@/assets/service-treatment.jpg';
import serviceWhitening from '@/assets/service-whitening.jpg';
import serviceImplants from '@/assets/service-implants.jpg';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Prophylaxe',
      description: 'Professionelle Zahnreinigung und Vorsorge für langfristig gesunde Zähne.',
      image: null,
    },
    {
      icon: Sparkles,
      title: 'Ästhetische Zahnmedizin',
      description: 'Bleaching, Veneers und moderne Verfahren für Ihr strahlendes Lächeln.',
      image: serviceWhitening,
    },
    {
      icon: Syringe,
      title: 'Implantologie',
      description: 'Hochwertige Zahnimplantate als dauerhafter Ersatz für fehlende Zähne.',
      image: serviceImplants,
    },
    {
      icon: Stethoscope,
      title: 'Behandlung & Füllungen',
      description: 'Schonende Kariesbehandlung und ästhetische Füllungen in Zahnfarbe.',
      image: serviceTreatment,
    },
    {
      icon: Heart,
      title: 'Angstpatienten',
      description: 'Einfühlsame Betreuung und schmerzfreie Behandlung für sensible Patienten.',
      image: null,
    },
    {
      icon: Baby,
      title: 'Kinderzahnheilkunde',
      description: 'Kindgerechte Behandlung in entspannter Atmosphäre für die Kleinsten.',
      image: null,
    },
    {
      icon: Scissors,
      title: 'Parodontologie',
      description: 'Behandlung von Zahnfleischerkrankungen für gesundes Zahnfleisch.',
      image: null,
    },
    {
      icon: Smile,
      title: 'Kieferorthopädie',
      description: 'Unsichtbare Aligner und moderne Zahnspangen für gerade Zähne.',
      image: null,
    },
  ];

  return (
    <section id="leistungen" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Unsere Leistungen</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Umfassende Zahnmedizin für Ihre Gesundheit
          </h2>
          <p className="text-muted-foreground text-lg">
            Von der Vorsorge bis zur ästhetischen Behandlung – wir bieten Ihnen das volle Spektrum moderner Zahnmedizin.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-card card-hover"
            >
              {service.image ? (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              ) : (
                <div className="h-40 bg-gradient-to-br from-secondary to-accent/10 flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-accent/40" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <service.icon className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-primary">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
