import React from 'react'
import { GlobalStyle } from './GlobalStyles'
import { ListOfHeroCards } from './components/ListOfHeroCards'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfHeroCards />
  </>
)
