import { useEffect, useState } from 'react'

const useWord = () => {
  const [word, setWord] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const apiFetch = async (endpoint) => {
    setIsLoading(true)
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${endpoint}`
    )
    const data = await result.json()
    setWord(data[0])

    setIsLoading(false)
  }

  async function fetchData() {
    setIsLoading(true)
    const result = await fetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/keyboard'
    )
    const data = await result.json()
    setWord(data[0])
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [word, isLoading, apiFetch, fetchData]
}

export default useWord
