import React,{Component} from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import Login from './login/Login'

class MyLogin extends Component{
  render(){
    return (
      <div className="main">

        <Login />
  
      </div>
    )
  }
}

export default MyLogin
