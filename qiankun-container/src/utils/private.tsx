//路由鉴权 需要鉴权的页面 无token直接跳转到login并且无法回退或者输入url直接跳转

import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { getToken } from "./common";

interface Iprops {
  children?: any;
}
const Private: FC<Iprops> = (props) => {
  let token = getToken();
  const location = useLocation();
  if (token) {
    return <>{props.children}</>;
  } else {
    return <Navigate to={"/login"}></Navigate>;
    //这里重定向到登录，并且登录完成之后，可以回到当前页面
  }
};

export default Private;
