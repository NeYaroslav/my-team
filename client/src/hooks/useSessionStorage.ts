import { useEffect, useState } from 'react'

const useSessionStorage = <T>(key: string, initialState: T) => {
  const [value, setValue] = useState<T>(null as T)

  useEffect(() => {
    if (value === null) {
      setValue(
        JSON.parse(sessionStorage.getItem(key) as string) ?? initialState
      )
    } else {
      sessionStorage.setValue(key, JSON.stringify(value))
    }
  }, [value])

  return {
    value,
    setValue,
  }
}

export default useSessionStorage
