import { useEffect, useState } from 'react'

const useLocalStorage = <T>(
  key: string,
  initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    let storageValue = localStorage.getItem(key)
    return storageValue !== null ? JSON.parse(storageValue) : initialState
  })
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

export default useLocalStorage
