import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from '../todo/HomePage'
import NotFoundPage from '../NotFoundPage'

const Routes = () => (
  <Switch>
    <Route exact path='/'  component={HomePage}/>
    <Route component={NotFoundPage} />
  </Switch>
)


export default Routes