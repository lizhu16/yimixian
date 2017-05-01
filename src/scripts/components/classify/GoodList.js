import React,{Component} from 'react'
import Header from '../common/Header'
import SideBar from './SideBar'
import SideList from './SideList'

import Loading, {loading} from '../../../component_dev/loading/src'


class GoodList extends Component {
	constructor(props){
		super(props)
		this.state={
			titId:"193",
			sidelist:[],
			curIndex:0
		}
	}

    componentWillMount(){
  		loading.show()
  	}


	getListTitle(titId,index){

		let domain = '/api/v5/categories/'
		fetch(domain + titId + `/goods?store_id=976&token=&delivery_mode=9`)
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
						sidelist: res.goods,
						curIndex:index
				})
		})
	}

	render(){
		return (
			<div className="m-goodlist">
				<Header  extClass="goolistHearder"/>
				<div className="m-list">
					<div className="list-head"><img src="./images/location.png"/>配送至：北京科技职业学院</div>
		         <div className="list-middle">
		           <SideBar Handle={this.getListTitle.bind(this)} activeIndex={this.state.curIndex}/>
		           <SideList sidelist={this.state.sidelist} />
			    </div>
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

				loading.hide()
		})
	}
}

export default  GoodList
