import React,{Component} from 'react'
import SearchHeader from './SearchHeader'
import SearchListItem from './SearchListItem'

class SearchList extends Component{

  render(){
    return(
      <div className="m-searchList">
        <SearchHeader />
        <SearchListItem />
      </div>
    )
  }

}

export default SearchList
