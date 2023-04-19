import { useEffect, useState } from 'react'

const useSessionStorage = <T>(key: string, initialState: T) => {
  const [value, setValue] = useState<T>(() => {
    let storageValue = sessionStorage.getItem(key)
    return storageValue !== null ? JSON.parse(storageValue) : initialState
  })

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

export default useSessionStorage
