import React,{Component} from 'react'


class HomeListItem extends Component{
  render(){
    return (
        <li>
          <a href="#javascript:void(0);" id={this.props.id}>
            <img src={this.props.img_url}/>
          </a>
        </li>
    )
  }
}

export default HomeListItem
