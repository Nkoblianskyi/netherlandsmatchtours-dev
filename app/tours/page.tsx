'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { tours } from '@/lib/tours'
import { Calendar, MapPin, Users, ArrowRight, SlidersHorizontal } from 'lucide-react'
import type { Tour } from '@/lib/tours'

const categories = [
  { value: 'all', label: 'Alle types' },
  { value: 'fietsen', label: 'Fietsen' },
  { value: 'wandelen', label: 'Wandelen & Trekken' },
  { value: 'moto', label: 'Moto' },
  { value: 'mountainbike', label: 'Mountainbike' },
  { value: 'meerdaags', label: 'Meerdaagse Trek' },
]

const durations = [
  { value: 'all', label: 'Alle duur' },
  { value: '2', label: '2 dagen' },
  { value: '3', label: '3 dagen' },
  { value: '4', label: '4 dagen' },
  { value: '5', label: '5 dagen' },
  { value: '6', label: '6 dagen' },
  { value: '8', label: '8 dagen' },
]

const difficulties = [
  { value: 'all', label: 'Alle niveaus' },
  { value: 'Makkelijk', label: 'Makkelijk' },
  { value: 'Gemiddeld', label: 'Gemiddeld' },
  { value: 'Intensief', label: 'Intensief' },
]

function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex flex-col bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm px-2 py-1">
          <span className="text-xs font-display font-semibold uppercase tracking-wide text-foreground">
            {tour.tourType}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-primary/90 px-2 py-1">
          <span className="text-xs font-display font-semibold uppercase tracking-wide text-primary-foreground">
            {tour.difficulty}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h2 className="font-display font-bold text-xl uppercase text-foreground leading-tight group-hover:text-primary transition-colors text-balance">
          {tour.title}
        </h2>
        <p className="text-sm text-muted-foreground font-sans leading-relaxed line-clamp-3">
          {tour.shortDescription}
        </p>
        <div className="flex flex-wrap gap-3 pt-2 border-t border-border mt-auto">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar size={12} className="text-primary" />
            {tour.dates}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin size={12} className="text-primary" />
            {tour.city}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users size={12} className="text-primary" />
            max {tour.maxPersons}
          </span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs font-display uppercase tracking-wide border border-border px-2 py-1 text-muted-foreground">
            {tour.duration}
          </span>
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
            Details <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function ToursPage() {
  const [category, setCategory] = useState('all')
  const [duration, setDuration] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = tours.filter((t) => {
    const catMatch = category === 'all' || t.category === category
    const durMatch = duration === 'all' || t.duration.startsWith(duration)
    const difMatch = difficulty === 'all' || t.difficulty === difficulty
    return catMatch && durMatch && difMatch
  })

  return (
    <div className="pt-16 min-h-screen">
      {/* Page header */}
      <div className="bg-secondary/40 border-b border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary" />
            <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Ons aanbod</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl uppercase text-foreground leading-none text-balance">
            Alle <span className="text-primary">tours</span>
          </h1>
          <p className="text-muted-foreground font-sans text-base mt-4 max-w-xl leading-relaxed">
            Ontdek ons volledige aanbod aan actieve tours — fietsen, wandelen, moto, mountainbike en meerdaagse treks — door Nederland en Europa.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Filter bar */}
        <div className="mb-8">
          <button
            className="flex items-center gap-2 text-sm font-display font-semibold uppercase tracking-wide text-foreground border border-border px-4 py-2 hover:border-primary transition-colors md:hidden mb-4"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <SlidersHorizontal size={16} className="text-primary" />
            Filters {filtersOpen ? 'verbergen' : 'tonen'}
          </button>

          <div className={`flex flex-col md:flex-row gap-4 ${filtersOpen ? 'flex' : 'hidden md:flex'}`}>
            {/* Category */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-xs font-display uppercase tracking-widest text-muted-foreground">Type</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-card border border-border text-foreground text-sm font-sans px-3 py-2 focus:outline-none focus:border-primary"
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-xs font-display uppercase tracking-widest text-muted-foreground">Duur</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="bg-card border border-border text-foreground text-sm font-sans px-3 py-2 focus:outline-none focus:border-primary"
              >
                {durations.map((d) => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>

            {/* Difficulty */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-xs font-display uppercase tracking-widest text-muted-foreground">Niveau</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="bg-card border border-border text-foreground text-sm font-sans px-3 py-2 focus:outline-none focus:border-primary"
              >
                {difficulties.map((d) => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>

            {/* Reset */}
            <div className="flex flex-col gap-1 justify-end">
              <label className="text-xs font-display uppercase tracking-widest text-muted-foreground sr-only">Reset</label>
              <button
                onClick={() => { setCategory('all'); setDuration('all'); setDifficulty('all') }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-sans border border-border px-4 py-2 hover:border-primary"
              >
                Reset filters
              </button>
            </div>
          </div>

          {/* Results count */}
          <p className="text-xs text-muted-foreground mt-4 font-sans">
            {filtered.length} tour{filtered.length !== 1 ? 's' : ''} gevonden
          </p>
        </div>

        {/* Tours grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display font-bold text-2xl uppercase text-muted-foreground">Geen tours gevonden</p>
            <p className="text-sm text-muted-foreground font-sans mt-2">Pas uw filters aan om resultaten te zien.</p>
          </div>
        )}
      </div>
    </div>
  )
}
