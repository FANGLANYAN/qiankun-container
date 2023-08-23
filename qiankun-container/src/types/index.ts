//请求参数类型定义
export interface LoginType {
  userName: string;
  password: string;
}
export interface listParamsType {
  pageSize: number;
  pageIndex: number;
}

//reducer接受参数类型
/**
 * 调用reducer的时候，会传入一个action,这个action里面的type属性决定了要做的动作
 * payload里面是做这个动作的时候需要进行更改的参数
 * 操作reducer对数据进行更改之后 再将最新的数据return
 */
export interface ActionParams {
  type: string;
  payload?: any;
}
// //响应参数类型
// export interface LoginResponse {
//   token: string;
//   userInfo: {
//     id: number;
//     userName: string;
//   };
// }

//项目+菜单
export interface ProjectItem {
  id: number;
  activeRule: string;
  name: string;
  projectIcon: string;
  entry: string;
  isUsing: boolean;
  container?: string;
}
export interface MenuItem {
  id: number;
  menuName: string;
  menuPath: string;
}
export interface BradeItem {
  name: string;
  path: string;
}

export interface IBasePagination<T> {
  list: T[];
  // pagination: {
  pageIndex: number;
  pageSize: number;
  total: number;
  // }
}

export class BasePaginationParams {
  public pageIndex: number = 1;
  public pageSize: number = 10;
}
