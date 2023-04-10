import React from 'react'

import ResultWord from './ResultWord'
import ArrowTopRight from './Icons/ArrowTopRight'

const ResultsSearch = () => {
  return (
    <>
      <ResultWord />
      <section className='container flex flex-col'>
        <div className='flex gap-4 items-center'>
          <h2 className='italic font-bold'>noun</h2>
          <div className='h-[0.5px] bg-gray-200 w-full' />
        </div>
        <div className=''>
          <h3 className='text-gray-400 mt-6'>Meaning</h3>
          <ul className='p-4 list-disc marker:text-pink-400 flex flex-col gap-4'>
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
          <h3 className='text-gray-400'>Synonyms</h3>
          <div className='text-pink-400 flex gap-2 font-bold'>
            <button>electronic</button>
            <button>keyboard</button>
          </div>
        </div>
      </section>

      <div className='h-[0.5px] bg-gray-200 w-full' />

      <section className='mt-3'>
        <span>Source</span>
        <a
          className='decoration-dashed flex items-center gap-2'
          href='https://en.wikionary.org/wiki/keyboard'
        >
          {' '}
          https://en.wiktionary.org/wiki/keyboard <ArrowTopRight />
        </a>
      </section>
    </>
  )
}

export default ResultsSearch
