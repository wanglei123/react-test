/*
 * @Author       : wanglei
 * @Date         : 2022-07-07 16:30:10
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-07-07 17:03:35
 * @FilePath     : /react-test/src/components/UseContextComponent/index.tsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import UserContext, {UserState } from './store'

import {useState, useContext} from 'react'

function ConsumerComponent(){
  const user = useContext<UserState>(UserContext)

  return (<div>
    <div>First: {user.first}</div>
    <div>Last: {user.last}</div>
  </div>)

}

function UseContextComponent(){

  const [user, setUser] = useState<UserState>({
    first: 'jane',
    last: 'smith'
  })

  const changeData = () => {
    setUser({
      first: 'wang',
      last: 'lei'
    })
  }
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button onClick={changeData}>change</button>
    </UserContext.Provider>
  )
}

export default UseContextComponent