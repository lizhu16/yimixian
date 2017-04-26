import React,{Component} from 'react'

import SideBar from './SideBar'
import SideList from './SideList'

class GoodList extends Component {
	constructor(props){
		super(props)
		this.state={
			titId:"193",
			sidelist:[]

		}
	}



	getListTitle(titId){
		console.log(titId)
		let domain = '/api/v5/categories/'
		fetch(domain + titId + `/goods?store_id=976&token=&delivery_mode=9`)
			.then((response)=>response.json())
			.then((res)=>{
				console.log(res)
				this.setState({
						sidelist: res.goods
				})
		})
	}

	render(){

		return (
			<div className="m-list">
				<div className="list-head">配送至：北京科技职业学院</div>
         <div className="list-middle">
           <SideBar Handle={this.getListTitle.bind(this)} />
           <SideList sidelist={this.state.sidelist} />
	      </div>
    	</div>
			)
	}

	componentDidMount(){
		let domain = '/api/v5/categories/'
		fetch(domain + this.state.titId+`/goods?store_id=976&token=&delivery_mode=9`)
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
						sidelist: res.goods
				})
		})
	}
}

export default  GoodList
