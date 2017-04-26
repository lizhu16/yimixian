import React,{Component} from 'react'

import Lunbo  from './Lunbo'

import Scroller from '../../../Component_dev/scroller/src'

class Detail extends Component {

	render(){
		return (

        <div className="m-detail">
			<div className="scroll-part">
				<div className="detail-header">
					<img src="./images/btn_back.png" className="top-btn back"/>
				    <img src="./images/btn_share.png" className="top-btn share"/>
					<Lunbo/>
				</div>
				<div className="detail-content">
				    <div className="txt-msg">
						<div className="content-t">
							<span>进口火龙果（中）</span>
							<span>
								￥<i>39.9</i><em>￥68</em>
							</span>
						</div>
						<div className="content-m">
							<div>
								<img src="/images/level_icon.png"/>
								<span>B级</span>
							</div>
							<div>
								<img src="./images/good_weight.png"/>
								<span>4个/约2kg/份</span>
							</div>
							<div>
								<img src="./images/good_location.png"/>
								<span>越南</span>
							</div>
						</div>
						<div className="content-b">
							<span className="tab">图文详情</span>
							<span>用户评价</span>
						</div>
				    </div>
					<div className="pic-msg">
						<img src="http://7sbnc0.com2.z0.glb.qiniucdn.com/material/2016/10/20/yuenanbaixinhuolongguo_00_1020.jpg" />
					</div>
				</div>
			</div>
			<div className="detail-footer">
				<div className="shopcar"><a><img src="./images/home_cart.png"/></a></div>
				<div className="plusin"><a>加入购物车</a></div>
			</div>
		</div>	

			)

	}	
}

export default  Detail