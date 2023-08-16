import { message as $message } from "antd";

import { getUrserLogin } from "./../../api/user";
import { SET_USER, SET_TOKEN } from "../actionType";
import type { LoginType } from "../../types";
import type { Dispatch } from "redux";
import { setStorage } from "../../utils/common";
//这里是实际发出动作的地方，不痛的action有不同的actionType 发出指令后交给reducer执行

//由于用户登录的时候，不仅需要调接口，还需要操作redux存储数据，所以可以把两个操作集成到同一个action中
//直接操作action即可
export const handleLogin = (data: LoginType, callback?: Function) => {
  //接收回调函数，登录成功之后再进行页面跳转
  return (dispatch: Dispatch) => {
    //当不知道这个函数的参数会是什么类型的时候
    //可以先明确这个函数是谁提供的能力
    /**
     * 例如：dispatch是操作redux的，是redux提供的能力，那么dispatch所需要的参数的类型就应该包含在redux中
     * 从redux中引入和函数名称相似的interface之后进行适配，不报错就可以了
     */
    getUrserLogin(data).then((res) => {
      //一般对response的data也需要进行类型定义，可以根据自
      const { code, result } = res || {};
      if (code !== 200) {
        return;
      }
      const { token, userName } = result || {};
      dispatch({ type: SET_TOKEN, payload: token });
      setStorage("token", token);
      dispatch({ type: SET_USER, payload: { userName } });
      setStorage("userInfo", { userName });
      $message.success("登录成功");
      //跳转
      callback && callback();
    });
  };
};
