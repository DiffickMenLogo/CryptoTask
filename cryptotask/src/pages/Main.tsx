import styled from 'styled-components'
import { Header } from '../components/Header/Header'
import { List } from '../components/List/List'

export function Main() {
  const StyledWrapper = styled.div``
  return (
    <StyledWrapper>
      <Header />
      <List />
    </StyledWrapper>
  )
}
