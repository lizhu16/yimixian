import React,{Component} from 'react'
import {browserHistory} from 'react-router'

class Login extends Component {
  back() {
    browserHistory.goBack()
}
  render(){
    return (
      <div className="login">
        <div>
          <span onClick={this.back}><img src="/images/ic_close.png" alt=""/></span>
        </div>
        <div>
          <h2>用户登录</h2>
          <p><input type="text" placeholder="输入手机号"/></p>
          <p>
          <input className="code" type="text" placeholder="输入验证码" />
          <div className="codebox">
            <input className="codebtn" type="button" name="" value="获取验证码" />
          </div>
          </p>
          <input className="loginbtn" type="button" name="" value="登录" />
          <h3>点击"登录"即表示您同意<span>《一米鲜用户服务条款》</span></h3>
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>合作账户登录</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
          <div className="icwx"><img src="/images/socialize_wechat.png" alt=""/></div>
        </div>
      </div>
    )
  }
}

export default Login
