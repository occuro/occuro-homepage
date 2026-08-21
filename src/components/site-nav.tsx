import { Globe, Download } from 'lucide-react';
import { OutNowWordmark } from './outnow-wordmark';
import { APP_STORE_URL, WEB_APP_URL } from '@/lib/links';

/**
 * Die Kopfleiste der ganzen Seite.
 *
 * WARUM ALS EIGENES BAUTEIL: Sie stand nur in page.tsx. Impressum und
 * Datenschutz hatten stattdessen einen nackten Textlink „← Zurück" — wer
 * dorthin klickte, verliess die Seite optisch vollstaendig: kein Zeichen,
 * kein Wortzeichen, kein Weg zur Web-App. Auf einer Rechtsseite ist genau
 * das falsch, weil dort die Frage „bin ich hier richtig?" am haeufigsten
 * gestellt wird.
 *
 * DIE ANKER SIND DER GRUND FUER `aufStartseite`: Auf der Startseite zeigen
 * die drei Reiter auf Abschnitte derselben Seite (`#die-app`), von einer
 * Unterseite aus muessen sie erst zurueckfuehren (`/#die-app`). Ohne die
 * Unterscheidung landet man auf `/impressum#die-app` — einer Stelle, die es
 * nicht gibt, und die Seite ruehrt sich nicht.
 */
const REITER = [
  { ziel: '#unterschied', text: 'Der Unterschied' },
  { ziel: '#die-app', text: 'Die App' },
  // Als eigene Seite, nicht als Sprungmarke: Sie steht fuer sich und soll
  // auch aus einer Suche heraus erreichbar sein.
  { ziel: '/ueber', text: 'Über uns', eigeneSeite: true },
  { ziel: '#news', text: 'Verlauf' },
];

export function SiteNav({ aufStartseite = false }: { aufStartseite?: boolean }) {
  const vor = aufStartseite ? '' : '/';
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-page/80 border-b border-line">
      <div className="relative max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <a href={aufStartseite ? '#' : '/'} className="flex items-center gap-2">
          <OutNowWordmark size={20} layout="row" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-[13px] text-ink-2 absolute left-1/2 -translate-x-1/2">
          {REITER.map((r) => (
            <a
              key={r.ziel}
              href={'eigeneSeite' in r && r.eigeneSeite ? r.ziel : `${vor}${r.ziel}`}
              className="hover:text-gold transition-colors"
            >
              {r.text}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={WEB_APP_URL}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold bg-gold text-page hover:bg-gold-satt transition-all"
          >
            <Globe size={14} /> Web-App
          </a>
          {/* Nur auf Telefon und Tablet: Am Schreibtisch fuehrt der App-Store-Link
              ins Leere — dort gehoert der Nutzer in die Web-App. */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-[12px] sm:text-[13px] font-medium bg-btn text-btn-ink hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            <Download size={14} /> Download
          </a>
        </div>
      </div>
    </nav>
  );
}
