import React,{Component} from 'react'

import Lunbo  from './Lunbo'


class Detail extends Component {
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
	      <div className="m-detail">
				<div className="scroll-part">
					<div className="d-header">
						<img src="./images/btn_back.png" className="top-btn back"/>
					    <img src="./images/btn_share.png" className="top-btn share"/>
						<Lunbo imgData={this.state.data} />
					</div>
					<div className="detail-content">
					    <div className="txt-msg">
							<div className="content-t">
								<span>{this.state.data.name}</span>
								<span>
									￥<i>{this.state.data.unit_price}</i>
									{this.state.data.unit_old_price?<em>￥{this.state.data.unit_old_price}</em>:''}
								</span>
							</div>
							<div className="content-m">
								<div>
									<img src="/images/level_icon.png"/>
									<span>B级</span>
								</div>
								<div>
									<img src="./images/good_weight.png"/>
									<span>{this.state.data.unit_desc}</span>
								</div>
								<div>
									<img src="./images/good_location.png"/>
									<span>{this.state.data.productby}</span>
								</div>
							</div>
							<div className="content-b">
								<span className="tab">图文详情</span>
								<span>用户评价</span>
							</div>
					    </div>
						<div className="pic-msg">
							<img src={`http://7sbnc0.com2.z0.glb.qiniucdn.com/material/${this.state.data.funtion_imgurl}`} />
						</div>
					</div>
				</div>
				<div className="detail-footer">
					<div className="shopcar"><a><img src="./images/home_cart.png"/></a></div>
					<div className="plusin"><a>加入购物车</a></div>
				</div>
			</div>
			)
		}else{
			return null
		}
	}

	componentDidMount(){
		console.log(this.props.params.id);
		fetch(`/api/v4/goods/${this.props.params.id}/show?store_id=976&delivery_mode=9`)
		.then(response=>response.json())
		.then((res)=>{
			console.log(res)
			this.setState({
				data:res.good_detail.good
			})
		})
		.catch((e)=>{

		})
	}

}

export default  Detail
