import React,{Component} from 'react'
import {browserHistory} from 'react-router'
import Toast from '../../../component_dev/toast/src'

class Login extends Component {
  back() {
    browserHistory.goBack()
  }

  login(){
    let username = this.refs.user.value
    let password = this.refs.pwd.value
    fetch('/con/users/login',{
      method:"POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `username=${username}&password=${password}`
      })
    .then(response=>response.json())
    .then((res)=>{
      if(res.result === "ok"){
        localStorage.setItem("user",username)
        Toast.show("登录成功,正在为您跳转",3000)
        let routerPush = this.props.routerPush
        setTimeout(()=>{
          routerPush.props.router.push('/home')
        },3000)
      }else{
        Toast.show("登录失败，请重新登录",3000)
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  render(){
    return (
      <div className="login">
        <div>
          <span onClick={this.back}><img src="/images/ic_close.png" alt=""/></span>
        </div>
        <div>
          <h2>用户登录</h2>
          <p><input type="text" placeholder="输入手机号" ref="user" /></p>
          <p>
          <input className="code" type="text" placeholder="输入验证码" ref="pwd" />
          <div className="codebox">
            <input className="codebtn" type="button" name="" value="获取验证码" />
          </div>
          </p>
          <input className="loginbtn" type="button" name="" value="登录" onClick={this.login.bind(this)}/>
          <h3>点击"登录"即表示您同意<span>《一米鲜用户服务条款》</span></h3>
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>合作账户登录</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
          <div className="icwx"><img src="/images/socialize_wechat.png" alt=""/></div>
        </div>
      </div>
    )
  }
}

export default Login
