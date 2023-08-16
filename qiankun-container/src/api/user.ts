import http from "../utils/http";
//导入请求类型
import { LoginType } from "../types";

/**
 *
 * @param data 登录
 * @returns
 */
export const getUrserLogin = (data: LoginType) => {
  return http({
    url: "/main/users/login",
    method: "post",
    data,
  });
};
