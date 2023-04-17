import React from 'react'
import ArrowTopRight from './Icons/ArrowTopRight'

const SourceSection = ({ word }) => {
  return (
    <section className='items-center mt-3 text-sm sm:flex sm:gap-5'>
      <span className='text-gray-500 dark:text-gray-400'>Source</span>
      <a
        className='flex items-center gap-2 pt-2 underline sm:pt-0'
        href={`https://en.wiktionary.org/wiki/${word}`}
        target='_blank'
        rel='noreferrer'
      >
        {' '}
        https://en.wiktionary.org/wiki/{word} <ArrowTopRight />
      </a>
    </section>
  )
}

export default SourceSection
