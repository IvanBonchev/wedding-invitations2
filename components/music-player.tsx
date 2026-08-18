"use client"

import { useEffect, useRef, useState } from "react"
import { Music, Pause } from "lucide-react"

/**
 * Floating background-music toggle.
 * Place your own track at /public/music.mp3 (or change the src below).
 * `playSignal` increments when the envelope is opened, which is the user
 * gesture browsers require before audio can start.
 */
export function MusicPlayer({ playSignal }: { playSignal: number }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  // Start playing once the envelope is opened.
  useEffect(() => {
    if (playSignal <= 0) return
    const audio = audioRef.current
    if (!audio) return
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }, [playSignal])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        onCanPlay={() => setReady(true)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Вимкнути музику" : "Увімкнути музику"}
        title={ready ? undefined : "Додайте файл /public/music.mp3"}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-burgundy text-cream shadow-lg shadow-burgundy-dark/30 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {playing ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Music className={`h-5 w-5 ${ready ? "" : "opacity-60"} ${playing ? "" : "animate-pulse"}`} />
        )}
      </button>
    </>
  )
}
