import React,{Component} from 'react'
import HomeListItem from './homeListItem'
import {Link} from 'react-router'
import List from '../../../component_dev/list/src'




class HomeList extends Component{

  gotoDetail(id){
    this.props.onGotoDetail && this.props.onGotoDetail(id)
  }

  render(){
    return (
      <ul className="goods_List">
        <List
          disabled={true}
          dataSource={this.props.home_data[2].material}
          renderItem={(value,i)=>{
<<<<<<< HEAD
            console.log(value)
=======

>>>>>>> goodlist
            return (
              <Link to={`/detail/${value.id}`} onClick={this.gotoDetail.bind(this,value.id)}>
                <img src={`http:\//7sbnc0.com2.z0.glb.qiniucdn.com/material/${value.image}?imageView2/2/w/640`}/>
              </Link>
            );
          }}
        >
        </List>
      </ul>
    )
  }
}

export default HomeList
