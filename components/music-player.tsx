"use client"

import { useEffect, useRef } from "react"

/**
 * Background music that starts automatically once the envelope is opened.
 * Place your own track at /public/music.mp3 (or change the src below).
 * `playSignal` increments when the envelope is opened, which is the user
 * gesture browsers require before audio can start.
 */
export function MusicPlayer({ playSignal }: { playSignal: number }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Start playing once the envelope is opened.
  useEffect(() => {
    if (playSignal <= 0) return
    const audio = audioRef.current
    if (!audio) return
    audio.play().catch(() => {})
  }, [playSignal])

  return <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
}
