import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Welche Kosten übernimmt meine Krankenkasse?',
      answer: 'Die gesetzlichen Krankenkassen übernehmen die Kosten für Regelversorgungen. Für Zusatzleistungen wie Bleaching oder hochwertige Füllungen erstellen wir Ihnen vorab einen transparenten Kostenvoranschlag. Private Versicherungen erstatten in der Regel nach GOZ.',
    },
    {
      question: 'Nehmen Sie auch Privatpatienten und alle Krankenkassen?',
      answer: 'Ja, wir behandeln sowohl gesetzlich als auch privat versicherte Patienten. Auch Beihilfeberechtigte und Selbstzahler sind herzlich willkommen.',
    },
    {
      question: 'Ich bin Angstpatient – wie gehen Sie damit um?',
      answer: 'Wir nehmen uns besonders viel Zeit für Angstpatienten. Mit einfühlsamer Betreuung, ausführlichen Erklärungen und schonenden, schmerzarmen Behandlungsmethoden helfen wir Ihnen, die Angst zu überwinden. Auf Wunsch bieten wir auch Behandlung unter Sedierung an.',
    },
    {
      question: 'Wie läuft die Erstberatung ab?',
      answer: 'Bei Ihrem ersten Besuch führen wir ein ausführliches Gespräch über Ihre Wünsche und Beschwerden. Es folgt eine gründliche Untersuchung mit moderner Diagnostik. Anschließend besprechen wir gemeinsam einen individuellen Behandlungsplan.',
    },
    {
      question: 'Gibt es Parkplätze in der Nähe?',
      answer: 'Ja, direkt vor der Praxis befinden sich Parkplätze. Alternativ ist die Praxis sehr gut mit der U-Bahn (Eppendorfer Baum) und mehreren Buslinien erreichbar.',
    },
    {
      question: 'Bieten Sie Notfalltermine an?',
      answer: 'Ja, für akute Beschwerden halten wir täglich Notfalltermine frei. Rufen Sie uns einfach an – wir helfen Ihnen schnellstmöglich.',
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Section Header */}
          <div className="lg:sticky lg:top-32">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Häufige Fragen</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Ihre Fragen, unsere Antworten
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Hier finden Sie Antworten auf die häufigsten Fragen. Bei weiteren Fragen sind wir gerne für Sie da.
            </p>
            <div className="bg-secondary/50 rounded-xl p-6">
              <p className="font-medium text-primary mb-2">Noch Fragen?</p>
              <p className="text-muted-foreground text-sm mb-4">
                Rufen Sie uns an – wir beraten Sie gerne persönlich.
              </p>
              <a
                href="tel:+4940123456789"
                className="text-accent font-semibold hover:underline"
              >
                040 123 456 789
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 shadow-card border-0"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
