import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacybeleid — NetherlandsMatchTours',
  description: 'Lees ons privacybeleid: hoe wij uw persoonsgegevens verzamelen, verwerken en beschermen.',
}

export default function PrivacyBeleidPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-secondary/40 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary" />
            <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Juridische informatie</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl uppercase text-foreground leading-none">
            Privacy<span className="text-primary">beleid</span>
          </h1>
          <p className="text-muted-foreground font-sans text-sm mt-3">Laatste wijziging: 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="flex flex-col gap-8">

          <section aria-labelledby="p-intro">
            <h2 id="p-intro" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Inleiding</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              NetherlandsMatchTours, geëxploiteerd door <strong className="text-foreground">K.C. NTOMATA LIMITED</strong> (Stylianou Lena, 24, Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus), hecht grote waarde aan de bescherming van uw persoonsgegevens. Deze privacyverklaring legt uit welke gegevens wij verzamelen, hoe wij deze verwerken en welke rechten u heeft op grond van de Algemene Verordening Gegevensbescherming (AVG/GDPR).
            </p>
          </section>

          <section aria-labelledby="p-controller">
            <h2 id="p-controller" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Verwerkingsverantwoordelijke</h2>
            <div className="bg-card border border-border p-5">
              <p className="text-sm text-foreground font-display font-bold uppercase">K.C. NTOMATA LIMITED</p>
              <p className="text-sm text-muted-foreground font-sans mt-1">Stylianou Lena, 24, Christiana Court, Flat/Office 202</p>
              <p className="text-sm text-muted-foreground font-sans">Strovolos, 2019 Nicosia, Cyprus</p>
              <p className="text-sm text-muted-foreground font-sans mt-2">
                E-mail: <a href="mailto:info@netherlandsmatchtours.com" className="text-primary underline underline-offset-2 hover:no-underline">info@netherlandsmatchtours.com</a>
              </p>
            </div>
          </section>

          <section aria-labelledby="p-data">
            <h2 id="p-data" className="font-display font-bold text-2xl uppercase text-foreground mb-4">Welke gegevens verzamelen wij?</h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  cat: 'Contactgegevens',
                  items: ['Naam en achternaam', 'E-mailadres', 'Telefoonnummer (optioneel)', 'Inhoud van uw bericht'],
                  purpose: 'Voor het beantwoorden van vragen en verwerken van boekingsaanvragen.',
                },
                {
                  cat: 'Technische gegevens',
                  items: ['IP-adres', 'Browsertype en -versie', 'Besturingssysteem', 'Pagina\'s bezocht en tijdstip van bezoek'],
                  purpose: 'Voor de werking van de website en statistische analyse.',
                },
                {
                  cat: 'Boekingsgegevens',
                  items: ['Gekozen tour', 'Reisdatum en aantal personen', 'Betalingsbevestiging (via externe partner)'],
                  purpose: 'Voor het uitvoeren van de reisovereenkomst.',
                },
              ].map((cat) => (
                <div key={cat.cat} className="bg-card border border-border p-5">
                  <h3 className="font-display font-bold text-sm uppercase text-foreground mb-2">{cat.cat}</h3>
                  <ul className="flex flex-col gap-1 pl-4 list-disc mb-3">
                    {cat.items.map((i) => (
                      <li key={i} className="text-sm text-muted-foreground font-sans">{i}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground font-sans border-t border-border pt-2">
                    <span className="text-foreground font-semibold">Doel:</span> {cat.purpose}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="p-basis">
            <h2 id="p-basis" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Rechtsgrondslag</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Wij verwerken uw persoonsgegevens op basis van: (1) uw toestemming, (2) de uitvoering van een overeenkomst, (3) onze gerechtvaardigde belangen, en/of (4) een wettelijke verplichting. U kunt uw toestemming te allen tijde intrekken.
            </p>
          </section>

          <section aria-labelledby="p-retention">
            <h2 id="p-retention" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Bewaartermijnen</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Contactgegevens worden maximaal 2 jaar bewaard na het laatste contact. Boekingsgegevens worden bewaard zolang wettelijk vereist (minimaal 7 jaar voor boekhoudkundige doeleinden). Analytische gegevens worden na 26 maanden automatisch geanonimiseerd.
            </p>
          </section>

          <section aria-labelledby="p-rights">
            <h2 id="p-rights" className="font-display font-bold text-2xl uppercase text-foreground mb-4">Uw rechten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { right: 'Recht op inzage', desc: 'U kunt opvragen welke gegevens wij van u verwerken.' },
                { right: 'Recht op rectificatie', desc: 'U kunt onjuiste gegevens laten corrigeren.' },
                { right: 'Recht op verwijdering', desc: 'U kunt verzoeken uw gegevens te verwijderen.' },
                { right: 'Recht op beperking', desc: 'U kunt verwerking tijdelijk laten opschorten.' },
                { right: 'Recht op overdraagbaarheid', desc: 'U kunt uw gegevens opvragen in een leesbaar formaat.' },
                { right: 'Recht van bezwaar', desc: 'U kunt bezwaar maken tegen de verwerking van uw gegevens.' },
              ].map((r) => (
                <div key={r.right} className="bg-card border border-border p-4">
                  <p className="font-display font-bold text-xs uppercase tracking-wide text-primary mb-1">{r.right}</p>
                  <p className="text-xs text-muted-foreground font-sans">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-4">
              Om uw rechten uit te oefenen, kunt u contact opnemen via <a href="mailto:info@netherlandsmatchtours.com" className="text-primary underline underline-offset-2 hover:no-underline">info@netherlandsmatchtours.com</a>. Wij reageren binnen 30 dagen.
            </p>
          </section>

          <section aria-labelledby="p-cookies">
            <h2 id="p-cookies" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Cookies</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Voor informatie over ons gebruik van cookies verwijzen wij u naar ons{' '}
              <Link href="/cookiebeleid" className="text-primary underline underline-offset-2 hover:no-underline">cookiebeleid</Link>.
            </p>
          </section>

          <section aria-labelledby="p-complaint">
            <h2 id="p-complaint" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Klachten</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Als u van mening bent dat wij uw persoonsgegevens niet conform de wet verwerken, kunt u een klacht indienen bij de Autoriteit Persoonsgegevens (AP) via <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:no-underline">autoriteitpersoonsgegevens.nl</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
