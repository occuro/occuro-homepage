import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/links';

/**
 * Die Sitemap.
 *
 * WARUM SIE FEHLTE UND WARUM SIE ZAEHLT: Google findet eine neue Seite auch
 * ohne — aber deutlich langsamer und ohne zu wissen, welche Adresse die
 * wichtigste ist. Bei einer Marke wie „OutNow", die als gewoehnliche
 * Wortfolge („out now") mit tausenden Musikveroeffentlichungen konkurriert,
 * ist genau das der Unterschied zwischen Platz eins und Seite zwei.
 *
 * Die Startseite steht auf Prioritaet 1, die Rechtsseiten weit darunter:
 * Impressum und Datenschutz sollen bei einer Markensuche NICHT vor der
 * Startseite stehen — was ohne Angabe durchaus vorkommt, weil ihr Text
 * laenger und eindeutiger ist als der einer Startseite.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const stand = new Date();
  return [
    { url: SITE_URL, lastModified: stand, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/ueber`, lastModified: stand, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/impressum`, lastModified: stand, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/datenschutz`, lastModified: stand, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
