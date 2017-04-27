import React,{Component} from 'react'
import SearchHeader from './SearchHeader'
import {connect} from 'react-redux'
import store from '../../redux/store'


class Search extends Component{
  constructor(props){
    super(props)
    this.state={
      key_word:[]
    }
  }

  handleToDetail(value){
    this.props.onToDetail({
      type:'SETHOTKEYWORD',
      hotKeyWord:value
    })
    this.props.router.push(`/SearchList`)
  }

  getHotWord(list){
    return list.map((value,index)=>{
              return <a  key={index} onClick={this.handleToDetail.bind(this,value)}>{value}</a>
           })
  }

  render(){
    return(
      <div className="m-search">
        <SearchHeader/>
        <div className="hot_search" >
          <div className="hot_title"><i></i>热门搜索</div>
          <div className="hot_tag">
            {this.getHotWord(this.state.key_word)}
          </div>
        </div>
        <div className="history"></div>
      </div>
    )
  }

  componentDidMount(){

    fetch('/api/v5/search/page?store_id=976&token=')
    .then((response)=>response.json())
    .then((res)=>{
      this.setState({
        key_word:res.hot_key_word
      })
    })
  }
}

export default connect(
  store().mapStateToProps,
  store().mapDispatchToProps
)(Search)
