import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import useWord from './hooks/useWord'
import Header from './components/Header'
import ResultsSearch from './components/ResultsSearch'
import SearchInput from './components/SearchInput'
import SourceSection from './components/SourceSection'
import ArrowToTop from './components/Icons/ArrowToTop'
import NoData from './components/NoData'
import Spinner from './UI/Spinner'

function App() {
  const { word, isLoading, apiFetch, hasData } = useWord()

  const [selectedFont, setSelectedFont] = useState('')
  const { endpointWord } = useParams()

  const handleFont = (label) => {
    setSelectedFont(label)
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
      <ScrollToTop
        component={<ArrowToTop />}
        className='flex items-center justify-center text-pink-500 bg-gray-200 border-[1px] border-solid rounded-full pink-500 md:hidden'
        smooth
      />
    </>
  )
}

export default App
