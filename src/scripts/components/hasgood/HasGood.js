import React,{Component} from 'react'
import {Link} from 'react-router'

class HasGood extends Component{
  render(){
    return (

        <div className="m-hasgood">

            <div className="hg-head">
               <a href=""><img src="images/ic_close.png"/></a>
                  购物车
               <span>编辑</span>
            </div>
            <div className="hg-content">
                <div className="your-address">
                  <p>
                    <img src="images/ic_no_address.png" className="smile-face"/>
                    <span>
                        亲，您还没有选择收货地址~<br/>
                        点我选择收货地址
                    </span>
                    <img src="images/ic_cart_arrow_right.png"  className="arrow-right"/>
                  </p>
                </div>
                <div className="goods-buy">
                  <ul>
                    <li>
                      <div className="delivery-time"><img src="images/cart_title_icon.png"/>05月01日配送</div>
                      <div className="goods-buy-msg">
                        <p className="goods-huan">
                          <i>换购</i>
                          满0.00元，即可换购超值商品，点击查看换购商品
                          <img src="images/ic_cart_arrow_right.png"/>
                        </p>
                        <div className="goods-buy-item">
                          <img className="goods-img" src="http://7sbnc0.com2.z0.glb.qiniucdn.com/material/2016/11/30/xtm03_42544.jpg?imageView2/2/w/640"/>
                          <p>
                            <span className="goods-name">树上熟贵妃芒</span>
                            <span className="goods-unit_desc">1.8斤/12个左右/份</span>
                            <span>￥<i className="goods-unit_price">45</i>.00</span>
                          </p>
                          <div className="plus-minus">
                             <img src="images/icon_minus.png"/>
                             <span>1</span>
                             <img src="images/icon_plus.png"/>
                          </div>
                        </div>
                      </div>
                      <div className="cou-dan">
                        共<i className="vunit_price">45</i>元，
                        <b>差24元，有20元优惠券可用</b>
                        <span>去凑单</span>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>

        </div>
    )
  }
}

export default HasGood
