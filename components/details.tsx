import { COUPLE } from "@/lib/wedding"
import { FloralCorner } from "@/components/floral-corner"

export function Details() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-20 sm:py-28">
      <FloralCorner corner="tl" />
      <FloralCorner corner="br" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Деталі
        </p>

        <p className="mt-8 text-pretty text-lg leading-relaxed text-ink">
          Просимо вас не дарувати нам квіти — ми не встигнемо насолодитися їх
          красою. Приємним компліментом для нас буде, якщо ви замість квітів
          вирішите подарувати нам пляшку алкогольного напою для нашої колекції,
          яку ми відкриємо на найближчому сімейному святі.
        </p>

        <p className="mt-10 font-script text-3xl text-burgundy sm:text-4xl">
          Чекаємо на вас з нетерпінням!
        </p>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-ink-soft">
          {COUPLE.groom} &amp; {COUPLE.bride}
        </p>
      </div>
    </section>
  )
}
