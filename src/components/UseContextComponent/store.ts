/*
 * @Author       : wanglei
 * @Date         : 2022-07-07 16:31:27
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-07-07 16:35:15
 * @FilePath     : /react-test/src/components/store.ts
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createContext } from "react";

const initialState = {
  first: 'jack',
  last: 'wang'
}

export type UserState = typeof initialState

const context = createContext<typeof initialState>(initialState)

export default context