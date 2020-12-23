import React from 'react'
import { Route, Switch } from "react-router"
import Game from '../game/Game'
import Home from '../home/Home'

const Main = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route 
        exact 
        path="/game" 
        component={Game} 
      />
    </Switch>
  )
}

export default Main