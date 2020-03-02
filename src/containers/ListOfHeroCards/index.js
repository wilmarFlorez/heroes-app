import React, { useState } from 'react'
import { HeroCard } from '../../components/HeroCard'
import { useInitialState } from '../../hooks/useInitialState'
import { PageLoading } from '../../components/PageLoading'
import { PageError } from '../../components/PageError'
import { Pagination } from '../../components/Pagination'
import { Grid } from './styles'

export const ListOfHeroCards = () => {
  const API = 'http://35.162.46.100/superheroes/'
  const [heroes, loading, error] = useInitialState(API)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(9)

  const indexOfLastPost = currentPage * itemsPerPage
  const indexOfFirstPost = indexOfLastPost - itemsPerPage
  const currentHeroes = heroes.slice(indexOfFirstPost, indexOfLastPost)

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber)

  const setListItems = () => {
    if (loading) {
      return <PageLoading />
    }

    if (error) {
      return <PageError message={error} />
    }
    return (
      currentHeroes.map((heroe, key) =>
        <HeroCard key={key} {...heroe} id={key} />
      )
    )
  }

  return (
    <>
      <Grid>
        {setListItems()}
      </Grid>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={heroes.length}
        paginate={handlePaginate}
      />
    </>
  )
}
