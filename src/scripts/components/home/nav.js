import React,{Component} from 'react'


class Nav extends Component{



  render(){

    let domain = 'http:\//7sbnc0.com2.z0.glb.qiniucdn.com/material/'
    let domainend = '?imageView2/2/w/640'
    var data = this.props.home_data
    let List=[]
    if(data){
      let material_data =data[1].material
      List=material_data.map((value,index)=>(
        <div key={index}>
          <img src={domain+value.image+domainend}/>
        </div>
      ))
    }
    return (
      <nav>
        {List}
      </nav>
    )
  }



}



export default Nav
