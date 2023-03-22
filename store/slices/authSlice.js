const { createSlice } = require("@reduxjs/toolkit");
const { HYDRATE } = require("next-redux-wrapper");

const initialState = {
  authState: false,
  authUser: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setAuthUser(state, action) {
      state.authUser = action.payload;
    },
  },
});

export const { setAuthState, setAuthUser } = authSlice.actions;
export const selectAuthState = (state) => state.auth.authState;
export const selectAuthUser = (state) => state.auth.authUser;
export default authSlice.reducer;
