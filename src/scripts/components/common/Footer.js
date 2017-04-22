import React,{Component} from 'react'

class Footer extends Component{
  render(){
    return (
      <footer>
        <div className="home">
          <i></i>
          <span>首页</span>
        </div>
        <div className="classify">
          <i></i>
          <span>分类</span>
        </div>
        <div className="shopping_car_wrap">
          <div className="shopping_car">
          </div>
        </div>
        <div className="order">
          <i></i>
          <span>订单</span>
        </div>
        <div className="my">
          <i></i>
          <span>我的</span>
        </div>
      </footer>
    )
  }
}

export default Footer
