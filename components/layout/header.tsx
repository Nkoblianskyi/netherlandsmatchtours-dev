'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Touren' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/tips', label: 'Reizigersgids' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <span className="font-display font-bold text-xl tracking-tight text-foreground uppercase">
            Netherlands<span className="text-primary">Match</span>Tours
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Hoofdnavigatie">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link
          href="/tours"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-display font-semibold uppercase tracking-wider px-4 py-2 hover:bg-primary/90 transition-colors"
        >
          Bekijk tours
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden bg-card border-t border-border px-4 pb-6 pt-4 flex flex-col gap-4"
          aria-label="Mobiele navigatie"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-display font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/tours"
            onClick={() => setOpen(false)}
            className="mt-2 bg-primary text-primary-foreground text-base font-display font-semibold uppercase tracking-wider px-4 py-3 text-center hover:bg-primary/90 transition-colors"
          >
            Bekijk alle tours
          </Link>
        </nav>
      )}
    </header>
  )
}
