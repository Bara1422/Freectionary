import Spinner from './UI/Spinner'
import Header from './components/Header'
import ResultsSearch from './components/ResultsSearch'
import SearchInput from './components/SearchInput'
import useWord from './hooks/useWord'
import SourceSection from './components/SourceSection'
import NoData from './components/NoData'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function App() {
  const { word, isLoading, apiFetch, hasData } = useWord()

  const [selectedFont, setSelectedFont] = useState('sans')
  const { endpointWord } = useParams()
  console.log(endpointWord)

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
        <SearchInput apiFetch={apiFetch} />
        {isLoading && <Spinner />}
        {!hasData ? (
          <NoData word={endpointWord} />
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
