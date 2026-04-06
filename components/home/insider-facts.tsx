import { Zap, Globe, Shield, Ticket, Users, MapPin, Clock3, Star } from 'lucide-react'

const facts = [
  {

    label: 'Insider Tip',
    title: 'Bestel nooit kaartjes via doorverkopers',
    body:
      'Officiële kanalen en gecertificeerde touroperators zijn de enige betrouwbare bron. Nep-tickets komen helaas veel voor bij internationale wedstrijden — zeker in Spanje en Italië.',
    accent: true,
    wide: false,
  },
  {

    label: 'Wist u dat?',
    title: 'Europese topcompetities trekken gemiddeld 40.000 fans per wedstrijd',
    body:
      'De sfeer in een Duits of Spaans stadion verschilt enorm van een Nederlandse eredivisiewedstrijd. Groter, luider en onvergetelijk intens.',
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
    title: 'Bewaar uw tickets altijd digitaal én op papier',
    body:
      'Batterij leeg bij de poort? Printversies redden de dag. Wij sturen elk ticket altijd in beide formaten op.',
    accent: false,
    wide: false,
  },
  {

    label: 'Groepsdynamiek',
    title: 'Solo reizen is de norm — niet de uitzondering',
    body:
      'Meer dan 60% van onze deelnemers boekt individueel. In een groepstour leert u snel nieuwe mensen kennen met dezelfde passie. Veel deelnemers boeken daarna samen terug.',
    accent: false,
    wide: false,
  },
  {

    label: 'Lokale kennis',
    title: 'De beste kroeg zit zelden op het toeristische plein',
    body:
      'Onze begeleiders kennen de lokale supporters-hotspots. Van een bruine kroeg in Amsterdam tot de favoriete tapasbar van de thuisfans in Sevilla — wij nemen u mee.',
    accent: false,
    wide: false,
  },
  {

    label: 'Ervaring',
    title: 'Een wedstrijd meemaken is pas het begin',
    body:
      'Stadsrondleidingen, backstage-ervaringen, spelers bekijken bij de warming-up — wij bouwen rondom elk duel een volledig sportevenement. Het wedstrijdmoment is de climax van een groter avontuur.',
    accent: true,
    wide: false,
  },
  {

    label: 'Pro-tip',
    title: 'Draag nooit het shirt van de uitploeg in een ultra-vak',
    body:
      'Elke supporter kent dit, maar wij herinneren u er graag aan. Onze gidsen briefen u altijd over de zitplaatscultuur van elke specifieke wedstrijd.',
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
            Wat elke <span className="text-primary">sporttoerist</span>
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
