import { useCallback, useEffect, useRef, useState } from 'react'

const useAudio = (url) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handlePlay = useCallback(() => setIsPlaying(true), [])
  const handlePause = useCallback(() => setIsPlaying(false), [])
  const handleEnded = useCallback(() => setIsPlaying(false), [])

  useEffect(() => {
    if (typeof Audio !== 'undefined') {
      audioRef.current = new Audio(url)

      const audio = audioRef.current

      audio.addEventListener('play', handlePlay)
      audio.addEventListener('pause', handlePause)
      audio.addEventListener('ended', handleEnded)

      return () => {
        audio.removeEventListener('play', handlePlay)
        audio.removeEventListener('pause', handlePause)
        audio.removeEventListener('ended', handleEnded)
      }
    }
  }, [handlePlay, handlePause, handleEnded])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = url
      setIsPlaying(false)
    }
  }, [url])

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }, [isPlaying])

  return [isPlaying, togglePlayPause]
}

export default useAudio
