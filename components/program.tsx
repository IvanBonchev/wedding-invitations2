import { PROGRAM } from "@/lib/wedding"
import { FloralCorner } from "@/components/floral-corner"
import { MapPin, Wine } from "lucide-react"

export function Program() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-20 sm:py-28">
      <FloralCorner corner="tr" />
      <FloralCorner corner="bl" />

      <div className="relative mx-auto max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Програма дня
        </p>

        <div className="mt-10 rounded-2xl border border-gold/25 bg-cream-deep/60 p-8 shadow-sm shadow-burgundy-dark/5">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-burgundy text-cream">
            <Wine className="h-6 w-6" />
          </div>

          <p className="mt-6 font-script text-5xl text-burgundy">{PROGRAM.time}</p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-ink-soft">
            {PROGRAM.title}
          </p>

          <p className="mt-6 text-lg font-medium text-ink">{PROGRAM.venue}</p>
          <p className="mt-1 text-ink-soft">{PROGRAM.address}</p>

          <a
            href={PROGRAM.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-burgundy/30 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-burgundy transition-colors hover:bg-burgundy hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
          >
            <MapPin className="h-4 w-4" />
            Відкрити на мапі
          </a>
        </div>
      </div>
    </section>
  )
}
