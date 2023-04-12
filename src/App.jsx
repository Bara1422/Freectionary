import Spinner from './UI/Spinner'
import Header from './components/Header'
import ResultsSearch from './components/ResultsSearch'
import SearchInput from './components/SearchInput'
import useWord from './hooks/useWord'

function App() {
  const [word, isLoading, apiFetch] = useWord()

  return (
    <>
      {isLoading ? (
        <Spinner className='' />
      ) : (
        <div className='container flex flex-col gap-4 p-4 mx-auto font-serif md:p-6 lg:max-w-4xl sm:gap-8'>
          <Header />
          <SearchInput apiFetch={apiFetch} />
          <ResultsSearch word={word} />
        </div>
      )}
    </>
  )
}

export default App
