require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,browserHistory,IndexRedirect} from 'react-router'
import Index from './components'
import Home from './components/home/home'
import GoodList from './components/classify/GoodList'
import Detail from './components/detail/Detail'
import Search from './components/search/Search'
import MySelf from './components/login/MySelf'
import SearchList from './components/search/SearchList'
import Order from './components/order/order'
import ShopCar from './components/shopcar/ShopCar'
import HasGood from './components/hasgood/HasGood'
import MyLogin from './components/MyLogin'
import User from './components/User'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render((
  <Provider store={store().store}>
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/home"/>
      <Router path="home" component={Home}/>
      <Router path="classify" component={GoodList}/>
      <Route path="/order" component={Order}/>
    </Route>
    <Route path="/detail/:id" component={Detail}/>
    <Route path="/search" component={Search}/>
    <Route path="/shopcar" component={ShopCar}/>
    <Route path="/hasgood" component={HasGood}/>
    <Route path="/searchList" component={SearchList}/>
    <Router path="/mylogin" component={MyLogin}/>
    <Router path="/user" component={User}/>
  </Router>
</Provider>
  ),
  document.getElementById('root')
)
