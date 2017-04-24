import React,{Component} from 'react'

class SideBar extends Component {

	render(){
		return (

			<div className="menu">
					<h2>{this.props.name}</h2>
					<p>{this.props.detail}</p>
            </div>  

			)
	}	
}

export default  SideBar