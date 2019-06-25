import React from 'react'
import styled from 'styled-components'
import Body from '../../components/Body'
import Footer from '../../components/Footer'
import { pageContainer } from '../../utils/theme'

export default function PageOne() {
  return (
    <Container>
      <Body isFirstPage />
      <Footer isFirstPage />
    </Container>
  )
}

const Container = styled.div`
  ${pageContainer}
  height: calc(100% - 202px);
  justify-content: center;
`
