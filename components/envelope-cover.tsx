"use client"

import { COUPLE } from "@/lib/wedding"
import { RingIcon } from "@/components/ring-icon"

export function EnvelopeCover({
  greeting,
  open,
  onOpen,
}: {
  greeting: string
  open: boolean
  onOpen: () => void
}) {
  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-burgundy to-burgundy-dark px-6 text-center transition-all duration-700 ${
        open ? "pointer-events-none -translate-y-4 opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        <RingIcon className="h-12 w-12 text-gold" />

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-cream/70">
          Запрошення на весілля
        </p>

        <h1 className="mt-4 font-script text-6xl leading-none text-cream sm:text-7xl">
          {COUPLE.groom}
          <span className="mx-3 text-gold">&amp;</span>
          {COUPLE.bride}
        </h1>

        <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-gold-soft">
          {greeting}
        </p>

        <button
          type="button"
          onClick={onOpen}
          className="mt-10 rounded-full border border-gold/60 bg-gold/10 px-10 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-cream transition-colors hover:bg-gold hover:text-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Відкрити
        </button>
      </div>
    </div>
  )
}
