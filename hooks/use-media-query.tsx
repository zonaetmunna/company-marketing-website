"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    
    // Set initial value
    setMatches(mediaQuery.matches)
    
    // Define event listener
    const onChange = () => setMatches(mediaQuery.matches)
    
    // Add event listener
    mediaQuery.addEventListener("change", onChange)
    
    // Clean up
    return () => mediaQuery.removeEventListener("change", onChange)
  }, [query])

  return matches
} 