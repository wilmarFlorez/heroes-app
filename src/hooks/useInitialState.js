import { useState, useEffect } from 'react'

export const useInitialState = (API) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(function () {
    setLoading(true)
    setError(null)

    window.fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch(function (e) {
        setError(true)
        setLoading(false)
      })
  }, [])

  return [data, loading, error]
}
