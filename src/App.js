import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import PageOne from './screens/PageOne'
import PageTwo from './screens/PageTwo'

export default function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Route path="/1" component={PageOne} />
        <Route path="/2" component={PageTwo} />
      </Container>
    </Router>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-width: 400px;
`
