import React,{Component} from 'react'
import Nav from './nav'
import HomeList from './homeList'
import Classification from './classification'

class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      data:{}
    }
  }


  render(){
    return (
      <section>
        <div className="top">
          <img src="http://7sbnc0.com2.z0.glb.qiniucdn.com/material/2017/4/19/yewushengji_19852.jpeg?imageView2/2/w/640"/>
        </div>
        <Nav />
        <HomeList />
        <Classification />
      </section>
    )
  }

  componentDidMount(){
    fetch('/con/v5/categories/193/goods?store_id=976&token=b517a94e10a62b65dd2cb58285f3bf5d&delivery_mode=9')
    .then((response)=>response.json())
    .then((res)=>{
      console.log(res);
    })
  }


}

export default Home
