import React from 'react'

import ResultWord from './ResultWord'
import MeaningSection from './MeaningSection'
import SynonymsSection from './SynonymsSection'

const ResultsSearch = ({ word }) => {

  return (
    <div>
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
    </div>
  )
}

export default ResultsSearch
