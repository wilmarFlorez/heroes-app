import React from 'react'
import { ErrorWrapper } from './styles'

export const PageError = ({ message }) => (
  <ErrorWrapper>
    <span>{message}</span>
  </ErrorWrapper>
)
