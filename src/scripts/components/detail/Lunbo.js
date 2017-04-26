import React, {Component} from 'react'

import Carousel from '../../../component_dev/carousel/src'

class Lunbo extends Component {

  getImg(list){
    return list.map((value,index)=>{
            return(
              <li className="item">
                <img className="img" src={`http://7sbnc0.com2.z0.glb.qiniucdn.com/material/${value}`}  />
              </li>
            )
           })
  }

  render() {
    return (
        <Carousel>
            {this.getImg(this.props.imgData.img_url)}
        </Carousel>

    )
  }
}

export default  Lunbo
