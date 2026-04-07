const facts = [
  {
    label: 'Insider Tip',
    title: 'Boek altijd via een gecertificeerde touroperator',
    body:
      'Zelfstandig boeken lijkt goedkoper, maar brengt risico\'s mee: geen begeleiding, geen terugvalplan bij annulering en geen lokale kennis. Een verzorgd pakket is altijd de slimste keuze.',
    accent: true,
    wide: false,
  },
  {
    label: 'Wist u dat?',
    title: 'Actieve reizen in Europa blijven hard groeien',
    body:
      'Steeds meer reizigers kiezen voor tochten met inhoud: bergpassen, kustpaden en authentieke dorpen. Met een goede organisatie geniet u meer en stress u minder.',
    accent: false,
    wide: false,
  },
  {
    label: 'Slimme planning',
    title: 'Donderdag = beste reisdag naar Europa',
    body:
      'Donderdagvluchten zijn gemiddeld 23% goedkoper dan weekend- of maandagvluchten. Onze tourpakketten zijn bewust op dit ritme afgestemd voor maximaal comfort en minimale drukte.',
    accent: false,
    wide: true,
  },
  {
    label: 'Veiligheid',
    title: 'Sla uw reisdocumenten altijd digitaal én op papier op',
    body:
      'Batterij leeg onderweg? Een printversie redt de dag. Wij sturen elk reisdocument altijd in beide formaten op voor vertrek.',
    accent: false,
    wide: false,
  },
  {
    label: 'Groepsdynamiek',
    title: 'Solo reizen is de norm — niet de uitzondering',
    body:
      'Meer dan 60% van onze deelnemers boekt individueel. In een groepstour leert u snel nieuwe mensen kennen met dezelfde passie voor buiten zijn. Veel deelnemers boeken daarna samen terug.',
    accent: false,
    wide: false,
  },
  {
    label: 'Lokale kennis',
    title: 'De mooiste route ligt zelden op Google Maps',
    body:
      'Onze begeleiders kennen de verborgen paden en panorama-stops die geen enkele app kent. Van een rustige bergpas in de Pyreneeën tot het perfecte picknickplekje in Zeeland.',
    accent: false,
    wide: false,
  },
  {
    label: 'Ervaring',
    title: 'De tocht zelf is pas het begin van het avontuur',
    body:
      'Lokale keuken proeven, cultuur ontdekken, bijzondere overnachtingen — wij bouwen rondom elke tour een complete beleving. De route is het hart van een groter avontuur.',
    accent: true,
    wide: false,
  },
  {
    label: 'Pro-tip',
    title: 'Train minstens 6 weken voor een intensieve tour',
    body:
      'Een goede basisconditie maakt het verschil tussen overleven en genieten. Onze gidsen geven elk deelnemer een persoonlijk voorbereidingsschema na boeking.',
    accent: false,
    wide: false,
  },
]

export function InsiderFacts() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="insider-heading">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px w-6 bg-primary" />
          <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">
            Insider kennis
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <h2
            id="insider-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl uppercase text-foreground leading-none text-balance"
          >
            Wat elke <span className="text-primary">actieve reiziger</span>
            <br />moet weten
          </h2>
          <p className="text-sm text-muted-foreground font-sans max-w-xs leading-relaxed">
            Feiten, trucs en insider-tips van onze begeleiders die jarenlang door Europa reizen.
          </p>
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
        {facts.map((fact, i) => {

          const colSpan =
            fact.wide
              ? 'lg:col-span-2'
              : 'lg:col-span-1'

          return (
            <div
              key={i}
              className={`group relative flex flex-col gap-3 p-5 border transition-all duration-300 hover:-translate-y-0.5 ${colSpan} ${fact.accent
                  ? 'bg-primary border-primary/80 text-primary-foreground'
                  : 'bg-card border-border hover:border-primary/40'
                }`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span
                  className={`font-display font-semibold text-[10px] uppercase tracking-widest ${fact.accent ? 'text-primary-foreground/70' : 'text-primary'
                    }`}
                >
                  {fact.label}
                </span>

              </div>

              {/* Content */}
              <h3
                className={`font-display font-bold text-base uppercase leading-snug text-balance ${fact.accent ? 'text-primary-foreground' : 'text-foreground'
                  }`}
              >
                {fact.title}
              </h3>
              <p
                className={`text-xs leading-relaxed font-sans mt-auto ${fact.accent ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}
              >
                {fact.body}
              </p>

              {/* Decorative corner line */}
              {!fact.accent && (
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
