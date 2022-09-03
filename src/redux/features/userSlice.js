import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },

    loginFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },

    subscrription: (state, action) => {
      if (state.currentUser.subscribedUsers.includes(action.payload)) {
        state.currentUser.subscribedUsers.splice(
          state.currentUser.subscribedUsers.findIndex(
            (channelId) => channelId === action.payload
          ),
          1
        );
      }else{
        state.currentUser.subscribedUsers.push(action.payload);
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout, subscrription } =
  userSlice.actions;
export default userSlice.reducer;
