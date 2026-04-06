import Link from 'next/link'
import { ArrowRight, Luggage, Clock, Camera, Wind } from 'lucide-react'

const tips = [
  {
    icon: Luggage,
    title: 'Pak slim in voor een sportweekend',
    excerpt: 'Een supporterssjaal, comfortabele schoenen en een lichte regenjas zijn onmisbaar. Wij vertellen u precies wat u per bestemming nodig heeft.',
    href: '/tips#inpakken',
  },
  {
    icon: Clock,
    title: 'Hoe vroeg moet u aanwezig zijn?',
    excerpt: 'Europese stadions hebben striktere veiligheidscontroles dan in Nederland. Kom minstens 90 minuten voor aftrap aan bij de poort.',
    href: '/tips#aankomst',
  },
  {
    icon: Camera,
    title: 'Fotograferen in het stadion: wat mag?',
    excerpt: 'Compact cameras en smartphones zijn bijna altijd toegestaan, maar losse lenzen worden verboden. Bekijk onze bestemming-per-bestemming gids.',
    href: '/tips#fotograferen',
  },
  {
    icon: Wind,
    title: 'Weersomstandigheden in Europa',
    excerpt: 'Van de regen in Londen tot de hitte in Barcelona — wij geven u per tour het perfecte kledingreisadvies voor een comfortabel weekend.',
    href: '/tips#weer',
  },
]

export function TipsPreview() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="tips-preview-heading">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-px w-6 bg-primary" />
            <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Reizigersgids</span>
          </div>
          <h2
            id="tips-preview-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl uppercase text-foreground text-balance leading-none"
          >
            Tips voor de <span className="text-primary">sporttoerist</span>
          </h2>
        </div>
        <Link
          href="/tips"
          className="shrink-0 inline-flex items-center gap-2 text-primary font-display font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
        >
          Alle tips <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {tips.map((tip) => (
          <Link
            key={tip.title}
            href={tip.href}
            className="group flex gap-4 bg-card border border-border p-5 hover:border-primary/50 transition-colors"
          >
            <div className="shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <tip.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm uppercase text-foreground mb-1 group-hover:text-primary transition-colors">
                {tip.title}
              </h3>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed line-clamp-2">
                {tip.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
