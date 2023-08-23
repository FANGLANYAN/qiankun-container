import { useRoutes } from "react-router-dom";
import baseRoutes from "./baseRouter";

export default function RouterView() {
    //创建并导出路由
    const element = useRoutes(baseRoutes)
  return (
    <>{element}</>
  )
}
