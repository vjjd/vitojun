import React from 'react'
import styled from 'styled-components'
import Body from '../../components/Body'
import Footer from '../../components/Footer'
import { pageContainer } from '../../utils/theme'

export default function PageOne() {
  return (
    <Container>
      <BodyContainer>
        <Body isFirstPage />
      </BodyContainer>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  ${pageContainer}
  height: 100%;
`

const BodyContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`
