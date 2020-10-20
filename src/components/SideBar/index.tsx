import React from 'react'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <Body>
        <p>{'Loren Ipsum doloris sit amet. '.repeat(90)}</p>
      </Body>
    </Container>
  )
}

export default SideBar
