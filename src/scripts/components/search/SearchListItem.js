import React,{Component} from 'react'
import SearchHeader from './SearchHeader'

class SearchListItem extends Component{

  render(){
    return(
      <ul className="searchListItem">
        <li>
          <a href="#javascript:void(0);">
            <dl>
              <dt>
                <img src="http://7sbnc0.com2.z0.glb.qiniucdn.com/material/2017/4/15/baiguoyuandongfanghong_f0309_57087.jpg?imageView2/2/w/640" />
              </dt>
              <dd className="name">东方红苹果（大）</dd>
              <dd className="unit_desc">6个/约2.2kg/份</dd>
              <dd className="price">
                <div className="unit_price">
                  <i>￥</i>45
                </div>
                <div className="unit_old_price">￥88</div>
              </dd>
              <a href="#javascript:void(0);" className="buy_btn">立即购买</a>
            </dl>
          </a>
        </li>
      </ul>
    )
  }

  componentDidMount(){
    fetch('/api/v5/search?store_id=976&token=&key_word=%E8%8B%B9%E6%9E%9C&page=0&delivery_mode=9')
    .then((response)=>response.json())
    .then((res)=>{
      console.log(res)
    })
  }
}



export default SearchListItem
