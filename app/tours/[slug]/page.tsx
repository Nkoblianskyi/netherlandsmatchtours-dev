import { notFound } from 'next/navigation'
import { tours, getTourBySlug } from '@/lib/tours'
import { TourDetailClient } from './tour-detail-client'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) return {}
  return {
    title: `${tour.title} – NetherlandsMatchTours`,
    description: tour.shortDescription,
  }
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  const relatedTours = tours.filter((t) => t.slug !== tour.slug).slice(0, 3)

  return <TourDetailClient tour={tour} relatedTours={relatedTours} />
}
