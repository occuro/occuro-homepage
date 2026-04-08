import Link from 'next/link';

export const metadata = { title: 'Datenschutz — occuro' };

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-white/40 hover:text-white transition-colors mb-10">
          &larr; Zurück
        </Link>

        <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-2">Datenschutzerklärung</h1>
        <p className="text-sm text-white/30 mb-10">Stand: 19. März 2026</p>

        <div className="space-y-10 text-[14px] text-white/60 leading-relaxed [&_h2]:text-lg [&_h2]:font-heading [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-3 [&_h2]:mt-0 [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-white/80 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:text-violet-400 [&_a]:hover:text-violet-300 [&_table]:w-full [&_table]:text-[13px] [&_th]:text-left [&_th]:text-white/50 [&_th]:pb-2 [&_th]:pr-4 [&_td]:py-2 [&_td]:pr-4 [&_td]:border-t [&_td]:border-white/[0.06]">
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
            <p>Bei der Nutzung von occuro (App und Website) erheben wir folgende Daten:</p>

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
              <li>Chat-Nachrichten (Ende-zu-Ende zwischen App und Server)</li>
              <li>Veranstalter-Follows</li>
              <li>Blockierte Nutzer, Meldungen</li>
            </ul>

            <h3>2.4 Standort</h3>
            <ul>
              <li>GPS-Standort (nur bei expliziter Freigabe durch dich)</li>
              <li>Manuell eingegebener Ort</li>
              <li>Standortdaten werden zur Anzeige nahegelegener Events verwendet</li>
            </ul>

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
            <p>Wir nutzen folgende Dienste zur Bereitstellung von occuro:</p>
            <table>
              <thead>
                <tr><th>Dienst</th><th>Zweck</th><th>Serverstandort</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Supabase</strong></td><td>Auth, Datenbank, Speicher</td><td>Frankfurt (AWS eu-central-1)</td></tr>
                <tr><td><strong>Vercel</strong></td><td>Website-Hosting</td><td>EU / Edge</td></tr>
                <tr><td><strong>Expo</strong></td><td>Push-Benachrichtigungen</td><td>USA</td></tr>
                <tr><td><strong>Nominatim / OSM</strong></td><td>Ortssuche / Geocoding</td><td>EU</td></tr>
                <tr><td><strong>Apple / Google</strong></td><td>App-Distribution</td><td>Global</td></tr>
              </tbody>
            </table>
            <p>
              Bei Übermittlung in die USA erfolgt diese auf Basis des EU-US Data Privacy Framework
              bzw. Standardvertragsklauseln (Art. 46 DSGVO).
            </p>
          </section>

          <section>
            <h2>6. Speicherdauer</h2>
            <ul>
              <li>Profildaten: bis zur Löschung deines Kontos</li>
              <li>Events: bis zur Löschung durch den Ersteller oder 12 Monate nach Ablauf</li>
              <li>Chat-Nachrichten: bis zur Löschung durch dich oder Konto-Löschung</li>
              <li>Standortdaten: werden nicht dauerhaft gespeichert, nur für die aktuelle Sitzung</li>
              <li>Push-Token: bis zum Widerruf oder zur Konto-Löschung</li>
            </ul>
          </section>

          <section>
            <h2>7. Deine Rechte</h2>
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
            <h2>8. Konto-Löschung</h2>
            <p>
              Du kannst dein Konto jederzeit in der App unter Profil &rarr; Einstellungen &rarr; Konto löschen entfernen.
              Dabei werden alle deine personenbezogenen Daten unwiderruflich gelöscht.
            </p>
          </section>

          <section>
            <h2>9. Live-Standort (optional)</h2>
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
            </ul>
            <p>
              <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              Du kannst die Einwilligung jederzeit widerrufen, indem du die Funktion in den Einstellungen deaktivierst.
            </p>
          </section>

          <section>
            <h2>10. Cookies</h2>
            <p>
              Die occuro-Website verwendet keine Tracking-Cookies und kein Analytics.
              Es werden nur technisch notwendige Cookies für die Funktion der Website gesetzt.
            </p>
          </section>

          <section>
            <h2>11. Beschwerderecht</h2>
            <p>
              Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              Zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA),
              Promenade 18, 91522 Ansbach.
            </p>
          </section>

          <section>
            <h2>12. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.
              Die aktuelle Version ist stets hier abrufbar.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex gap-4 text-[13px] text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
          <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
        </div>
      </div>
    </main>
  );
}
