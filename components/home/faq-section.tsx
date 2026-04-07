'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Wat is er inbegrepen in een sporttourpakket?',
    a: 'Elk pakket bevat minimaal vervoer, accommodatie en begeleiding. Aanvullende elementen zoals deelname-inschrijving, maaltijden en bagagetransport staan per tour duidelijk omschreven op de tourpagina.',
  },
  {
    q: 'Wat als ik mij moet afmelden wegens blessure of ziekte?',
    a: 'Wij adviseren een annuleringsverzekering af te sluiten voor vertrek. Bij annulering tot 4 weken voor vertrek ontvangt u 70% restitutie. Neem bij noodgevallen altijd direct contact op — wij zoeken altijd naar een passende oplossing.',
  },
  {
    q: 'Kan ik solo deelnemen aan een tour?',
    a: 'Absoluut. Veel van onze deelnemers reizen solo. Onze begeleide groepstours zorgen ervoor dat u nooit alleen staat — u wordt onderdeel van een enthousiaste groep medereizenden met dezelfde sportpassie.',
  },
  {
    q: 'Is er een minimumleeftijd voor de tours?',
    a: 'De meeste tours zijn geschikt voor deelnemers vanaf 16 jaar. Jongeren onder de 18 jaar moeten vergezeld worden door een volwassene. Neem contact op voor specifieke vragen over reizen met kinderen.',
  },
  {
    q: 'Hoe vroeg moet ik boeken?',
    a: 'Wij adviseren minimaal 6–8 weken voor vertrekdatum te reserveren. Sommige tours met beperkte groepsgrootte zijn al maanden van tevoren volgeboekt — vroeg reserveren is altijd aan te raden.',
  },
  {
    q: 'Welke taal wordt er gesproken tijdens de begeleiding?',
    a: 'Al onze tours worden begeleid in het Nederlands. Sommige lokale gidsen spreken ook Engels. U hoeft uzelf geen zorgen te maken over communicatie in het buitenland.',
  },
  {
    q: 'Welk fitnessniveau is vereist?',
    a: 'Dit verschilt per tour — elke pagina toont een duidelijke moeilijkheidsgraad (Makkelijk, Gemiddeld of Intensief). Wij sturen u na boeking een persoonlijk voorbereidingsschema om optimaal voorbereid te vertrekken.',
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
