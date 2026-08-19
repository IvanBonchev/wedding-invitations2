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

export const SCHEDULE: { time: string; text: string }[] = [
  {
    time: "14:00",
    text: "Збір гостей і фуршет, де ви зможете відпочити та насолодитися закусками",
  },
  {
    time: "15:00",
    text: "Урочиста церемонія, час зворушливих формальностей",
  },
  {
    time: "16:00",
    text: "Час смачної їжі, музики, приємних побажань і танців",
  },
  {
    time: "22:00",
    text: "Весільний торт, плавне завершення вечора і початок нової історії",
  },
]

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

/* ------------------------------------------------------------------ *
 * Guests
 * ------------------------------------------------------------------ */

export type Guest = {
  /** URL slug, e.g. "evgeniya" or "alex-and-masha" */
  slug: string
  /** Display name(s), e.g. "Євгенія" or "Олександр та Марія" */
  name: string
  /** Whether this invite is for one person or a couple */
  type: "single" | "couple"
  /** Gender is only relevant for single guests: "f" | "m" */
  gender?: "f" | "m"
}

/**
 * The guest list. Add new guests here in the same format.
 * slug — used in the URL (site.com/<slug>)
 * name — displayed name(s)
 * type — "single" | "couple"
 * gender — "f" | "m" (only for single)
 */
export const GUESTS: Guest[] = [
  { slug: "roman-alyona", name: "Роман та Альона", type: "couple" },
  { slug: "kostyantyn-yevgeniya", name: "Костянтин та Євгенія", type: "couple" },
  { slug: "nina", name: "Ніна", type: "single", gender: "f" },
  { slug: "mykyta-1", name: "Микито", type: "single", gender: "m" },
  { slug: "mykyta-2", name: "Микито", type: "single", gender: "m" },
  { slug: "illya-liza", name: "Ілля та Ліза", type: "couple" },
  { slug: "zakhar-iryna", name: "Захар та Ірина", type: "couple" },
  { slug: "kristina", name: "Крістіна", type: "single", gender: "f" },
  { slug: "viktor-antonina", name: "Віктор та Антоніна", type: "couple" },
  { slug: "dmytro-olena", name: "Дмитро та Олена", type: "couple" },
  { slug: "illya-yana", name: "Ілля та Яна", type: "couple" },
  { slug: "dmytro-vira", name: "Дмитро та Віра", type: "couple" },
  { slug: "petro-oksana", name: "Петро та Оксана", type: "couple" },
  { slug: "serhiy-yuliya", name: "Сергій та Юлія", type: "couple" },
  { slug: "vitaliy-olha", name: "Віталій та Ольга", type: "couple" },
  { slug: "ivan-yuliya", name: "Іван та Юлія", type: "couple" },
  { slug: "volodymyr-maryana", name: "Володимир та Мар’яна", type: "couple" },
  { slug: "mama-larysa", name: "мама Лариса", type: "single", gender: "f" },
  { slug: "alina", name: "Аліна", type: "single", gender: "f" },
  { slug: "alla", name: "Алла", type: "single", gender: "f" },
  { slug: "oleksiy", name: "Олексію", type: "single", gender: "m" },
  { slug: "oleksandr", name: "Олександре", type: "single", gender: "m" },
  { slug: "stanislav", name: "Станіславе", type: "single", gender: "m" },
  { slug: "batky", name: "тато та мама", type: "couple" },
  { slug: "volodymyr-mariya", name: "Володимир та Марія", type: "couple" },
  { slug: "anastasiya", name: "Анастасія", type: "single", gender: "f" },
  { slug: "petro-tetyana", name: "Петро та Тетяна", type: "couple" },
  { slug: "dmytro-marharyta", name: "Дмитро та Маргарита", type: "couple" },
  { slug: "oleksandr-maryana", name: "Олександр та Мар’яна", type: "couple" },
  { slug: "oleksandr-lyubov", name: "Олександр та Любов", type: "couple" },
  { slug: "olena", name: "Олена", type: "single", gender: "f" },
  { slug: "maryna", name: "Марина", type: "single", gender: "f" },
  { slug: "khreshchena", name: "Хрещена", type: "single", gender: "f" },
  { slug: "yuriy-tamara", name: "Юрій та Тамара", type: "couple" },
  // Додавайте гостей сюди у форматі: { slug: "...", name: "...", type: "single", gender: "m" }
]

/** Looks up a guest by slug (case-insensitive). Returns null when not found. */
export function getGuestBySlug(slug: string | null | undefined): Guest | null {
  const value = (slug ?? "").trim().toLowerCase()
  if (!value) return null
  return GUESTS.find((g) => g.slug.toLowerCase() === value) ?? null
}

/**
 * Personalized greeting line.
 * - couple            -> "Любі наші <name>"
 * - single, female    -> "Люба наша <name>"
 * - single, male      -> "Любий наш <name>"
 * - unknown guest     -> "Дорогі гості"
 */
export function buildGreeting(guest: Guest | null | undefined): string {
  if (!guest) return "Дорогі гості"
  if (guest.type === "couple") return `Любі наші ${guest.name}`
  if (guest.gender === "f") return `Люба наша ${guest.name}`
  return `Любий наш ${guest.name}`
}

/**
 * "Waiting for you" line.
 * - couple or unknown -> "Чекаємо на вас"
 * - single            -> "Чекаємо на тебе"
 */
export function buildWaitingText(guest: Guest | null | undefined): string {
  if (guest && guest.type === "single") return "Чекаємо на тебе"
  return "Чекаємо на вас"
}
