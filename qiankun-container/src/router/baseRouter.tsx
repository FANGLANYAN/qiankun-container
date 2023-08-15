import {Navigate} from 'react-router-dom'
import Private from '../utils/private';
import Layout from "../layout";
import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/notFound";
interface Router {
  name?: string;
  path: string;
  children?: Array<Router>;
  element: any;
}
//创建基础路由配置
const baseRoutes: Array<Router> = [
  {
    path: "/home",
    element:<Private>
      <Layout/>
      </Private>,
    children: [{ path: '*', element:'' }]
  },
  {
    path: "/register",
    element:<Register/>,
  },
  {
    path: "/login",
    element:<Login/>,
  },
  {
    path: "*",
    element:<NotFound/>,
  },
];
//导出基础路由
export default baseRoutes;

