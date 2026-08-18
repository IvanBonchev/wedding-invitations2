import { CALENDAR, DATE_LABEL, MONTH_LABEL } from "@/lib/wedding"

function buildCells() {
  const cells: (number | null)[] = []
  for (let i = 0; i < CALENDAR.firstWeekdayOffset; i++) cells.push(null)
  for (let d = 1; d <= CALENDAR.daysInMonth; d++) cells.push(d)
  return cells
}

export function DateCalendar() {
  const cells = buildCells()

  return (
    <section className="bg-cream-deep px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Зберігайте дату
        </p>
        <h2 className="mt-3 font-script text-4xl text-burgundy sm:text-5xl">
          {DATE_LABEL}
        </h2>

        <div className="mt-10 rounded-2xl border border-gold/25 bg-cream p-6 shadow-sm shadow-burgundy-dark/5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ink-soft">
            {MONTH_LABEL}
          </p>

          <div className="mt-5 grid grid-cols-7 gap-y-2 text-sm">
            {CALENDAR.weekdays.map((w) => (
              <span
                key={w}
                className="text-[0.7rem] font-semibold uppercase tracking-wide text-ink-soft"
              >
                {w}
              </span>
            ))}

            {cells.map((day, i) => {
              const isHighlight = day === CALENDAR.highlightDay
              return (
                <span
                  key={i}
                  className={
                    isHighlight
                      ? "mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-burgundy font-semibold text-cream"
                      : "flex h-9 items-center justify-center text-ink"
                  }
                >
                  {day ?? ""}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
