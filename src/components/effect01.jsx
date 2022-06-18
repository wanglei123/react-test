/*
 * @Author       : wanglei
 * @Date         : 2022-06-18 14:57:51
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-06-18 15:06:54
 * @FilePath     : /react-test/src/components/effect01.jsx
 * @description  : 依赖于在useEffect中变化的状态，如何避免频繁渲染
 */
import React from 'react'
import { useState } from 'react'

export default function Test1 (){

  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log({count})
  //     setCount(n => n + 1)
  //   }, 1000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  const test = () => {
    setTimeout(() => {
      alert(count)
    }, 1000)
  }

  return <>
    <button onClick={() => setCount(count + 1)}>加1</button>
    <div>Count: {count}</div>
    <button onClick={test}>alert</button>
    <div>123123</div>
  </>

}