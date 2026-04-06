'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    tour: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="bg-secondary/40 border-b border-border py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary" />
            <span className="text-primary font-display font-semibold text-xs uppercase tracking-widest">Neem contact op</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl uppercase text-foreground leading-none text-balance">
            Contact <span className="text-primary">opnemen</span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <aside className="flex flex-col gap-6">
            <div>
              <h2 className="font-display font-bold text-xl uppercase text-foreground mb-5">Contactgegevens</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-display uppercase tracking-wide">E-mail</p>
                    <a
                      href="mailto:info@netherlandsmatchtours.com"
                      className="text-sm font-sans text-foreground hover:text-primary transition-colors"
                    >
                      info@netherlandsmatchtours.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-display uppercase tracking-wide">Telefoon</p>
                    <a
                      href="tel:+31201234567"
                      className="text-sm font-sans text-foreground hover:text-primary transition-colors"
                    >
                      +31 (0)20 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-display uppercase tracking-wide">Openingstijden</p>
                    <p className="text-sm font-sans text-foreground">Ma–Vr: 09:00–18:00</p>
                    <p className="text-sm font-sans text-muted-foreground">Za: 10:00–15:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-display uppercase tracking-wide">Bedrijfsadres</p>
                    <address className="not-italic text-sm font-sans text-foreground leading-relaxed">
                      K.C. NTOMATA LIMITED<br />
                      Stylianou Lena, 24<br />
                      Christiana Court, Flat/Office 202<br />
                      Strovolos, 2019 Nicosia<br />
                      Cyprus
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time notice */}
            <div className="bg-primary/10 border border-primary/20 p-4">
              <p className="text-xs font-display font-semibold uppercase tracking-wide text-primary mb-1">Snelle reactietijd</p>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                Wij streven ernaar om elk contactverzoek binnen 24 uur te beantwoorden op werkdagen. Voor dringende vragen kunt u ons ook telefonisch bereiken.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-xl uppercase text-foreground mb-6">Stuur een bericht</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground">
                    Naam <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Uw volledige naam"
                    className="bg-card border border-border text-foreground text-sm font-sans px-4 py-3 focus:outline-none focus:border-primary placeholder:text-muted-foreground/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground">
                    E-mailadres <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="uw@emailadres.nl"
                    className="bg-card border border-border text-foreground text-sm font-sans px-4 py-3 focus:outline-none focus:border-primary placeholder:text-muted-foreground/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground">
                    Telefoonnummer
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+31 6 00 00 00 00"
                    className="bg-card border border-border text-foreground text-sm font-sans px-4 py-3 focus:outline-none focus:border-primary placeholder:text-muted-foreground/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="tour" className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground">
                    Tour (optioneel)
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    value={formData.tour}
                    onChange={handleChange}
                    className="bg-card border border-border text-foreground text-sm font-sans px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Selecteer een tour</option>
                    <option value="hollands-voetbalweekend">Hollands Voetbalweekend</option>
                    <option value="oranje-uitreis-brussel">Oranje Uitreis naar Brussel</option>
                    <option value="premier-league-avontuur-londen">Premier League Avontuur Londen</option>
                    <option value="spaans-voetbalweekend-barcelona">Spaans Voetbalweekend Barcelona</option>
                    <option value="italiaans-calcio-weekend-milaan">Italiaans Calcio Weekend Milaan</option>
                    <option value="duits-voetbalavontuur-dortmund">Duits Voetbalavontuur Dortmund</option>
                    <option value="parijse-voetbalreis">Parijse Voetbalreis</option>
                    <option value="europese-sportrondtour">Europese Sportrondtour</option>
                    <option value="andere">Andere vraag</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground">
                  Onderwerp <span className="text-primary">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Waar gaat uw vraag over?"
                  className="bg-card border border-border text-foreground text-sm font-sans px-4 py-3 focus:outline-none focus:border-primary placeholder:text-muted-foreground/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground">
                  Bericht <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Vertel ons wat u wilt weten of boeken..."
                  className="bg-card border border-border text-foreground text-sm font-sans px-4 py-3 focus:outline-none focus:border-primary placeholder:text-muted-foreground/50 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-xs text-muted-foreground font-sans">
                  <span className="text-primary">*</span> Verplichte velden. Lees ons{' '}
                  <a href="/privacy-beleid" className="text-primary underline underline-offset-2 hover:no-underline">privacybeleid</a>.
                </p>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-sm px-6 py-3 hover:bg-primary/90 transition-colors"
                >
                  <Send size={16} />
                  Bericht versturen
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success popup */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <div className="bg-card border border-border max-w-md w-full p-8 flex flex-col items-center gap-5 text-center">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
              <CheckCircle size={36} className="text-primary" />
            </div>
            <div>
              <h2 id="success-title" className="font-display font-extrabold text-2xl uppercase text-foreground mb-2">
                Bericht verstuurd!
              </h2>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Bedankt voor uw bericht. Ons team neemt binnen 24 uur contact met u op via het e-mailadres dat u heeft opgegeven.
              </p>
            </div>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', tour: '', message: '' }) }}
              className="bg-primary text-primary-foreground font-display font-bold uppercase tracking-wider text-sm px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              Sluiten
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
