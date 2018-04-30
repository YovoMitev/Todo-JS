import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from '../todo/HomePage'
import NotFoundPage from '../NotFoundPage'
import CreateTodoPage from '../todo/CreateTodoPage'

const Routes = () => (
  <Switch>
    <Route exact path='/'  component={HomePage}/>
    <Route  path='/create'  component={CreateTodoPage}/>
    <Route component={NotFoundPage} />
  </Switch>
)


export default Routes