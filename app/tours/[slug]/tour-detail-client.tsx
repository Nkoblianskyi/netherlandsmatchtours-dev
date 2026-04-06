'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ChevronLeft,
  CheckCircle,
  ArrowRight,
  Globe,
} from 'lucide-react'
import type { Tour } from '@/lib/tours'

interface Props {
  tour: Tour
  relatedTours: Tour[]
}

export function TourDetailClient({ tour, relatedTours }: Props) {
  const stats = [
    { icon: Calendar, label: 'Vertrekdatum', value: tour.dates },
    { icon: Clock, label: 'Duur', value: tour.duration },
    { icon: MapPin, label: 'Bestemming', value: `${tour.city}, ${tour.country}` },
    { icon: Users, label: 'Max. deelnemers', value: `${tour.maxPersons} pers.` },
    { icon: Globe, label: 'Niveau', value: tour.difficulty },
  ]

  return (
    <div className="pt-16 min-h-screen bg-background">

      {/* ── FULL-VIEWPORT HERO ─────────────────────────── */}
      <section className="relative h-[70vh] min-h-[480px] max-h-[680px] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />

        <Link
          href="/tours"
          className="absolute top-6 left-4 md:left-8 flex items-center gap-1.5 text-foreground/80 hover:text-primary transition-colors text-xs font-display uppercase tracking-widest z-10"
        >
          <ChevronLeft size={13} />
          Alle tours
        </Link>

        <div className="absolute top-6 right-4 md:right-8 z-10">
          <span className="bg-primary text-primary-foreground font-display font-bold text-xs uppercase tracking-widest px-3 py-1.5">
            {tour.country}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-8 z-10">
          <p className="font-display text-primary uppercase tracking-[0.25em] text-sm mb-2">
            Sporttour
          </p>
          <h1
            className="font-display font-extrabold uppercase text-foreground leading-none text-balance"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)' }}
          >
            {tour.title}
          </h1>
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────── */}
      <div className="bg-card border-y border-border overflow-x-auto">
        <div className="flex min-w-max md:grid md:grid-cols-5 divide-x divide-border">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-0.5 px-5 py-4 min-w-[140px] md:min-w-0"
            >
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Icon size={12} className="text-primary shrink-0" />
                <span className="font-display uppercase tracking-widest text-[10px]">
                  {label}
                </span>
              </div>
              <span className="font-display font-bold text-foreground text-sm uppercase">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ───────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">

        {/* Two-column: content + sticky sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">

          {/* Left */}
          <div className="lg:col-span-3 flex flex-col gap-12">
            <p className="font-display text-foreground/90 text-xl md:text-2xl font-semibold leading-snug text-balance border-l-4 border-primary pl-5">
              {tour.shortDescription}
            </p>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-primary inline-block" />
                <h2 className="font-display font-extrabold uppercase tracking-wider text-foreground text-lg">
                  Over deze tour
                </h2>
              </div>
              <p className="font-sans text-muted-foreground leading-relaxed text-sm md:text-base">
                {tour.fullDescription}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-primary inline-block" />
                <h2 className="font-display font-extrabold uppercase tracking-wider text-foreground text-lg">
                  Hoogtepunten
                </h2>
              </div>
              <ol className="flex flex-col gap-4">
                {tour.highlights.map((h, i) => (
                  <li key={h} className="flex items-start gap-4 group">
                    <span className="font-display font-extrabold text-primary text-3xl leading-none w-8 shrink-0 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed pt-1 group-hover:text-foreground transition-colors">
                      {h}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right — sticky image + CTA */}
          <aside className="lg:col-span-2 flex flex-col gap-6">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/30 to-transparent" />
              </div>

              <div className="bg-card border border-border p-6 flex flex-col gap-5">
                <div>
                  <p className="font-display text-primary uppercase tracking-widest text-xs mb-1">
                    Interesse?
                  </p>
                  <h3 className="font-display font-extrabold text-xl uppercase text-foreground leading-tight">
                    {tour.title}
                  </h3>
                </div>

                <div className="h-px bg-border" />

                <div className="flex flex-col gap-3">
                  {stats.slice(0, 4).map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon size={12} className="text-primary" />
                        <span className="font-sans text-xs">{label}</span>
                      </div>
                      <span className="font-display font-semibold text-foreground text-xs uppercase">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-sm px-4 py-3 text-center flex items-center justify-center gap-2 hover:bg-primary/85 transition-colors"
                >
                  Aanvragen <ArrowRight size={14} />
                </Link>
                <p className="text-[11px] text-muted-foreground font-sans text-center leading-relaxed">
                  Reactie binnen 24 uur. Geen reserveringskosten.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* ── INCLUDES BENTO ─────────────────────────────── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-primary inline-block" />
            <h2 className="font-display font-extrabold uppercase tracking-wider text-foreground text-lg">
              Inbegrepen in de tour
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tour.includes.map((inc) => (
              <div
                key={inc}
                className="flex items-start gap-3 bg-card border border-border px-5 py-4 hover:border-primary/40 transition-colors group"
              >
                <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                  {inc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RELATED TOURS ──────────────────────────────── */}
        <div className="border-t border-border pt-12">
          <div className="flex items-center justify-between mb-7">
            <h2 className="font-display font-extrabold uppercase text-foreground text-2xl md:text-3xl">
              Andere <span className="text-primary">sporttochten</span>
            </h2>
            <Link
              href="/tours"
              className="text-xs font-display uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Alle tours <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedTours.map((t) => (
              <Link
                key={t.id}
                href={`/tours/${t.slug}`}
                className="group flex flex-col bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-display uppercase tracking-widest text-primary bg-background/70 px-2 py-0.5">
                    {t.country}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h3 className="font-display font-bold text-sm uppercase text-foreground group-hover:text-primary transition-colors leading-tight">
                    {t.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground font-sans">
                    {t.dates} &middot; {t.duration}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE STICKY CTA ──────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card border-t border-border p-4 flex items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold uppercase text-foreground text-sm leading-tight">
            {tour.title}
          </p>
          <p className="text-[11px] text-muted-foreground font-sans">
            {tour.dates} &middot; {tour.duration}
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-xs px-5 py-2.5 whitespace-nowrap hover:bg-primary/85 transition-colors flex items-center gap-2 shrink-0"
        >
          Aanvragen <ArrowRight size={12} />
        </Link>
      </div>
      <div className="h-20 lg:hidden" />
    </div>
  )
}
