import React,{Component} from 'react'



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
					
						 <div className="sideitem" id={value.id} key={index}>
						 	<img src= {`http://7sbnc0.com2.z0.glb.qiniucdn.com/material/`+value.img} />                  
		                   	<div className="tubiao">
		                   		<img src={`http://7sbnc0.com2.z0.glb.qiniucdn.com/material/`+value.promotion_img} />
		                   	</div>
							<div className="good-msg">
							    <h2>{value.name}</h2>
							    <span>{value.name}</span>
							    <span>{value.unit_desc}</span>
							    <span>{value.unit_price}</span>
							    <a>去团购</a>
							</div>	
            			</div>  			 
				     
  				)
  		})
  	}


	render(){

		return (

			<div className="sidelist">
				 {this.getSideList(this.state.sidelist)}
		    </div>

		)
	}

		
	componentDidMount() {
	    let domain = 'http://localhost:7001'
	    fetch(domain + this.props.uri)
	      .then((response)=>response.json())
	      .then((res)=>{
		        
		        this.setState({
					sidelist: res.goods
		        })
      	})
  	}
}

export default  SideList