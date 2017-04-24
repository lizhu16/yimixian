import React,{Component} from 'react'

import SideBar from './SideBar'
import SideList from './SideList'

class GoodList extends Component {

	render(){
		return (
			<div className="m-list">
				<div className="list-head">
	                     配送至：北京科技职业学院
	             </div>
	             <div className="list-middle">
		             <div className="sidebar">
		             	<SideBar name="超值团购" detail="更实惠"/>
		             	<SideBar name="本周主推" detail="抢到手软"/>
		             	<SideBar name="量贩装" detail="量贩更实惠"/>
		             	<SideBar name="商家发货" detail="单独配送"/>
		             </div>
		             <SideList uri="/list2" />
	             </div>
             </div>
			)
	}	
}

export default  GoodList