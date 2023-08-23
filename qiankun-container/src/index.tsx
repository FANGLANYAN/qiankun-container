import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start } from "qiankun";
import { initGlobalState, MicroAppStateActions } from "qiankun";

//导入store
import store from "./store";
//导入react-redux提供器
import { Provider } from "react-redux";
import "./index.css";
import { getStorage } from "./utils/common";

const state = {
  name: "好不好",
};
//初始化state
const actions: MicroAppStateActions = initGlobalState(state);
actions.onGlobalStateChange((state, preState) => {
  //state 变更后的状态
  //preState 变更前的状态
  console.log(state, "state", preState, "preState", "改"); //无论是子应用还是主应用 修改了全局的 state 都会调用此函数
});
setTimeout(() => {
  console.log(12);
  actions.setGlobalState({ ...state, age: 8 });
}, 1000);
actions.offGlobalStateChange(); //主应用操作qiankun的生命周期
const micro_List = getStorage("micro_List");
console.log(micro_List, "micro_List");

registerMicroApps(micro_List || []);

start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 使用Provider组件把App包裹起来，便于其内组件都可以共享redux的数据 */}

      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
