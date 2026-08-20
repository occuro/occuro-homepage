import type { Metadata } from 'next';
import './globals.css';

// metadataBase anchors every relative URL Next.js builds (OG/Twitter
// image paths most importantly), so WhatsApp / iMessage / Slack get
// absolute URLs they can fetch. Change this when the domain moves.
import { SITE_URL, APP_STORE_URL, WEB_APP_URL } from '@/lib/links';

/**
 * TITEL UND BESCHREIBUNG SIND HIER SUCHMASCHINENARBEIT, keine Poesie.
 *
 * Das Problem der Marke: „OutNow" ist als Wortfolge („out now") mit
 * zehntausenden Musikveroeffentlichungen belegt. Wer den Namen eingibt,
 * bekommt ohne Zutun Plattencover. Dagegen hilft nur Eindeutigkeit —
 * Markenname ZUERST, dann die Gattung, dann der Nutzen. Und in der
 * Beschreibung beide Namen, „OutNow" und „occuro", weil nach beiden gesucht
 * wird und Google sie sonst nicht miteinander verbindet.
 */
const SITE_TITLE = 'OutNow – Event-App: sieh, wo deine Freunde hingehen';
const SITE_DESCRIPTION =
  'OutNow ist die Event-App von occuro: Finde Events in deiner Nähe, sieh welche Freunde hingehen und wer gerade vor Ort ist. Für iPhone und im Browser.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  // OpenGraph image is generated programmatically via
  // `src/app/opengraph-image.tsx` — Next.js wires it up at build time.
  // We only spell out the non-image fields here.
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'OutNow',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  // Ohne Canonical entscheidet Google selbst, welche Schreibweise der Adresse
  // die massgebliche ist — mit oder ohne www, mit oder ohne Schraegstrich.
  // Verteilt sich die Wertung auf mehrere Varianten, rankt keine davon gut.
  alternates: { canonical: '/' },
  applicationName: 'OutNow',
  keywords: [
    'OutNow', 'OutNow App', 'occuro', 'Event App', 'Events in der Nähe',
    'Veranstaltungen Bayern', 'Freunde Events', 'Volksfeste', 'Event Kalender',
  ],
  category: 'events',
  // Nachweis fuer die Google Search Console. Next erzeugt daraus
  // <meta name="google-site-verification" content="..."> im <head>.
  //
  // Die Datei public/google8d05f155ff5d25c8.html liegt zusaetzlich daneben —
  // Google bietet beide Wege an, und welchen es prueft, entscheidet es
  // selbst. Beide kosten nichts, also stehen beide da.
  //
  // BEIDES MUSS BLEIBEN: Google prueft den Nachweis in unregelmaessigen
  // Abstaenden erneut. Wer das hier spaeter fuer "Altlast" haelt und
  // aufraeumt, verliert den Zugang zur Search Console — und merkt es erst,
  // wenn die Daten fehlen.
  verification: { google: 'ODlRGq3-1jVjgT3VgzrW5WVI3rEvVh9Im0AEo-ImdOs' },
  robots: { index: true, follow: true },
};

/**
 * STRUKTURIERTE DATEN — der wirksamste Hebel bei einer Markensuche.
 *
 * Titel und Text sagen Google, worum es geht. Diese Angaben sagen ihm, WAS
 * die Seite IST: eine Anwendung namens OutNow, herausgegeben von occuro, mit
 * dieser Adresse als offizieller Quelle. Genau daraus baut Google die
 * Wissenskarte rechts neben den Treffern — und wer die hat, steht bei seinem
 * eigenen Namen nicht mehr hinter fremden Plattencovern.
 *
 * `alternateName` faengt die Schreibweisen ab, die Leute tatsaechlich
 * eintippen: getrennt, kleingeschrieben, oder gleich der Firmenname.
 */
const STRUKTURDATEN = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organisation`,
      name: 'occuro',
      alternateName: 'OutNow',
      url: SITE_URL,
      email: 'support@occuroapp.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Eggenfeldener Straße 32',
        postalCode: '94424',
        addressLocality: 'Arnstorf',
        addressCountry: 'DE',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'OutNow',
      alternateName: ['OutNow App', 'Out Now', 'outnow', 'occuro', 'OutNow Events'],
      url: SITE_URL,
      inLanguage: 'de-DE',
      publisher: { '@id': `${SITE_URL}/#organisation` },
    },
    {
      '@type': 'MobileApplication',
      '@id': `${SITE_URL}/#app`,
      name: 'OutNow',
      alternateName: 'OutNow – Events entdecken',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'iOS',
      url: SITE_URL,
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      softwareHelp: WEB_APP_URL,
      inLanguage: ['de-DE', 'en'],
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organisation` },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col bg-page text-ink">
        {children}
        {/* Vor dem schliessenden body, damit es das Zeichnen der Seite nicht
            aufhaelt — gelesen wird es von Suchdiensten trotzdem vollstaendig. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUKTURDATEN) }}
        />
      </body>
    </html>
  );
}
