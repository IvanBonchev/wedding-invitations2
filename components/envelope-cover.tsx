"use client"

import { COUPLE } from "@/lib/wedding"
import { RingIcon } from "@/components/ring-icon"

export function EnvelopeCover({
  open,
  onOpen,
}: {
  open: boolean
  onOpen: () => void
}) {
  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-burgundy to-burgundy-dark px-6 py-10 text-center transition-all duration-700 ${
        open ? "pointer-events-none -translate-y-4 opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        <RingIcon className="h-10 w-10 text-gold sm:h-12 sm:w-12" />

        <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cream/70 sm:mt-8 sm:text-xs sm:tracking-[0.35em]">
          Запрошення на весілля
        </p>

        <h1 className="mt-4 font-script text-5xl leading-none text-cream sm:text-7xl">
          {COUPLE.groom}
          <span className="mx-3 text-gold">&amp;</span>
          {COUPLE.bride}
        </h1>

        <button
          type="button"
          onClick={onOpen}
          className="mt-8 rounded-full border border-gold/60 bg-gold/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold hover:text-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:mt-10 sm:px-10 sm:tracking-[0.25em]"
        >
          Відкрити
        </button>
      </div>
    </div>
  )
}
