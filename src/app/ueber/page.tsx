import { RechtsSeite } from '@/components/rechts-seite';

export const metadata = {
  title: 'Über OutNow — warum wir das bauen',
  description:
    'OutNow ist eine App von occuro. Wir bauen sie, damit Leute sich wieder treffen — nicht damit sie länger auf ein Display schauen.',
};

const ABSCHNITTE = [
  { id: 'warum', text: 'Warum wir das bauen' },
  { id: 'unterschied', text: 'Was uns unterscheidet' },
  { id: 'haltung', text: 'Woran wir uns halten' },
  { id: 'occuro', text: 'occuro' },
];

export default function UeberPage() {
  return (
    <RechtsSeite
      augenbraue="Über uns"
      titel="moments, together."
      vorspann="Warum es OutNow gibt — und was wir bewusst anders machen."
      abschnitte={ABSCHNITTE}
    >
      <section id="warum">
        <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4">
          Warum wir das bauen
        </h2>
        <p className="mb-4">
          Es gibt genug Apps, die dafür gebaut sind, dass man länger auf ein
          Display schaut. OutNow ist für das Gegenteil gebaut: dass man
          aufsteht und hingeht.
        </p>
        <p className="mb-4">
          Der Anlass war banal. Man sieht abends, dass Freunde irgendwo waren —
          am nächsten Tag, in einer Story, als es vorbei war. Die Information
          kommt immer zu spät, um noch dabei zu sein. Dabei wäre die Hürde oft
          nur ein Satz gewesen: <em>„Ich geh da hin, kommst du mit?"</em>
        </p>
        <p>
          Genau diesen Satz soll OutNow überflüssig machen. Nicht, weil Reden
          schlecht wäre — sondern weil man ihn viel zu selten schreibt.
        </p>
      </section>

      <section id="unterschied">
        <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4">
          Was uns unterscheidet
        </h2>
        <p className="mb-4">
          Andere Apps zeigen, was Leute <strong>gemacht haben</strong>. OutNow
          zeigt, wo sie <strong>hingehen</strong>. Das klingt nach einer
          Kleinigkeit, ändert aber alles: Aus einem Rückblick, bei dem man
          zusehen kann, wird eine Einladung, bei der man mitkommen kann.
        </p>
        <p className="mb-4">
          Deshalb gibt es hier keine Likes und keine endlose Liste. Es gibt eine
          Frage, die beantwortet wird: <em>Wo sind meine Leute — und was läuft
          hier am Wochenende?</em>
        </p>
        <p>
          Und wer gerade niemanden fragen möchte, bekommt trotzdem etwas: einen
          Kalender für die Gegend, in der er wohnt.
        </p>
      </section>

      <section id="haltung">
        <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4">
          Woran wir uns halten
        </h2>

        <h3 className="text-base font-semibold mt-6 mb-2">
          Standort gehört dem, der ihn teilt
        </h3>
        <p className="mb-4">
          Wer seinen Standort freigibt, wird nur seinen bestätigten Freunden
          angezeigt, nur während ein Event läuft, und nur wenn er wirklich dort
          ist. Ob das der Fall ist, prüft unser Server — die genauen
          Koordinaten bekommt niemand zu sehen. Abschalten geht jederzeit, mit
          einem Schalter.
        </p>

        <h3 className="text-base font-semibold mt-6 mb-2">
          Keine Aufmerksamkeitsfallen
        </h3>
        <p className="mb-4">
          Keine Serien, die man nicht abreißen lassen darf. Keine
          Benachrichtigung, die nur da ist, um die App noch einmal zu öffnen.
          Eine Nachricht schicken wir, wenn tatsächlich etwas passiert ist:
          jemand sagt zu, etwas fängt gleich an, ein Freund ist vor Ort.
        </p>

        <h3 className="text-base font-semibold mt-6 mb-2">
          Klein anfangen, richtig machen
        </h3>
        <p>
          Wir starten in Bayern statt überall. Eine Gegend, in der wirklich
          etwas los ist, ist mehr wert als eine Landkarte voller leerer Städte.
        </p>
      </section>

      <section id="occuro">
        <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4">
          occuro
        </h2>
        <p className="mb-4">
          <strong>occuro</strong> ist die Firma, <strong>OutNow</strong> die
          App. Wir sind ein sehr kleines Team aus Niederbayern — nah genug an
          den Leuten, für die wir das bauen, um zu merken, wenn etwas nicht
          funktioniert.
        </p>
        <p>
          Wenn Ihnen etwas auffällt, fehlt oder stört:{' '}
          <a
            href="mailto:support@occuroapp.com"
            className="underline underline-offset-4 hover:text-gold transition-colors"
          >
            support@occuroapp.com
          </a>
          . Das liest ein Mensch.
        </p>
      </section>
    </RechtsSeite>
  );
}
