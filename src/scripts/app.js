require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRedirect} from 'react-router'
import Index from './components/Index'
import Home from './components/home/home'
import GoodList from './components/classify/GoodList'
import Detail from './components/detail/Detail'

import MyLogin from './components/MyLogin'
import User from './components/User'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/home"/>
      <Router path="home" component={Home}/>
      <Router path="classify" component={GoodList}/>
    </Route>
    <Route path="/detail" component={Detail}>
    </Route>
    <Router path="/mylogin" component={MyLogin}/>
    <Router path="/user" component={User}/>
  </Router>
  ),
  document.getElementById('root')
)
