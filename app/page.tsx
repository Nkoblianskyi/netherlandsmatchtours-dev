import { Hero } from '@/components/home/hero'
import { CatalogPreview } from '@/components/home/catalog-preview'
import { AboutPreview } from '@/components/home/about-preview'
import { TipsPreview } from '@/components/home/tips-preview'
import { InsiderFacts } from '@/components/home/insider-facts'
import { FaqSection } from '@/components/home/faq-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <CatalogPreview />
      <TipsPreview />
      <InsiderFacts />
      <FaqSection />
    </>
  )
}
