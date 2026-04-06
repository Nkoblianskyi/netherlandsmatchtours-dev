import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-display font-bold text-xl tracking-tight uppercase text-foreground">
              Netherlands<span className="text-primary">Match</span>Tours
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed font-sans">
              Uw specialist in sporttochten door Nederland en heel Europa. Voetbalreizen, weekendpakketten en unieke sportervaringen — volledig verzorgd.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <a href="mailto:info@netherlandsmatchtours.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} className="text-primary shrink-0" />
                info@netherlandsmatchtours.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-foreground">Navigatie</h3>
            <nav className="flex flex-col gap-2" aria-label="Voettekstnavigatie">
              {[
                { href: '/tours', label: 'Alle tours' },
                { href: '/over-ons', label: 'Over ons' },
                { href: '/tips', label: 'Reizigersgids' },
                { href: '/contact', label: 'Contact' },
                { href: '/privacy-beleid', label: 'Privacybeleid' },
                { href: '/cookiebeleid', label: 'Cookiebeleid' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-foreground">Bedrijfsinformatie</h3>
            <address className="not-italic flex flex-col gap-1">
              <p className="text-sm font-semibold text-foreground">K.C. NTOMATA LIMITED</p>
              <div className="flex items-start gap-2 mt-1">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground leading-relaxed">
                  Stylianou Lena, 24<br />
                  Christiana Court, Flat/Office 202<br />
                  Strovolos, 2019 Nicosia<br />
                  Cyprus
                </div>
              </div>
            </address>
            <p className="text-xs text-muted-foreground mt-2">
              Ingeschreven bij het Cyprus handelregister.<br />
              Website: netherlandsmatchtours.com
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} NetherlandsMatchTours — K.C. NTOMATA LIMITED. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/privacy-beleid" className="hover:text-foreground transition-colors">Privacybeleid</Link>
            <Link href="/cookiebeleid" className="hover:text-foreground transition-colors">Cookiebeleid</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
