import { COUPLE, DATE_LABEL } from "@/lib/wedding"
import { RingIcon } from "@/components/ring-icon"

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-burgundy to-burgundy-dark px-6 py-16 text-center">
      <RingIcon className="mx-auto h-10 w-10 text-gold" />
      <h2 className="mt-6 font-script text-5xl text-cream sm:text-6xl">
        {COUPLE.groom}
        <span className="mx-3 text-gold">&amp;</span>
        {COUPLE.bride}
      </h2>
      <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-gold-soft">
        {DATE_LABEL} · Одеса
      </p>
    </footer>
  )
}
