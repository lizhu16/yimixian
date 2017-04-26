import React,{Component} from 'react'

import SideBar from './SideBar'
import SideList from './SideList'

class GoodList extends Component {
	constructor(props){
		super(props)
		this.state={
			uri:"/list1",
			sidelist:[]
		}
	}

	getList(uri){
		let domain = 'http://localhost:7001'
		fetch(domain + uri)
			.then((response)=>response.json())
			.then((res)=>{
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
           <div className="sidebar">
           	<SideBar  onClickHandle={this.getList.bind(this,"/list1")}/>
           	<SideBar  onClickHandle={this.getList.bind(this,"/list2")}/>
           	<SideBar  onClickHandle={this.getList.bind(this,"/list3")}/>
           	<SideBar  onClickHandle={this.getList.bind(this,"/list4")}/>
           </div>
         <SideList sidelist={this.state.sidelist} />
	      </div>
    	</div>
			)
	}

	componentDidMount(){

		let domain = 'http://localhost:7001'
		fetch(domain + this.state.uri)
			.then((response)=>response.json())
			.then((res)=>{
					this.setState({
							sidelist: res.goods
					})
		})
	}
}

export default  GoodList
