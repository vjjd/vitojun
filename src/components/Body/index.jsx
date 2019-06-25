import React from 'react'
import styled, { css } from 'styled-components'

export default function Body(props) {
  const { isFirstPage } = props

  return (
    <Container isFirstPage={isFirstPage}>
      {`Page #${isFirstPage ? 1 : 2}`}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${props =>
    !props.isFirstPage &&
    css`
      min-height: 150vh;
    `}
`
