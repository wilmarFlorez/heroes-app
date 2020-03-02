import React from 'react'
import { HeroCard } from '../HeroCard'
import { useInitialState } from '../../hooks/useInitialState'
import { PageLoading } from '../PageLoading'
import { PageError } from '../PageError'

export const ListOfHeroCards = () => {
  const API = 'http://35.162.46.100/superheroes/'
  const [heroes, loading, error] = useInitialState(API)

  const setListItems = () => {
    if (loading) {
      return <PageLoading />
    }

    if (error) {
      return <PageError message={error} />
    }

    return heroes.map((heroe, key) =>
      <HeroCard key={key} {...heroe} id={key} />)
  }

  return (
    <>
      {setListItems()}
    </>
  )
}
