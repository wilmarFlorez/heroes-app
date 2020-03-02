import styled from 'styled-components'

export const PaginationBar = styled.ul`
  display: flex;
`

export const PageItem = styled.li`
  border-radius: 50%;
  border: 1px solid #262626;
  width: 32px;
  height: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  cursor: pointer;
  margin: 0 2px;
  transition: background-color .3s ease;
  :hover {
    background-color: #262626;
    color: #ffffff;
    transition: background-color .3s ease;
  }
`

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
`
