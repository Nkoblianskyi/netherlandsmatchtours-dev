import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-end pb-14 pt-14 overflow-hidden"
      aria-label="Welkomstbanner"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Voetbalstadion met een volle tribune bij avond"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Ticker tape stripe */}
      <div className="absolute top-[calc(50%-80px)] left-0 right-0 z-10 overflow-hidden pointer-events-none">
        <div className="flex animate-marquee whitespace-nowrap py-2 bg-primary/10 backdrop-blur-sm border-y border-primary/20">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="font-display font-bold text-primary/30 text-3xl uppercase tracking-[0.3em] mx-8 shrink-0"
            >
              Nederland &bull; Europa &bull; Sporttochten
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-primary" />
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Sporttochten Nederland &amp; Europa
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-none uppercase text-balance text-foreground mb-6">
          Jouw plek<br />
          <span className="text-primary">op de tribune.</span>
        </h1>

        <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
          Van Amsterdam tot Barcelona — wij organiseren sporttochten die verder gaan dan alleen de wedstrijd. Volledig verzorgde pakketten, echte sportsfeer en onvergetelijke herinneringen.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-base px-6 py-3 hover:bg-primary/90 transition-colors"
          >
            Bekijk alle tours <ArrowRight size={18} />
          </Link>
          <Link
            href="/over-ons"
            className="inline-flex items-center gap-2 text-foreground font-display font-semibold uppercase tracking-wider text-sm border border-border px-6 py-3 hover:border-primary hover:text-primary transition-colors"
          >
            Over ons
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-12 flex flex-wrap gap-6 sm:gap-10">
          {[
            { value: '8+', label: 'Sporttochten' },
            { value: '6', label: 'Europese landen' },
            { value: '100%', label: 'Verzorgd pakket' },
            { value: 'NL', label: 'Begeleiding' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display font-extrabold text-2xl text-primary leading-none">{stat.value}</span>
              <span className="text-xs text-muted-foreground font-sans uppercase tracking-wide mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
