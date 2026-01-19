import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Maria K.',
      text: 'Endlich eine Praxis, in der ich mich als Angstpatientin wirklich wohlfühle. Das gesamte Team ist so einfühlsam!',
      rating: 5,
    },
    {
      name: 'Thomas B.',
      text: 'Professionelle Beratung, moderne Ausstattung und immer pünktlich. Absolut zu empfehlen!',
      rating: 5,
    },
    {
      name: 'Sarah M.',
      text: 'Meine Kinder gehen hier gerne hin. Das Team macht die Behandlung spielerisch und stressfrei.',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Bewertungen</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Das sagen unsere Patienten
          </h2>
          
          {/* Rating Overview */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-primary text-xl">4.9 / 5</p>
              <p className="text-muted-foreground text-sm">Basierend auf 230+ Bewertungen</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card card-hover relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>

              {/* Author */}
              <p className="font-semibold text-primary">{review.name}</p>
              <p className="text-sm text-muted-foreground">Verifizierte Bewertung</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-lg">🏆</span>
            </div>
            <span className="font-medium">Top Zahnarzt 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-lg">✓</span>
            </div>
            <span className="font-medium">Jameda empfohlen</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-lg">🦷</span>
            </div>
            <span className="font-medium">Seit 2008 in Eppendorf</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
