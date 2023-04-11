import Header from './components/Header'
import ResultsSearch from './components/ResultsSearch'
import SearchInput from './components/SearchInput'

function App() {
  return (
    <div className='container flex flex-col gap-4 p-4 mx-auto font-serif md:p-6 lg:max-w-4xl sm:gap-8'>
      <Header />
      <SearchInput />
      <ResultsSearch />
    </div>
  )
}

export default App
