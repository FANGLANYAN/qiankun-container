//请求参数类型定义
export interface LoginType {
  userName: string;
  password: string;
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
