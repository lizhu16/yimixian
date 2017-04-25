import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import HomeList from './homeList'
import Classification from './classification'
import Nav from './nav'
import Scroller from '../../../component_dev/scroller/src'
import {Link} from 'react-router'


class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      data:{}
    }
  }

  isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0
  }


  render(){
    if(!this.isEmptyObject(this.state.data)){
      return (
          <Scroller extraClass={'yo-scroller-a'}
            ref="scroller"
            usePullRefresh={true}
            onRefresh={() => {
            setTimeout(()=>{
                this.refs.scroller.stopRefreshing(true); // 这个调用也可以放在异步操作的回调里之后
            },2000)
            }}
        >
          <section>
            <div className="top">
              <img src="http://7sbnc0.com2.z0.glb.qiniucdn.com/material/2017/4/19/yewushengji_19852.jpeg?imageView2/2/w/640"/>
            </div>
            <Nav home_data={this.state.data.card_list} />
            <HomeList home_data={this.state.data.card_list} />
            <Classification home_data={this.state.data.card_list} />
            <div  className="goods_more">
              <Link to="/classify">
                <span><b></b>点击查看全部商品<i className="yo-ico">&#xf07f;</i></span>
              </Link>
            </div>
          </section>
        </Scroller>
      )
    }else{
      return null
    }
  }

  // componentDidMount(){
  //   fetch('/con/v5/categories/193/goods?store_id=976&token=b517a94e10a62b65dd2cb58285f3bf5d&delivery_mode=9')
  //   .then((response)=>response.json())
  //   .then((res)=>{
  //     console.log(res);
  //   })
  // }

  componentDidMount(){
    fetch('/api/v5/home_page?token=&longitude=116.25707314855387&latitude=40.12375053421658&poi_id=bd-7ba5590242b2f3103362120c&coord_system=BD-09&delivery_mode=9')
    .then((response)=>response.json())
    .then((res)=>{
      this.setState({
        data:res
      })
    })
  }

}

export default Home
