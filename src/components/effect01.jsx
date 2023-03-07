/*
 * @Author       : wanglei
 * @Date         : 2022-06-18 14:57:51
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-06-24 14:19:38
 * @FilePath     : /react-test/src/components/effect01.jsx
 * @description  : 依赖于在useEffect中变化的状态，如何避免频繁渲染
 */
import React from 'react'
import { useState,useEffect } from 'react'

export default function Test1 (){

  const [count, setCount] = useState(0)
  console.log('这是函数开始渲染时的count' + count)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log({count})
  //     setCount(n => n + 1)
  //   }, 1000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  useEffect(() => {
    console.log('这里是useEffect里的count', count)
    setTimeout(() => {
      console.log('setTimeout里的count',{count}) // 拿到的只是那次渲染的值，state, props,事件, useEffect，每次渲染都是独立的
    }, 3000)

    return () => {
      console.log('这是回收之后的count' + count) // 清除函数只能拿到渲染它的count,会先执行清除函数，再执行useEffect的逻辑
    }
  })

  const test = () => {
    setTimeout(() => {
      alert(count)
    }, 1000)
  }

  return <>
    <button onClick={() => setCount(count + 1)}>加1</button>
    <div>Count: {count}</div>
    <button onClick={test}>alert</button>
  </>

}