import React from 'react'

const MeaningSection = ({ partOfSpeech, definitions }) => {
  console.log(definitions)
  return (
    <div className='container flex flex-col mt-4'>
      <div className='flex items-center gap-4'>
        <h2 className='mt-5 text-xl italic font-semibold'>{partOfSpeech}</h2>
        <div className='h-[0.5px] bg-gray-400 w-full mt-5' />
      </div>
      <div className=''>
        <h3 className='mt-6 text-xl text-gray-700 dark:text-gray-400'>
          Meaning
        </h3>
        <ul className='flex flex-col gap-4 p-5  list-disc marker:text-pink-400 text-[0.9rem] md:text-[1.1rem] md:[&>li]:pl-4'>
          {definitions.map((def) => {
            const definitionFormatted = def?.definition.replace(/;/g, ' -')
            return (
              <React.Fragment key={def.definition}>
                <li>
                  {definitionFormatted}
                  <div className='flex pt-2 pl-5 italic text-gray-7000 dark:text-gray-400'>
                    {def?.example && <span>"{def.example}"</span>}
                  </div>
                </li>
              </React.Fragment>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MeaningSection
