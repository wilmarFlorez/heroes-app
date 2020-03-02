import React from 'react'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Logo } from '../Logo'

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Logo />
    {children}
  </>
)
