import { GUESTS, getGuestBySlug } from "@/lib/wedding"
import { Invitation } from "@/components/invitation"

// Pre-render a static page for every known guest slug.
export function generateStaticParams() {
  return GUESTS.map((g) => ({ slug: g.slug }))
}

export default async function GuestPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guest = getGuestBySlug(slug)
  return <Invitation guest={guest} />
}
