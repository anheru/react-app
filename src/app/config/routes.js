import { Route, Switch } from "react-router-dom"
import React from 'react'
import styled from 'styled-components'
import Home from '../pages/Home'
import Comics from '../pages/Comics'
import Comic from '../pages/Comic'
import Films from '../pages/Films'
import Film from '../pages/Film'

const Container = styled.main`
  background-color: #525252;
  min-height: calc(100vh - 54px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
`

export default function Routes () {
  return(
    <Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/comics" exact component={Comics} />
        <Route path="/comics/:id" component={Comic} />
        <Route path="/films" exact component={Films} />
        <Route path="/films/:id" component={Film} />
      </Switch>
    </Container>
  )
}
