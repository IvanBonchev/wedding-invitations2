"use client"

import { useEffect, useState } from "react"
import { WEDDING_DATE } from "@/lib/wedding"

type Parts = { days: number; hours: number; minutes: number; seconds: number }

function getParts(): Parts {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now())
  const seconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  }
}

const UNITS: { key: keyof Parts; label: string }[] = [
  { key: "days", label: "Днів" },
  { key: "hours", label: "Годин" },
  { key: "minutes", label: "Хвилин" },
  { key: "seconds", label: "Секунд" },
]

export function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null)

  useEffect(() => {
    setParts(getParts())
    const id = setInterval(() => setParts(getParts()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-gradient-to-br from-burgundy to-burgundy-dark px-6 py-20 text-center sm:py-24">
      <p className="font-script text-4xl text-gold sm:text-5xl">До зустрічі лишилось</p>

      <div className="mx-auto mt-10 grid max-w-xl grid-cols-4 gap-3 sm:gap-6">
        {UNITS.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-xl border border-gold/25 bg-cream/5 px-2 py-5 backdrop-blur-sm"
          >
            <div className="font-script text-4xl text-cream sm:text-5xl tabular-nums">
              {parts ? String(parts[key]).padStart(2, "0") : "--"}
            </div>
            <div className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-soft sm:text-xs">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
