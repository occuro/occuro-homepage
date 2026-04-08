import Link from 'next/link';

export const metadata = { title: 'Impressum — occuro' };

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-white/40 hover:text-white transition-colors mb-10">
          &larr; Zurück
        </Link>

        <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-2">Impressum</h1>
        <p className="text-sm text-white/30 mb-10">AGB & rechtliche Angaben</p>

        <div className="space-y-10 text-[14px] text-white/60 leading-relaxed [&_h2]:text-lg [&_h2]:font-heading [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-3 [&_h2]:mt-0 [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-white/80 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:text-violet-400 [&_a]:hover:text-violet-300">
          <section>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              occuro<br />
              Eggenfeldener Straße 32<br />
              94424 Arnstorf<br /><br />
              Vertreten durch: Samuel Hahn<br />
              E-Mail: <a href="mailto:support@occuroapp.com">support@occuroapp.com</a>
            </p>
          </section>

          <section>
            <h2>Verantwortlich für den Inhalt</h2>
            <p>
              Verantwortlich für den Inhalt dieser App ist occuro.
              Bei Fragen oder Anregungen erreichst du uns unter{' '}
              <a href="mailto:support@occuroapp.com">support@occuroapp.com</a>.
            </p>
          </section>

          <hr className="border-white/[0.06]" />

          <section>
            <h2>Allgemeine Geschäftsbedingungen</h2>

            <h3>1. Geltungsbereich</h3>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der occuro App und der damit verbundenen Dienste.
              Mit der Registrierung und Nutzung der App akzeptierst du diese Bedingungen.
            </p>

            <h3>2. Leistungsbeschreibung</h3>
            <p>
              occuro ermöglicht dir, Events zu entdecken, zu erstellen und zu verwalten, Freunde zu finden,
              Tickets hochzuladen und Veranstalter zu folgen. Die genauen Funktionen können sich im Laufe der Zeit ändern.
            </p>

            <h3>3. Registrierung und Konto</h3>
            <p>
              Für die Nutzung der App ist eine Registrierung erforderlich. Du verpflichtest dich, wahrheitsgemäße Angaben zu machen
              und dein Konto vor unbefugtem Zugriff zu schützen. Du bist für alle Aktivitäten unter deinem Konto verantwortlich.
            </p>

            <h3>4. Nutzungsregeln</h3>
            <p>
              Du verpflichtest dich, die App nur rechtmäßig zu nutzen und keine Inhalte zu verbreiten, die gegen geltendes Recht
              oder die Nutzungsrichtlinien verstoßen. Wir behalten uns vor, bei Verstößen Konten zu sperren oder zu löschen.
            </p>

            <h3>5. Haftung</h3>
            <p>
              Soweit gesetzlich zulässig, haften wir nicht für indirekte Schäden oder entgangenen Gewinn.
              Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Für Schäden durch leichte Fahrlässigkeit
              haften wir nur bei Verletzung wesentlicher Vertragspflichten.
            </p>
          </section>

          <hr className="border-white/[0.06]" />

          <section>
            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>.
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex gap-4 text-[13px] text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
        </div>
      </div>
    </main>
  );
}
