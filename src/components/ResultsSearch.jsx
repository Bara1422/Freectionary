import React from 'react'

import ResultWord from './ResultWord'
import ArrowTopRight from './Icons/ArrowTopRight'
import MeaningSection from './MeaningSection'
import SynonymsSection from './SynonymsSection'

const ResultsSearch = ({ word }) => {
  console.log(word)
  return (
    <>
      <ResultWord
        phonetics={word?.phonetics}
        phonetic={word?.phonetic}
        text={word?.word}
      />

      {word?.meanings?.map((meaning, index) => (
        <section
          className='container flex flex-col'
          key={`${index}_${meaning}`}
        >
          <MeaningSection
            partOfSpeech={meaning.partOfSpeech}
            definitions={meaning.definitions}
          />
          {meaning.synonyms.length > 0 && (
            <SynonymsSection synonyms={meaning.synonyms} />
          )}
        </section>
      ))}

      <div className='h-[0.5px] bg-gray-200 w-full' />

      <section className='items-center mt-3 text-sm sm:flex sm:gap-5'>
        <span className='text-gray-400'>Source</span>
        <a
          className='flex items-center gap-2 pt-2 underline sm:pt-0'
          href='https://en.wikionary.org/wiki/keyboard'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          https://en.wiktionary.org/wiki/keyboard <ArrowTopRight className='' />
        </a>
      </section>
    </>
  )
}

export default ResultsSearch
