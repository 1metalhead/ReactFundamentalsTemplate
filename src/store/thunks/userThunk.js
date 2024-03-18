import { getCurrentUser, logout } from "../../services";
import { removeUserData, setUserData } from "../slices/userSlice";

export const getUserThunk = (token) => {
  return async (dispatch) => {
    const result = await getCurrentUser(token);
    dispatch(setUserData(result.result));
  };
};

export const logoutThunk = (token) => {
  return async (dispatch) => {
    const result = await logout(token);
    if (result) dispatch(removeUserData());
  };
};
