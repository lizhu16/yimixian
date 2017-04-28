import React,{Component} from 'react'

import List from '../../../component_dev/list/src'
import {Link} from 'react-router'
class SideList extends Component {

	constructor(props){
	    super(props)
  	}


  	render(){
			if(this.props.sidelist.length>0){
			return (
			<div className="sidelist">
				<List

					dataSource = {this.props.sidelist}
					renderItem = {(value,i)=>{

						return (
						<Link to={`/detail/${value.id}`}  >
						 <div className="sideitem">
						 	<img className="good-img"src= {`http://7sbnc0.com2.z0.glb.qiniucdn.com/material/`+value.img} />
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
						</Link>

							);
					}}

				usePullRefresh = {true}
				useLoadMore={true}


				></List>
		    </div>

		)

		 }else{
		 	return null
		 }

	}


}

export default  SideList
