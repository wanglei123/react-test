/*
 * @Author       : wanglei
 * @Date         : 2022-06-18 14:43:50
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-07-06 09:49:02
 * @FilePath     : /react-test/src/App.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import './App.css';
import Test1 from './components/effect01';
import Test2 from './components/effect02';
import RefExample from './components/refExample';
import CountUseReducer from './components/countUseReducer'
import TsComponent from './components/TsComponent'

function App() {
  return (
    <div className="App">
    <h3>useEffect 学习1</h3>
     <Test1 />
     <hr />
     <h3>useRef 学习</h3>
     <RefExample />
     <hr />
     <h3>useEffect 学习2</h3>
     <Test2 />
     <hr />
     <h3>useReducer 学习</h3>
    <CountUseReducer />
    <hr />
    <h3>一个nice的ts组件</h3>
    <TsComponent />
    </div>
  );
}

export default App;
