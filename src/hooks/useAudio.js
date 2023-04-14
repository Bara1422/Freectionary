import { useEffect, useRef, useState } from 'react'

const useAudio = (url) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (typeof Audio !== 'undefined') {
      audioRef.current = new Audio(url)

      const audio = audioRef.current

      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      const handleEnded = () => setIsPlaying(false)

      audio.addEventListener('play', handlePlay)
      audio.addEventListener('pause', handlePause)
      audio.addEventListener('ended', handleEnded)

      return () => {
        audio.removeEventListener('play', handlePlay)
        audio.removeEventListener('pause', handlePause)
        audio.removeEventListener('ended', handleEnded)
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = url
      setIsPlaying(false)
    }
  }, [url])

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }

  return [isPlaying, togglePlayPause]
}

export default useAudio
