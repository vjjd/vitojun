import React from 'react'
import styled, { css } from 'styled-components'
import { pagePortion } from '../../utils/theme'

export default function Footer(props) {
  const { isFirstPage } = props

  return <Container isFirstPage={isFirstPage}>Footer</Container>
}

const Container = styled.div`
  ${pagePortion}
  ${props =>
    props.isFirstPage &&
    css`
      position: absolute;
      bottom: 0%;
    `}
  border-top: 1px solid gray;
`
