import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAction("user/add", (status) => {
  if (status.success) {
    status.user[0].session = status.session;
    return { payload: { user: status.user, login: true } };
  }
  return { payload: { login: false } };
});

export const signOut = createAction("user/logout", (status) => {
  // console.log(status.success)
  if (status.success) {
    AsyncStorage.removeItem("session").then((s) => s);
    const controller = new AbortController();
    controller.abort();
    const signal = controller.signal;
    console.log(signal, "signal");
    return { payload: false };
  }
  return { payload: true };
});


