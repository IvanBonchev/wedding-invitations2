"use client"

import { useEffect, useState } from "react"
import { buildGreeting } from "@/lib/wedding"
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

export default function Page() {
  const [greeting, setGreeting] = useState("Любі наші гості")
  const [opened, setOpened] = useState(false)
  const [playSignal, setPlaySignal] = useState(0)

  // Read the personalized ?guest= value on the client.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const guest = params.get("guest") ?? params.get("to")
    setGreeting(buildGreeting(guest))
  }, [])

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
        <Intro greeting={greeting} />
        <DateCalendar />
        <Countdown />
        <Program />
        <DressCode />
        <Details />
        <SiteFooter />
      </main>
    </>
  )
}
