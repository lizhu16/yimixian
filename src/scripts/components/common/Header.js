import React,{Component} from 'react'
import {Link} from 'react-router'

class Header extends Component{
  render(){
    return (
      <header className={this.props.extClass}>
        <div className="title">一米鲜</div>
        <div className="search">
          <Link to="/search"></Link>
        </div>
      </header>
    )
  }
}

export default Header
