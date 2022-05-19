import React, {
    useState,
    useEffect
} from 'react'

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState('')
    useEffect(() => {
        const setTimeOut = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(setTimeOut)
        }
    }, [value])

    return debounceValue

}

export default useDebounce