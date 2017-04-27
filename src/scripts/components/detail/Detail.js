import React,{Component} from 'react'

class Detail extends Component {

	render(){
		return (
            <div className="m-detail">
				
				<div className="detail-content">
					<div className="banner">
						<ul>
							<li>
								<img src="http://7sbnc0.com2.z0.glb.qiniucdn.com/material/2017/1/9/jinxiangmi_05_0104_49530.jpg"/>
							</li>
						</ul>
						<div className="buy-return">不成团，原渠道退款</div>	
					</div>
					<div className="introduce">
						<div className="good-msg">
							<div className="good-title">【京津包邮】金太阳蜜瓜（大）2个/约2.2kg</div>
							<div className="good-info">2个/约2.2kg/份已售:255份</div>
							<div className="good-price">
								<span>￥</span>32.80
								<span className="old-price">￥39.90</span>
							</div>
						</div>
						<div className="good-group">
							1、该商品为团购商品；2、成团后24小时内发货，未成团则自动退款至原支付渠道.
						</div>
						<div className="good-tip">
							支付完成后邀请2人参团，人数不足自动原渠道退款（1-3工作日）
						</div>
						<div className="go-group-box">
							想要成团更快，您可以直接参与以下团购哦~
						</div>
						<div className="go-group">
							<img src="http://x.1mxian.com/images/group-buy/avatar.jpg"/>
							<div className="now-detail">
								<div className="left-place"> 还差1人</div>
								<div className="user-name">一米鲜 </div>
								<div className="user-time">已于2017-04-23 03:46:17 开团</div>
								<div className="group-btn">去参团</div>
							</div>
						</div>
					</div>
					<div className="pic-msg">
						<img src="http://7sbnc0.com2.z0.glb.qiniucdn.com/material/2017/1/9/taiyangmigua_xq_0115_62102.jpg" />
					</div>
				</div>
				<div className="detail-footer"></div>
			</div>
			)
	}	
}

export default  Detail