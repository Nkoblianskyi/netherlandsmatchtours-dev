import { Luggage, Clock, Camera, Wind, ShieldCheck, CreditCard, Globe, MapPin, Users, Utensils } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reizigersgids & Tips — NetherlandsMatchTours',
  description: 'Praktische reizigersgids voor sporttochten: wat inpakken, hoe aankomst, fotograferen, weer, veiligheid en meer.',
}

const sections = [
  {
    id: 'inpakken',
    icon: Luggage,
    title: 'Slim inpakken voor een sportweekend',
    tips: [
      'Breng altijd een supporterssjaal mee — ook als u naar het buitenland reist. Het is uw visuele identiteit als supporter.',
      'Comfortabele wandelschoenen zijn essentieel. U legt gemiddeld 8–12 km per dag af bij een sportweekend in de stad.',
      'Een lichte, waterdichte regenjas is onmisbaar in Londen, maar ook in Amsterdam en Parijs.',
      'Zorg voor voldoende lokale valuta of een kaart zonder buitenlandse transactiekosten.',
      'Breng een powerbank mee — lang matchdays vergen veel van uw telefoononbatterij.',
      'Kopie van uw identiteitsbewijs en boeking altijd apart bewaren van het origineel.',
    ],
  },
  {
    id: 'aankomst',
    icon: Clock,
    title: 'Tijdig aanwezig: aankomsttips per stadion',
    tips: [
      'Europese stadions hebben striktere veiligheidscontroles dan in Nederland. Reken op 30–45 minuten wachttijd bij de ingang.',
      'Kom minimaal 90 minuten voor aftrap aan bij de stadioningang — zeker bij internationale wedstrijden.',
      'Uw e-ticket of papieren kaartje moet direct beschikbaar zijn bij de poort. Sla tickets niet diep verstopt op uw telefoon op.',
      'Controleer de specifieke regels van het stadion over tassen en verboden voorwerpen. Veel stadions hanteren een no-bag-beleid voor grote tassen.',
      'Verken de buurt van het stadion 2–3 uur voor de wedstrijd — de sfeer in de omliggende cafés is vaak net zo leuk als het stadion zelf.',
    ],
  },
  {
    id: 'fotograferen',
    icon: Camera,
    title: 'Fotograferen in het stadion: wat mag?',
    tips: [
      'Smartphones en compacte cameras zijn vrijwel overal toegestaan voor persoonlijk gebruik.',
      'Losse objectieven en professionele camera\'s worden op de meeste stadions verboden.',
      'Vraag altijd vooraf bij uw gids of de begeleider naar de specifieke regels van het betreffende stadion.',
      'Flitsfotografie kan hinderlijk zijn voor spelers en omstanders — gebruik hem liever niet tijdens de wedstrijd.',
      'Sociale media-posts vanuit het stadion zijn welkom — maar let op het tijdstip: live resultaten hebben rechten die sommige clubs handhaven.',
    ],
  },
  {
    id: 'weer',
    icon: Wind,
    title: 'Weersomstandigheden in Europa',
    tips: [
      'Londen: bewolkt en regenachtig het hele jaar door. Altijd een regenjas meenemen, ongeacht het seizoen.',
      'Barcelona & Madrid: warm en zonnig van april tot november. Zonnebrandcrème en een waterfles zijn essentieel.',
      'Milaan: aangenaam lenteklimaat in het voorjaar, heet in de zomer. In de herfst kan het fris worden.',
      'Parijs: wisselvallig het hele jaar door. Gelaagde kleding is de beste aanpak.',
      'Dortmund & de Ruhr: koud en bewolkt in de herfst en winter. Warme lagen zijn een must voor avondwedstrijden.',
      'Amsterdam: typisch Hollands — regen is altijd mogelijk. Doch ook echte zonnige dagen zijn niet zeldzaam.',
    ],
  },
  {
    id: 'veiligheid',
    icon: ShieldCheck,
    title: 'Veiligheid onderweg',
    tips: [
      'Laat uw paspoort in het hotel en draag een kopie bij u.',
      'Bewaar portemonnee en telefoon in een binnenzak of anti-diefstaltasje in drukke gebieden.',
      'Schrijf het noodtelefoonnummer van uw gids en de lokale hulpdiensten altijd op voordat u het hotel verlaat.',
      'Bij grote mensenmassa\'s na de wedstrijd: volg altijd de instructies van stewards en politie.',
      'Bewaar uw wedstrijdticket tot na het verlaten van het stadion — u heeft het nodig bij de uitgang.',
    ],
  },
  {
    id: 'betalen',
    icon: CreditCard,
    title: 'Betalen en valuta',
    tips: [
      'In het eurogebied (Nederland, België, Duitsland, Spanje, Italië, Frankrijk) betaalt u met euro. Engeland gebruikt het Britse pond.',
      'Kaartbetalingen zijn vrijwel overal geaccepteerd. Toch is het handig om ook lokale contanten bij te hebben voor kleine aankopen.',
      'Gebruik een kaart zonder buitenlandse transactiekosten om verrassingen te voorkomen.',
      'In stadions zijn prijzen voor voedsel en drank doorgaans hoger dan daarbuiten. Eet voor de wedstrijd in de stad.',
    ],
  },
  {
    id: 'cultuur',
    icon: Globe,
    title: 'Culturele etiquette per land',
    tips: [
      'Engeland: begroet mensen vriendelijk maar behoudend. Wachtrijen worden serieus genomen — doe het na.',
      'Spanje: laat ruimte voor het eetritme. De Spanjaarden eten laat — lunch om 14:00 en diner om 21:00 of later.',
      'Italië: kleed u net iets netter dan thuis. Italianen hechten veel waarde aan presentatie.',
      'Duitsland: stiptheid is norm. Als de begeleider zegt "vertrek om 14:00", betekent dat ook echt 14:00.',
      'Frankrijk: een poging tot Frans wordt altijd gewaardeerd. Een simpel "Bonjour" opent deuren.',
    ],
  },
  {
    id: 'eten',
    icon: Utensils,
    title: 'Eten & drinken onderweg',
    tips: [
      'Vermijd restaurants direct voor het stadion — die zijn duurder en drukker. Ga 2–3 straten verderop.',
      'Vraag uw gids naar zijn persoonlijke aanbevelingen: zij kennen de beste locals.',
      'Drinkwater is overal goedkoop te kopen. In warme landen (Spanje, Italië) is 1,5 liter per dag het minimum.',
      'Pre-match maaltijden: kies voor koolhydratenrijke, lichte maaltijden die u energie geven maar niet zwaar op de maag liggen.',
      'Alcohol: geniet verantwoord. Stadions in veel landen hebben strikte regels over alcohol in het stadiongebied.',
    ],
  },
  {
    id: 'vervoer',
    icon: MapPin,
    title: 'Vervoer en oriëntatie',
    tips: [
      'Wij regelen alle transfers die in uw pakket zijn opgenomen. Buiten de programmatijden zijn openbaar vervoer apps (zoals Google Maps) uw beste vriend.',
      'In Londen: de Underground (metro) is de snelste manier om te reizen. Koop een Oyster Card of gebruik uw betaalpas direct.',
      'In Barcelona: de metro is efficiënt en betaalbaar. T-Casual kaartjes zijn kostenefficiënt voor meerdere ritten.',
      'In Parijs: de métro is uitgebreid en relatief goedkoop. Een carnet (boekje met 10 tickets) is de meest voordelige optie.',
      'Taxi-apps als Uber zijn actief in bijna alle Europese steden en zijn een betrouwbare terugvaloptie.',
    ],
  },
]

export default function TipsPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="bg-secondary/40 border-b border-border py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary" />
            <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Praktische informatie</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl uppercase text-foreground leading-none text-balance mb-4">
            Reizigersgids <span className="text-primary">sporttochten</span>
          </h1>
          <p className="text-muted-foreground font-sans text-base max-w-xl leading-relaxed">
            Alles wat u moet weten voor een zorgeloos sportweekend in Nederland of Europa — van inpakken tot culturele etiquette.
          </p>
        </div>
      </div>

      {/* Quick nav */}
      <div className="border-b border-border bg-card sticky top-16 z-30 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex gap-0" aria-label="Secties op deze pagina">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 text-xs font-display font-semibold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors px-3 py-3 border-b-2 border-transparent hover:border-primary"
              >
                {s.title.split(' ').slice(0, 2).join(' ')}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-12">
        {sections.map((section, si) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-32"
            aria-labelledby={`section-${section.id}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                <section.icon size={20} className="text-primary-foreground" />
              </div>
              <h2
                id={`section-${section.id}`}
                className="font-display font-extrabold text-2xl sm:text-3xl uppercase text-foreground leading-tight"
              >
                {section.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0">
              {section.tips.map((tip, ti) => (
                <div key={ti} className="flex items-start gap-3 bg-card border border-border p-4">
                  <span className="font-display font-bold text-primary text-sm shrink-0 mt-0.5">
                    {String(ti + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
            {si < sections.length - 1 && <hr className="mt-12 border-border" />}
          </section>
        ))}
      </div>
    </div>
  )
}
