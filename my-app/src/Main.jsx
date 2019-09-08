import React from 'react'
import Home from './Home'
import Landing from './Landing'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/Home' component={Home} />
        </Switch>
      </Router>
    )
  }
}