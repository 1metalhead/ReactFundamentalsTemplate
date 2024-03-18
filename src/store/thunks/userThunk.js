import { getCurrentUser, logout } from "../../services";
import { setUserData } from "../slices/userSlice";

export const getUserThunk = (token) => {
  return async (dispatch) => {
    const result = await getCurrentUser(token);
    dispatch(setUserData(result.result));
  };
};

export const logoutThunk = (token) => {
  return async (dispatch) => {
    const user = await logout(token);
    dispatch({
      type: "user/removeUserData",
      payload: user?.result,
    });
  };
};
