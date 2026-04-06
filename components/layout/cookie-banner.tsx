'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('nmt-cookies-accepted')
    if (!accepted) {
      setTimeout(() => setVisible(true), 1200)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('nmt-cookies-accepted', 'true')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('nmt-cookies-accepted', 'false')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookiemelding"
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground font-sans leading-relaxed">
            Wij gebruiken cookies om uw ervaring op onze website te verbeteren en verkeersinformatie te analyseren.
            Lees ons{' '}
            <Link href="/cookiebeleid" className="text-primary underline underline-offset-2 hover:no-underline">
              cookiebeleid
            </Link>{' '}
            en{' '}
            <Link href="/privacy-beleid" className="text-primary underline underline-offset-2 hover:no-underline">
              privacybeleid
            </Link>{' '}
            voor meer informatie.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
          >
            Weigeren
          </button>
          <button
            onClick={accept}
            className="bg-primary text-primary-foreground text-sm font-display font-semibold uppercase tracking-wide px-4 py-2 hover:bg-primary/90 transition-colors"
          >
            Accepteren
          </button>
          <button
            onClick={decline}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Banner sluiten"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
