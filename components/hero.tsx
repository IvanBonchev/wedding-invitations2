import { COUPLE, DATE_LABEL } from "@/lib/wedding"
import { RingIcon } from "@/components/ring-icon"

export function Hero({ greeting }: { greeting: string }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-burgundy to-burgundy-dark px-6 py-24 text-center">
      <RingIcon className="h-12 w-12 text-gold" />

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-gold-soft">
        {greeting}
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.3em] text-cream/75">
        Чекаємо на вас
      </p>

      <h1 className="mt-6 font-script text-6xl leading-[1.05] text-cream sm:text-7xl md:text-8xl">
        {COUPLE.groom}
        <span className="mx-3 text-gold md:mx-5">&amp;</span>
        {COUPLE.bride}
      </h1>

      <div className="mt-8 flex items-center gap-4 text-cream/80">
        <span className="h-px w-10 bg-gold/50" />
        <span className="text-sm font-medium uppercase tracking-[0.3em]">
          {DATE_LABEL}
        </span>
        <span className="h-px w-10 bg-gold/50" />
      </div>
    </section>
  )
}
