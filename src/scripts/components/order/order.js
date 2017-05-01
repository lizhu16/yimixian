import React,{Component} from 'react'
import {Link} from 'react-router'
import Footer from '../common/Footer'

class Order extends Component{
  render(){
    return (
            <div className="m-shopcar">
                <div className="car-head">
                 <a href=""><img src="images/ic_close.png"/></a>
                    我的订单
                </div>
                <div className="car-content">
                    <div className="car-pic"><img src="images/ic_no_cart_data.png"/></div>
                    <div className="car-txt">亲，您还没有相关订单，快去买水果吧~</div>
                    <div className="car-btn"><Link to="/classify"><span>去逛逛</span></Link></div>
                </div>
            </div>
    )
  }
}

export default Order
