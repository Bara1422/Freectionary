import Spinner from './UI/Spinner'
import Header from './components/Header'
import ResultsSearch from './components/ResultsSearch'
import SearchInput from './components/SearchInput'
import useWord from './hooks/useWord'
import SourceSection from './components/SourceSection'
import NoData from './components/NoData'
import { useState } from 'react'

function App() {
  const { word, isLoading, apiFetch, hasData } = useWord()
  const [currentWord, setCurrentWord] = useState('')
  const [selectedFont, setSelectedFont] = useState('serif')

  const handleFont = (label) => {
    setSelectedFont(label)
    console.log(label)
  }

  return (
    <>
      <div
        id='mainContent'
        className={`container flex flex-col min-h-screen gap-4 p-4 mx-auto font-${selectedFont} md:p-6 lg:max-w-4xl sm:gap-8`}
      >
        <Header handleFont={handleFont} />
        <SearchInput apiFetch={apiFetch} setCurrentWord={setCurrentWord} />
        {isLoading && <Spinner />}
        {!hasData ? (
          <NoData word={currentWord} />
        ) : (
          <>
            <ResultsSearch word={word} />
            <div className='mt-auto'>
              <SourceSection word={word?.word} />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default App
