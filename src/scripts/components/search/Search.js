import React,{Component} from 'react'
import SearchHeader from './SearchHeader'

class Search extends Component{
  constructor(props){
    super(props)
    this.state={
      hot_key_word:[]
    }
  }

  getHotWord(list){
    return list.map((value,index)=>{
              return <a href="#javascript:void(0)" key={index}>{value}</a>
           })
  }

  render(){
    return(
      <div className="m-search">
        <SearchHeader/>
        <div className="hot_search">
          <div className="hot_title"><i></i>热门搜索</div>
          <div className="hot_tag">
            {this.getHotWord(this.state.hot_key_word)}
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
        hot_key_word:res.hot_key_word
      })
    })
  }
}

export default Search
