import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import store from '../../redux/store'

class HasGood extends Component{

  constructor(props){
    super(props)
    this.state={
      goodsData:[],
      goodsNum:0
    }
  }

  addNum(id){
    this.props.onToDetail({
      type:"addNum",
      count:this.props.count,
      goodsId:id
    })
  }

  reduceNum(id){
    if(this.props.count > 1){
      this.props.onToDetail({
        type:"reduceNum",
        count:this.props.count,
        goodsId:id
      })
    }
  }

  showNum(index){
    let allNum=0;
    eval(localStorage.getItem("goods")).map((value,index)=>{
      allNum+=value.num
    })
    return allNum
  }

  allPrice(){
    let goodsData = this.state.goodsData
    let allPrice = 0;
    if(goodsData.length>0){
      eval(localStorage.getItem("goods")).map((value,index)=>{
        allPrice+=Math.round(parseInt(value.num*goodsData[index].unit_price*100))/100
      })
    }
    return allPrice
  }

  renderGood(){
    if(this.state.goodsData.length > 0){
      return this.state.goodsData.map((value,index)=>{
        return(
          <li>
            <div className="delivery-time"><img src="images/cart_title_icon.png"/>05月01日配送</div>
            <div className="goods-buy-msg">
              <p className="goods-huan">
                <i>换购</i>
                满0.00元，即可换购超值商品，点击查看换购商品
                <img src="images/ic_cart_arrow_right.png"/>
              </p>
              <div className="goods-buy-item">
                <img className="goods-img"
                   src={`http://7sbnc0.com2.z0.glb.qiniucdn.com/material/${value.img_url[0]}?imageView2/2/w/640`}/>
                <p>
                  <span className="goods-name">{value.name}</span>
                  <span className="goods-unit_desc">{value.unit_desc}</span>
                  <span>￥<i className="goods-unit_price">{Math.round(parseInt(value.unit_price*100))/100}</i></span>
                </p>
                <div className="plus-minus">
                   <img src="images/icon_minus.png" onClick={this.reduceNum.bind(this,value.id)}/>
                   <span>{this.props.count&&value.id==this.props.goodsId?this.props.count:this.state.goodsNum[index]}</span>
                   <img src="images/icon_plus.png" onClick={this.addNum.bind(this,value.id)}/>
                </div>
              </div>
            </div>
            <div className="cou-dan">
              共<i className="vunit_price">{Math.round(parseInt(this.state.goodsNum[index]*value.unit_price*100))/100}</i>元，
              <b>差24元，有20元优惠券可用</b>
              <span>去凑单</span>
            </div>
          </li>
        )
      })
    }else{
      return null
    }

  }

  render(){
    if(localStorage.getItem("goods")){
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
                      {this.renderGood()}
                    </ul>
                  </div>
              </div>
              <div className="Settlement">
                <span className="shopCar_icon"><i><b >{this.showNum()}</b></i></span>
                <span className="all_price">总价:<i>{`￥${this.allPrice()}`}(不包含服务费)</i></span>
                <span className="Settlement_btn">去结算</span>
              </div>
          </div>
      )
    }else{
      return <div className="m-shopcar">
          <div className="car-head">
           <a href=""><img src="images/ic_close.png"/></a>
              购物车
          </div>
          <div className="car-content">
              <div className="car-pic"><img src="images/ic_no_cart_data.png"/></div>
              <div className="car-txt">购物车还空着呢，快去挑选水果吧~</div>
              <div className="car-btn"><Link to="/classify"><span>去逛逛</span></Link></div>
          </div></div>
    }
  }

  componentDidMount(){

    let goods = eval(localStorage.getItem("goods"))
    let goodsData = []
    let goodsNum = []
    if(goods){
      goods.map((value,index)=>{
        goodsNum.push(value.num)
        fetch(`/api/v4/goods/${Number(value.id)}/show?store_id=976&delivery_mode=9`)
    		.then(response=>response.json())
    		.then((res)=>{
          goodsData.push(res.good_detail.good)
          this.setState({
            goodsData:goodsData,
            goodsNum:goodsNum
          })
    		})
    		.catch((e)=>{
    		})
      })
    }

  }

}

export default connect(
  store().mapStateToProps,
  store().mapDispatchToProps
)(HasGood)
