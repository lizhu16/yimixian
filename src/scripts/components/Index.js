import React,{Component} from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

class Index extends Component{
  render(){
    return (
      <div className="main">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Index
