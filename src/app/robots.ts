import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/links';

/**
 * robots.txt.
 *
 * Ohne diese Datei erhaelt jeder Suchdienst eine 404 auf /robots.txt. Das
 * blockiert zwar nichts, aber der Verweis auf die Sitemap fehlt — und genau
 * ueber diesen Verweis findet ein Suchdienst sie, ohne dass jemand sie in
 * einem Werkzeug einreicht.
 *
 * /auth/ bleibt draussen: Das ist die Rueckleitung nach der Anmeldung, kein
 * Inhalt. Indexiert waere sie nur ein Treffer, der beim Anklicken nichts tut.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/auth/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
