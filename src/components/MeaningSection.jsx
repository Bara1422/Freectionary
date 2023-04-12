import React from 'react'

const MeaningSection = ({ partOfSpeech, definitions }) => {
  return (
    <div className='container flex flex-col'>
      <div className='flex items-center gap-4'>
        <h2 className='text-xl italic font-bold'>{partOfSpeech}</h2>
        <div className='h-[0.5px] bg-gray-200 w-full' />
      </div>
      <div className=''>
        <h3 className='mt-6 text-xl text-gray-400'>Meaning</h3>
        <ul className='flex flex-col gap-4 p-5  list-disc marker:text-pink-400 text-[0.9rem] md:text-[1.1rem] md:[&>li]:pl-4'>
          {definitions.map((definition) => (
            <React.Fragment key={definition.definition}>
              <li>{definition?.definition}</li>
              {definition.example && (
                <span className='pt-2 pl-5 text-gray-400'>
                  {definition.example}
                </span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MeaningSection
