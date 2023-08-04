import { useState, useEffect } from 'react'

const useMediaQuery = (valueToCheck: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(valueToCheck)

    const updateMatches = (event: MediaQueryList | MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Initial check
    updateMatches(mediaQuery)

    // Attach the listener using addEventListener
    mediaQuery.addEventListener('change', updateMatches)

    // Clean up the listener when component unmounts
    return () => {
      // Remove the listener using removeEventListener
      mediaQuery.removeEventListener('change', updateMatches)
    }
  }, [valueToCheck])

  return matches
}

export default useMediaQuery
