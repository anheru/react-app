import { Route, Switch } from "react-router-dom"
import React from 'react'
import styled from 'styled-components'
import Index from '../screens/Index'
import Comics from '../screens/Comics'
import Comic from '../screens/Comic'

const Container = styled.main`
  background-color: #282c34;
  min-height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
`

export default function Routes () {
  return(
    <Container>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/comics" exact component={Comics} />
        <Route path="/comics/:id" component={Comic} />
      </Switch>
    </Container>
  )
}
