//导入actionType
import { SET_BRADELIST } from "../actionType";
import { ActionParams } from "../../types";
const initialState = {
  bradeList: [],
};

function menuReducer(state = initialState, action: ActionParams) {
  switch (action.type) {
    case SET_BRADELIST:
      return { ...state, bradeList: action.payload };

    default:
      return state;
  }
}

export default menuReducer;
