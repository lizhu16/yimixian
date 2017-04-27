import {createStore} from 'redux'

export default ()=>{

  let mapStateToProps = (state)=>{
    return {
      hotKeyWord:state.hotKeyWord
    }
  }

  let mapDispatchToProps=(dispatch)=>{
    return {
      onToDetail:(action)=>dispatch(action)
    }
  }


  let changer = (state={hotKeyWord:''},action)=>{
    switch(action.type){
      case 'SETHOTKEYWORD':
      return {
        hotKeyWord:action.hotKeyWord
      }
      default:
      return state
    }
  }

  const store = createStore(changer)

  return {
    mapStateToProps,
    mapDispatchToProps,
    store
  }
}
