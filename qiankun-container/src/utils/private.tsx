//路由鉴权 需要鉴权的页面 无token直接跳转到login并且无法回退或者输入url直接跳转

import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
interface Iprops{
    children?:any
}
const Private :FC<Iprops> = (props)=>{
    let token = '123'
    const location = useLocation()
    if(token==='123'){
        return <>{props.children}</>
    }else{
        return <Navigate to={'/login'}></Navigate>
    }
}

export default Private