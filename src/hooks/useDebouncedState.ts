import { useState, useEffect } from 'react'

export function useDebouncedState<T>(value: T, delay: number = 500) {
  const [debouncedValue, setDeboucedValue] = useState(value)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDeboucedValue(value)
    }, delay)

    return () => clearTimeout(timerId)
  }, [value, delay])

  return [debouncedValue, setDeboucedValue]
}
