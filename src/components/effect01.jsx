/*
 * @Author       : wanglei
 * @Date         : 2022-06-18 14:57:51
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-06-18 15:06:54
 * @FilePath     : /react-test/src/components/effect01.jsx
 * @description  : 依赖于在useEffect中变化的状态，如何避免频繁渲染
 */
import React from 'react'
import { useState, useEffect } from 'react'

export default function Test1 (){

  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log({count})
      setCount(n => n + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return <>
    <div>Count: {count}</div>
    <div>测试git</div>
    <div>123123</div>
  </>

}