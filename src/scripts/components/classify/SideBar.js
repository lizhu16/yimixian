import React,{Component} from 'react'

class SideBar extends Component {

	  constructor(props) {
		    super(props)
		    this.state = {
		      categories: '',
		      listData: []
		    }
	  }



    getListContent(list){
	    return 	list.map((value,index)=>{
	    		return <li className="menu"  onClick={this.props.Handle.bind(this,value.id)}>
						<h2>{value.name}</h2>
						<p>{value.sub_name}</p>
            		   </li>
	    		})
    }
  	 

	render(){
		return (
			<ul className="sidebar">
				{this.getListContent(this.state.listData)}
			</ul>
			)
	}



	 componentDidMount(){

		fetch('/api/v5/categories?poi_id=bd-9ee392b85e571a41bbbd631f&longitude=116.2560131480521&latitude=40.12207471208547&delivery_mode=9')
			.then((response)=>response.json())
			.then((res)=>{
				
				this.setState({
					listData:res.categories
				})
					
		})
	}




}

export default  SideBar
                                                                                                                                                                                                                                                                                                                                                                          