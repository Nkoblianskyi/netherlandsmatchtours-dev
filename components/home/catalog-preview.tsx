import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react'
import { getFeaturedTours } from '@/lib/tours'

export function CatalogPreview() {
  const featured = getFeaturedTours()

  return (
    <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="catalog-preview-heading">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-px w-6 bg-primary" />
            <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Uitgelichte tours</span>
          </div>
          <h2
            id="catalog-preview-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl uppercase text-foreground text-balance leading-none"
          >
            Populaire <span className="text-primary">tours</span>
          </h2>
        </div>
        <Link
          href="/tours"
          className="shrink-0 inline-flex items-center gap-2 text-primary font-display font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
        >
          Alle tours <ArrowRight size={16} />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.slice(0, 6).map((tour) => (
          <Link
            key={tour.id}
            href={`/tours/${tour.slug}`}
            className="group flex flex-col bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* TourType badge */}
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

            {/* Content */}
            <div className="flex flex-col flex-1 p-4 gap-3">
              <h3 className="font-display font-bold text-lg uppercase text-foreground leading-tight group-hover:text-primary transition-colors text-balance">
                {tour.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed line-clamp-2">
                {tour.shortDescription}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-border">
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
                  max {tour.maxPersons} pers.
                </span>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-display uppercase tracking-wide text-muted-foreground border border-border px-2 py-1">
                  {tour.duration}
                </span>
                <span className="text-primary font-display font-semibold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                  Details <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View all */}
      <div className="mt-8 text-center">
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 border border-primary text-primary font-display font-bold uppercase tracking-wider text-sm px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Bekijk alle tours <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
