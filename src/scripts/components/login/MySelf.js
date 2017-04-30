import React,{Component} from 'react'
import {Link} from 'react-router'


class MySelf extends Component {
  render(){
    return (
      <div className="self">
        <div className="myself">
          <div>
            <span></span>
          </div>
          <div className="clickmyself">
            {localStorage.getItem("user")?<span>您好,{localStorage.getItem("user")}</span>:<span><Link to="/mylogin">点击登录</Link></span>}
          </div>
          <div>
            <span><p>0</p>账户余额(元)</span>
            <span><p>0</p>优惠卷(张)</span>
            <span><p>0</p>积分</span>
          </div>
        </div>
        <ul className="myselfBox">
        <li><img src="/images/good_chandi_icon.png" alt=""/><span>积分商城</span></li>
        <li><img src="/images/good_chandi_icon.png" alt=""/><span>地址管理</span></li>
        <li><img src="/images/good_chandi_icon.png" alt=""/><span>联系客服</span></li>
        <li><img src="/images/good_chandi_icon.png" alt=""/><span>设置</span></li>
        </ul>
      </div>
    )
  }
}

export default MySelf
