import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'occuro — Entdecke Events. Verbinde dich. Teile Momente.',
  description: 'Finde Events in deiner Nähe, triff neue Leute und erlebe unvergessliche Momente.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0A0A0B] text-white">{children}</body>
    </html>
  );
}
