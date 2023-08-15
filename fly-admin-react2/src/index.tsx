import './public-path'  //导入静态资源跟路径 必须放在顶上
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}
//@ts-ignore
export async function mount(props) {
  props.onGlobalStateChange((state: any,preState: any)=>{
    setTimeout(() => {
      props.setGlobalState({...state,name:'888'})
    }, 1000);
    // props.offGlobalStateChange()
  })
  const { container } = props;
  console.log(props,'props');
  
  render(props)
}

//@ts-ignore
function render(props = {}) {
  //@ts-ignore
  const { container } = props;
  ReactDOM.render(
    <BrowserRouter basename={container?'/home/micro-react-app2':'/'}> 
       <App />
    </BrowserRouter>
 ,
   container ? container.querySelector('#root') : document.getElementById('root'));
}

//@ts-ignore
export async function unmount(props) {
  const { container } = props; 
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.getElementById('root'));
} 
//@ts-ignore
export async function update(props) {
  console.log('update');
} 

//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
