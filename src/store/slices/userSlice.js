import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  name: "",
  email: "",
  token: localStorage.getItem("token"),
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (userData, payload) => {
      return {
        isAuth: true,
        name: payload.payload.name,
        email: payload.payload.email,
        token: payload.payload.token,
        role: payload.payload.role,
      };
    },
    removeUserData: (userData, payload) => initialState,
  },
});

// use these actions in your components / thunks
export const { setUserData, removeUserData } = userSlice.actions;

export default userSlice.reducer;
