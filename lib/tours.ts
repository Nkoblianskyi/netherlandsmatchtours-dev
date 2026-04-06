export interface Tour {
  id: string
  slug: string
  title: string
  country: string
  city: string
  duration: string
  dates: string
  startDate: string
  category: 'nederland' | 'engeland' | 'spanje' | 'duitsland' | 'italie' | 'frankrijk' | 'europe'
  image: string
  shortDescription: string
  fullDescription: string
  includes: string[]
  highlights: string[]
  maxPersons: number
  difficulty: 'Makkelijk' | 'Gemiddeld' | 'Intensief'
  featured: boolean
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'hollands-voetbalweekend',
    title: 'Hollands Voetbalweekend',
    country: 'Nederland',
    city: 'Amsterdam',
    duration: '2 dagen',
    dates: '17–18 mei 2026',
    startDate: '2026-05-17',
    category: 'nederland',
    image: '/images/tours/hollands-voetbalweekend.jpg',
    shortDescription: 'Een onvergetelijk voetbalweekend in de Nederlandse hoofdstad met wedstrijd, rondleiding en échte Amsterdamse sfeer.',
    fullDescription: 'Beleef het ultieme Nederlandse voetbalweekend in het hart van Amsterdam. Dit pakket brengt je midden in de bruisende sfeer van de meest iconische voetbalstad van het land. Begin vrijdagavond met een exclusieve pre-match borrel in een traditioneel bruin café op de Nieuwmarkt, omringd door supporters die met hun oranje sjaals klaar zitten voor de grote avond. Zaterdagochtend verken je de stad op je eigen tempo — langs de grachten, langs muurschilderingen van voetbaliconen en langs de gevels die generaties lang thuisbasis zijn geweest voor de mooiste herinneringen van het Nederlandse voetbal. Na een uitgebreide lunch begeleiden wij je naar het stadion, waar de sfeer langzaam oploopt richting aftrap. Na de wedstrijd sluiten we af met een gezamenlijk diner in een Amsterdams restaurant, omgeven door de euforie van de avond.',
    includes: ['Hotelovernachting (1 nacht, 3-ster)', 'Wedstrijdkaartje', 'Pre-match borrel', 'Stadiontour', 'Gezamenlijk diner na de wedstrijd', 'Begeleiding door lokale sportgids'],
    highlights: ['Thuissfeer in Nederlandse topcompetitie', 'Rondleiding door iconische voetbalwijken', 'Traditionele Nederlandse voetbalcultuur'],
    maxPersons: 20,
    difficulty: 'Makkelijk',
    featured: true,
  },
  {
    id: '2',
    slug: 'oranje-uitreis-brussel',
    title: 'Oranje Uitreis naar Brussel',
    country: 'België',
    city: 'Brussel',
    duration: '2 dagen',
    dates: '6–7 juni 2026',
    startDate: '2026-06-06',
    category: 'europe',
    image: '/images/tours/oranje-uitreis.jpg',
    shortDescription: 'Volg het Nederlands elftal naar Brussel voor een spetterende uitwedstrijd en ontdek de Belgische hoofdstad.',
    fullDescription: 'Wanneer Nederland op bezoek gaat in Brussel, is het meer dan een voetbalwedstrijd — het is een volksfeest over de grens. Dit tweedaagse uitreispakket neemt je mee van de Nederlandse grens naar het kloppende hart van de Belgische hoofdstad, waar de Grote Markt en zijn prachtige gevels al eeuwen getuige zijn van grote evenementen. Op de dag van aankomst verken je Brussel met een begeleide wandeling langs de mooiste art-nouveau architectuur en historische pleinen. De avond voor de wedstrijd zorgen wij voor de ultieme supporters-ambiance: samen eten in het bruisende centrum, strategisch gelegen nabij het stadion. Op matchday worden alle supporters begeleid per samenreistransfer naar het stadion, waar de oranje zee zijn ware thuis vindt in een prachtige uitvak.',
    includes: ['Busreis heen en terug vanuit Rotterdam', 'Hotelovernachting (1 nacht)', 'Uitvakkaartje wedstrijd', 'Begeleide stadswandeling', 'Gezamenlijk avonddiner', 'Nederlandstalige reisbegeleider'],
    highlights: ['Uitvak-ervaring met oranje supporters', 'Brussel bij avond langs historische bezienswaardigheden', 'Gezamenlijke busreis met enthousiaste medesupporters'],
    maxPersons: 45,
    difficulty: 'Makkelijk',
    featured: true,
  },
  {
    id: '3',
    slug: 'premier-league-avontuur-londen',
    title: 'Premier League Avontuur in Londen',
    country: 'Engeland',
    city: 'Londen',
    duration: '3 dagen',
    dates: '23–25 oktober 2026',
    startDate: '2026-10-23',
    category: 'engeland',
    image: '/images/tours/premier-league-avontuur.jpg',
    shortDescription: 'Drie dagen Londen, Premier League-sfeer en de authentieke Engelse voetbalcultuur — inclusief pub-avonden en stadsverkenning.',
    fullDescription: 'Londen is de thuisbasis van de beroemdste voetbalcompetitie ter wereld, en dit driedaagse avontuur geeft je de sleutel tot haar beste geheimen. Aankomst op vrijdagmiddag, waarna je direct wordt meegenomen naar een traditionele Londense pub in het hart van de East End — het kloppende hart van de Engelse voetbalcultuur. Zaterdagochtend brengt een wandeling langs iconische voetbalwijken, van de straatjes rondom de stadions tot de marktkraampjes vol memorabilia. Na de middag: de wedstrijd zelf. De sfeer in een Engelse voetbaltempel is onnavolgbaar — de zang, de tikkie en de onmiskenbare geur van matchday-snacks creëren een ervaring die je niet snel vergeet. Zondagochtend brunch in een Londense bakkerij, waarna je met de trein of bus terug naar het vliegveld wordt begeleid.',
    includes: ['Retourvlucht Amsterdam–Londen (klasse economy)', 'Hotel 3 nachten (3-ster, centrale ligging)', 'Premier League wedstrijdticket (zitplaats)', 'Begeleide voetbalwijkwandeling', 'Pre-match pub-ronde', 'Ontbijt dag 2 en dag 3'],
    highlights: ['Premier League-wedstrijd in een iconisch Londense arena', 'Voetbalcultuur in de East End', 'Begeleide pub-avond met locals'],
    maxPersons: 18,
    difficulty: 'Gemiddeld',
    featured: true,
  },
  {
    id: '4',
    slug: 'spaans-voetbalweekend-barcelona',
    title: 'Spaans Voetbalweekend Barcelona',
    country: 'Spanje',
    city: 'Barcelona',
    duration: '3 dagen',
    dates: '14–16 augustus 2026',
    startDate: '2026-08-14',
    category: 'spanje',
    image: '/images/tours/spaans-voetbalweekend.jpg',
    shortDescription: 'Barcelona verbindt wereldklasse voetbal met prachtige architectuur, tapas en Mediterrane levenslust — een weekend om nooit te vergeten.',
    fullDescription: 'Barcelona is één van de meest betoverende steden ter wereld, en als decor voor een voetbalweekend is het simpelweg ongeëvenaard. Dit pakket begint op vrijdag met aankomst op El Prat, waarna je direct instapt in de Catalaanse levensstijl: een wandeling langs de Ramblas, een verrassend aperitivo in de Gothische wijk en een diner bij kaarslicht op een typisch Barcelonees terras. Zaterdag staat volledig in het teken van voetbal én cultuur — een ochtendbezoek aan een van de meest indrukwekkende sportarchieven van Europa, gevolgd door een ontspannen middag op het strand van Barceloneta. Avonds het hoofdevenement: een LaLiga-wedstrijd in één van de grootste voetbeltempels van het continent. Zondagochtend: een laatste koffie op Las Ramblas voordat de terugreis naar Amsterdam vertrekt.',
    includes: ['Retourvlucht Amsterdam–Barcelona', '2 hotelovernachten (4-ster, Eixample district)', 'LaLiga wedstrijdkaartje', 'Begeleide stadswandeling', 'Welkomstdiner', 'Transfers vliegveld–hotel–stadion'],
    highlights: ['LaLiga wedstrijd in Europese topsfeer', 'Gaudí-architectuur en strandwandeling', 'Authentiek Catalaans diner met begeleider'],
    maxPersons: 16,
    difficulty: 'Makkelijk',
    featured: false,
  },
  {
    id: '5',
    slug: 'italiaans-calcio-weekend-milaan',
    title: 'Italiaans Calcio Weekend Milaan',
    country: 'Italië',
    city: 'Milaan',
    duration: '3 dagen',
    dates: '19–21 september 2026',
    startDate: '2026-09-19',
    category: 'italie',
    image: '/images/tours/italiaans-calcio-weekend.jpg',
    shortDescription: 'Milaan, mode, risotto en het meest gepassioneerde voetbal van Europa — drie onvergetelijke dagen in het Italiaanse voetbalhart.',
    fullDescription: 'Milaan is niet alleen de modehoofstad van de wereld — het is ook de stad waar het Italiaanse voetbal zijn meest intense en meest romantische gedaante aanneemt. Dit weekendpakket neemt je mee door de straten van de Navigli, langs de historische portici van de binnenstad tot aan het stadion dat twee van de beroemdste clubs ter wereld huisvest. Vrijdag aankomst, avondrondleiding door het historisch centrum en een aperitivo-ronde in de trendy Brera-wijk. Zaterdag: een ochtendrondleiding langs voetbalmonumenten van de stad, gevolgd door een authentiek Milaans lunch met risotto al salto en ossobuco. De wedstrijd begint in de schemering, wanneer de lucht boven de stad oranje kleurt en de ultras de toon zetten voor een onvergetelijke calcio-ervaring. Zondag: ontspannen ontbijt, antiekmarkt in de buurt van het Castello Sforzesco en terugreis.',
    includes: ['Retourvlucht Amsterdam–Milaan', '2 hotelovernachten (4-ster, centrum)', 'Serie A wedstrijdkaartje', 'Begeleide stadswandeling Milaan', 'Welkomst aperitivo + diner vrijdag', 'Zaterdaglunch in traditioneel restaurant'],
    highlights: ['Serie A calcio in elektrische Milanese sfeer', 'Navigli-avond met lokale gids', 'Authentiek Italiaans culinair programma'],
    maxPersons: 14,
    difficulty: 'Gemiddeld',
    featured: false,
  },
  {
    id: '6',
    slug: 'duits-voetbalavontuur-dortmund',
    title: 'Duits Voetbalavontuur Dortmund',
    country: 'Duitsland',
    city: 'Dortmund',
    duration: '2 dagen',
    dates: '12–13 september 2026',
    startDate: '2026-09-12',
    category: 'duitsland',
    image: '/images/tours/duits-voetbalavontuur.jpg',
    shortDescription: 'De Bundesliga staat bekend om de meest betaalbare en toegankelijkste voetbalcultuur van Europa — ontdek het in Dortmund.',
    fullDescription: 'In geen andere stad in Europa voelt voetbal zo direct, zo eerlijk en zo ongepolijst als in Dortmund. De Bundesliga heeft de reputatie gebouwd als de competitie die het meest dicht bij de échte supporter staat — geen commercieel spektakel, maar pure passie in een bruisende industriestad die haar trots draagt op het voetbalveld. Dit tweedaagse pakket start op zaterdagochtend vroeg vanuit Eindhoven of Venlo. Na aankomst in Dortmund: een begeleide walkabout door de historische Innenstadt, langs bierkelders en voetbaltafels, richting het stadion dat op matchday een gele en zwarte zee wordt van meer dan 80.000 supporters. De zogenaamde Gelbe Wand — de zuidtribune — is het grootste staande supportersvak van Europa en geeft je een kippenvelervaring die je bijblijft.',
    includes: ['Busreis heen en terug vanuit Eindhoven of Venlo', 'Bundesliga wedstrijdkaartje', 'Pre-match begeleide rondleiding Dortmund', 'Lunch in traditioneel Ruhrstadtrestaurant', 'Snacks en dranken in de bus'],
    highlights: ['Bundeliga-sfeer in het meest explosieve supportersvak van Europa', 'Ruhrstadtkultuur en lokale biercultuur', 'Compacte reis — ideaal als eerste buitenlandse sporttrip'],
    maxPersons: 50,
    difficulty: 'Makkelijk',
    featured: true,
  },
  {
    id: '7',
    slug: 'parijse-voetbalreis',
    title: 'Parijse Voetbalreis',
    country: 'Frankrijk',
    city: 'Parijs',
    duration: '3 dagen',
    dates: '7–9 november 2026',
    startDate: '2026-11-07',
    category: 'frankrijk',
    image: '/images/tours/parijse-voetbalreis.jpg',
    shortDescription: 'Parijs bij avond, voetbal op het hoogste niveau en culinaire verwennerij — het perfecte pakket voor de sporttoerist met smaak.',
    fullDescription: 'Parijs heeft voor iedereen iets te bieden — en voor de voetbalminnaar is de stad een absolute must. Dit driedaagse pakket combineert de magie van de Ligue 1 met het beste dat de Lichtstad te bieden heeft. Aankomst vrijdag per Thalys of vliegtuig, check-in in een boetiekhotel in het 10e arrondissement, dicht bij het Canal Saint-Martin. Een eerste avondwandeling langs Notre-Dame en over de Pont Neuf zet de toon voor het weekend. Zaterdag is de grote dag: een ochtendmarkt in Montmartre, een lunch op een terras aan de Seine, gevolgd door de rit naar het stadion voor de Ligue 1-wedstrijd. De sfeer in Parijs is een mix van zuidelijk temperament en kosmopolitische flair — anders dan waar ook. Na de wedstrijd sluit je af in een klassiek Parijse bistro. Zondagochtend: ontbijt met croissants en een laatste slentertocht langs de boekenkraampjes langs de Seine.',
    includes: ['Retoreis per Thalys of vliegtuig', '2 hotelovernachten (boutique 4-ster)', 'Ligue 1 wedstrijdkaartje', 'Begeleide Parijs-wandeling', 'Zaterdaglunch', 'Diner na de wedstrijd in Parijse bistro'],
    highlights: ['Ligue 1 voetbal in één van de mooiste steden ter wereld', 'Montmartre ochtendmarkt', 'Parijse bistro-ervaring na de wedstrijd'],
    maxPersons: 16,
    difficulty: 'Gemiddeld',
    featured: false,
  },
  {
    id: '8',
    slug: 'europese-sportrondtour',
    title: 'Europese Sportrondtour',
    country: 'Europa',
    city: 'Meerdere steden',
    duration: '7 dagen',
    dates: '26 juli – 1 augustus 2026',
    startDate: '2026-07-26',
    category: 'europe',
    image: '/images/tours/europese-sportrondtour.jpg',
    shortDescription: 'Zeven dagen, vier landen, drie wedstrijden en ontelbare herinneringen — de ultieme Europese sportrondtour voor de echte fan.',
    fullDescription: 'Dit is het kroonjuweel van ons aanbod: een zeven dagen durende rondreis die je langs drie van de meest iconische voetbalsteden van Europa leidt. De tour begint in Amsterdam, van waaruit je per trein naar Brussel reist voor de openingswedstrijd — een internationale voetbalnacht in het historisch centrum. Dan verder per nachttrein naar Parijs, waar je twee dagen geniet van de stad én een Ligue 1-wedstrijd bijwoont. Daarna richting het zuiden: een vlucht naar Barcelona sluit de tour af met een LaLiga-duel en een afscheidsborrel op het strand van Barceloneta. Terugreis naar Amsterdam per vlucht. Onderweg is elke stap begeleider door een ervaren Nederlandstalige gids die je door de lokale voetbalcultuur, culinaire tradities en stadsverhalen loodst. Dit pakket is uitsluitend beschikbaar voor groepen van maximaal 12 personen voor een maximaal persoonlijke ervaring.',
    includes: ['Alle treintransferts en vluchten (economy)', '6 hotelovernachten (3 steden, 3–4 ster)', '3 wedstrijdtickets (Brussel, Parijs, Barcelona)', 'Volledige begeleiding door Nederlandstalige gids', 'Alle ontbijten + 3 gezamenlijke diners', 'Stadsrondleidingen in alle drie steden', 'Reisbegeleiding inclusief transfers'],
    highlights: ['Drie Europese voetbalcompetities in één week', 'Nachttrein Brussel–Parijs — een unieke ervaring', 'Maximaal 12 deelnemers voor intieme groepssfeer'],
    maxPersons: 12,
    difficulty: 'Intensief',
    featured: true,
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.featured)
}

export function getToursByCategory(category: string): Tour[] {
  if (category === 'all') return tours
  return tours.filter((t) => t.category === category)
}
