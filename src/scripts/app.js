require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRedirect} from 'react-router'
import Index from './components'
import Home from './components/home/home'
import GoodList from './components/calssify/GoodList'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/home"/>
      <Router path="home" component={Home}/>
      <Router path="classify" component={GoodList}/>
    </Route>
  </Router>
  ),
  document.getElementById('root')
)
