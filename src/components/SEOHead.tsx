import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'FlowCraft',
    description:
      'FlowCraft erstellt moderne Websites & Landingpages für Zahnärzte und Dienstleister mit Fokus auf SEO, Struktur und Conversion.',
    url: 'https://www.flowcraft-digital.de',
    areaServed: {
      '@type': 'GeoCircle',
      name: 'Deutschland, Österreich, Schweiz (DACH)',
    },
    telephone: '+49 123 456789',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 1',
      addressLocality: 'München',
      postalCode: '80331',
      addressCountry: 'DE',
    },
    priceRange: '€€',
    serviceType: ['Webdesign', 'SEO', 'Landingpage-Erstellung'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie läuft ein Projekt ab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nach einem kurzen Kennenlernen analysiere ich Ihre aktuelle Situation und definiere gemeinsam mit Ihnen die Ziele. Dann erstelle ich ein Konzept mit Seitenstruktur und SEO-Strategie. Die Umsetzung erfolgt mit modernen KI-Tools, anschließend geht die Seite live und wird bei Bedarf optimiert.',
        },
      },
      {
        '@type': 'Question',
        name: 'Mit welchen Kosten sollte ich rechnen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Kosten hängen vom Umfang des Projekts ab. Eine fokussierte Landingpage startet bei ca. 1.500 €, eine komplette Website je nach Umfang ab ca. 3.000 €. In einem unverbindlichen Erstgespräch kann ich Ihnen eine realistische Einschätzung geben.',
        },
      },
      {
        '@type': 'Question',
        name: 'Brauche ich technische Vorkenntnisse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein, gar nicht. Ich kümmere mich um alles Technische – von der Einrichtung bis zum Launch. Sie müssen nur Ihre Inhalte und Wünsche mitbringen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie stark kommt KI zum Einsatz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KI-Tools wie lovable.dev helfen mir, schneller und effizienter zu arbeiten. Das Ergebnis ist aber immer individuell auf Sie zugeschnitten und wird von mir persönlich geprüft und optimiert.',
        },
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>FlowCraft – moderne Websites & Landingpages für Zahnärzte & Dienstleister</title>
      <meta
        name="description"
        content="FlowCraft erstellt mit KI moderne, schnelle und conversionstarke Websites & Landingpages für Zahnärzte und Dienstleister – mit Fokus auf SEO, Struktur & Nutzerfreundlichkeit."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.flowcraft-digital.de.de/" />

      {/* Open Graph / Social */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.flowcraft-digital.de/" />
      <meta
        property="og:title"
        content="FlowCraft – moderne Websites & Landingpages für Zahnärzte & Dienstleister"
      />
      <meta
        property="og:description"
        content="FlowCraft erstellt mit KI moderne, schnelle und conversionstarke Websites & Landingpages für Zahnärzte und Dienstleister."
      />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="FlowCraft – moderne Websites & Landingpages für Zahnärzte & Dienstleister"
      />
      <meta
        name="twitter:description"
        content="FlowCraft erstellt mit KI moderne, schnelle und conversionstarke Websites & Landingpages für Zahnärzte und Dienstleister."
      />

      {/* Language */}
      <html lang="de" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

export default SEOHead;
