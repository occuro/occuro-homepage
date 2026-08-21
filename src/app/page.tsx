'use client';

import Image from 'next/image';
import { OccuroRingLogo } from '@/components/occuro-ring-logo';
import { GoldMesh } from '@/components/gold-mesh';
import {
  Search, Users, CalendarPlus, MessageCircle, Ticket, BarChart3,
  Download, Globe, Mail, Zap, TrendingUp, Megaphone, Gift, ShieldCheck, LayoutDashboard,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { OutNowWordmark } from '@/components/outnow-wordmark';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { APP_STORE_URL, WEB_APP_URL } from '@/lib/links';


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } }),
};

/* Abschnittsköpfe: etwas weiter unten starten und laenger brauchen als die
   Listenelemente — so entsteht beim Scrollen ein Rhythmus statt gleichfoermigem
   Einblenden. Wie bei Apple: die Ueberschrift kommt zuerst, der Inhalt folgt. */
const kopfRein = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

/* Das Kartenband: zusaetzlich ein Hauch Massstab. Es soll sich anfuehlen, als
   ruecke es heran, nicht als klappe es auf. */
const bandRein = {
  hidden: { opacity: 0, y: 40, scale: 0.965 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

const imBild = { once: true, margin: '-90px' } as const;

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const userFeatures: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: 'Entdecken', desc: 'Events in deiner Nähe — per Feed, Karte oder Suche. Folge Veranstaltern und erfahre, wenn sie etwas Neues planen.' },
  { icon: Users, title: 'Verbinden', desc: 'Sieh welche Freunde hingehen — und wer gerade vor Ort ist, wenn sie ihren Standort teilen.' },
  { icon: CalendarPlus, title: 'Teilnehmen', desc: 'Interesse melden, bestätigen, Tickets sichern — alles mit einem Tap.' },
  { icon: MessageCircle, title: 'Chatten', desc: 'Event-Chats und Direktnachrichten. Antworte gezielt auf einzelne Nachrichten, ein Doppeltipp setzt ein Herz.' },
  { icon: Ticket, title: 'Wallet & Kalender', desc: 'Digitale Tickets in deiner Wallet. Kalenderansicht mit Erinnerungen für alle Events.' },
  { icon: Gift, title: 'Gewinnspiele', desc: 'Nimm an Event-Gewinnspielen teil und gewinne Preise — direkt in der App.' },
];

const orgFeatures: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Zap, title: 'In 60 Sekunden online', desc: 'Titel, Ort, Datum — mehr braucht es nicht. Dazu ein Banner und bis zu zehn weitere Bilder als Galerie.' },
  { icon: TrendingUp, title: 'Live-Dashboard', desc: 'Follower, Interessenten, Bestätigungen — sieh in Echtzeit, wie dein Event performt.' },
  { icon: Megaphone, title: 'Organische Reichweite', desc: 'Jeder Interessent teilt dein Event im Feed seiner Freunde. Reichweite ohne Werbebudget.' },
  { icon: Gift, title: 'Gewinnspiele', desc: 'Aktiviere Gewinnspiele für dein Event und steigere die Teilnahme. Automatische Ziehung inklusive.' },
  { icon: MessageCircle, title: 'Direkter Draht', desc: 'Event-Chat für Fragen, Event-Feed für Ankündigungen als Text, Foto oder Link. Ohne Umweg über Social Media.' },
  { icon: ShieldCheck, title: 'Verifiziertes Profil', desc: 'Zeig deiner Community, dass du geprüft bist. Mehr Vertrauen = mehr Teilnehmer.' },
];


/* Die fuenf Reihen im Abschnitt „Die App". Reihenfolge ist Absicht: der
   Kernnutzen zuerst, dann Entdeckung, dann Werkzeuge. */
const APP_ROWS = [
  { src: '/app-screenshots/r-freunde.jpg', title: 'Freunde vor Ort',
    desc: 'Wer von deinen Freunden gerade bei einem Event ist, steht in den Details. Sichtbar nur, wenn man den Standort selbst freigibt.' },
  { src: '/app-screenshots/r-feed.jpg', title: 'Der Feed',
    desc: 'Events in deiner Nähe, gefiltert nach Beliebt, Live, Heute oder Wochenende. Oben steht, bei welchen deine Freunde dabei sind.' },
  { src: '/app-screenshots/r-karte.jpg', title: 'Karte statt Liste',
    desc: 'Finde Events dort, wo sie stattfinden. Pin antippen und du siehst Titel, Ort, Zeitraum und Kategorie sofort.' },
  { src: '/app-screenshots/r-suche.jpg', title: 'Entdecken',
    desc: 'Events, Personen und Veranstalter suchen — darunter Vorschläge, die zu deinen Interessen passen.' },
  { src: '/app-screenshots/r-kalender.jpg', title: 'Dein Kalender',
    desc: 'Alles im Monatsüberblick. Tage mit Events sind markiert, ein Tap zeigt, was ansteht.' },
];

const timeline = [
  { month: 'Jan', year: '2026', title: 'Soziales Event-Erlebnis', desc: 'Freunde sehen, Interesse teilen, Events gemeinsam entdecken.' },
  { month: 'Feb', year: '2026', title: 'Private & öffentliche Events', desc: 'Event-Erstellung mit Organizer-Dashboard für Veranstalter.' },
  { month: 'Mrz', year: '2026', title: 'App Store Launch', desc: 'Die App offiziell im Apple App Store verfügbar.' },
  { month: 'Apr', year: '2026', title: 'Gewinnspiele & Chat', desc: 'Event-Gewinnspiele, Live-Chat und Veranstalter-Dashboard.' },
  { month: 'Jul', year: '2026', title: 'Gastmodus & neues Design', desc: 'Erst umsehen, dann entscheiden — Events ansehen geht jetzt ohne Konto. Dazu ein durchgehend schwarz-weißes Design in App, Web-App und Website und ein spürbar schnellerer Start.' },
  { month: 'Aug', year: '2026', title: 'Verlässliche Links & Anmeldung', desc: 'Geteilte Event-Links öffnen direkt die App statt den Browser. Registrierung und E-Mail-Bestätigung laufen sauber durch.' },
  { month: 'Aug', year: '2026', title: 'Live-Events & Freunde vor Ort', desc: 'Was gerade läuft, ist auf der Karte schwarz markiert und mit LIVE beschriftet. Teilen Freunde ihren Standort, siehst du am Pin und in den Event-Details, wer schon dort ist.' },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-page text-ink">

      <SiteNav aufStartseite />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <GoldMesh variante="zeiger" />
        {/* max-w-3xl: the headline is two fixed lines ("Alles, was läuft." /
            "Mit den Leuten, die du kennst.") — 2xl is narrow enough that the first line
            wraps at the large desktop size and breaks that structure. */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6" data-grid-exclude>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="mx-auto mb-8 w-[72px] h-[72px]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
            >
              <OccuroRingLogo size={72} color="var(--gold)" />
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-heading font-bold tracking-[-0.012em]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          >
            Alles, was läuft.<br />
            <span className="text-ink-3">Mit den Leuten, die du kennst.</span>
          </motion.h1>
          <motion.p
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-ink-2 max-w-md mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
          >
            Von Volksfest bis Konzert — und du siehst, wer von deinen Freunden
            zugesagt hat und wer gerade vor Ort ist.
          </motion.p>
          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}
          >
            {/* Hero "App herunterladen" — only on mobile/tablet. On desktop
                only the "Im Browser öffnen" CTA remains, which is what
                desktop visitors actually want. */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm font-semibold bg-gold text-page hover:bg-gold-satt hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_-12px_var(--gold)]"
            >
              <Download size={16} /> App herunterladen
            </a>
            <a
              href={WEB_APP_URL}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm font-semibold border border-line text-ink-2 hover:bg-elevated hover:border-line-strong active:scale-[0.98] transition-all lg:bg-gold lg:text-page lg:border-gold lg:hover:bg-gold-satt lg:hover:border-gold-satt lg:shadow-[0_10px_30px_-12px_var(--gold)]"
            >
              <Globe size={16} /> Im Browser öffnen
            </a>
          </motion.div>
          <motion.div
            className="mt-7 sm:mt-9 flex justify-center px-4"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 backdrop-blur px-4 py-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-live opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              <span className="text-[13px] text-ink-2">
                „Jonas, Lena und 3 weitere sind <span className="text-ink font-medium">gerade dort</span>."
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── DER UNTERSCHIED: das Kartenband ───
          Ein Ausschnitt der Karte statt eines Screenshots im Geraeterahmen.
          Die Breite ist bei 603px gedeckelt: die Quelle hat 1206px, mehr
          waere Hochrechnen und wird unscharf. */}
      <section id="unterschied" className="py-16 sm:py-28 px-4 sm:px-6 border-t border-line">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-10 sm:mb-14 max-w-md mx-auto"
            initial="hidden" whileInView="visible" viewport={imBild} variants={kopfRein}>
            <p className="text-[11.5px] font-semibold text-gold uppercase tracking-[0.18em] mb-4">Der Unterschied</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-heading font-bold tracking-[-0.012em] leading-[1.08]">
              Nicht „könnte dir gefallen“.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-2">
              Sondern: Leute, die du kennst, sind <span className="text-ink font-semibold">jetzt</span> an diesem Ort.
            </p>
          </motion.div>
          <motion.figure
            initial="hidden" whileInView="visible" viewport={imBild} variants={bandRein}
            className="relative mx-auto max-w-[603px] rounded-[20px] overflow-hidden border border-line shadow-[0_30px_70px_-34px_rgba(0,0,0,0.5)]">
            {/* QUALITAET 100 UND EINE GROESSENANGABE — beides noetig.
                Next rechnet Bilder standardmaessig mit Qualitaet 75 neu. Bei
                einer Karte mit haarfeinen Strassen und kleiner Schrift
                zerfaellt das sichtbar; die Vorlage hier hat 93, davon blieb
                nichts uebrig. Ohne `sizes` fragt Next ausserdem die groesste
                Stufe an (w=3840) statt der Breite, in der das Band wirklich
                steht — das kostet nur Rechenzeit und bringt kein Pixel mehr,
                weil die Quelle 1206 breit ist. */}
            <Image
              src="/app-screenshots/karte-band.jpg"
              alt="Kartenausschnitt mit laufendem Event und den Freunden, die gerade dort sind"
              width={1206} height={630}
              sizes="(max-width: 640px) 100vw, 603px"
              quality={100}
              className="w-full h-auto block"
              priority
            />
            <figcaption className="absolute left-1/2 -translate-x-1/2 bottom-4 inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full bg-surface/85 backdrop-blur border border-line text-[12.5px] text-ink max-[640px]:whitespace-normal max-[640px]:max-w-[86%] max-[640px]:text-center">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-live opacity-50 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              Jonas, Lena und 3 weitere sind gerade beim Dachauer Volksfest
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* ─── DIE APP: wechselnde Reihen ───
          Text und Geraet im Wechsel links/rechts. Gibt jedem Punkt eine
          eigene Flaeche, statt sechs Kacheln um Aufmerksamkeit konkurrieren
          zu lassen. */}
      <AppRows />

      {/* ─── VERLAUF ───
          Senkrecht statt waagerecht: bei sieben Eintraegen bleibt so Platz
          fuer ganze Saetze, und auf dem Telefon bricht nichts um. Der
          letzte Punkt traegt die Markenfarbe — er markiert das Jetzt. */}
      <section id="news" className="py-16 sm:py-28 px-4 sm:px-6 border-t border-line">
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-10 sm:mb-14"
            initial="hidden" whileInView="visible" viewport={imBild} variants={kopfRein}>
            <p className="text-[11.5px] font-semibold text-gold uppercase tracking-[0.18em] mb-4">Verlauf</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-heading font-bold tracking-[-0.012em]">
              Was bisher geschah
            </h2>
          </motion.div>
          <ol className="relative max-w-[640px] mx-auto list-none p-0 m-0
                         before:content-[''] before:absolute before:left-[5px] before:top-2 before:bottom-2
                         before:w-px before:bg-gradient-to-b before:from-transparent before:via-line-strong before:to-transparent">
            {timeline.map((t, i) => (
              <TimelineItem key={`${t.year}-${t.month}-${t.title}`} {...t} index={i} letzter={i === timeline.length - 1} />
            ))}
          </ol>
        </div>
      </section>

      {/* ─── ABSCHLUSS ───
          Ein konkreter Grund zu handeln statt „Jetzt herunterladen". */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 border-t border-line text-center">
        <motion.div className="max-w-2xl mx-auto"
          initial="hidden" whileInView="visible" viewport={imBild} variants={kopfRein}>
          <h2 className="text-2xl sm:text-3xl md:text-[2.9rem] font-heading font-bold tracking-[-0.012em] leading-[1.08] mb-4">
            Heute Abend ist schon<br className="hidden sm:block" /> jemand unterwegs.
          </h2>
          <p className="text-ink-2 max-w-[44ch] mx-auto mb-8">
            Kostenlos, ohne Konto ausprobierbar. Für iPhone, Android und im Browser.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-gold text-page hover:bg-gold-satt hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download size={16} /> App herunterladen
            </a>
            <a
              href={WEB_APP_URL}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border border-line-strong text-ink hover:border-gold hover:text-gold active:scale-[0.98] transition-all"
            >
              <Globe size={16} /> Im Browser öffnen
            </a>
          </div>
        </motion.div>
      </section>

      <SiteFooter aufStartseite />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function TimelineItem({ month, year, title, desc, index, letzter }: { month: string; year: string; title: string; desc: string; index: number; letzter: boolean }) {
  return (
    <motion.li
      className="relative pl-[34px] pb-[30px] last:pb-0"
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index}
    >
      <span
        className={`absolute left-0 top-[7px] w-[11px] h-[11px] rounded-full border ${
          letzter ? 'bg-gold border-gold' : 'bg-page border-line-strong'
        }`}
      />
      <p className="text-[12.5px] uppercase tracking-[0.1em] text-gold mb-1">{month} {year}</p>
      <h3 className="text-[19px] font-heading font-semibold tracking-[-0.01em] mb-1">{title}</h3>
      <p className="text-[15.5px] text-ink-2 leading-relaxed">{desc}</p>
    </motion.li>
  );
}

function AppRows() {
  return (
    <section id="die-app" className="py-16 sm:py-28 px-4 sm:px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-[11.5px] font-semibold text-gold uppercase tracking-[0.18em] mb-4">Die App</p>
          <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-heading font-bold tracking-[-0.012em]">
            Was du damit machst
          </h2>
        </div>
        {APP_ROWS.map((r, i) => (
          <AppRow key={r.src} {...r} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function AppRow({ src, title, desc, flip }: { src: string; title: string; desc: string; flip: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      className="grid md:grid-cols-[1fr_minmax(240px,300px)] gap-8 md:gap-16 items-center py-10 sm:py-16 border-t border-line first:border-t-0"
    >
      <div className={`${flip ? 'md:order-2' : ''} text-center md:text-left`}>
        <h3 className="text-xl sm:text-2xl md:text-[2rem] font-heading font-bold tracking-[-0.012em] leading-[1.15] mb-3">{title}</h3>
        <p className="text-ink-2 max-w-[40ch] mx-auto md:mx-0 text-[16.5px] leading-relaxed">{desc}</p>
      </div>
      <div className={`${flip ? 'md:order-1' : ''} flex justify-center`}>
        <div className="w-full max-w-[280px] rounded-[26px] overflow-hidden border border-line shadow-[0_28px_64px_-30px_rgba(0,0,0,0.45)]">
          <Image src={src} alt={title} width={560} height={1219} className="w-full h-auto block" />
        </div>
      </div>
    </motion.div>
  );
}
