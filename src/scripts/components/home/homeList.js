import React,{Component} from 'react'
import HomeListItem from './homeListItem'
import List from '../../../component_dev/list/src'

class HomeList extends Component{
  render(){
    // let domain = 'http:\//7sbnc0.com2.z0.glb.qiniucdn.com/material/'
    // let domainend = '?imageView2/2/w/640'
    // var data = this.props.home_data
    // let List=[]
    // if(data){
    //   let material_data =data[2].material
    //   List=material_data.map((value,index)=>(
    //     <HomeListItem img_url={domain+value.image+domainend} key={index} id={value.id} />
    //   ))
    // }
    return (
      <ul className="goods_List">
        <List
          disabled={true}
          dataSource={this.props.home_data[2].material}
          renderItem={(value,i)=>{

            return (
              <a href="#javascript:void(0);" id={value.id}>
                <img src={`http:\//7sbnc0.com2.z0.glb.qiniucdn.com/material/${value.image}?imageView2/2/w/640`}/>
              </a>
            );
          }}
        >
        </List>
      </ul>
    )
  }
}

export default HomeList
