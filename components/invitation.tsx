"use client"

import { useEffect, useState } from "react"
import {
  type Guest,
  buildGreeting,
  buildWaitingText,
} from "@/lib/wedding"
import { EnvelopeCover } from "@/components/envelope-cover"
import { MusicPlayer } from "@/components/music-player"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { DateCalendar } from "@/components/date-calendar"
import { Countdown } from "@/components/countdown"
import { Program } from "@/components/program"
import { DressCode } from "@/components/dress-code"
import { Details } from "@/components/details"
import { SiteFooter } from "@/components/site-footer"
import { OrganizerPanel } from "@/components/organizer-panel"

export function Invitation({ guest }: { guest: Guest | null }) {
  const [opened, setOpened] = useState(false)
  const [playSignal, setPlaySignal] = useState(0)

  const greeting = buildGreeting(guest)
  const waitingText = buildWaitingText(guest)

  // Lock scroll until the envelope is opened.
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [opened])

  const handleOpen = () => {
    setOpened(true)
    setPlaySignal((n) => n + 1)
  }

  return (
    <>
      <EnvelopeCover open={opened} onOpen={handleOpen} />
      <MusicPlayer playSignal={playSignal} />

      <main>
        <Hero />
        <Intro greeting={greeting} waitingText={waitingText} />
        <DateCalendar />
        <Countdown />
        <Program />
        <DressCode />
        <Details />
        <SiteFooter />
        <OrganizerPanel />
      </main>
    </>
  )
}
