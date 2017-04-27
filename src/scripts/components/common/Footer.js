import React,{Component} from 'react'
import {Link} from 'react-router'

class Footer extends Component{
  render(){
    return (
      <footer>
        <Link to="/home" activeClassName="active">
          <div className="home">
            <i></i>
            <span>首页</span>
          </div>
        </Link>
        <Link to="/classify" activeClassName="active">
          <div className="classify">
            <i></i>
            <span>分类</span>
          </div>
        </Link>
        <Link to="/shopcar" >
          <div className="shopping_car_wrap">
            <div className="shopping_car">
            </div>
          </div>
        </Link>
        <Link to="/classify">
          <div className="order">
            <i></i>
            <span>订单</span>
          </div>
        </Link>
        <Link to="/classify">
          <div className="my">
            <i></i>
            <span>我的</span>
          </div>
        </Link>
      </footer>
    )
  }
}

export default Footer
