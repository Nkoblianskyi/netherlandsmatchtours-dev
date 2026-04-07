import { Luggage, Clock, Camera, Wind, ShieldCheck, CreditCard, Globe, MapPin, Users, Utensils } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reizigersgids & Tips — NetherlandsMatchTours',
  description: 'Praktische reizigersgids voor actieve tours: wat inpakken, voorbereiding, fotograferen, weer, veiligheid en meer.',
}

const sections = [
  {
    id: 'inpakken',
    icon: Luggage,
    title: 'Slim inpakken voor een actieve tour',
    tips: [
      'Kies lichtgewicht kleding in lagen: een basislaag, een isolerende middenlaag en een windproof buitenlaag.',
      'Fietsers: padded fietsbroek en stijve fietsschoenen zijn een must voor dagrittten van 50+ km.',
      'Wandelaars: goed ingelopen trekkingschoenen zijn belangrijker dan het merk. Loop ze thuis minimaal 3 weken in.',
      'Altijd een waterdichte regenlaag mee, zelfs in de zomer — bergweer is onvoorspelbaar.',
      'Breng een powerbank mee — GPX-apps en navigatie vergen veel van uw telefoonbatterij.',
      'Compressiezakken verkleinnen uw kleding volume in de rugzak met tot 50%. Ideaal voor meerdaagse trektochten.',
    ],
  },
  {
    id: 'voorbereiding',
    icon: Clock,
    title: 'Training en voorbereiding',
    tips: [
      'Start minimaal 6 weken voor vertrek met een opbouwend trainingsschema passend bij uw tour-niveau.',
      'Fiets- en mototours: zorg dat u de geplande etappeafstand thuis comfortabel kunt rijden voor vertrek.',
      'Bergwandelaars: trainingstochten met hoogteverschil zijn essentieel — vlak lopen voorbereidt u niet op 800+ meter klimmen per dag.',
      'Oefen met uw uitrusting thuis: weet hoe uw tent, kookset of fietsreparatieset werkt voor u vertrekt.',
      'Raadpleeg uw huisarts bij twijfels over conditie of gezondheid voor intensieve tours.',
    ],
  },
  {
    id: 'fotograferen',
    icon: Camera,
    title: 'Fotograferen onderweg: tips',
    tips: [
      'Gouden uur (30 min na zonsopgang en voor zonsondergang) levert de beste natuurfoto\'s op bergpassen.',
      'Smartphones zijn ideaal voor onderweg: licht, altijd bij de hand en moderne toestellen presteren uitstekend.',
      'Actiecamera\'s (zoals GoPro-alternatieven) zijn perfect voor fiets- en motoshots — bevestig ze stuurstang of helm.',
      'Stop nooit alleen om te fotograferen op smalle bergpaden: stop altijd op een brede, veilige plek.',
      'Bescherm uw camera/telefoon tegen regen en stof met een waterdichte hoes of drybag.',
      'Maak dagelijks backups van uw foto\'s — een externe schijf of cloud-sync voorkomt verlies bij storingen.',
    ],
  },
  {
    id: 'weer',
    icon: Wind,
    title: 'Weersomstandigheden in Europa',
    tips: [
      'Alpen en Pyreneeën: bergweer kan snel omslaan. Controleer altijd de bergweersapp (MeteoBlue of Yr.no) voor vertrek.',
      'Nederland en Zeeland: regen is altijd mogelijk. Een waterdichte laag en fietsbroek zijn het hele jaar door essentieel.',
      'Noorwegen en Scandinavië: zomers aangenaam maar koele avonden — neem altijd een fleece en een windjas mee.',
      'Spanje en Zuid-Europa: hoge temperaturen in de zomer (30–38°C). Vroeg vertrekken (voor 10:00) en uitrusten in de middag.',
      'Hoogte in de Alpen: temperatuur daalt ca. 6°C per 1000 meter stijging. Op een 2500m-pas is het soms 15°C kouder dan in het dal.',
      'Bij onweer in de bergen: onmiddellijk afdalen naar lager terrein. Sta nooit op een open bergkam tijdens bliksem.',
    ],
  },
  {
    id: 'veiligheid',
    icon: ShieldCheck,
    title: 'Veiligheid onderweg',
    tips: [
      'Vertel altijd iemand (gids of medereiziger) uw geplande route en verwachte aankomsttijd.',
      'Draag fietshelmers, kniebeschermers en andere bescherming bij mountainbike en moto — ook op "makkelijke" etappes.',
      'Bewaar noodcontactgegevens offline op uw telefoon: uw gids, lokale hulpdiensten en de ambassade.',
      'Berg-EHBO: leer de basisregels voor blaren, verstuikingen en uitputting voor u vertrekt.',
      'Deel uw GPS-locatie met een vertrouwde contactpersoon thuis via een tracking-app tijdens meerdaagse trektochten.',
      'Sluit een reisverzekering af die actieve activiteiten en bergevacuatie dekt — standaard reisverzekeringen dekken dit vaak niet.',
    ],
  },
  {
    id: 'betalen',
    icon: CreditCard,
    title: 'Betalen en valuta',
    tips: [
      'In het eurogebied (Nederland, België, Duitsland, Spanje, Italië, Frankrijk) betaalt u met euro. Noorwegen gebruikt de Noorse kroon.',
      'Kaartbetalingen zijn vrijwel overal geaccepteerd. Toch is het handig om ook lokale contanten bij te hebben voor berghutten en kleine dorpen.',
      'Gebruik een kaart zonder buitenlandse transactiekosten om verrassingen te voorkomen.',
      'In afgelegen berggebieden zijn er soms geen pinautomaten. Neem genoeg contant geld mee voor 2–3 dagen.',
    ],
  },
  {
    id: 'cultuur',
    icon: Globe,
    title: 'Culturele etiquette per land',
    tips: [
      'Noorwegen: respect voor natuur is fundamenteel. "Leave no trace" — neem al uw afval mee.',
      'Spanje: laat ruimte voor het eetritme. De Spanjaarden eten laat — lunch om 14:00 en diner om 21:00 of later.',
      'Italië: kleed u net iets netter dan thuis. Italianen hechten veel waarde aan presentatie, ook op de camping.',
      'Oostenrijk: rustig en beleefd in bergdorpjes. Groet wandelaars die u passeert — dat is de norm.',
      'Frankrijk: een poging tot Frans wordt altijd gewaardeerd. Een simpel "Bonjour" en "Merci" opent veel deuren.',
    ],
  },
  {
    id: 'eten',
    icon: Utensils,
    title: 'Eten & drinken onderweg',
    tips: [
      'Voor langere ritten en trektochten: eet koolhydraatrijke maaltijden (pasta, rijst, brood) de avond voor een zware etappe.',
      'Breng altijd energiesnacks mee: noten, energierepen of gedroogd fruit voor onderweg.',
      'Drinkwater: in de Alpen is bronwater vaak drinkbaar — vraag altijd aan uw gids of een lokale bewoner.',
      'In berghutten: lunchmenu is vaak groter en goedkoper dan het avondmenu. Plan hierop als budget een rol speelt.',
      'Lokale specialiteiten proeven hoort bij de ervaring: Tiroler Gröstl in Oostenrijk, pintxos in Spanje, brunost in Noorwegen.',
    ],
  },
  {
    id: 'vervoer',
    icon: MapPin,
    title: 'Vervoer en oriëntatie',
    tips: [
      'Wij regelen alle transfers die in uw pakket zijn opgenomen. Buiten de programmatijden zijn navigatie-apps uw beste vriend.',
      'Download offline kaarten (Google Maps of Maps.me) voor uw bestemming — berg- en bosgebieden hebben zelden mobiel bereik.',
      'Fietsers: controleer altijd of uw fiets vervoer is inbegrepen bij vluchten of treinen — dit vereist soms een aparte boeking.',
      'Moto-reizigers: controleer rijbewijsvereisten per land en of uw verzekering internationale dekking biedt.',
      'Taxi-apps als Bolt zijn actief in bijna alle Europese steden en zijn een betrouwbare terugvaloptie.',
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
            Reizigersgids <span className="text-primary">actieve tours</span>
          </h1>
          <p className="text-muted-foreground font-sans text-base max-w-xl leading-relaxed">
            Alles wat u moet weten voor een zorgeloze actieve tour in Nederland of Europa — van inpakken en voorbereiding tot culturele etiquette en veiligheid in de bergen.
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
