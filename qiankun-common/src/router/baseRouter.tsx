import React from "react";
import StaffList from "../pages/staffManagement";
import ProjectManagement from "../pages/projectManagement/index";
import PositionManagement from "../pages/positionManagement/index";
import PermissionManage from "../pages/permissionManage/index";
import A from "../pages/permissionManage/A";
import NotFound from "../pages/NotFound";
import { lazy } from "react";
interface Router {
  name?: string;
  path: string;
  children?: Array<Router>;
  element: any;
}
//创建基础路由配置
const baseRoutes: Array<Router> = [
  {
    path: "/staffList",
    element: <StaffList />,
  },
  {
    path: "/projectManege",
    element: <ProjectManagement />,
  },
  {
    path: "/positionManage",
    element: <PositionManagement />,
  },
  {
    path: "/permissionManage",
    element: <PermissionManage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
//导出基础路由
export default baseRoutes;
