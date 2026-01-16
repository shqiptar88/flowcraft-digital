import { Calendar, MessageCircle, Stethoscope, Heart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Calendar,
      step: '01',
      title: 'Termin vereinbaren',
      description: 'Rufen Sie uns an oder buchen Sie online Ihren Wunschtermin.',
    },
    {
      icon: MessageCircle,
      step: '02',
      title: 'Beratungsgespräch',
      description: 'Ausführliche Untersuchung und individuelle Behandlungsplanung.',
    },
    {
      icon: Stethoscope,
      step: '03',
      title: 'Behandlung',
      description: 'Professionelle Behandlung mit modernsten Methoden.',
    },
    {
      icon: Heart,
      step: '04',
      title: 'Nachsorge',
      description: 'Regelmäßige Kontrollen für Ihre langfristige Zahngesundheit.',
    },
  ];

  return (
    <section id="ablauf" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">So läuft es ab</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Ihr Weg zu gesunden Zähnen
          </h2>
          <p className="text-muted-foreground text-lg">
            In vier einfachen Schritten zu Ihrem strahlenden Lächeln.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="bg-card rounded-xl p-6 shadow-card card-hover text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mt-4 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="font-semibold text-primary text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-accent/40 z-10">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
