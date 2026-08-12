'use client';

import Image from 'next/image';
import { OccuroRingLogo } from '@/components/occuro-ring-logo';
import { InteractiveGrid } from '@/components/interactive-grid';
import {
  Search, Users, CalendarPlus, MessageCircle, Ticket, BarChart3,
  Download, Globe, Mail, Zap, TrendingUp, Megaphone, Gift, ShieldCheck, LayoutDashboard,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { OutNowWordmark } from '@/components/outnow-wordmark';

const APP_STORE_URL = 'https://apps.apple.com/app/occuro/id6760317905';
const WEB_APP_URL = 'https://app.occuroapp.com';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } }),
};

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

const userScreens = [
  { src: '/app-screenshots/events.png', title: 'Event Feed', desc: 'Events in deiner Nähe im Feed — mit Filtern für Beliebt, Live, Heute und Wochenende. Oben siehst du direkt, bei welchen Events deine Freunde dabei sind.' },
  { src: '/app-screenshots/event-detail.png', title: 'Event Details', desc: 'Alles zum Event auf einen Blick: Veranstalter, Start und Ende, Ort, Beschreibung. Mit einem Tap in den Kalender eintragen oder in Karten öffnen.' },
  { src: '/app-screenshots/event-karte.png', title: 'Event-Karte', desc: 'Finde Events auf der Karte statt in einer Liste. Tippe einen Pin an und du siehst Titel, Ort, Zeitraum und Kategorie sofort.' },
  { src: '/app-screenshots/karte-live.png', title: 'Was gerade läuft', desc: 'Events, die in diesem Moment laufen, sind auf der Karte schwarz markiert und mit LIVE beschriftet. Stehen Freunde dort, siehst du ihre Gesichter direkt am Pin.' },
  { src: '/app-screenshots/freunde-vor-ort.png', title: 'Freunde vor Ort', desc: 'Wer von deinen Freunden gerade bei einem Event ist, steht in den Event-Details. Dafür muss man den Live-Standort selbst freigeben — sonst zeigt OutNow niemanden an.' },
  { src: '/app-screenshots/entdecken-suche.png', title: 'Entdecken & Suche', desc: 'Suche nach Events, Personen und Veranstaltern. Darunter Vorschläge, die zu deinen Interessen passen.' },
  { src: '/app-screenshots/kalender.png', title: 'Kalender', desc: 'Deine Events im Monatsüberblick. Tage mit Events sind markiert, ein Tap zeigt dir, was an dem Tag ansteht.' },
];

const organizerScreens = [
  { src: '/app-screenshots/event-erstellen.png', title: 'Event erstellen', desc: 'Titel, Slogan, Datum, Ort — mehr braucht es nicht. Öffentlich oder privat, in unter einer Minute online.' },
  { src: '/app-screenshots/gewinnspiel.png', title: 'Gewinnspiele', desc: 'Aktiviere ein Gewinnspiel direkt beim Anlegen: Gewinn, Anzahl der Gewinner und Ziehungszeitpunkt festlegen — die Ziehung läuft automatisch.' },
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

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-page/80 border-b border-line">
        <div className="relative max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <a href="#" className="flex items-center gap-2">
            <OutNowWordmark size={20} layout="row" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[13px] text-ink-2 absolute left-1/2 -translate-x-1/2">
            <a href="#features" className="hover:text-ink transition-colors">Features</a>
            <a href="#die-app" className="hover:text-ink transition-colors">Die App</a>
            <a href="#news" className="hover:text-ink transition-colors">News</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={WEB_APP_URL}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-medium bg-elevated text-ink-2 hover:bg-muted hover:text-ink transition-all"
            >
              <Globe size={14} /> Web-App
            </a>
            {/* Nav Download — only on mobile/tablet (the App Store link is
                useless on desktop, where users should open the Web-App). */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-[12px] sm:text-[13px] font-medium bg-btn text-btn-ink hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <Download size={14} /> Download
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <InteractiveGrid />
        {/* max-w-3xl: the headline is two fixed lines ("Events entdecken," /
            "Momente teilen.") — 2xl is narrow enough that the first line
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
              <OccuroRingLogo size={72} />
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-heading font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          >
            Events entdecken,<br />
            <span className="text-ink-3">Momente teilen.</span>
          </motion.h1>
          <motion.p
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-ink-2 max-w-md mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
          >
            Finde Events in deiner Nähe, triff neue Leute und erlebe unvergessliche Momente.
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
              className="lg:hidden inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm font-semibold bg-btn text-btn-ink hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download size={16} /> App herunterladen
            </a>
            <a
              href={WEB_APP_URL}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm font-semibold border border-line text-ink-2 hover:bg-elevated hover:border-line-strong active:scale-[0.98] transition-all lg:bg-btn lg:text-btn-ink lg:border-btn lg:hover:bg-btn lg:hover:border-btn lg:hover:opacity-90"
            >
              <Globe size={16} /> Im Browser öffnen
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <FeaturesSection />

      {/* ─── DIE APP ─── */}
      <AppShowcase />

      {/* ─── NEWS ─── */}
      <section id="news" className="py-16 sm:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[11px] font-medium text-ink-3 uppercase tracking-[0.2em] mb-4">Timeline</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Was bisher geschah.
            </h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {timeline.map((t, i) => (
                <TimelineCard key={`${t.year}-${t.month}-${t.title}`} {...t} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-line py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <OutNowWordmark size={16} layout="row" />
            </div>
            <p className="text-[12px] text-ink-2 leading-relaxed">
              Events entdecken,<br />Momente teilen.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium text-ink-3 uppercase tracking-wider mb-3">Produkt</p>
            <div className="space-y-2 text-[13px] text-ink-2">
              <a href={APP_STORE_URL} className="block hover:text-ink transition-colors">Download</a>
              <a href="#features" className="block hover:text-ink transition-colors">Features</a>
              <a href={WEB_APP_URL} className="block hover:text-ink transition-colors">Web-App</a>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-medium text-ink-3 uppercase tracking-wider mb-3">Rechtliches</p>
            <div className="space-y-2 text-[13px] text-ink-2">
              <a href="/impressum" className="block hover:text-ink transition-colors">Impressum</a>
              <a href="/datenschutz" className="block hover:text-ink transition-colors">Datenschutz</a>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-medium text-ink-3 uppercase tracking-wider mb-3">Kontakt</p>
            <a href="mailto:support@occuroapp.com" className="flex items-center gap-1.5 text-[13px] text-ink-2 hover:text-ink transition-colors">
              <Mail size={13} /> support@occuroapp.com
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-line text-center text-[11px] text-ink-3">
          &copy; {new Date().getFullYear()} occuro
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function FeaturesSection() {
  const [tab, setTab] = useState<'user' | 'organizer'>('user');
  const items = tab === 'user' ? userFeatures : orgFeatures;

  return (
    <section id="features" className="py-16 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] font-medium text-ink-3 uppercase tracking-[0.2em] mb-4">Features</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
            {tab === 'user' ? 'Alles was du brauchst.' : 'Dein Event verdient mehr Reichweite.'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-ink-2 max-w-md mx-auto">
            {tab === 'user'
              ? 'Events finden, Freunde treffen, Momente teilen.'
              : 'Kostenlos Events verwalten, Community aufbauen, Ergebnisse messen.'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex rounded-2xl border border-line bg-surface p-1 sm:p-1.5 backdrop-blur-sm">
            {(['user', 'organizer'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-[12px] sm:text-[13px] font-semibold transition-all duration-300 ${
                  tab === t
                    ? 'bg-btn text-btn-ink'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                {t === 'user' ? 'Besucher' : 'Veranstalter'}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {items.map((f, i) => (
                <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} index={i} />
              ))}
            </div>

            {/* CTA for organizers */}
            {tab === 'organizer' && (
              <motion.div
                className="mt-10 sm:mt-14 text-center"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              >
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 sm:p-5 rounded-card border border-line bg-surface">
                  <div className="text-center sm:text-left">
                    <p className="text-sm sm:text-[15px] font-heading font-semibold">Jetzt kostenlos als Veranstalter starten</p>
                    <p className="text-[11px] sm:text-[12px] text-ink-2 mt-0.5">Kein Abo, keine versteckten Kosten.</p>
                  </div>
                  {/* Mobile/Tablet → App Store. Desktop → Web-App, weil
                      Veranstalter ihre Events am PC eher im Browser anlegen. */}
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:hidden shrink-0 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[13px] font-semibold bg-btn text-btn-ink hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Download size={15} /> Loslegen
                  </a>
                  <a
                    href={WEB_APP_URL}
                    className="hidden lg:inline-flex shrink-0 items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[13px] font-semibold bg-btn text-btn-ink hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Globe size={15} /> Loslegen
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc, index }: { icon: LucideIcon; title: string; desc: string; index: number }) {
  return (
    <motion.div
      className="group relative p-4 sm:p-6 rounded-xl sm:rounded-card border border-line bg-surface overflow-hidden transition-all duration-300 hover:border-line-strong"
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index}
    >
      <div className="relative">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-elevated border border-line flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-muted group-hover:border-line-strong transition-all duration-300">
          <Icon size={18} strokeWidth={1.6} className="text-ink-2 sm:[&]:w-5 sm:[&]:h-5" />
        </div>
        <h3 className="text-[13px] sm:text-[15px] font-heading font-semibold mb-1.5 sm:mb-2">{title}</h3>
        <p className="text-[11px] sm:text-[13px] text-ink-2 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function TimelineCard({ month, year, title, desc, index }: { month: string; year: string; title: string; desc: string; index: number }) {
  return (
    <motion.div
      className="relative p-4 sm:p-5 rounded-xl sm:rounded-card border border-line bg-surface hover:border-line-strong transition-all duration-300"
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index}
    >
      {/* Dot on the line */}
      <div className="hidden md:block absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-ink border-2 border-page" />
      <p className="text-xl sm:text-2xl font-heading font-bold text-ink mb-0.5">{month}</p>
      <p className="text-[10px] sm:text-[11px] text-ink-3 mb-2 sm:mb-3">{year}</p>
      <h3 className="text-[12px] sm:text-[14px] font-heading font-semibold mb-1 sm:mb-1.5">{title}</h3>
      <p className="text-[11px] sm:text-[12px] text-ink-2 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function AppShowcase() {
  const [tab, setTab] = useState<'user' | 'organizer'>('user');
  const screens = tab === 'user' ? userScreens : organizerScreens;

  return (
    <section id="die-app" className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] font-medium text-ink-3 uppercase tracking-[0.2em] mb-4">Die App</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Ein Blick in OutNow.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-ink-2 max-w-md mx-auto">
            {tab === 'user'
              ? 'Events finden, Freunde treffen, Momente teilen.'
              : 'Events erstellen, Reichweite aufbauen, Community managen.'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 sm:mb-20">
          <div className="relative inline-flex rounded-2xl border border-line bg-surface p-1 sm:p-1.5 backdrop-blur-sm">
            {(['user', 'organizer'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-[12px] sm:text-[13px] font-semibold transition-all duration-300 ${
                  tab === t
                    ? 'bg-btn text-btn-ink'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                {t === 'user' ? 'Besucher' : 'Veranstalter'}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-16 sm:space-y-24"
          >
            {screens.map((shot, i) => {
              const align = i % 2 === 0 ? 'left' : 'right';
              return (
                <div key={shot.src} className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 sm:gap-10 md:gap-16`}>
                  {/* Phone mockup */}
                  <motion.div
                    className="w-[200px] sm:w-[240px] md:w-[270px] shrink-0"
                    initial={{ opacity: 0, x: align === 'left' ? -30 : 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="relative group">
                      {/* Phone frame */}
                      <div className="relative rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden border-[1.5px] border-line shadow-2xl shadow-black/20 bg-black">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] sm:w-[100px] h-[22px] sm:h-[28px] bg-black rounded-b-xl sm:rounded-b-2xl z-10" />
                        <Image src={shot.src} alt={shot.title} width={270} height={585} className="w-full h-auto" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Text content */}
                  <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                      <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-elevated border border-line text-[10px] sm:text-[11px] font-bold text-ink-2">{i + 1}</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-ink-3 uppercase tracking-[0.15em]">von {screens.length}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight mb-2 sm:mb-3">{shot.title}</h3>
                    <p className="text-[13px] sm:text-[15px] text-ink-2 leading-relaxed max-w-sm mx-auto md:mx-0">{shot.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
