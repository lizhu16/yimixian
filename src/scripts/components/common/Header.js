import React,{Component} from 'react'
import {Link} from 'react-router'

class Header extends Component{
  render(){
    return (
      <header>
        <div className="title">次日达</div>
        <div className="search">
          <Link to="/search"></Link>
        </div>
      </header>
    )
  }
}

export default Header
