//导入actionType
import { SET_USER, SET_TOKEN } from "../actionType";
import { ActionParams } from "../../types";
const initialState = {
  userInfo: {}, //用户信息
  menu: [], //动态菜单
  token: "",
};

function userReducer(state = initialState, action: ActionParams) {
  switch (action.type) {
    case SET_USER:
      return { ...state, userInfo: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

export default userReducer;
