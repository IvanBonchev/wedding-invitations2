import { COUPLE } from "@/lib/wedding"
import { FloralCorner } from "@/components/floral-corner"

export function Intro() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-20 sm:py-28">
      <FloralCorner corner="tl" />
      <FloralCorner corner="br" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-script text-4xl text-gold sm:text-5xl">
          Дорогі гості
        </p>

        <p className="mt-8 text-pretty text-lg leading-relaxed text-ink">
          Один день у цьому році буде для нас дуже особливим, і ми хотіли би
          провести його у колі близьких для нас людей.
        </p>

        <p className="mt-6 text-pretty text-lg leading-relaxed text-ink">
          З великим задоволенням запрошуємо вас відсвяткувати цей день разом!
        </p>

        <p className="mt-10 font-script text-3xl text-burgundy sm:text-4xl">
          {COUPLE.groom} &amp; {COUPLE.bride}
        </p>
      </div>
    </section>
  )
}
