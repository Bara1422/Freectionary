import React, { useEffect, useRef, useState } from 'react'
import Play from './Icons/Play'
import Pause from './Icons/Pause'

const ResultWord = ({ phonetics, text, phonetic }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const phoneticWithAudio = phonetics?.find((phonetic) => phonetic.audio !== '')
  const phoneticText = phoneticWithAudio ? phoneticWithAudio.text : ''

  useEffect(() => {
    if (phoneticWithAudio) {
      const handleKeyDown = (event) => {
        if (event.code === 'Space' && event.target === document.body) {
          setIsPlaying((currentIsPlaying) => !currentIsPlaying)
        }
      }

      window.addEventListener('keydown', handleKeyDown)

      setIsPlaying(false)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [phoneticWithAudio])

  return (
    <div className='container flex items-center justify-between md:pt-5'>
      <div className='flex items-center justify-between w-full'>
        <div>
          <h1 className='text-4xl font-bold md:text-5xl'>{text}</h1>
          <p className='text-2xl text-pink-600 md:pt-2'>
            {phoneticText || phonetic}
          </p>
        </div>
        {phoneticWithAudio && (
          <button
            className='flex items-center justify-center w-12 h-12 transition-colors bg-pink-200 rounded-full hover:scale-110 hover:bg-pink-300'
            onClick={(event) => {
              !isPlaying ? audioRef.current.play() : audioRef.current.pause()
              setIsPlaying(!isPlaying)
            }}
            onKeyDown={(event) => {
              if (event.code === 'Space') event.stopPropagation()
            }}
            tabIndex='0'
          >
            <audio
              ref={audioRef}
              src={phoneticWithAudio?.audio}
              onEnded={() => setIsPlaying(false)}
            />
            {isPlaying ? <Pause /> : <Play />}
          </button>
        )}
      </div>
    </div>
  )
}

export default ResultWord
