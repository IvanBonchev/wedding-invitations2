import { GUESTS, getGuestBySlug } from "@/lib/wedding"
import { Invitation } from "@/components/invitation"

// Pre-render a static page for every known guest slug.
export function generateStaticParams() {
  return GUESTS.map((g) => ({ slug: g.slug }))
}

export default async function GuestPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ admin?: string }>
}) {
  const { slug } = await params
  const { admin } = await searchParams
  const guest = getGuestBySlug(slug)
  return <Invitation guest={guest} admin={admin === "true"} />
}
