import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';
import {initGlobalState,MicroAppStateActions} from 'qiankun'

import './index.css';
const state = {
  name:'好不好'
}
//初始化state
const actions:MicroAppStateActions = initGlobalState(state)
actions.onGlobalStateChange((state,preState)=>{
  //state 变更后的状态
  //preState 变更前的状态
  console.log(state,'state',preState,'preState','改'); //无论是子应用还是主应用 修改了全局的 state 都会调用此函数
})
setTimeout(() => {
  console.log(12);
actions.setGlobalState({...state,age:8})
}, 1000);
actions.offGlobalStateChange()  //主应用操作qiankun的生命周期
registerMicroApps([
  {
    name: '应用一', // app name registered
    entry: '//localhost:3031',
    container: '#container', //修改成主应用中提供给子应用挂载的容器ID
    activeRule: '/home/micro-react-app1',
    props:{
      name:'你好' //给子应用传参
    }
  },
  {
    name: '应用二',
    entry:'//localhost:3032',
    container: '#container',
    activeRule: '/home/micro-react-app2',
    props:{
      name:'小果' //给子应用传参
    }
  },
  {
    name: '应用三',
    entry:'//localhost:3033',
    container: '#container',
    activeRule: '/home/micro-vue-app3',   
    props:{
      name:'vue' //给子应用传参
    }
  },
]);

start();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>  <App /></BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
