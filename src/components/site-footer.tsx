import { Mail } from 'lucide-react';
import { OutNowWordmark } from './outnow-wordmark';
import { APP_STORE_URL, WEB_APP_URL } from '@/lib/links';

/**
 * Der Fuss der ganzen Seite.
 *
 * Aus denselben Gruenden ausgelagert wie die Kopfleiste (siehe site-nav.tsx),
 * mit demselben Anker-Vorbehalt: `aufStartseite` entscheidet, ob „Der
 * Unterschied" auf denselben Abschnitt zeigt oder erst zur Startseite fuehrt.
 *
 * DAS JAHR steht bewusst als `new Date().getFullYear()` und nicht fest im
 * Text — eine Jahreszahl, die im Januar veraltet, ist das erste, woran man
 * eine ungepflegte Seite erkennt.
 */
export function SiteFooter({ aufStartseite = false }: { aufStartseite?: boolean }) {
  const vor = aufStartseite ? '' : '/';
  return (
    <footer className="border-t border-line py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <OutNowWordmark size={16} layout="row" />
          </div>
          <p className="text-[12px] text-ink-2 leading-relaxed">
            Events entdecken,<br />Momente teilen.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-medium text-ink-3 uppercase tracking-wider mb-3">Produkt</p>
          <div className="space-y-2 text-[13px] text-ink-2">
            <a href={APP_STORE_URL} className="block hover:text-ink transition-colors">Download</a>
            <a href={`${vor}#unterschied`} className="block hover:text-gold transition-colors">Der Unterschied</a>
            <a href={WEB_APP_URL} className="block hover:text-ink transition-colors">Web-App</a>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-medium text-ink-3 uppercase tracking-wider mb-3">Rechtliches</p>
          <div className="space-y-2 text-[13px] text-ink-2">
            <a href="/impressum" className="block hover:text-ink transition-colors">Impressum</a>
            <a href="/datenschutz" className="block hover:text-ink transition-colors">Datenschutz</a>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-medium text-ink-3 uppercase tracking-wider mb-3">Kontakt</p>
          <a href="mailto:support@occuroapp.com" className="flex items-center gap-1.5 text-[13px] text-ink-2 hover:text-ink transition-colors">
            <Mail size={13} /> support@occuroapp.com
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-line text-center text-[11px] text-ink-3">
        &copy; {new Date().getFullYear()} occuro
      </div>
    </footer>
  );
}
