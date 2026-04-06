'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Zijn de kaartjes inbegrepen in de tourprijs?',
    a: 'Ja, elk pakket bevat één of meerdere wedstrijdkaartjes. De categorie van de zitplaats staat per tour omschreven. Wij zorgen voor de volledige reservering — u hoeft niets zelf te regelen.',
  },
  {
    q: 'Wat als de wedstrijd wordt afgelast of uitgesteld?',
    a: 'Bij officiële afgelasting door de organisatie bieden wij u een volledige terugbetaling of omboekingsmogelijkheid. Wij volgen de officiële competitiecommunicatie en houden u direct op de hoogte.',
  },
  {
    q: 'Kan ik solo deelnemen aan een tour?',
    a: 'Absoluut. Veel van onze deelnemers reizen solo. Onze begeleide groepstours zorgen ervoor dat u nooit alleen staat — u wordt onderdeel van een enthousiaste groep medereizenden.',
  },
  {
    q: 'Is er een minimumleeftijd voor de tours?',
    a: 'De meeste tours zijn geschikt voor deelnemers vanaf 16 jaar. Jongeren onder de 18 jaar moeten vergezeld worden door een volwassene. Neem contact op voor specifieke vragen over reizen met kinderen.',
  },
  {
    q: 'Hoe vroeg moet ik boeken?',
    a: 'Wij adviseren minimaal 6–8 weken voor vertrekdatum te reserveren, zeker voor populaire wedstrijden. Sommige tours met beperkte capaciteit zijn al maanden van tevoren volgeboekt.',
  },
  {
    q: 'Welke taal wordt er gesproken tijdens de begeleiding?',
    a: 'Al onze tours worden begeleid in het Nederlands. Sommige gidsen op locatie spreken ook Engels. U hoeft uzelf geen zorgen te maken over communicatie in het buitenland.',
  },
  {
    q: 'Zijn maaltijden inbegrepen?',
    a: 'Dit verschilt per tour. Alle pakketten met inbegrepen maaltijden zijn duidelijk aangegeven op de tourpagina. Bij twijfel helpen wij u graag verder via ons contactformulier.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-secondary/30 border-y border-border py-16" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary" />
            <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Veelgestelde vragen</span>
            <div className="h-px w-6 bg-primary" />
          </div>
          <h2
            id="faq-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl uppercase text-foreground leading-none text-balance"
          >
            Alles wat u <span className="text-primary">wilt weten</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-secondary/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-display font-bold text-sm uppercase tracking-wide text-foreground pr-2">
                  {faq.q}
                </span>
                <span className="shrink-0 text-primary">
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {open === i && (
                <div className="px-4 pb-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
