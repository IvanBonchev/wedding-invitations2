import { DRESS_CODE, PALETTE } from "@/lib/wedding"

export function DressCode() {
  return (
    <section className="bg-cream-deep px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Дрес-код
        </p>
        <h2 className="mt-3 font-script text-4xl text-burgundy sm:text-5xl">
          {DRESS_CODE}
        </h2>
        <p className="mt-4 text-ink-soft">
          Будемо вдячні, якщо ваше вбрання гармонуватиме з палітрою свята.
        </p>

        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Кольорова палітра
        </p>

        <div className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-x-6">
          {PALETTE.map((color) => (
            <div key={color.name} className="flex flex-col items-center gap-2">
              <span
                className="h-14 w-14 rounded-full border border-black/10 shadow-sm sm:h-16 sm:w-16"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-[0.7rem] font-medium uppercase tracking-wide text-ink-soft">
                {color.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
