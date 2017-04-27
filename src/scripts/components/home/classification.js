import React,{Component} from 'react'
import Scroller from '../../../component_dev/scroller/src'
import {Link} from 'react-router'

class Classification extends Component{
  render(){
    let domain = 'http:\//7sbnc0.com2.z0.glb.qiniucdn.com/material/'
    let domainend = '?imageView2/2/w/640'
    var data = this.props.home_data
    let list_wrap=[]
    if(data){
      let material_data =data[3].material
      list_wrap=material_data.map((value,index)=>{
        let Li = value.goods.map((value,index) => (
          <li key={index} id={value.id}>
            <dl>
              <dt>
                <a href="#javascript">
                  <img src={domain + value.img + domainend} />
                </a>
              </dt>
              <dd className="pro_name"><h1>{value.name}</h1></dd>
              <dd className="unit_desc">{value.unit_desc}</dd>
              <dd className="unit_price">
                <i>￥</i>{value.unit_price}
                <b>{value.unit_old_price?`￥${value.unit_old_price}`:''}</b>
              </dd>
              <dd className="buy_btn"><a href="#javascript:void(0);">立即购买</a></dd>
            </dl>
          </li>
        ))
        return(
          <div className="list_wrap" key={index}>
            <div className="title">
              <b>{value.name}</b>
              <Link to="/classify">
                <span>更多商品</span>
                <i className="yo-ico">&#xf07f;</i>
              </Link>
            </div>
            <div className="title_img">
              <a href="#javascript:void(0);">
                <img src={domain+value.banners[0].image}/>
              </a>
            </div>
              <Scroller extraClass={'yo-scroller-b'}
                scrollX={true}
                scrollY={false}
              >
                <ul className="g_list">
                  {Li}
                </ul>
              </Scroller>
          </div>
        )
      })
    }

    return (
      <div>
        {list_wrap}
      </div>
    )
  }
}

export default Classification
