import React from 'react'
import { SpringSpinner } from 'react-epic-spinners'
import { SpinnerWrapper } from './styles'

export const PageLoading = () => (
  <SpinnerWrapper>
    <SpringSpinner color='blue' />
    <div>
      Loading...
    </div>
  </SpinnerWrapper>
)
