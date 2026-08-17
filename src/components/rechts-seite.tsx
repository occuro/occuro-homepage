'use client';

import { useEffect, useState } from 'react';
import { SiteNav } from './site-nav';
import { SiteFooter } from './site-footer';
import { GoldMesh } from './gold-mesh';

/**
 * Der Rahmen fuer Impressum und Datenschutz.
 *
 * WAS VORHER FEHLTE: Beide Seiten waren eine Textspalte mit einem nackten
 * „← Zurück" darueber. Farbe und Schrift stimmten schon, aber die Huelle
 * fehlte — keine Kopfleiste, kein Fuss, kein Weg zur Web-App. Wer vom Fuss
 * der Startseite dorthin klickte, landete auf etwas, das aussah wie ein
 * anderes Projekt. Auf genau diesen Seiten fragt man sich aber besonders oft,
 * ob man noch beim richtigen Anbieter ist.
 *
 * WARUM DAS PUNKTFELD AUCH HIER STEHT, nur leiser: Es ist das Erkennungs-
 * zeichen der Startseite. Ein Rechtstext braucht keine Schauflaeche, deshalb
 * laeuft es nur im Kopfband und auf 70 Prozent Staerke — genug, um die Seite
 * zuzuordnen, zu wenig, um vom Lesen abzulenken. (45 Prozent waren zu leise:
 * die Grunddeckkraft liegt bei 10 Prozent, davon 45 Prozent sind 4,5 — in
 * Ruhe unsichtbar, und das Feld waere nur beim Hovern ueberhaupt da.)
 *
 * DAS INHALTSVERZEICHNIS erscheint erst ab `xl` und nur, wenn Abschnitte
 * uebergeben werden. Die Datenschutzerklaerung hat DREIZEHN davon; ohne
 * Verzeichnis findet niemand „Live-Standort" oder „Konto-Löschung", ohne
 * die ganze Seite zu durchsuchen. Das Impressum hat vier und braucht keins.
 */
export function RechtsSeite({
  augenbraue,
  titel,
  vorspann,
  abschnitte,
  children,
}: {
  /** Kleine Zeile ueber dem Titel, in Gold und Versalien. */
  augenbraue: string;
  titel: string;
  /** Ein Satz darunter, der einordnet, worum es geht. */
  vorspann?: string;
  /** Fuer das Verzeichnis: Sprungmarke und Beschriftung je Abschnitt. */
  abschnitte?: { id: string; text: string }[];
  children: React.ReactNode;
}) {
  const aktiv = useAktiverAbschnitt(abschnitte);

  return (
    <div className="flex flex-col min-h-screen bg-page text-ink">
      <SiteNav />

      {/* ─── KOPFBAND ─── */}
      <header className="relative overflow-hidden border-b border-line pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6">
        <GoldMesh variante="zeiger" staerke={0.7} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-[11.5px] font-semibold text-gold uppercase tracking-[0.18em] mb-4">
            {augenbraue}
          </p>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold tracking-[-0.012em] leading-[1.08]">
            {titel}
          </h1>
          {vorspann ? (
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-base text-ink-2 leading-relaxed max-w-xl">
              {vorspann}
            </p>
          ) : null}
        </div>
      </header>

      {/* ─── INHALT ─── */}
      <main className="flex-1 px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto flex gap-14">
          {abschnitte?.length ? (
            <nav className="hidden xl:block w-56 shrink-0" aria-label="Abschnitte">
              <div className="sticky top-28">
                <p className="text-[11px] font-medium text-ink-3 uppercase tracking-wider mb-4">
                  Inhalt
                </p>
                <ul className="space-y-1.5">
                  {abschnitte.map((a) => (
                    <li key={a.id}>
                      <a
                        href={`#${a.id}`}
                        /* Der senkrechte Strich links markiert die Stelle, an
                           der man gerade liest — dieselbe Rolle wie die
                           goldene Kugel im Verlauf auf der Startseite. */
                        className={`block border-l-2 pl-3 py-0.5 text-[12.5px] leading-snug transition-colors ${
                          aktiv === a.id
                            ? 'border-gold text-gold'
                            : 'border-line text-ink-3 hover:text-ink-2 hover:border-line-strong'
                        }`}
                      >
                        {a.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          ) : null}

          {/* Die Lesespalte bleibt bei rund 70 Zeichen — laenger wird ein
              Rechtstext unlesbar, und genau der wird ohnehin ungern gelesen. */}
          <div
            className="
              max-w-2xl w-full space-y-12 text-[14.5px] text-ink-2 leading-[1.75]
              [&_h2]:text-xl [&_h2]:font-heading [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mb-3 [&_h2]:mt-0 [&_h2]:scroll-mt-28
              [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mb-2 [&_h3]:mt-6
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5
              [&_p+p]:mt-3
              [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-gold/40 hover:[&_a]:decoration-gold
              [&_hr]:border-line
            "
          >
            {children}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

/**
 * Welcher Abschnitt gerade gelesen wird.
 *
 * `rootMargin` schneidet oben 20 Prozent und unten 70 Prozent des Fensters
 * weg. Damit gilt als „gerade gelesen", was im oberen Drittel steht — nicht,
 * was gerade irgendwo am Rand auftaucht. Ohne diesen Zuschnitt springt die
 * Markierung beim Scrollen zwischen zwei Eintraegen hin und her.
 */
function useAktiverAbschnitt(abschnitte?: { id: string }[]) {
  const [aktiv, setAktiv] = useState<string | null>(null);

  useEffect(() => {
    if (!abschnitte?.length) return;
    const knoten = abschnitte
      .map((a) => document.getElementById(a.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!knoten.length) return;

    const beobachter = new IntersectionObserver(
      (eintraege) => {
        const sichtbar = eintraege.filter((e) => e.isIntersecting);
        if (!sichtbar.length) return;
        // Der oberste der sichtbaren gewinnt.
        sichtbar.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setAktiv(sichtbar[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );
    knoten.forEach((n) => beobachter.observe(n));
    return () => beobachter.disconnect();
  }, [abschnitte]);

  return aktiv;
}
