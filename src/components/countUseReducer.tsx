/*
 * @Author       : wanglei
 * @Date         : 2022-07-05 16:22:14
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-07-05 16:58:50
 * @FilePath     : /react-test/src/components/countUseReducer.tsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useReducer, ReactNode } from "react";

const initState = {
  count: 100
}

type ACTIONTYPES = {type: 'increment', payload: number} | {type: 'decrement', payload: number}

function countReducer(state: typeof initState, action: ACTIONTYPES){
  console.log({state, action})
  switch(action.type){
    case 'increment': 
    return {
      ...state,
      count: state.count + action.payload
    }
    case 'decrement':
      return {
        ...state,
        count: state.count - action.payload
      }
      default: 
      throw new Error('错误的操作')
  }

}


export default function CountUseReduceComponent(): ReactNode{
  const [state,dispatch] = useReducer(countReducer, initState)

  return (<div>
    <h3>useReducer: {state.count}</h3>
    <button onClick={() => dispatch({type: 'increment', payload: 5})}>increment</button>
    <button onClick={() => dispatch({type: 'decrement', payload: 10})}>decrement</button>
  </div>)
}