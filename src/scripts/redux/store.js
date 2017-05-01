import {createStore} from 'redux'

export default ()=>{

  let mapStateToProps = (state)=>{
    return {
      hotKeyWord:state.hotKeyWord,
      goodsId:state.goodsId,
      count:state.count
    }
  }

  let mapDispatchToProps=(dispatch)=>{
    return {
      onToDetail:(action)=>dispatch(action)
    }
  }


  let changer = (state={
    hotKeyWord:'',
    goodsId:'',
    count:0
  },action)=>{
    switch(action.type){
      case 'SETHOTKEYWORD':
      return {
        hotKeyWord:action.hotKeyWord
      }
      case 'addNum':
      return {
        count:action.count+1,
        goodsId:action.goodsId
      }
      case 'reduceNum':
      return {
        count:action.count-1,
        goodsId:action.goodsId
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
