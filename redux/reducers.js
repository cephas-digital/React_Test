import { createReducer } from "@reduxjs/toolkit";
import {
  signIn,
  signOut,
} from "./ActionCreators";
const iState = { loading: false, message: "" };

export const user = createReducer(
  { ...iState, loggedIn: false, user: [] },
  {
    [signIn]: (state, action) => {
      // console.log(action.payload, "in redu")
      return {
        ...state,
        loggedIn: action.payload.login,
        user: [{ ...(state.user[0] || {}), ...(action.payload.user[0] || {}) }],
      };
    },
    [signOut]: (state, action) => {
      return {
        ...state,
        loggedIn: action.payload,
      };
    },
  
  }
);
