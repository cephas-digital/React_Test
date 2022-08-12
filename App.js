import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { api, apiUrl, api_url, base_url, Loader } from "./Components/shared";
import { signIn } from "./redux/ActionCreators";

import GlobalProvider from "./Components/Auth/ContentAPI/GlobalProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Provider as PaperProvider } from "react-native-paper";

export default function AppHome() {
//   const [load, sLoad] = React.useState(true);
//   const dispatch = useDispatch();
  
//   const tryLogin = async () => {
//     try {
//       let sData = true;
//       const sess = await AsyncStorage.getItem("session");

//       if (sess) {
//         const res = await api("POST", apiUrl.User_Det_Url, {
//           sc_session_id: sess,
//         });

//         dispatch(
//           signIn({
//             success: sData,
//             user: res,
//             session: sess,
//           })
//         );
//       }

//       sLoad(false);
//     } catch (error) {
//       console.warn(error.message);
//       sLoad(false);
//     }
//   };

//   tryLogin();

//   if (load) {
//     return (
//       <View style={{ flex: 1, marginTop: 100 }}>
//         <Loader />
//       </View>
//     );
//   }

  return (
    <GlobalProvider>
    <Provider store={store}>
      <PaperProvider>
        <AppStack />
      </PaperProvider>
    </Provider>
  </GlobalProvider>
  );
}
