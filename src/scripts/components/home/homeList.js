import React,{Component} from 'react'
import HomeListItem from './homeListItem'

class HomeList extends Component{
  render(){
    return (
      <ul className="goods_List">
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
        <HomeListItem />
      </ul>
    )
  }
}

export default HomeList
