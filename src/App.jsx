import Spinner from './UI/Spinner'
import Header from './components/Header'
import ResultsSearch from './components/ResultsSearch'
import SearchInput from './components/SearchInput'
import useWord from './hooks/useWord'
import SourceSection from './components/SourceSection'
import NoData from './components/NoData'
import { useEffect, useState } from 'react'

function App() {
  const { word, isLoading, apiFetch, hasData } = useWord()
  const [currentWord, setCurrentWord] = useState('')

  console.log(isLoading)
  console.log(hasData)

  useEffect(() => {
    console.log('Valor actualizado', `${word?.word}`)
  }, [word])
  console.log(word)
  if (isLoading) <Spinner />
  return (
    <>
      <div className='container flex flex-col min-h-screen gap-4 p-4 mx-auto font-serif md:p-6 lg:max-w-4xl sm:gap-8'>
        <Header />
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
