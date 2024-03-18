import { getCurrentUser, logout } from "../../services";
import { removeUserData, setUserData } from "../slices/userSlice";

export const getUserThunk = () => {
  return async (dispatch) => {
    const result = await getCurrentUser();
    dispatch(setUserData(result.result));
  };
};

export const logoutThunk = () => {
  return async (dispatch) => {
    const result = await logout();
    if (result) dispatch(removeUserData());
  };
};
