/*
 * @Author       : wanglei
 * @Date         : 2022-06-20 09:14:33
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-06-24 14:20:17
 * @FilePath     : /react-test/src/components/refExample.jsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef, useState } from 'react'


export default function RefExample(){

  const [count, setCount] = useState(0)
  const lastCount = useRef(null)

  useEffect(() => {
    lastCount.current = count // 拿到的总是最新的值
    setTimeout(() => {
      console.log('这是最新的count值' + lastCount.current)
    }, 3000)
   
  },[count])

  return <>
    <button onClick={() => setCount(count + 1)}>ref功能：加1</button>
    </>
}