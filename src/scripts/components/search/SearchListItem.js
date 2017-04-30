import React,{Component} from 'react'
import SearchHeader from './SearchHeader'
import {Link} from 'react-router'
import Scroller from '../../../component_dev/scroller/src'

class SearchListItem extends Component{

  isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0
  }

  tip(data){
    if(!this.isEmptyObject(data)){
      if(data.search_result.length > 0){
        return
      }else{
        return <div className="tip"><span>抱歉，暂时没有找到相关商品,来看看大家都在买什么</span></div>
      }
    }
  }

  renderList(list){
    let data=[]
    if(!this.isEmptyObject(list)){
      if(list.search_result.length>0){
        data=list.search_result
      }else{
        data=list.hot_goods
      }
      return  data.map((value,index)=>{
          return <li>
                  <Link to={`/detail/${value.id}`}>
                    <dl>
                      <dt>
                        <img src={`http:\//7sbnc0.com2.z0.glb.qiniucdn.com/material/${value.img}?imageView2/2/w/640`} />
                      </dt>
                      <dd className="name">{value.name}</dd>
                      <dd className="unit_desc">{value.unit_desc}</dd>
                      <dd className="price">
                        <div className="unit_price">
                          <i>￥</i>{value.unit_price}
                        </div>
                        {value.unit_old_price?<div className="unit_old_price">￥{value.unit_old_price}</div>:''}
                      </dd>
                      <a href="#javascript:void(0);" className="buy_btn">立即购买</a>
                    </dl>
                  </Link>
                </li>
            })
    }
  }


  render(){
    return(
      <Scroller>
        <ul className="searchListItem">
          {this.tip(this.props.searchData)}
          {this.renderList(this.props.searchData)}
        </ul>
      </Scroller>
    )
  }

  componentDidMount(){


  }
}


export default SearchListItem
