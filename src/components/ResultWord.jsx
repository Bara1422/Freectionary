import React, { useCallback, useEffect } from 'react'
import Play from './Icons/Play'
import Pause from './Icons/Pause'
import useAudio from '../hooks/useAudio'

const ResultWord = ({ phonetics, text, phonetic }) => {
  const phoneticWithAudio = phonetics?.find((phonetic) => phonetic.audio !== '')
  const hasPhoneticWithAudio = !!phoneticWithAudio
  const phoneticText = hasPhoneticWithAudio ? phoneticWithAudio.text : ''

  const [isPlaying, togglePlayPause] = useAudio(phoneticWithAudio?.audio)

  const handleKeyDown = useCallback(
    (event) => {
      if (event.code === 'Space' && event.target === document.body) {
        togglePlayPause()
      }
    },
    [togglePlayPause]
  )

  useEffect(() => {
    if (phoneticWithAudio) {
      window.addEventListener('keydown', handleKeyDown)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [phoneticWithAudio, handleKeyDown])

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
            onClick={togglePlayPause}
            onKeyDown={(event) => {
              if (event.code === 'Space') event.stopPropagation()
            }}
            tabIndex='0'
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
        )}
      </div>
    </div>
  )
}

export default ResultWord
