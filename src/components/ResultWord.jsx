import React from 'react'
import Play from './Icons/Play'

const ResultWord = ({ phonetics, text, phonetic }) => {
  const phoneticWithAudio = phonetics?.find((phonetic) => phonetic.audio !== '')
  const phoneticText = phoneticWithAudio ? phoneticWithAudio.text : ''
  console.log(phoneticWithAudio)

  return (
    <div className='container flex items-center justify-between md:pt-5'>
      <div className='flex items-center justify-between w-full'>
        <div>
          <h1 className='text-4xl font-bold md:text-5xl'>{text}</h1>
          <p className='text-2xl text-pink-400 md:pt-2'>
            {phoneticText || phonetic}
          </p>
        </div>
        <button className='flex items-center justify-center w-12 h-12 bg-pink-200 rounded-full'>
          <Play />
        </button>
      </div>
    </div>
  )
}

export default ResultWord
