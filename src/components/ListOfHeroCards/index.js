import React, { useEffect, useState } from 'react'
import { HeroCard } from '../HeroCard'

const useCategoryData = () => {
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('http://35.162.46.100/superheroes/')
      .then(res => res.json())
      .then(response => {
        setHeroes(response)
        setLoading(false)
      })
  }, [])

  return { heroes, loading }
}

export const ListOfHeroCards = () => {
  const { heroes, loading } = useCategoryData()

  if (loading) {
    return 'Loading...'
  }

  return (
    <ul>
      {heroes.map((heroe, key) => <HeroCard key={key} {...heroe} id={key} />)}
    </ul>
  )
}
