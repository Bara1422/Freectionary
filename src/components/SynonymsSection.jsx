import React from 'react'

const SynonymsSection = ({ synonyms }) => {
  const synonymSplice = synonyms.slice(0, 5)
  return (
    <div className='flex flex-wrap items-end gap-3 my-3'>
      <h3 className='text-xl text-gray-500 dark:text-gray-400'>Synonyms</h3>
      {synonymSplice.map((synonym, index) => (
        <span key={index} className='font-bold text-pink-600 sm:text-xl'>
          {synonym}
        </span>
      ))}
    </div>
  )
}

export default SynonymsSection
