import React from 'react'
import { PaginationBar, PageItem, PaginationWrapper } from './styles'

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <PaginationWrapper>
      <PaginationBar>
        {pageNumbers.map(page => (
          <PageItem key={page} onClick={() => paginate(page)}>
            {page}
          </PageItem>
        ))}
      </PaginationBar>
    </PaginationWrapper>
  )
}
