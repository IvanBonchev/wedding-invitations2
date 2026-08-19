import { getGuestBySlug } from "@/lib/wedding"
import { Invitation } from "@/components/invitation"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ guest?: string; to?: string }>
}) {
  const params = await searchParams
  const guest = getGuestBySlug(params.guest ?? params.to)
  return <Invitation guest={guest} />
}
