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

const APP_STORE_URL = 'https://apps.apple.com/app/occuro/id6760317905';
const WEB_APP_URL = 'https://app.occuroapp.com';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } }),
};

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: 'Entdecken', desc: 'Events in deiner Nähe — per Feed, Karte oder Suche. Filtere nach Kategorie, Genre und Zeitraum.' },
  { icon: Users, title: 'Verbinden', desc: 'Sieh welche Freunde hingehen. Teile Events und erlebe sie zusammen.' },
  { icon: CalendarPlus, title: 'Erstellen', desc: 'Erstelle private oder öffentliche Events in unter einer Minute.' },
  { icon: MessageCircle, title: 'Chatten', desc: 'Event-Chats und Direktnachrichten. Tausche dich aus, bevor und während des Events.' },
  { icon: Ticket, title: 'Verwalten', desc: 'Digitale Tickets in deiner Wallet. Kalender mit Erinnerungen für alle Events.' },
  { icon: BarChart3, title: 'Organisieren', desc: 'Veranstalter verwalten Events, Follower und Statistiken über das Dashboard.' },
];

const userScreens = [
  { src: '/app-screenshots/events.png', title: 'Event Feed', desc: 'Entdecke Events in deiner Nähe — per Feed, Karte oder Suche. Filtere nach Kategorie, Zeitraum und Ort.' },
  { src: '/app-screenshots/event-detail.png', title: 'Event Details', desc: 'Alle Infos auf einen Blick: Datum, Ort, Beschreibung und wer teilnimmt. Direkt interessiert melden oder Ticket sichern.' },
  { src: '/app-screenshots/event-karte.png', title: 'Event-Karte', desc: 'Finde Events auf der interaktiven Karte. Sieh was in deiner Umgebung passiert — heute, morgen oder am Wochenende.' },
  { src: '/app-screenshots/kalender.png', title: 'Kalender', desc: 'Behalte den Überblick über deine Events. Der Kalender zeigt dir alle anstehenden Termine und Erinnerungen.' },
  { src: '/app-screenshots/profil.png', title: 'Dein Profil', desc: 'Dein Event-Erlebnis an einem Ort. Sieh deine Events, Freunde und geteilten Momente.' },
];

const organizerScreens = [
  { src: '/app-screenshots/event-erstellen.png', title: 'Event erstellen', desc: 'Erstelle öffentliche oder private Events in unter einer Minute. Titel, Ort, Datum — fertig.' },
  { src: '/app-screenshots/gewinnspiel.png', title: 'Gewinnspiele', desc: 'Aktiviere Gewinnspiele für dein Event. Definiere Preise pro Platzierung und ziehe Gewinner automatisch.' },
  { src: '/app-screenshots/meine-events.png', title: 'Meine Events', desc: 'Alle deine Events an einem Ort. Sieh kommende, laufende und vergangene Veranstaltungen auf einen Blick.' },
  { src: '/app-screenshots/dashboard.png', title: 'Dashboard', desc: 'Reichweite, Follower, Conversions — dein Organizer-Dashboard zeigt dir die Performance deiner Events in Echtzeit.' },
  { src: '/app-screenshots/org-profil.png', title: 'Veranstalter-Profil', desc: 'Dein öffentliches Profil als Veranstalter. Top-Events, Follower und alles was deine Community sehen kann.' },
];

const timeline = [
  { month: 'Jan', year: '2026', title: 'Soziales Event-Erlebnis', desc: 'Freunde sehen, Interesse teilen, Events gemeinsam entdecken.' },
  { month: 'Feb', year: '2026', title: 'Private & öffentliche Events', desc: 'Event-Erstellung mit Organizer-Dashboard für Veranstalter.' },
  { month: 'Mrz', year: '2026', title: 'App Store Launch', desc: 'occuro offiziell im Apple App Store verfügbar.' },
  { month: 'Apr', year: '2026', title: 'Gewinnspiele & Chat', desc: 'Event-Gewinnspiele, Live-Chat und Veranstalter-Dashboard.' },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0B] text-white">

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0A0A0B]/80 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <a href="#" className="flex items-center gap-2">
            <OccuroRingLogo size={24} color="#fff" />
            <span className="text-base sm:text-lg font-heading font-bold tracking-tight">occuro</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-[13px] text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#veranstalter" className="hover:text-white transition-colors">Für Veranstalter</a>
            <a href="#die-app" className="hover:text-white transition-colors">Die App</a>
            <a href="#news" className="hover:text-white transition-colors">News</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={WEB_APP_URL}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 transition-all"
            >
              <Globe size={14} /> Web-App
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-medium bg-white text-[#0A0A0B] hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <Download size={14} /> Download
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <InteractiveGrid forceDark />
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6" data-grid-exclude>
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
              <OccuroRingLogo size={72} color="#fff" />
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-heading font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          >
            Entdecke Events.<br />
            <span className="text-white/60">Verbinde dich.</span><br />
            <span className="text-violet-200/80">Teile Momente.</span>
          </motion.h1>
          <motion.p
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/45 max-w-md mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
          >
            Finde Events in deiner Nähe, triff neue Leute und erlebe unvergessliche Momente.
          </motion.p>
          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold bg-violet-600 text-white hover:bg-violet-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-violet-600/25"
            >
              <Download size={16} /> App herunterladen
            </a>
            <a
              href={WEB_APP_URL}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold border border-white/15 text-white/80 hover:bg-white/5 hover:border-white/25 active:scale-[0.98] transition-all"
            >
              <Globe size={16} /> Im Browser öffnen
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="py-16 sm:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[11px] font-medium text-violet-400 uppercase tracking-[0.2em] mb-4">Features</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Alles was du brauchst.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {features.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FÜR VERANSTALTER ─── */}
      <section id="veranstalter" className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[11px] font-medium text-violet-400 uppercase tracking-[0.2em] mb-4">Für Veranstalter</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Dein Event verdient mehr Reichweite.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-white/35 max-w-lg mx-auto">
              occuro gibt dir die Tools, um Events professionell zu verwalten, deine Community aufzubauen und messbare Ergebnisse zu erzielen — kostenlos.
            </p>
          </div>

          {/* Benefit grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-16">
            <OrgBenefitCard icon={Zap} title="In 60 Sekunden online" desc="Event erstellen war noch nie so schnell. Titel, Ort, Datum — dein Event ist sofort sichtbar für tausende Nutzer." index={0} />
            <OrgBenefitCard icon={TrendingUp} title="Live-Dashboard" desc="Follower, Interessenten, Bestätigungen — sieh in Echtzeit, wie dein Event performt." index={1} />
            <OrgBenefitCard icon={Megaphone} title="Organische Reichweite" desc="Jeder Interessent teilt dein Event automatisch im Feed seiner Freunde. Reichweite ohne Werbebudget." index={2} />
            <OrgBenefitCard icon={Gift} title="Gewinnspiele" desc="Aktiviere Gewinnspiele für dein Event und steigere die Teilnahme. Automatische Ziehung inklusive." index={3} />
            <OrgBenefitCard icon={MessageCircle} title="Direkter Draht" desc="Event-Chat für Ankündigungen und Fragen. Erreiche deine Teilnehmer direkt — ohne Social Media." index={4} />
            <OrgBenefitCard icon={ShieldCheck} title="Verifiziertes Profil" desc="Zeig deiner Community, dass du ein geprüfter Veranstalter bist. Mehr Vertrauen = mehr Teilnehmer." index={5} />
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 sm:p-6 rounded-2xl border border-violet-500/15 bg-violet-500/[0.04]">
              <div className="text-center sm:text-left">
                <p className="text-sm sm:text-base font-heading font-semibold">Jetzt kostenlos als Veranstalter starten</p>
                <p className="text-[12px] sm:text-[13px] text-white/40 mt-0.5">Kein Abo, keine versteckten Kosten.</p>
              </div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[13px] font-semibold bg-violet-600 text-white hover:bg-violet-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-violet-600/25"
              >
                <Download size={15} /> Loslegen
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── DIE APP ─── */}
      <AppShowcase />

      {/* ─── NEWS ─── */}
      <section id="news" className="py-16 sm:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[11px] font-medium text-violet-400 uppercase tracking-[0.2em] mb-4">Timeline</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Was bisher geschah.
            </h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {timeline.map((t, i) => (
                <TimelineCard key={t.month} {...t} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.06] py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <OccuroRingLogo size={20} color="#fff" />
              <span className="text-sm font-heading font-bold">occuro</span>
            </div>
            <p className="text-[12px] text-white/35 leading-relaxed">
              Entdecke Events. Verbinde dich.<br />Teile Momente.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium text-white/50 uppercase tracking-wider mb-3">Produkt</p>
            <div className="space-y-2 text-[13px] text-white/40">
              <a href={APP_STORE_URL} className="block hover:text-white transition-colors">Download</a>
              <a href="#features" className="block hover:text-white transition-colors">Features</a>
              <a href={WEB_APP_URL} className="block hover:text-white transition-colors">Web-App</a>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-medium text-white/50 uppercase tracking-wider mb-3">Rechtliches</p>
            <div className="space-y-2 text-[13px] text-white/40">
              <a href="/impressum" className="block hover:text-white transition-colors">Impressum</a>
              <a href="/datenschutz" className="block hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-medium text-white/50 uppercase tracking-wider mb-3">Kontakt</p>
            <a href="mailto:support@occuroapp.com" className="flex items-center gap-1.5 text-[13px] text-white/40 hover:text-white transition-colors">
              <Mail size={13} /> support@occuroapp.com
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/[0.06] text-center text-[11px] text-white/25">
          &copy; {new Date().getFullYear()} occuro
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function OrgBenefitCard({ icon: Icon, title, desc, index }: { icon: LucideIcon; title: string; desc: string; index: number }) {
  return (
    <motion.div
      className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-violet-500/10 bg-violet-500/[0.02] overflow-hidden transition-all duration-300 hover:border-violet-500/25 hover:bg-violet-500/[0.04]"
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-violet-500/15 border border-violet-500/15 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-violet-500/20 transition-all duration-300">
          <Icon size={18} strokeWidth={1.6} className="text-violet-400" />
        </div>
        <h3 className="text-[13px] sm:text-[15px] font-heading font-semibold mb-1.5 sm:mb-2">{title}</h3>
        <p className="text-[11px] sm:text-[13px] text-white/40 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, desc, index }: { icon: LucideIcon; title: string; desc: string; index: number }) {
  return (
    <motion.div
      className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-violet-500/20"
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-violet-500/10 border border-violet-500/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-violet-500/15 group-hover:border-violet-500/20 transition-all duration-300">
          <Icon size={18} strokeWidth={1.6} className="text-violet-400 sm:[&]:w-5 sm:[&]:h-5" />
        </div>
        <h3 className="text-[13px] sm:text-[15px] font-heading font-semibold mb-1.5 sm:mb-2">{title}</h3>
        <p className="text-[11px] sm:text-[13px] text-white/40 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function TimelineCard({ month, year, title, desc, index }: { month: string; year: string; title: string; desc: string; index: number }) {
  return (
    <motion.div
      className="relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/20 transition-all duration-300"
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index}
    >
      {/* Dot on the line */}
      <div className="hidden md:block absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-500 border-2 border-[#0A0A0B]" />
      <p className="text-xl sm:text-2xl font-heading font-bold text-violet-400 mb-0.5">{month}</p>
      <p className="text-[10px] sm:text-[11px] text-white/25 mb-2 sm:mb-3">{year}</p>
      <h3 className="text-[12px] sm:text-[14px] font-heading font-semibold mb-1 sm:mb-1.5">{title}</h3>
      <p className="text-[11px] sm:text-[12px] text-white/35 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function AppShowcase() {
  const [tab, setTab] = useState<'user' | 'organizer'>('user');
  const screens = tab === 'user' ? userScreens : organizerScreens;

  return (
    <section id="die-app" className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] font-medium text-violet-400 uppercase tracking-[0.2em] mb-4">Die App</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Ein Blick in occuro.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-white/35 max-w-md mx-auto">
            {tab === 'user'
              ? 'Events finden, Freunde treffen, Momente teilen.'
              : 'Events erstellen, Reichweite aufbauen, Community managen.'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 sm:mb-20">
          <div className="relative inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] p-1 sm:p-1.5 backdrop-blur-sm">
            {(['user', 'organizer'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all duration-300 ${
                  tab === t
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                    : 'text-white/45 hover:text-white/70'
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
                      {/* Glow behind phone */}
                      <div className="absolute -inset-4 rounded-[3rem] bg-violet-500/[0.06] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      {/* Phone frame */}
                      <div className="relative rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden border-[1.5px] border-white/[0.1] shadow-2xl shadow-black/40 bg-black">
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
                      <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-violet-500/15 text-[10px] sm:text-[11px] font-bold text-violet-400">{i + 1}</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-white/25 uppercase tracking-[0.15em]">von {screens.length}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight mb-2 sm:mb-3">{shot.title}</h3>
                    <p className="text-[13px] sm:text-[15px] text-white/40 leading-relaxed max-w-sm mx-auto md:mx-0">{shot.desc}</p>
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
