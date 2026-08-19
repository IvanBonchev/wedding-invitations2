import { SCHEDULE, PROGRAM } from "@/lib/wedding"
import { FloralCorner } from "@/components/floral-corner"
import { MapPin } from "lucide-react"

export function Program() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-20 sm:py-28">
      <FloralCorner corner="tr" />
      <FloralCorner corner="bl" />

      <div className="relative mx-auto max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Програма дня
        </p>

        <ol className="mt-10 space-y-6 text-left">
          {SCHEDULE.map((item) => (
            <li
              key={item.time}
              className="flex gap-4 rounded-2xl border border-gold/25 bg-cream-deep/60 p-5 shadow-sm shadow-burgundy-dark/5 sm:gap-5 sm:p-6"
            >
              <span className="shrink-0 font-script text-3xl leading-none text-burgundy sm:text-4xl">
                {item.time}
              </span>
              <span className="text-pretty text-base leading-relaxed text-ink sm:text-lg">
                {item.text}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-10 border-t border-gold/20 pt-8">
          <p className="text-lg font-medium text-ink">{PROGRAM.venue}</p>
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
