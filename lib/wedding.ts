// Central place for all invitation content so it is easy to edit.

export const COUPLE = {
  groom: "Іван",
  bride: "Євгенія",
}

// Wedding date & time (local Odesa time)
export const WEDDING_DATE = new Date("2026-09-26T15:00:00")

export const DATE_LABEL = "26 Вересня 2026 року"
export const MONTH_LABEL = "Вересень 2026"

// Calendar helpers for September 2026
export const CALENDAR = {
  year: 2026,
  month: 9, // September
  highlightDay: 26,
  // September 1, 2026 is a Tuesday -> offset of 1 empty cell (Mon-first week)
  firstWeekdayOffset: 1,
  daysInMonth: 30,
  weekdays: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"],
}

export const PROGRAM = {
  time: "15:00",
  title: "Банкет",
  venue: "Банкет-холл «Одеса»",
  address: "вул. Аркадійське плато, 5, Одеса",
  mapUrl: "https://maps.google.com/?q=Аркадійське+плато+5+Одеса",
}

export const DRESS_CODE = "Елегантний / Smart Casual"

export const PALETTE: { name: string; hex: string }[] = [
  { name: "Кремовий", hex: "#f4ead9" },
  { name: "Пудровий", hex: "#e7cdc9" },
  { name: "Бежевий", hex: "#dcc7a8" },
  { name: "Капучіно", hex: "#c9a98a" },
  { name: "Тауп", hex: "#a78e78" },
  { name: "Коричневий", hex: "#7c5a44" },
  { name: "Шавлія", hex: "#a9b79a" },
  { name: "Оливковий", hex: "#7f854f" },
  { name: "Петроль", hex: "#3f6b6b" },
  { name: "Темно-синій", hex: "#2f3a56" },
  { name: "Сірий", hex: "#8f8f8a" },
  { name: "Чорний", hex: "#2b2b2b" },
]

/**
 * Builds the personalized greeting from a ?guest= query value.
 * - no guest      -> "ЛЮБІ ГОСТІ"
 * - single name   -> "ЛЮБА <NAME>"
 * - several names  -> "ЛЮБІ <NAME>" (detected via "та", "і", "&", or a comma)
 * The provided name is inserted as-is, in uppercase.
 */
export function buildGreeting(guest: string | null | undefined): string {
  const value = (guest ?? "").trim()
  if (!value) return "ЛЮБІ ГОСТІ"

  const isPlural = /(\s|^)(та|і|and)(\s|$)|&|,/i.test(value)
  const prefix = isPlural ? "ЛЮБІ" : "ЛЮБА"
  return `${prefix} ${value.toUpperCase()}`
}
