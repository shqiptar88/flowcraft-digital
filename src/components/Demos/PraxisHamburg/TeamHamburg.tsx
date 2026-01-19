import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. med. dent. Julia Schneider',
      role: 'Praxisinhaberin & Spezialistin für Ästhetische Zahnmedizin',
      image: team1,
      description: 'Über 15 Jahre Erfahrung in der ganzheitlichen Zahnmedizin.',
    },
    {
      name: 'Dr. med. dent. Thomas Weber',
      role: 'Spezialist für Implantologie & Chirurgie',
      image: team2,
      description: 'Experte für komplexe Implantationen und Oralchirurgie.',
    },
    {
      name: 'Lisa Hartmann',
      role: 'Zahnmedizinische Fachangestellte',
      image: team3,
      description: 'Ihr freundlicher Erstkontakt und Prophylaxe-Spezialistin.',
    },
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Unser Team</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Kompetenz trifft Herzlichkeit
          </h2>
          <p className="text-muted-foreground text-lg">
            Lernen Sie unser erfahrenes Team kennen – engagiert für Ihre Zahngesundheit.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-card card-hover text-center"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-primary text-lg mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
