import React,{Component} from 'react'

import List from '../../../component_dev/list/src'

class SideList extends Component {

	constructor(props){
	    super(props)
	    this.state = {
	      sidelist: []
	    }
  	}

  	getSideList(list){
  		return list.map((value,index)=>{
  			return (

					
			 <div className="sideitem" key={index}>
			 	<img src= {`http://7sbnc0.com2.z0.glb.qiniucdn.com/material/`+value.img} />
             	<div className="tubiao">
								{value.promotion_img?<img src={`http://7sbnc0.com2.z0.glb.qiniucdn.com/material/`+value.promotion_img} />:''}
             	</div>

				<div className="good-msg">
				    <h2>{value.name}</h2>
				    <p className="subname">{value.sub_name}</p>
				    <span>{value.unit_desc}</span>
				    <span><i>￥</i>{value.unit_price}</span>
				    <a>去团购</a>
				</div>
			</div>

  				)
  		})
  	}


	render(){

		return (

			<div className="sidelist">

				 {this.getSideList(this.props.sidelist)}

		    </div>

		)
	}

	
}

export default  SideList
