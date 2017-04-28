import React,{Component} from 'react'

import Lunbo  from './Lunbo'

import Loading, {loading} from '../../../component_dev/loading/src'

import Scroller from '../../../component_dev/scroller/src'

import Modal from '../../../component_dev/modal/src'



class Detail extends Component {
	constructor(props){
		super(props)
		this.state={
			data:{}
		}
	}

	componentWillMount(){
  		loading.show()
  	}
  	
  	back() {
    	this.props.router.goBack()
  	}
    
    showShare() {
	    this.setState({
	      modalShow: true
	    })
	   
	}

	hideShare() {
	    this.setState({
	      modalShow: false
	    })
	   
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
					<Scroller
		        	ref="scroller"
		        	>
					<div className="d-header" >
						<a onClick={this.back.bind(this)} >
							<img src="./images/btn_back.png" className="top-btn back"/>
						</a>
					    <a onClick={this.showShare.bind(this)}>
						    <img src="./images/btn_share.png" className="top-btn share"/>
						</a>
						<Lunbo imgData={this.state.data} />
					</div>
					<div className="detail-content">
					    <div className="txt-part">
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
						<div className="pic-part">
							<img src={`http://7sbnc0.com2.z0.glb.qiniucdn.com/material/${this.state.data.funtion_imgurl}`} />
						</div>
					</div>
					
					</Scroller>
				</div>
				<div className="detail-footer">
					<div className="shopcar"><a><img src="./images/home_cart.png"/></a></div>
					<div className="plusin"><a>加入购物车</a></div>
				</div>
				
				 <Modal ref="shareto"
				  show={this.state.modalShow}
				  width="100%"
		          height="100%"
		          extraClass="m-share"
		          contentExtraClass="good-share"
				  >
			        <div className="share-box">
		        		分享到
						<div className="share-pic">
							<p>
								<img src="./images/friend_circle.png"/>
								<span>朋友圈</span>
							</p>
							<p>
								<img src="./images/friend_wx.png"/>
								<span>微信好友</span>
							</p>
						</div>
						<div className="cancel-btn" onClick={this.hideShare.bind(this)}>
							取消
						</div>
			        </div>
		        </Modal>
				
			</div>
			)
		}else{
			return null
		}
	}

	componentDidMount(){
		fetch(`/api/v4/goods/${this.props.params.id}/show?store_id=976&delivery_mode=9`)
		.then(response=>response.json())
		.then((res)=>{
			this.setState({
				data:res.good_detail.good
			})
		})
		.catch((e)=>{

		})

		loading.hide()
	}

}

export default  Detail
