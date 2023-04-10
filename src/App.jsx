import Header from './components/Header'
import ResultsSearch from './components/ResultsSearch'
import SearchInput from './components/SearchInput'

function App() {
  return (
    <div className='container p-4 flex flex-col gap-4'>
      <Header />
      <SearchInput />
      <ResultsSearch />
    </div>
  )
}

export default App
