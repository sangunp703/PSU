import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Opening from './opening.js'

const PSUApp = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/opening' component={Opening} />
        <Route component={Opening} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <PSUApp />,
  document.getElementById('root')
)