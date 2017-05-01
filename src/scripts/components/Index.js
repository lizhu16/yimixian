import React,{Component} from 'react'
import Footer from './common/Footer'

class Index extends Component{
  render(){
    return (
      <div className="main">

        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Index
