import React from 'react'

import ResultWord from './ResultWord'
import ArrowTopRight from './Icons/ArrowTopRight'

const ResultsSearch = () => {
  return (
    <>
      <ResultWord />
      <section className='container flex flex-col '>
        <div className='flex items-center gap-4'>
          <h2 className='text-xl italic font-bold'>noun</h2>
          <div className='h-[0.5px] bg-gray-200 w-full' />
        </div>
        <div className=''>
          <h3 className='mt-6 text-xl text-gray-400'>Meaning</h3>
          <ul className='flex flex-col gap-4 p-5  list-disc marker:text-pink-400 text-[0.9rem] md:text-[1.1rem] md:[&>li]:pl-4'>
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instrument including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li>
              A device with keys of a musical keyboard, used to control
              electronic souind-producing devices which may be build into of
              separate from the keyobard device.
            </li>
          </ul>
        </div>
        <div className='flex gap-5 my-3'>
          <h3 className='text-xl text-gray-400'>Synonyms</h3>
          <div className='flex gap-2 font-bold text-pink-400'>
            <button>electronic</button>
            <button>keyboard</button>
          </div>
        </div>
      </section>

      <div className='h-[0.5px] bg-gray-200 w-full' />

      <section className='items-center mt-3 text-sm sm:flex sm:gap-5'>
        <span className='text-gray-400'>Source</span>
        <a
          className='flex items-center gap-2 pt-2 underline sm:pt-0'
          href='https://en.wikionary.org/wiki/keyboard'
        >
          {' '}
          https://en.wiktionary.org/wiki/keyboard <ArrowTopRight className='' />
        </a>
      </section>
    </>
  )
}

export default ResultsSearch
