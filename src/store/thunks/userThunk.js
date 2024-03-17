import { getCurrentUser, logout } from "../../services";

export const getUserThunk = () => getCurrentUser;

export const logoutThunk = () => logout;
