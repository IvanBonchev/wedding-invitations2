import { FloralCorner } from "@/components/floral-corner"

export function Intro({
  greeting,
  waitingText,
}: {
  greeting: string
  waitingText: string
}) {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-20 sm:py-28">
      <FloralCorner corner="tl" />
      <FloralCorner corner="br" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-balance font-script text-4xl text-gold sm:text-5xl">
          {greeting}
        </p>

        <p className="mt-8 text-lg font-medium uppercase tracking-[0.25em] text-burgundy">
          {waitingText}
        </p>
      </div>
    </section>
  )
}
