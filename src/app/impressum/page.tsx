import { RechtsSeite } from '@/components/rechts-seite';

export const metadata = { title: 'Impressum — OutNow' };

const ABSCHNITTE = [
  { id: 'angaben', text: 'Angaben gemäß § 5 TMG' },
  { id: 'verantwortlich', text: 'Verantwortlich für den Inhalt' },
  { id: 'agb', text: 'Allgemeine Geschäftsbedingungen' },
  { id: 'streit', text: 'Streitschlichtung' },
];

export default function ImpressumPage() {
  return (
    <RechtsSeite
      augenbraue="Rechtliche Angaben"
      titel="Impressum & AGB"
      vorspann="Wer hinter OutNow steht, und unter welchen Bedingungen die App genutzt wird."
      abschnitte={ABSCHNITTE}
    >
          <section>
            <h2 id="angaben">Angaben gemäß § 5 TMG</h2>
            <p>
              occuro<br />
              Eggenfeldener Straße 32<br />
              94424 Arnstorf<br /><br />
              Vertreten durch: Samuel Hahn<br />
              E-Mail: <a href="mailto:support@occuroapp.com">support@occuroapp.com</a>
            </p>
          </section>

          <section>
            <h2 id="verantwortlich">Verantwortlich für den Inhalt</h2>
            <p>
              Verantwortlich für den Inhalt dieser App ist occuro.
              Bei Fragen oder Anregungen erreichst du uns unter{' '}
              <a href="mailto:support@occuroapp.com">support@occuroapp.com</a>.
            </p>
          </section>

          <hr className="border-line" />

          <section>
            <h2 id="agb">Allgemeine Geschäftsbedingungen</h2>

            <h3>1. Geltungsbereich</h3>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der App OutNow, betrieben von occuro, und der damit verbundenen Dienste.
              Mit der Registrierung und Nutzung der App akzeptierst du diese Bedingungen.
            </p>

            <h3>2. Leistungsbeschreibung</h3>
            <p>
              OutNow ermöglicht dir, Events zu entdecken, zu erstellen und zu verwalten, Freunde zu finden,
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

          <hr className="border-line" />

          <section>
            <h2 id="streit">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>.
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
    </RechtsSeite>
  );
}
