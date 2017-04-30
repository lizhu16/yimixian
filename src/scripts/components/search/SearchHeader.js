import React,{Component} from 'react'
import {connect} from 'react-redux'
import store from '../../redux/store'

class SearchHeader extends Component{
  constructor(props){
    super(props)
    this.state={
      value:''
    }
  }
  searchDetail(){
    this.props.onToDetail({
      type:'SETHOTKEYWORD',
      hotKeyWord:this.refs.word.value
    })
    localStorage.setItem("search_word",this.refs.word.value)
    let routerPush = this.props.routerPush.props.router
    routerPush.push('/searchList')
  }

  render(){
    return(
      <div className="search_header">
        <i className="goBack" onClick={this.props.backHandle}></i>
        <form onSubmit={this.searchDetail.bind(this)}>
          <input type="test" placeholder="输入您想要的水果"   ref="word"/>
        </form>
      </div>
    )
  }
}

export default connect(
  store().mapStateToProps,
  store().mapDispatchToProps
)(SearchHeader)
