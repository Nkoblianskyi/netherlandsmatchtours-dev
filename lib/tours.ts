export interface Tour {
  id: string
  slug: string
  title: string
  country: string
  city: string
  duration: string
  dates: string
  startDate: string
  category: 'fietsen' | 'wandelen' | 'moto' | 'mountainbike' | 'meerdaags'
  image: string
  shortDescription: string
  fullDescription: string
  includes: string[]
  highlights: string[]
  maxPersons: number
  difficulty: 'Makkelijk' | 'Gemiddeld' | 'Intensief'
  featured: boolean
  tourType: string
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'hollands-fietsavontuur',
    title: 'Hollands Fietsavontuur',
    country: 'Nederland',
    city: 'Utrecht – Amsterdam',
    duration: '3 dagen',
    dates: '16–18 mei 2026',
    startDate: '2026-05-16',
    category: 'fietsen',
    tourType: 'Fietsreis',
    image: '/images/tours/hollands-fietsavontuur.jpg',
    shortDescription: 'Drie dagen fietsen door het mooiste van Nederland — polders, molens, tulpenvelden en slingerende kanaaldijken.',
    fullDescription: 'Nergens ter wereld is het fietspad zo verfijnd als in Nederland, en deze driedaagse tocht laat je genieten van alles waar het Nederlandse landschap beroemd om is. De route begint in Utrecht, kronkelt langs de Vecht en zijn buitenplaatsen, doorkruist de bloembollenvelden ten zuiden van Haarlem en sluit af op de Amsterdamse grachten. Elke dag rijd je gemiddeld 70 kilometer op zorgvuldig geselecteerde routes die voornamelijk over fietspaden en rustige dijkwegen lopen — veilig, schilderachtig en uitdagend genoeg om echt te genieten. De overnachtingen zijn in historische dorpsherbergen en kleine familiehotels, uitgekozen om hun karakter en keuken. Onze lokale gids is elke dag aanwezig en deelt verhalen over het Nederlandse landschap, de waterhuishouding en de cultuur van het polderland. Dit is fietsen op zijn best: zonder haast, met volop tijd voor een kop koffie bij een molen en een duik in een zwemvijver langs de route.',
    includes: [
      '2 hotelovernachten in karaktervolle herbergen',
      'Volledig begeleide route met gids',
      'Bagagetransport per dag',
      'Ontbijt elke ochtend',
      'Lunch op dag 1 en dag 2',
      'Gedetailleerde routekaarten en GPX-bestanden',
      'Vervoer fiets per trein Utrecht–Amsterdam (retour)',
    ],
    highlights: [
      'Fietsen langs tulpenvelden in volle bloei',
      'Dijkroutes met uitzicht over de Noord-Hollandse polders',
      'Afsluiting met rondvaart op de Amsterdamse grachten',
    ],
    maxPersons: 16,
    difficulty: 'Gemiddeld',
    featured: true,
  },
  {
    id: '2',
    slug: 'alpen-mototour-oostenrijk',
    title: 'Alpen Mototour Oostenrijk',
    country: 'Oostenrijk',
    city: 'Salzburg – Innsbruck',
    duration: '5 dagen',
    dates: '7–11 juni 2026',
    startDate: '2026-06-07',
    category: 'moto',
    tourType: 'Motorreis',
    image: '/images/tours/alpen-mototour.jpg',
    shortDescription: 'Vijf dagen over de mooiste bergpassen van Oostenrijk — de ultieme mototour door de hoge Alpen.',
    fullDescription: 'De Oostenrijkse Alpen zijn het beloofde land voor motorcyclisten: oneindig lange bergpassen, haarsplitbochten op hoogte, sneeuwkappen die in juni nog wit oplichten boven de vallei en een wegennetwerk dat moeiteloos de mooiste uithoeken van het land met elkaar verbindt. Deze vijfdaagse tocht begint in Salzburg, de charmante mozartstad aan de Salzach, en voert je via de Grossglockner Hochalpenstrasse — de mooiste bergweg van Europa — naar Zell am See, over de Timmelsjoch-pas richting Zuid-Tirol en terug via het Inn-dal naar Innsbruck. Elke dag is zorgvuldig gepland met een ideale mix van technisch rijden, panoramastops en echte Tiroler hospitality in berghotels en gasthuizen. De tocht is geschikt voor ervaren motorrijders met een middelgrote of grote motor. Er is dagelijks ondersteuning door een volgwagen die bagage en eventuele kleine herstellingen meeneemt.',
    includes: [
      '4 hotelovernachten in berghotels (halfpension)',
      'Volgwagen met bagage en technische ondersteuning',
      'Routeboekje en GPX-tracks',
      'Dagelijks ontbijt en avonddiner',
      'Verzekeringsbijdrage noodhulp onderweg',
      'Dagelijkse groepsbriefing door ervaren routeleider',
    ],
    highlights: [
      'Grossglockner Hochalpenstrasse — de beroemdste bergweg van Oostenrijk',
      'Timmelsjoch — grenspassage op 2509 meter hoogte',
      'Tiroler berghotels met alpiene keuken',
    ],
    maxPersons: 10,
    difficulty: 'Intensief',
    featured: true,
  },
  {
    id: '3',
    slug: 'pyreneen-trekkocht',
    title: 'Pyreneeën Trekkocht',
    country: 'Spanje / Frankrijk',
    city: 'Pyreneeën',
    duration: '6 dagen',
    dates: '18–23 juli 2026',
    startDate: '2026-07-18',
    category: 'wandelen',
    tourType: 'Bergtrek',
    image: '/images/tours/bergen-trekkocht.jpg',
    shortDescription: 'Zes dagen trekken door de wilde Pyreneeën — bergpassen, eeuwenoude schaapspaden en stilte die je nog lang bijblijft.',
    fullDescription: 'De Pyreneeën zijn een van de weinige plekken in Europa waar je nog echt het gevoel hebt dat je de natuur in zijn puurste vorm betreedt. Deze zesdaagse trekkocht leidt je langs een zorgvuldig samengestelde route door het hart van de gebergten, van de Spaanse kant via meerdere bergpassen naar de Franse zijde. Elke dag leg je tussen de 15 en 22 kilometer af op bergpaden van goede kwaliteit, met hoogteverschillen die variëren van 400 tot 900 meter. De nachten breng je door in berghutten en kleine berghotels — eenvoudig maar authentiek, met een sfeer die nergens anders te vinden is. Onze berggids heeft de route meerdere malen gelopen en deelt zijn kennis over de geologie, flora en fauna van het gebied. Op de rustdag middenin de tocht is er de mogelijkheid voor een zwem- en ontspanningsprogramma nabij een bergmeer. Maximumgrootte van 10 personen voor een intieme en veilige groepservaring.',
    includes: [
      '5 hotelovernachten / berghutten (halfpension)',
      'Gecertificeerde berggids',
      'Bagagetransport van hut tot hut op 4 van de 6 dagen',
      'Topografische wandelkaarten',
      'Groepsverzekering bergreddingsdienst',
      'Ophaalservice bij bus- of treinstation bij aanvang en einde',
    ],
    highlights: [
      'Oversteek van meerdere bergpassen boven 2000 meter',
      'Nacht in een authentieke Pyreneeënhut met uitzicht',
      'Zwemmen in kristalhelder Pyreneïsch bergmeer',
    ],
    maxPersons: 10,
    difficulty: 'Intensief',
    featured: true,
  },
  {
    id: '4',
    slug: 'rome-lazio-heuveltocht',
    title: 'Rome & Lazio Heuveltocht',
    country: 'Italië',
    city: 'Rome',
    duration: '4 dagen',
    dates: '15–18 oktober 2026',
    startDate: '2026-10-15',
    category: 'wandelen',
    tourType: 'Wandelreis',
    image: '/images/tours/marathon-rome.jpg',
    shortDescription: 'Vier dagen Rome en de heuvels van Lazio — stadswandelingen, panoramaroutes en rustig tempo met veel tijd voor gastronomie.',
    fullDescription: 'Rome beleef je het best te voet: niet gehaast van highlight naar highlight, maar met ruimte voor pleinen, steegjes, uitzichtpunten en lokale trattoria’s. Deze vierdaagse wandelreis combineert twee dagen in de stad met twee dagen in het heuvelachtige Lazio net buiten Rome. We starten met een ontspannen aankomst en een korte avondwandeling langs de Tiber, gevolgd door een volle dag met een thematische stadsroute (historisch centrum, verborgen binnenplaatsen en uitzichtpunten). Op dag drie trekken we de natuur in voor een begeleide heuveltocht met panoramastops en een lange lunch. De laatste dag is rustig: een korte ochtendwandeling, koffie op een piazza en daarna vertrek. Alles is georganiseerd, maar de sfeer blijft licht en flexibel — zodat u echt kunt genieten.',
    includes: [
      'Retourvlucht Amsterdam–Rome',
      '3 hotelovernachten (4-ster, historisch centrum)',
      'Begeleide stadswandeling (dag 2)',
      'Begeleide heuveltocht in Lazio (dag 3)',
      'Lunchstop onderweg (dag 3)',
      'Transferservice vliegveld–hotel (retour)',
    ],
    highlights: [
      'Rome te voet: pleinen, steegjes en uitzichtpunten buiten de drukte',
      'Heuvelroutes in Lazio met panorama’s en rustige paden',
      'Italiaanse keuken en tijd voor cultuur, zonder haast',
    ],
    maxPersons: 20,
    difficulty: 'Gemiddeld',
    featured: false,
  },
  {
    id: '5',
    slug: 'zeeuwse-kust-duinen-trek',
    title: 'Zeeuwse Kust & Duinen Trek',
    country: 'Nederland',
    city: 'Zeeland',
    duration: '2 dagen',
    dates: '19–20 september 2026',
    startDate: '2026-09-19',
    category: 'wandelen',
    tourType: 'Kusttrek',
    image: '/images/tours/kustmarathon-nederland.jpg',
    shortDescription: 'Twee dagen wandelen langs de Zeeuwse kust — brede stranden, duinen en dijkpaden met de Noordzee als constante horizon.',
    fullDescription: 'Zeeland is gemaakt om buiten te zijn: weidse stranden, stille duinroutes en dijken die het landschap ritme geven. Deze tweedaagse kusttrek is een ontspannen maar actieve trip voor reizigers die houden van frisse lucht en open ruimte. We starten op zaterdagochtend met een begeleide kustwandeling in rustig tempo, inclusief fotostops en een lange lunchpauze. De middag is vrij: zwemmen, een dorp verkennen of gewoon uitwaaien. Zondag kiezen we een andere routecombinatie (strand + duin + dijk) zodat u in twee dagen verrassend veel variatie ziet. Na afloop sluiten we af met een late lunch en reist u ontspannen terug.',
    includes: [
      '1 hotelovernachte in strandhotel (halfpension)',
      'Begeleide kustwandeling (dag 1)',
      'Begeleide duinenroute (dag 2)',
      'Lunchstop op dag 1',
      'Transferservice station–hotel',
    ],
    highlights: [
      'Wandelen over brede stranden met de zee naast u',
      'Duinpaden en dijkroutes met grootse vergezichten',
      'Rustige afsluiting met lokale producten na de tocht',
    ],
    maxPersons: 30,
    difficulty: 'Gemiddeld',
    featured: true,
  },
  {
    id: '6',
    slug: 'spaanse-wielertour-andalusie',
    title: 'Spaanse Wielertour Andalusië',
    country: 'Spanje',
    city: 'Málaga – Granada',
    duration: '5 dagen',
    dates: '12–16 april 2026',
    startDate: '2026-04-12',
    category: 'fietsen',
    tourType: 'Wielertraining',
    image: '/images/tours/spaanse-wielertour.jpg',
    shortDescription: 'Vijf dagen wielertrekken door Andalusië — bergpassen, olijfgaarden, witte dorpjes en het beste klimaat van Europa.',
    fullDescription: 'Andalusië is de bestemming bij uitstek voor wielrenners die vroeg in het seizoen de benen willen testen in de zon. Het zuiden van Spanje combineert bergachtige wegen, een perfect voorjaarsklimaatje (gemiddeld 22 graden in april) en een culinaire cultuur die elke avond eindigt met tapas en een glas lokale wijn. Deze vijfdaagse wielertour start in Málaga en voert u langs de kust tot aan Nerja, daarna omhoog door de Sierra Nevada richting Granada — een van de meest legendarische bergbeklimmingen van de Iberische route. Elke dag is er een begeleide groepsrit van 80 tot 120 kilometer, met een keuze tussen een gematigd tempo voor genieteers en een stevig tempo voor de sportievere rijders. De bagage wordt dagelijks vervoerd zodat je licht kunt rijden. In Granada sluit je af met een avond in de Albaicín, de historische Moorse wijk, waarna de terugreis via het vliegveld van Málaga vertrekt.',
    includes: [
      '4 hotelovernachten (3–4 ster, halfpension)',
      'Dagelijkse begeleide groepsrit met route-aanwijzingen',
      'Bagagetransport per fietsetappe',
      'Fietshuur mogelijk (extra, op aanvraag)',
      'Technische ondersteuning volgwagen',
      'Welkomstdiner en afsluiting in Granada',
    ],
    highlights: [
      'Beklimming van de Sierra Nevada via historische weggetjes',
      'Witte dorpjes in de Axarquía-regio',
      'Avonddiner tapas in het hart van Granada',
    ],
    maxPersons: 14,
    difficulty: 'Intensief',
    featured: true,
  },
  {
    id: '7',
    slug: 'scandinavische-mountainbike-noorwegen',
    title: 'Scandinavische Mountainbike Noorwegen',
    country: 'Noorwegen',
    city: 'Bergen – Voss',
    duration: '4 dagen',
    dates: '8–11 augustus 2026',
    startDate: '2026-08-08',
    category: 'mountainbike',
    tourType: 'Mountainbikereis',
    image: '/images/tours/scandinavische-mountainbike.jpg',
    shortDescription: 'Mountainbiken in de wilde natuur van Noorwegen — fjorden, dennenbossen, single tracks en spectaculair avontuur.',
    fullDescription: 'Noorwegen heeft alles wat een mountainbiker zich kan wensen: uitdagende single tracks door dichte dennenbossen, glooiende heideplateaus met uitzicht over fjorden die tot diep in het land doordringen, en een cultuur van buitensporten die je elke dag voelt in de energie van de mensen en de perfecte staat van de trailsystemen. Deze vierdaagse tour tussen Bergen en Voss is samengesteld door lokale trailbouwers en is geschikt voor mountainbikers met een gemiddeld tot gevorderd niveau. Elke dag rijd je drie tot vijf uur op zorgvuldig onderhouden trails in wisselende terreinen — van technische rotspassages tot snelle flow trails door het bos. De nachten breng je door in comfortabele lodges en bergcabins, met avonden vol Noors eten (laks, rendierbiefstuk, bessen) en verhalen over de trails. Op dag drie is er een optionele kayaktocht over een nabijgelegen fjord voor wie de benen een dagje rust gunt.',
    includes: [
      '3 hotelovernachten in bergcabins / lodges (halfpension)',
      'Dagelijkse begeleide trail-rit met lokale gids',
      'Fietstransport per dag in begeleidingsbus',
      'Optionele kayaktocht fjord (extra, op aanvraag)',
      'Alle ontbijten en avondmaaltijden',
      'Technische ondersteuning en EHBO-set',
    ],
    highlights: [
      'Single tracks door Noors dennenbos met uitzicht over fjorden',
      'Optionele kayakervaring op een Noors fjord',
      'Authentiek Noors keuken elke avond in een bergcabin',
    ],
    maxPersons: 10,
    difficulty: 'Intensief',
    featured: false,
  },
  {
    id: '8',
    slug: 'europese-meerdaagse-trek',
    title: 'Grote Europese Meerdaagse Trek',
    country: 'Zwitserland / Italië',
    city: 'Zermatt – Courmayeur',
    duration: '8 dagen',
    dates: '25 juli – 1 augustus 2026',
    startDate: '2026-07-25',
    category: 'meerdaags',
    tourType: 'Meerdaagse Trek',
    image: '/images/tours/europese-meerdaagse-trek.jpg',
    shortDescription: 'Acht dagen wandelen langs de mooiste berglijnen van Europa — van Zermatt door de Alpen tot aan Courmayeur aan de voet van de Mont Blanc.',
    fullDescription: 'Dit is onze meest ambitieuze tocht: een achtdaagse doorkruising van de westelijke Alpen, van het Zwitserse Zermatt naar het Italiaanse Courmayeur aan de voet van de Mont Blanc. De route volgt grotendeels het beroemde Haute Route-tracé — een van de klassiekste en mooiste bergwandeltochten van Europa — en passeert meerdere bergpassen boven de 3000 meter, biedt uitzicht op meer dan twintig viervijfhonderd-meter-toppen en leidt door drie landen (Zwitserland, Italië en een korte passage door Frans Savoie). Elke dag wandel je vijf tot zeven uur op goed gemarkeerde bergpaden. De nacht breng je door in authentieke berghutten met pensions — eenvoudig, bergachtig, en onvergetelijk gezellig. Op dag vier is er een rustdag in het Italiaanse bergdorp Aosta, met een optionele klimworkshop voor gevorderden. De tocht wordt begeleid door een IFMGA-gecertificeerde berggids en is uitsluitend toegankelijk voor deelnemers met aantoonbare wandelervaring in hoog gebergte.',
    includes: [
      '7 hotelovernachten in berghutten en alpine pensions',
      'IFMGA-gecertificeerde berggids gedurende hele tocht',
      'Bagagetransport op dagen zonder hutten-overnachting',
      'Alle ontbijten en avondmaaltijden halfpension',
      'Groepsverzekering alpen-evacuatie',
      'Kabelbaantickets in Zermatt en Courmayeur',
      'Transferservice eerste en laatste dag',
    ],
    highlights: [
      'Uitzicht op meer dan twintig Alpentop-vierduizenders',
      'Overnachting in authentieke alpine berghutten',
      'Passage door drie landen in acht wandeldagen',
    ],
    maxPersons: 8,
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
