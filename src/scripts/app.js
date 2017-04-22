require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRedirect} from 'react-router'
import Index from './components'
import Home from './components/home/home'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/home"/>
      <Router path="home" component={Home}/>
    </Route>
  </Router>
  ),
  document.getElementById('root')
)
