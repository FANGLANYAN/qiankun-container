import http from "../utils/http";

/**
 *
 * @param data 项目列表
 * @returns
 */
export const getProjectList = (params?: any) => {
  return http({
    url: "/common/project/list",
    method: "get",
    params,
  });
};

export const getMenuList = (params?: any) => {
  return http({
    url: "/common/menu/list",
    method: "get",
    params,
  });
};
