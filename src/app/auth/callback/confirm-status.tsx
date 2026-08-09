'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Supabase liefert bekannte Fehler als error_code; alles andere fällt auf die
// mitgelieferte englische Beschreibung zurück.
const ERROR_TEXTS: Record<string, string> = {
  otp_expired:
    'Der Bestätigungslink ist abgelaufen oder wurde bereits verwendet. Fordere in der App eine neue Bestätigungsmail an.',
  access_denied:
    'Der Bestätigungslink ist ungültig. Fordere in der App eine neue Bestätigungsmail an.',
  email_change_token_invalid:
    'Der Link zum Ändern der E-Mail-Adresse ist ungültig oder abgelaufen.',
};

type Status = { kind: 'pending' } | { kind: 'ok' } | { kind: 'error'; message: string };

export default function ConfirmStatus() {
  const [status, setStatus] = useState<Status>({ kind: 'pending' });
  const [showAppButton, setShowAppButton] = useState(false);

  useEffect(() => {
    // Fehler kommen im Fragment (#error=…), Erfolge je nach Flow als
    // Query (?code=…) oder Fragment (#access_token=…). Beide Quellen prüfen.
    const query = new URLSearchParams(window.location.search);
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    const code = query.get('error_code') ?? hash.get('error_code');
    const description = query.get('error_description') ?? hash.get('error_description');
    const error = query.get('error') ?? hash.get('error');

    if (code || description || error) {
      setStatus({
        kind: 'error',
        message:
          (code && ERROR_TEXTS[code]) ||
          description ||
          'Die Bestätigung konnte nicht abgeschlossen werden. Bitte versuche es erneut.',
      });
    } else {
      setStatus({ kind: 'ok' });
    }

    setShowAppButton(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  if (status.kind === 'pending') {
    return (
      <div className="rounded-2xl border border-line bg-surface p-10 text-center">
        <p className="text-sm text-ink-3">Einen Moment …</p>
      </div>
    );
  }

  const isError = status.kind === 'error';

  return (
    <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10 text-center">
      <div
        className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl ${
          isError ? 'bg-danger/10 text-danger' : 'bg-live/10 text-live'
        }`}
        aria-hidden="true"
      >
        {isError ? '✕' : '✓'}
      </div>

      {isError ? (
        <>
          <h1 className="text-xl font-heading font-bold tracking-tight mb-3">
            Bestätigung fehlgeschlagen
          </h1>
          <p className="text-[14px] text-ink-2 leading-relaxed mb-8">{status.message}</p>
        </>
      ) : (
        <>
          <h1 className="text-xl font-heading font-bold tracking-tight mb-3">E-Mail bestätigt!</h1>
          <p className="text-[14px] text-ink-2 leading-relaxed mb-2">
            Deine Registrierung bei OutNow ist abgeschlossen.
          </p>
          <p className="text-[14px] text-ink-2 leading-relaxed mb-8">
            Öffne jetzt die App und melde dich mit deinem Konto an.
          </p>
        </>
      )}

      {showAppButton && !isError && (
        <a
          href="occuro://"
          className="inline-block w-full py-3.5 rounded-xl bg-btn text-btn-ink text-[15px] font-semibold hover:opacity-90 transition-opacity mb-3"
        >
          OutNow öffnen
        </a>
      )}

      <Link
        href="/"
        className="inline-block w-full py-3.5 rounded-xl border border-line text-[15px] font-medium text-ink-2 hover:text-ink hover:border-line-strong transition-colors"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
