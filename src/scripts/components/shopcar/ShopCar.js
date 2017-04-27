import React,{Component} from 'react'
import {Link} from 'react-router'

class ShopCar extends Component{
  render(){
    return (
     
          <div className="m-shopcar">
              <div className="car-head">
               <a href=""><img src="images/ic_close.png"/></a>
                  购物车
              </div>
              <div className="car-content">
                  <div className="car-pic"><img src="images/ic_no_cart_data.png"/></div>
                  <div className="car-txt">购物车还空着呢，快去挑选水果吧~</div>
                  <div className="car-btn"><span>去逛逛</span></div>
              </div>
          </div>
    )
  }
}

export default ShopCar