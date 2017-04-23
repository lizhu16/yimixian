import React,{Component} from 'react'
import HomeList from './homeList'
import Classification from './classification'
import Nav from './nav'

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
        <Nav home_data={this.state.data.card_list} />
        <HomeList home_data={this.state.data.card_list} />
        <Classification home_data={this.state.data.card_list} />
        <div  className="goods_more">
          <a href="#javascript:void(0)">
            <span><b></b>点击查看全部商品<i className="yo-ico">&#xf07f;</i></span>
          </a>
        </div>
      </section>
    )
  }

  // componentDidMount(){
  //   fetch('/con/v5/categories/193/goods?store_id=976&token=b517a94e10a62b65dd2cb58285f3bf5d&delivery_mode=9')
  //   .then((response)=>response.json())
  //   .then((res)=>{
  //     console.log(res);
  //   })
  // }

  componentDidMount(){
    fetch('http:\//localhost:7001/homePage')
    .then((response)=>response.json())
    .then((res)=>{
      this.setState({
        data:res
      })
    })
  }

}

export default Home
