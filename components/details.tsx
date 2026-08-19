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
          Квіти швидко в’януть, а гарні спогади залишаються! Замість букетів просимо дарувати пляшку алкоголю для нашої домашньої колекції — обіцяємо відкрити її під час наступного теплого приводу.

Важливо для гостей із дітьми: будь ласка, напишіть нам, якщо будете з малечею, аби ми організували для них комфортний дитячий стіл та розваги.
        </p>

        <p className="mt-10 font-script text-3xl text-burgundy sm:text-4xl">
          Чекаємо на вас з нетерпінням!
        </p>

       
      </div>
    </section>
  )
}
