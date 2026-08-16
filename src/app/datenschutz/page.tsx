import Link from 'next/link';

export const metadata = { title: 'Datenschutz — OutNow' };

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-page text-ink px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-ink-3 hover:text-gold transition-colors mb-10">
          &larr; Zurück
        </Link>

        <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-[-0.012em] mb-2">Datenschutzerklärung</h1>
        <p className="text-sm text-ink-3 mb-10">Stand: 19. März 2026</p>

        <div className="space-y-10 text-[14px] text-ink-2 leading-relaxed [&_h2]:text-lg [&_h2]:font-heading [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mb-3 [&_h2]:mt-0 [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-gold/40 [&_a]:hover:decoration-gold [&_table]:w-full [&_table]:text-[13px] [&_th]:text-left [&_th]:text-ink-3 [&_th]:pb-2 [&_th]:pr-4 [&_td]:py-2 [&_td]:pr-4 [&_td]:border-t [&_td]:border-line">
          <section>
            <h2>1. Verantwortlicher</h2>
            <p>
              occuro<br />
              Eggenfeldener Straße 32<br />
              94424 Arnstorf<br /><br />
              Vertreten durch: Samuel Hahn<br />
              E-Mail: <a href="mailto:support@occuroapp.com">support@occuroapp.com</a>
            </p>
          </section>

          <section>
            <h2>2. Welche Daten wir erheben</h2>
            <p>Bei der Nutzung von OutNow (App und Website) erheben wir folgende Daten:</p>

            <h3>2.1 Registrierung & Profil</h3>
            <ul>
              <li>E-Mail-Adresse, Passwort (verschlüsselt)</li>
              <li>Benutzername, vollständiger Name</li>
              <li>Profilbild, Banner-Bild (freiwillig)</li>
              <li>Biografie, Standort, Geburtsdatum (freiwillig)</li>
              <li>Kontotyp (Einzelperson, Veranstalter, Künstler)</li>
              <li>Website, Instagram (freiwillig, bei Veranstaltern/Künstlern)</li>
            </ul>

            <h3>2.2 Events</h3>
            <ul>
              <li>Von dir erstellte Events (Titel, Beschreibung, Ort, Datum, Bilder)</li>
              <li>Event-Teilnahme (interessiert, bestätigt)</li>
              <li>Gespeicherte Events</li>
            </ul>

            <h3>2.3 Soziale Funktionen</h3>
            <ul>
              <li>Freundschaftsanfragen und -verbindungen</li>
              <li>Chat-Nachrichten (Inhalt, Zeitpunkt, Beteiligte)</li>
              <li>Veranstalter-Follows</li>
              <li>Blockierte Nutzer, Meldungen</li>
            </ul>

            <h3>2.4 Standort</h3>
            <ul>
              <li>GPS-Standort (nur bei expliziter Freigabe durch dich)</li>
              <li>Manuell eingegebener Ort</li>
              <li>Standortdaten werden zur Anzeige nahegelegener Events verwendet</li>
            </ul>

            <h3>2.6 Verifizierung von Veranstaltern</h3>
            <p>
              Wenn du dein Konto als Veranstalter verifizieren l&auml;sst, laden wir das von dir
              gew&auml;hlte Nachweisdokument hoch. Zur Auswahl stehen:
            </p>
            <ul>
              <li>Gewerbeanmeldung</li>
              <li>Gewerbeerlaubnis oder Konzession</li>
              <li>Ausweisdokument</li>
              <li>ein sonstiger Nachweis deiner Wahl</li>
            </ul>
            <p>
              Diese Dokumente dienen ausschlie&szlig;lich der einmaligen Pr&uuml;fung deiner
              Veranstaltereigenschaft. Sie sind <strong>nicht &ouml;ffentlich</strong> und nur f&uuml;r
              die pr&uuml;fenden Administratoren einsehbar. Sie werden <strong>nicht</strong> an die
              automatische Inhaltspr&uuml;fung (Abschnitt 5) &uuml;bergeben.
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserf&uuml;llung)
              sowie berechtigtes Interesse an der Echtheit von Veranstalterprofilen.
            </p>

            <h3>2.5 Technische Daten</h3>
            <ul>
              <li>Push-Notification-Token (für Benachrichtigungen)</li>
              <li>Gerätetyp, Betriebssystem (automatisch durch App-Stores)</li>
            </ul>
          </section>

          <section>
            <h2>3. Zweck der Datenverarbeitung</h2>
            <ul>
              <li>Bereitstellung der App-Funktionen (Events, Profil, Chat, Freunde)</li>
              <li>Authentifizierung und Kontosicherheit</li>
              <li>Anzeige relevanter Events basierend auf Standort und Interessen</li>
              <li>Versand von Push-Benachrichtigungen (Event-Updates, Nachrichten)</li>
              <li>Verifizierung von Veranstaltern und Künstlern</li>
              <li>Moderation und Schutz vor Missbrauch</li>
            </ul>
          </section>

          <section>
            <h2>4. Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung — Bereitstellung des Dienstes),
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung — z.B. Standort, Push-Notifications) und
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse — Sicherheit, Missbrauchsschutz).
            </p>
          </section>

          <section>
            <h2>5. Drittanbieter und Auftragsverarbeiter</h2>
            <p>Wir nutzen folgende Dienste zur Bereitstellung von OutNow:</p>
            <table>
              <thead>
                <tr><th>Dienst</th><th>Zweck</th><th>Serverstandort</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Supabase</strong></td><td>Auth, Datenbank, Speicher</td><td>Frankfurt (AWS eu-central-1)</td></tr>
                <tr><td><strong>Vercel</strong></td><td>Website-Hosting</td><td>EU / Edge</td></tr>
                <tr><td><strong>Expo</strong></td><td>Push-Benachrichtigungen</td><td>USA</td></tr>
                <tr><td><strong>OpenAI</strong></td><td>Automatische Pr&uuml;fung von Texten und Bildern auf unzul&auml;ssige Inhalte, Pr&uuml;fung hochgeladener Tickets</td><td>USA</td></tr>
                <tr><td><strong>Nominatim / OSM</strong></td><td>Ortssuche / Geocoding</td><td>EU</td></tr>
                <tr><td><strong>Apple / Google</strong></td><td>App-Distribution</td><td>Global</td></tr>
              </tbody>
            </table>
            <p>
              Bei Übermittlung in die USA erfolgt diese auf Basis des EU-US Data Privacy Framework
              bzw. Standardvertragsklauseln (Art. 46 DSGVO).
            </p>
            <p>
              <strong>Automatische Inhaltspr&uuml;fung.</strong> Bevor Texte und Bilder
              ver&ouml;ffentlicht werden, pr&uuml;ft ein Dienst von OpenAI sie automatisch auf
              unzul&auml;ssige Inhalte. Betroffen sind Eventtitel und -beschreibungen, Namen und
              Benutzernamen bei der Registrierung sowie hochgeladene Profil-, Titel- und
              Eventbilder. Wer ein Ticket hochl&auml;dt, dessen Foto wird zus&auml;tzlich daraufhin
              gepr&uuml;ft, ob es zum Event passt.
            </p>
            <p>
              Diese Pr&uuml;fung l&auml;uft <strong>automatisiert und ohne menschliches Zutun</strong>.
              Schl&auml;gt sie an, wird der Inhalt abgelehnt und nicht ver&ouml;ffentlicht. H&auml;ltst
              du eine Ablehnung f&uuml;r falsch, wende dich an{' '}
              <a href="mailto:support@occuroapp.com">support@occuroapp.com</a> &mdash; wir sehen sie
              uns von Hand an. <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse am Schutz der Nutzer vor rechtswidrigen Inhalten).
            </p>
          </section>

          <section>
            <h2>6. Datensicherheit und Chat-Inhalte</h2>
            <p>
              Die Verbindung zwischen App und unseren Servern ist durchgehend
              mit TLS verschlüsselt. Beim Hosting-Dienstleister werden die Daten
              verschlüsselt gespeichert. Welche Daten ein Konto sehen darf, ist
              serverseitig geregelt — ein Nutzer kann keine fremden Chats
              abrufen.
            </p>
            <p>
              <strong>Chat-Nachrichten sind nicht Ende-zu-Ende verschlüsselt.</strong>{' '}
              Das bedeutet: Wir könnten technisch auf Chat-Inhalte zugreifen.
              Im laufenden Betrieb tun wir das nicht. Ein Zugriff erfolgt nur,
              wenn eine Nachricht gemeldet wird und wir den Vorwurf prüfen
              müssen, oder wenn wir gesetzlich dazu verpflichtet sind.
            </p>
            <p>
              Wir nennen das ausdrücklich, weil „Ende-zu-Ende-Verschlüsselung"
              ein anderes Versprechen wäre: Bei ihr könnten ausschließlich die
              Beteiligten mitlesen, auch wir nicht. Das setzen wir derzeit nicht
              ein.
            </p>

            <h2>7. Speicherdauer</h2>
            <ul>
              <li>Profildaten: bis zur Löschung deines Kontos</li>
              <li>Events: bis zur Löschung durch den Ersteller oder 12 Monate nach Ablauf</li>
              <li>Chat-Nachrichten: bis zur Löschung durch dich oder Konto-Löschung</li>
              <li>Standortdaten: nur solange &bdquo;Live-Standort teilen&ldquo; aktiv ist. Der Wert wird alle drei Minuten überschrieben und beim Abschalten, beim Abmelden sowie bei der Konto-Löschung gelöscht</li>
              <li>Push-Token: bis zum Widerruf oder zur Konto-Löschung</li>
            </ul>
          </section>

          <section>
            <h2>8. Deine Rechte</h2>
            <p>Du hast jederzeit das Recht auf:</p>
            <ul>
              <li><strong>Auskunft</strong> (Art. 15 DSGVO) — welche Daten wir über dich speichern</li>
              <li><strong>Berichtigung</strong> (Art. 16 DSGVO) — Korrektur falscher Daten</li>
              <li><strong>Löschung</strong> (Art. 17 DSGVO) — Löschung deiner Daten und deines Kontos</li>
              <li><strong>Einschränkung</strong> (Art. 18 DSGVO) — Einschränkung der Verarbeitung</li>
              <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO) — Export deiner Daten</li>
              <li><strong>Widerspruch</strong> (Art. 21 DSGVO) — gegen die Verarbeitung</li>
              <li><strong>Widerruf der Einwilligung</strong> — jederzeit mit Wirkung für die Zukunft</li>
            </ul>
            <p>Kontaktiere uns unter <a href="mailto:support@occuroapp.com">support@occuroapp.com</a> zur Ausübung deiner Rechte.</p>
          </section>

          <section>
            <h2>9. Konto-Löschung</h2>
            <p>
              Du kannst dein Konto jederzeit in der App unter Profil &rarr; Einstellungen &rarr; Konto löschen entfernen.
              Dabei werden alle deine personenbezogenen Daten unwiderruflich gelöscht.
            </p>
          </section>

          <section>
            <h2>10. Live-Standort (optional)</h2>
            <p>
              Wenn du &bdquo;Live-Standort teilen&ldquo; in den App-Einstellungen aktivierst, wird dein Standort
              im Hintergrund erfasst und mit deinen Freunden geteilt — ausschließlich um anzuzeigen,
              ob du gerade bei einem Event bist.
            </p>
            <ul>
              <li>Dein Standort wird <strong>nur gespeichert</strong> solange die Funktion aktiv ist</li>
              <li>Bei Deaktivierung oder Abmeldung wird dein Standort <strong>automatisch gelöscht</strong></li>
              <li>Dein <strong>genauer Standort</strong> wird anderen Nutzern <strong>nie</strong> angezeigt — es wird nur geprüft ob du dich innerhalb von 500m eines laufenden Events befindest</li>
              <li>Nur bestätigte Freunde können sehen, dass du bei einem Event bist</li>
              <li>Angezeigt wirst du nur, wenn du dem Event <strong>zugesagt</strong> hast — wer ohne Zusage vorbeikommt, taucht nicht auf</li>
              <li>Der zuletzt bekannte Standort gilt noch <strong>bis zu zwei Stunden</strong> weiter, damit ein kurzes Schließen der App dich nicht sofort verschwinden lässt</li>
            </ul>
            <p>
              <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              Du kannst die Einwilligung jederzeit widerrufen, indem du die Funktion in den Einstellungen deaktivierst.
            </p>
          </section>

          <section>
            <h2>11. Cookies</h2>
            <p>
              Die OutNow-Website verwendet keine Tracking-Cookies und kein Analytics.
              Es werden nur technisch notwendige Cookies für die Funktion der Website gesetzt.
            </p>
          </section>

          <section>
            <h2>12. Beschwerderecht</h2>
            <p>
              Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              Zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA),
              Promenade 18, 91522 Ansbach.
            </p>
          </section>

          <section>
            <h2>13. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.
              Die aktuelle Version ist stets hier abrufbar.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-line flex gap-4 text-[13px] text-ink-3">
          <Link href="/" className="hover:text-ink transition-colors">Startseite</Link>
          <Link href="/impressum" className="hover:text-ink transition-colors">Impressum</Link>
        </div>
      </div>
    </main>
  );
}
