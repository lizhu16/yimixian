import React,{Component} from 'react'

import {Link} from 'react-router'

import List from '../../../component_dev/list/src'


class SideList extends Component {

	constructor(props){
	    super(props)
  	}

  	toDetail(id){

		//console.log(this.props)
  	}


  	render(){
			if(this.props.sidelist.length>0){
			return (
			<div className="sidelist">

				<List 
					ref="list"

				dataSource = {this.props.sidelist}

				renderItem = {(value,i)=>{
					
					return (

					 <div className="sideitem"  onClick = {this.toDetail.bind(this,value.id)}>
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
