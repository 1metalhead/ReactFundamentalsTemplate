import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  name: "",
  email: "",
  token: localStorage.getItem("token"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (userData, payload) => {
      debugger;
      return {
        isAuth: true,
        name: payload.payload.name,
        email: payload.payload.email,
        token: payload.payload.token,
      };
    },
    removeUserData: (userData, payload) => initialState,
  },
});

// use these actions in your components / thunks
export const { setUserData, removeUserData } = userSlice.actions;

export default userSlice.reducer;
