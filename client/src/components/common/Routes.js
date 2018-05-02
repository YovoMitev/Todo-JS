import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../todo/HomePage'
import NotFoundPage from '../NotFoundPage'
import CreateTodoPage from '../todo/CreateTodoPage'
import DetailsTodoPage from '../todo/DetailsTodoPage'
import About from '../About'

const Routes = () => (
  <Switch>
    <Route exact path='/'  component={HomePage}/>
    <Route  path='/create'  component={CreateTodoPage}/>
    <Route  path='/about'  component={About}/>
    <Route path='/details/:id/' component={DetailsTodoPage} />
    <Route component={NotFoundPage} />
  </Switch>
)


export default Routes