import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const useWord = () => {
  const [word, setWord] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasData, setHasData] = useState(false)
  const { endpointWord } = useParams()
  console.log(endpointWord)

  const apiFetch = async (endpoint) => {
    setIsLoading(true)
    try {
      const result = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${endpoint}`
      )
      const data = await result.json()
      if (data.title === 'No Definitions Found') {
        throw new Error('No data found')
      }
      setWord(data[0])
      setHasData(true)
    } catch (error) {
      console.log('Error')
      setHasData(false)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  async function fetchData() {
    setIsLoading(true)
    const result = await fetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/keyboard'
    )
    const data = await result.json()
    setWord(data[0])
    setIsLoading(false)
    setHasData(true)
  }

  useEffect(() => {
    if (endpointWord) {
      apiFetch(endpointWord)
    } else {
      fetchData()
    }
  }, [endpointWord])

  return { word, isLoading, apiFetch, fetchData, hasData }
}

export default useWord
