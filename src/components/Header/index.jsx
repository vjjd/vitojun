import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { pagePortion } from '../../utils/theme'

export default function Header() {
  const [isMenuVisible, setMenuVisibility] = useState(false)

  return (
    <Container onClick={() => isMenuVisible && setMenuVisibility(false)}>
      Header
      <MenuContainer>
        <MenuIcon
          icon={faBars}
          onClick={() => setMenuVisibility(!isMenuVisible)}
        />

        {isMenuVisible && (
          <Menu>
            <Page to="/1">Page #1</Page>
            <Page to="/2">Page #2</Page>
          </Menu>
        )}
      </MenuContainer>
    </Container>
  )
}

const Container = styled.div`
  ${pagePortion}
  border-bottom: 1px solid gray;
  position: relative;
`

const MenuIcon = styled(FontAwesomeIcon)`
  position: relative;
  :hover {
    color: lightcoral;
  }
`

const MenuContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0%;
  right: 150%;
  background-color: lightgrey;
  border: 1px solid lightcoral;
  padding: 20% 40%;
`

const Page = styled(Link)`
  font-size: 14pt;
  color: #575756;
  white-space: nowrap;
`
