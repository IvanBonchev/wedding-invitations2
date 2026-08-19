import { COUPLE, DATE_LABEL } from "@/lib/wedding"
import { RingIcon } from "@/components/ring-icon"

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-burgundy to-burgundy-dark px-4 py-20 text-center sm:px-6 sm:py-24">
      <RingIcon className="h-10 w-10 text-gold sm:h-12 sm:w-12" />

      <p className="mt-6 max-w-md text-pretty text-sm font-medium leading-relaxed text-cream/85 sm:mt-8 sm:text-lg">
        Дорогі та близькі, ми щасливі поділитися з вами радістю неповторного для
        нас дня — дня нашого весілля! Запрошуємо приєднатися до нашого свята та
        прикрасити його своєю присутністю!
      </p>

      {/* Уменьшили text-6xl до text-4xl для мобилок и поправили межстрочный интервал */}
      <h1 className="mt-6 font-script text-4xl leading-snug text-cream sm:mt-8 sm:text-7xl sm:leading-[1.05] md:text-8xl">
        {COUPLE.groom}
        <span className="mx-2 text-gold sm:mx-3 md:mx-5">&amp;</span>
        {COUPLE.bride}
      </h1>

      <div className="mt-6 flex items-center gap-3 text-cream/80 sm:mt-8 sm:gap-4">
        <span className="h-px w-8 bg-gold/50 sm:w-10" />
        <span className="text-xs font-medium uppercase tracking-[0.25em] sm:text-sm sm:tracking-[0.3em]">
          {DATE_LABEL}
        </span>
        <span className="h-px w-8 bg-gold/50 sm:w-10" />
      </div>
    </section>
  )
}
