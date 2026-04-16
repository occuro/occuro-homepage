import type { Metadata } from 'next';
import './globals.css';

// metadataBase anchors every relative URL Next.js builds (OG/Twitter
// image paths most importantly), so WhatsApp / iMessage / Slack get
// absolute URLs they can fetch. Change this when the domain moves.
const SITE_URL = 'https://www.occuroapp.com';
const SITE_TITLE = 'occuro — Entdecke Events. Verbinde dich. Teile Momente.';
const SITE_DESCRIPTION = 'Finde Events in deiner Nähe, triff neue Leute und erlebe unvergessliche Momente.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  // OpenGraph image is generated programmatically via
  // `src/app/opengraph-image.tsx` — Next.js wires it up at build time.
  // We only spell out the non-image fields here.
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'occuro',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0A0A0B] text-white">{children}</body>
    </html>
  );
}
