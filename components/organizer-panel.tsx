"use client"

import { useEffect, useState } from "react"
import { GUESTS, buildGreeting } from "@/lib/wedding"
import { Check, Copy, Link2, ChevronDown } from "lucide-react"

export function OrganizerPanel() {
  const [open, setOpen] = useState(false)
  const [origin, setOrigin] = useState("")
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  const linkFor = (slug: string) => `${origin}/${slug}`

  const handleCopy = async (slug: string) => {
    const link = linkFor(slug)
    try {
      await navigator.clipboard.writeText(link)
    } catch {
      // Fallback for browsers without clipboard permissions.
      const el = document.createElement("textarea")
      el.value = link
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
    }
    setCopiedSlug(slug)
    window.setTimeout(() => setCopiedSlug((s) => (s === slug ? null : s)), 1800)
  }

  return (
    <section className="border-t border-ink/10 bg-cream-deep/70 px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-3 text-left text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft transition-colors hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
        >
          <span className="flex items-center gap-2">
            <Link2 className="h-4 w-4" />
            Панель організатора · посилання для гостей
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <ul className="mt-6 space-y-2">
            {GUESTS.map((guest) => {
              const copied = copiedSlug === guest.slug
              return (
                <li
                  key={guest.slug}
                  className="flex flex-col gap-2 rounded-xl border border-ink/10 bg-cream p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">
                      {guest.name}
                      <span className="ml-2 text-xs font-normal text-ink-soft">
                        {guest.type === "couple" ? "пара" : "один"}
                      </span>
                    </p>
                    <p className="truncate text-xs text-ink-soft">
                      {origin ? linkFor(guest.slug) : `/${guest.slug}`}
                    </p>
                    <p className="truncate text-xs italic text-ink-soft/80">
                      {buildGreeting(guest)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(guest.slug)}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-burgundy/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-burgundy transition-colors hover:bg-burgundy hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Скопійовано
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Копіювати
                      </>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
