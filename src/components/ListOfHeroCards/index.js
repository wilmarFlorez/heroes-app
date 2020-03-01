import React from 'react'
import { HeroCard } from '../HeroCard'

export const ListOfHeroCards = () => {
  return (
    <ul>
      {[1, 2, 3, 4].map(id => <HeroCard key={id} />)}
    </ul>
  )
}
