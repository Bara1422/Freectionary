import { useCallback, useEffect, useState } from 'react'

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [preferredTheme, setPreferredTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  const handleDarkMode = useCallback(() => {
    document.documentElement.classList.toggle('dark')
    setIsDarkMode(!isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    const preferredThemeQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )
    setPreferredTheme(preferredThemeQuery.matches ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const rootElement = document.documentElement
    rootElement.classList.toggle('dark', preferredTheme === 'dark')
    setIsDarkMode(!isDarkMode)
  }, [preferredTheme])

  return [isDarkMode, handleDarkMode, preferredTheme]
}

export default useDarkMode
