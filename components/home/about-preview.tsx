import Link from 'next/link'
import { ArrowRight, Shield, Headphones, MapPin, Users } from 'lucide-react'
import Image from 'next/image'

const values = [
  {
    title: 'Lokale expertise',
    description: 'Onze gidsen kennen elke stad als hun broekzak — van de beste pre-match café tot het snelste uitlooproute na de wedstrijd.',
  },
  {
    title: 'Zorgeloos reizen',
    description: 'Vervoer, hotel, kaartjes — alles is voor u geregeld. U hoeft alleen te genieten van de wedstrijd en de sfeer.',
  },
  {
    title: 'Kleine groepen',
    description: 'Geen massatoerisme. Wij werken met beperkte groepsgroottes zodat elke reis persoonlijk, vlot en onvergetelijk is.',
  },
  {
    title: 'NL begeleiding',
    description: 'Van reservering tot thuiskomst: uw reisbegeleider spreekt Nederlands en staat altijd voor u klaar.',
  },
]

export function AboutPreview() {
  return (
    <section className="bg-secondary/30 border-y border-border py-16" aria-labelledby="about-preview-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-primary" />
              <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Wie zijn wij</span>
            </div>
            <h2
              id="about-preview-heading"
              className="font-display font-extrabold text-4xl sm:text-5xl uppercase text-foreground leading-none mb-6 text-balance"
            >
              Sport &amp; reizen,<br />
              <span className="text-primary">perfect gecombineerd</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              NetherlandsMatchTours is opgericht door een team van gepassioneerde sportfans en ervaren reisorganisatoren. Onze missie is simpel: u de beste sportervaringen van Nederland en Europa bieden, zonder dat u zelf ook maar één kaartje of hotel hoeft te regelen. Van de eerste aanvraag tot de terugreis naar huis — wij staan voor u klaar.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <div>
                    <p className="font-display font-bold text-sm uppercase text-foreground">{v.title}</p>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed mt-0.5">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/over-ons"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-sm px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              Meer over ons <ArrowRight size={16} />
            </Link>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-bg.jpg"
                alt="Het team van NetherlandsMatchTours"
                fill
                className="object-cover"
              />
              {/* Accent border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary pointer-events-none" />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground p-4">
              <p className="font-display font-extrabold text-3xl leading-none">8+</p>
              <p className="font-display font-semibold text-xs uppercase tracking-wide mt-1">Sporttochten</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
