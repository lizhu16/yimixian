import React,{Component} from 'react'
import SearchHeader from './SearchHeader'
import {Link} from 'react-router'

class SearchListItem extends Component{

  renderList(list){
    if(list){
      return  list.map((value,index)=>{
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
      <ul className="searchListItem">
        {this.renderList(this.props.searchData.search_result)}
      </ul>
    )
  }

  componentDidMount(){

    // fetch(`/api/v5/search?store_id=976&token=c1a76970f881f4875d02951c6e61ec8c&key_word=%E8%8B%B9%E6%9E%9C&page=0&delivery_mode=9`)
    // .then((response)=>response.json())
    // .then((res)=>{
    //     console.log(res)
    // })
  }
}


export default SearchListItem
