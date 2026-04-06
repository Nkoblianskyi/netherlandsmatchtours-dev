import Image from 'next/image'
import Link from 'next/link'
import { Shield, Headphones, MapPin, Users, Globe, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over ons — NetherlandsMatchTours',
  description: 'Leer meer over NetherlandsMatchTours: onze missie, ons team en onze passie voor sporttochten in Nederland en Europa.',
}

const values = [
  {
    title: 'Europese ervaring',
    description: 'Wij kennen de voetbalsteden van Europa door en door. Van de buurtkroeg voor de match tot de beste uitlooproute daarna — onze gidsen zijn thuis op elk continent.',
  },
  {
    title: 'Zorgeloos reizen',
    description: 'Van vervoer en hotel tot kaartjes en restaurantreservering — alles is geregeld voor u bij aanvang van uw booking. U hoeft alleen maar te genieten.',
  },
  {
    title: 'Kleine, persoonlijke groepen',
    description: 'Geen anoniem massatoerisme. Onze pakketten zijn ontworpen voor intieme groepservaringen waarbij elke deelnemer de aandacht krijgt die hij verdient.',
  },
  {
    title: 'Nederlandstalige begeleiding',
    description: 'Elk pakket wordt begeleid door een Nederlandstalige reisleider die niet alleen de weg kent, maar ook de cultuur en de voetbalgeschiedenis van elke bestemming.',
  },
  {
    title: 'Lokale authenticiteit',
    description: 'Wij werken samen met lokale partners op elke bestemming om u de meest authentieke ervaring te bieden — ver weg van de toeristische paden.',
  },
  {
    title: 'Kwaliteitsgarantie',
    description: 'Al onze tours worden zorgvuldig samengesteld en gecureerd. Als er iets niet aan uw verwachtingen voldoet, staan wij klaar om het op te lossen.',
  },
]

const team = [
  {
    name: 'Sportreisspecialist',
    role: 'Oprichter & Reisdirecteur',
    description: 'Met 15 jaar ervaring in de reiswereld en een levenslange passie voor Europees voetbal, stond hij aan de wieg van NetherlandsMatchTours.',
  },
  {
    name: 'Reisorganisator',
    role: 'Operationeel Manager',
    description: 'Verantwoordelijk voor de dagelijkse operaties en logistiek. Zorgt ervoor dat elke tour vlekkeloos verloopt van start tot finish.',
  },
  {
    name: 'Gidscoördinator',
    role: 'Locatie & Gidsenteam',
    description: 'Coördineert het netwerk van lokale gidsen in alle Europese bestemmingen en zorgt voor consistente kwaliteit op locatie.',
  },
]

export default function OverOnsPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Page header */}
      <div className="relative bg-secondary/40 border-b border-border py-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary" />
            <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Ons verhaal</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl uppercase text-foreground leading-none text-balance max-w-2xl">
            Over <span className="text-primary">ons</span>
          </h1>
        </div>
      </div>

      {/* Mission section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-extrabold text-4xl uppercase text-foreground leading-none mb-6">
              Sport verbindt.<br />
              <span className="text-primary">Wij organiseren.</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-5">
              NetherlandsMatchTours is opgericht met één duidelijke missie: Nederlandse sportfans de beste en meest zorgeloze manier bieden om wedstrijden in Nederland en heel Europa bij te wonen.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-5">
              Of het nu gaat om een thuiswedstrijd in Amsterdam, een uitreis naar Brussel, of een meerdaagse sportrondreis door drie Europese landen — wij regelen alles van a tot z. Vervoer, accommodatie, wedstrijdkaartjes, begeleiding op locatie en veel meer.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Wij geloven dat de beste sportmomenten niet alleen op het veld plaatsvinden, maar ook in de straten, de cafés, de restaurants en de rijke cultuur van elke bestemming. Onze tours zijn ontworpen om die complete ervaring te leveren.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-bg.jpg"
                alt="Het team van NetherlandsMatchTours"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-secondary/30 border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display font-extrabold text-4xl uppercase text-foreground mb-10 text-balance">
            Onze <span className="text-primary">waarden</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border p-5 flex flex-col gap-3">
                <h3 className="font-display font-bold text-sm uppercase tracking-wide text-foreground">{v.title}</h3>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-display font-extrabold text-4xl uppercase text-foreground mb-10">
          Ons <span className="text-primary">team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {team.map((member) => (
            <div key={member.name} className="bg-card border border-border p-6 flex flex-col gap-2">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-2">
                <Users size={22} className="text-primary" />
              </div>
              <p className="font-display font-bold text-base uppercase text-foreground">{member.name}</p>
              <p className="text-xs text-primary font-display uppercase tracking-wide">{member.role}</p>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-1">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company info */}
      <div className="bg-secondary/30 border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display font-bold text-2xl uppercase text-foreground mb-5">Bedrijfsinformatie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <p className="font-display font-bold text-sm uppercase tracking-wide text-foreground">K.C. NTOMATA LIMITED</p>
              <p className="text-sm text-muted-foreground font-sans">Stylianou Lena, </p>
              <p className="text-sm text-muted-foreground font-sans">24 Christiana Court, Flat/Office 202</p>
              <p className="text-sm text-muted-foreground font-sans">Strovolos, 2019 Nicosia</p>
              <p className="text-sm text-muted-foreground font-sans">Cyprus</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground font-sans">
                <span className="text-foreground font-semibold">Website:</span> netherlandsmatchtours.com
              </p>
              <p className="text-sm text-muted-foreground font-sans">
                <span className="text-foreground font-semibold">E-mail:</span> info@netherlandsmatchtours.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="font-display font-extrabold text-3xl uppercase text-foreground mb-4">Klaar voor uw eerste sporttocht?</h2>
        <p className="text-muted-foreground font-sans mb-8 max-w-xl mx-auto">Bekijk ons aanbod of neem direct contact op — wij helpen u graag bij het vinden van de perfecte tour.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tours"
            className="bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-sm px-8 py-3 hover:bg-primary/90 transition-colors"
          >
            Bekijk tours
          </Link>
          <Link
            href="/contact"
            className="border border-border text-foreground font-display font-bold uppercase tracking-wider text-sm px-8 py-3 hover:border-primary hover:text-primary transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </div>
  )
}
