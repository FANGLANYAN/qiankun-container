import { SET_BRADELIST } from "../actionType";
import type { Dispatch } from "redux";
import { setStorage } from "../../utils/common";
import { BradeItem } from "../../types";

export const storeBradeList = (bradeList: Array<BradeItem> = []) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: SET_BRADELIST, payload: bradeList });
    setStorage("bradeList", { bradeList });
  };
};
