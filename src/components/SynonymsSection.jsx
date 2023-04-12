import React from 'react'

const SynonymsSection = ({ synonyms }) => {
  return (
    <div className='flex items-end gap-5 my-3'>
      <h3 className='text-xl text-gray-400'>Synonyms</h3>
      <div className='flex gap-2 text-xl font-bold text-pink-400'>
        {synonyms.map((synonym, index) => {
          const synonymWords = synonym.split(' ')
          return (
            <React.Fragment key={`${index}_${synonym}`}>
              {synonymWords.map((word) => (
                <button key={word}>{word}</button>
              ))}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default SynonymsSection
