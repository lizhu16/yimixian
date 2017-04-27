import React,{Component} from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import MySelf from './login/MySelf'

class MyLogin extends Component{
  render(){
    return (
      <div className="main">

        <MySelf />
        <Footer/>
      </div>
    )
  }
}

export default MyLogin
