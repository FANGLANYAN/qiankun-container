import { breakOutLogin } from "../../qiankun-container/src/utils/common";
import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//@ts-ignore
let instance = null;
//暴露生命周期
function render(props = {}) {
  console.log(props, "porps1");
  //@ts-ignore
  const { container } = props;
  instance = createApp(App);
  instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

//独立运行时
//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  //注意变量名不要写错，尽量复制
  render();
}

export async function bootstrap() {
  console.log("bootstrap");
}

export async function mount(props = {}) {
  console.log(props, "props");
  //@ts-ignore
  const { container, breakOutLogin } = props;
  console.log(container, "container");
  //@ts-ignore
  console.log(instance, "insta");

  //@ts-ignore
  render(props);
  //@ts-ignore
  instance.config.globalProperties.$onGlobalStateChange =
    //@ts-ignore
    props.onGlobalStateChange;
  //@ts-ignore
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}
export async function unmount(props = {}) {
  //@ts-ignore
  instance.unmount();
  //@ts-ignore
  instance._container.innerHTML = "";
  instance = null;
}
