
import './styles/common.scss';
import  RouterView  from './router'
function App() {
  return (
    <div className="App">
      {/* 路由中注册了不同的组件，当url发生变化时会匹配到对应的页面进行展示 */}
          <RouterView/>
    </div>
  );
}

export default App;
