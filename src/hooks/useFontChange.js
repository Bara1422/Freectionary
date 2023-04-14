import { useEffect, useState } from 'react'

const useFontChange = (initialFont) => {
  const [selectedFont, setSelectedFont] = useState(initialFont)

  useEffect(() => {
    const rootElement = document.documentElement
    rootElement.classList.remove(
      'font-sans',
      'font-serif',
      'font-monospace',
      'font-roboto',
      'font-merriweather',
      'font-oswald'
    )
    rootElement.classList.add(`font-${selectedFont}`)
  }, [selectedFont])

  return [selectedFont, setSelectedFont]
}

export default useFontChange
