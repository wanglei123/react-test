
import React from 'react'
import { useState,useEffect } from 'react'

export default function Test1() {
  const [count, setCount] = useState(0)

  // TODO 没有写依赖，但是会正常累加count，但是定时器里的输出count总是0， 为什么呢?
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1)
    }, 1000);
    return () => {
      clearInterval(id)
    }
  }, [])

  return <>
  <div>Count: {count}</div>
</>
}

