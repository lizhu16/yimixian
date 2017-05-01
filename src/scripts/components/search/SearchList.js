import React,{Component} from 'react'
import SearchHeader from './SearchHeader'
import SearchListItem from './SearchListItem'
import {connect} from 'react-redux'
import store from '../../redux/store'
class SearchList extends Component{
  constructor(props){
    super(props)
    this.state={
      searchData:{}
    }
  }

  goBack(){
    this.props.router.push('/home')
  }

  render(){

    return(
      <div className="m-searchList">
        <SearchHeader searchKeyWord={this.props.hotKeyWord} backHandle={this.goBack.bind(this)} onRouter={this}/>
        <SearchListItem searchData={this.state.searchData} />
      </div>
    )
  }

  componentDidMount(){
    fetch(`/api/v5/search?store_id=976&key_word=${this.props.hotKeyWord}`)
    .then((response)=>response.json())
    .then((res)=>{
        this.setState({
          searchData:res
        })
    })
    .catch((e)=>{
      console.log(e)
    })
  }

}

export default connect(
  store().mapStateToProps,
  store().mapDispatchToProps
)(SearchList)
