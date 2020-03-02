import React from 'react'
import { useInitialState } from '../../hooks/useInitialState'
import { HeroCard } from '../HeroCard'
import { PageLoading } from '../PageLoading'
import { PageError } from '../PageError'
import { WrapperHero } from './styles'

export const HeroeDetail = (props) => {
  const API = 'http://35.162.46.100/superheroes/'
  const [heroes, loading, error] = useInitialState(API)

  const { id } = props.match.params

  const heroe = heroes[id]

  const setHero = () => {
    if (loading) {
      return <PageLoading />
    }

    if (error) {
      return <PageError message={error} />
    }

    return <HeroCard {...heroe} id={id} />
  }

  return (
    <WrapperHero>
      {setHero()}
    </WrapperHero>
  )
}
