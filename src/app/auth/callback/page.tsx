import Link from 'next/link';
import ConfirmStatus from './confirm-status';

export const metadata = { title: 'E-Mail bestätigen — occuro' };

// Landeseite für Supabase-Bestätigungslinks (Registrierung, Magic Link,
// E-Mail-Wechsel). Die eigentliche Bestätigung passiert schon eine Station
// vorher in Supabases /auth/v1/verify — dort wird der Token eingelöst und
// der User auf diese URL weitergeleitet. Diese Seite muss also nichts mehr
// einlösen, sie muss nur existieren und das Ergebnis anzeigen.
//
// Wichtig: Supabase hängt Fehler als URL-Fragment an (#error=...), nicht als
// Query-Parameter. Ein Fragment erreicht den Server nie, deshalb liest die
// Auswertung im Client-Teil (confirm-status.tsx) statt hier.
export default function AuthCallbackPage() {
  return (
    <main className="min-h-screen bg-page text-ink px-4 sm:px-6 py-20 sm:py-28 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="text-2xl font-heading font-bold tracking-tight">
            occuro
          </Link>
        </div>

        <ConfirmStatus />
      </div>
    </main>
  );
}
