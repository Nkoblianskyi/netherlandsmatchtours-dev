import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookiebeleid — NetherlandsMatchTours',
  description: 'Lees ons cookiebeleid: welke cookies wij gebruiken, waarom en hoe u uw voorkeuren kunt beheren.',
}

export default function CookiebeleidPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-secondary/40 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary" />
            <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Juridische informatie</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl uppercase text-foreground leading-none">
            Cookie<span className="text-primary">beleid</span>
          </h1>
          <p className="text-muted-foreground font-sans text-sm mt-3">Laatste wijziging: 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="prose-custom flex flex-col gap-8">

          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Inleiding</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              NetherlandsMatchTours, geëxploiteerd door K.C. NTOMATA LIMITED (hierna: &quot;wij&quot;, &quot;ons&quot; of &quot;onze&quot;), maakt gebruik van cookies en vergelijkbare trackingtechnologieën op de website <strong className="text-foreground">netherlandsmatchtours.com</strong>. Dit cookiebeleid legt uit wat cookies zijn, welke cookies wij gebruiken, waarom wij ze gebruiken en hoe u uw cookievoorkeuren kunt beheren.
            </p>
          </section>

          <section aria-labelledby="what-cookies">
            <h2 id="what-cookies" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Wat zijn cookies?</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Cookies zijn kleine tekstbestanden die op uw apparaat (computer, tablet, smartphone) worden opgeslagen wanneer u onze website bezoekt. Ze helpen ons de website correct te laten werken, uw voorkeuren te onthouden en het gebruik van de website te analyseren om de gebruikerservaring te verbeteren.
            </p>
          </section>

          <section aria-labelledby="types-cookies">
            <h2 id="types-cookies" className="font-display font-bold text-2xl uppercase text-foreground mb-4">Welke cookies gebruiken wij?</h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  type: 'Noodzakelijke cookies',
                  desc: 'Deze cookies zijn essentieel voor het correct functioneren van de website. Zonder deze cookies kunnen bepaalde functies niet werken. Zij vereisen geen toestemming.',
                  examples: 'Sessiecookies, beveiligingstokens, cookievoorkeur-opslag.',
                  required: true,
                },
                {
                  type: 'Analytische cookies',
                  desc: 'Wij gebruiken analytische cookies om inzicht te krijgen in hoe bezoekers onze website gebruiken. De verzamelde gegevens zijn geanonimiseerd.',
                  examples: 'Paginaweergaven, bouncepercentage, sessieduur, bron van bezoekers.',
                  required: false,
                },
                {
                  type: 'Functionele cookies',
                  desc: 'Deze cookies onthouden uw voorkeuren (zoals taalinstelling of formuliervelden) om uw bezoek gemakkelijker te maken.',
                  examples: 'Opgeslagen formuliergegevens, gebruikersinterface-instellingen.',
                  required: false,
                },
              ].map((item) => (
                <div key={item.type} className="bg-card border border-border p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm uppercase text-foreground">{item.type}</span>
                    {item.required && (
                      <span className="text-xs bg-primary/10 text-primary font-display font-semibold uppercase px-2 py-0.5">Verplicht</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
                  <p className="text-xs text-muted-foreground font-sans">
                    <span className="text-foreground font-semibold">Voorbeelden:</span> {item.examples}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="manage-cookies">
            <h2 id="manage-cookies" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Cookies beheren</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-3">
              U kunt uw cookievoorkeuren te allen tijde aanpassen via de cookiemelding onderaan onze website of via de instellingen van uw browser. Houd er rekening mee dat het uitschakelen van bepaalde cookies de functionaliteit van de website kan beperken.
            </p>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Meer informatie over cookiebeheer per browser:
            </p>
            <ul className="flex flex-col gap-1 mt-2 pl-4 list-disc">
              {['Google Chrome', 'Mozilla Firefox', 'Apple Safari', 'Microsoft Edge'].map((b) => (
                <li key={b} className="text-sm text-muted-foreground font-sans">{b}: zie de helppagina van uw browser.</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="retention">
            <h2 id="retention" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Bewaartermijn cookies</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Sessiecookies worden verwijderd zodra u uw browser sluit. Permanente cookies blijven opgeslagen voor een periode van maximaal 12 maanden, tenzij u ze eerder verwijdert of uw toestemming intrekt.
            </p>
          </section>

          <section aria-labelledby="contact-cookies">
            <h2 id="contact-cookies" className="font-display font-bold text-2xl uppercase text-foreground mb-3">Contact</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Heeft u vragen over ons cookiebeleid? Neem dan contact op via{' '}
              <a href="mailto:info@netherlandsmatchtours.com" className="text-primary underline underline-offset-2 hover:no-underline">
                info@netherlandsmatchtours.com
              </a>{' '}
              of bekijk onze{' '}
              <Link href="/privacy-beleid" className="text-primary underline underline-offset-2 hover:no-underline">
                privacyverklaring
              </Link>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
