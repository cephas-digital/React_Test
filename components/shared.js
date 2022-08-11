import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ToastAndroid,
  Image,
  Alert,
  Platform,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { store } from "../redux/store";
import { signIn, signOut } from "../redux/ActionCreators";

export const base_url = "https://www.screenclass.com";

export const api_url = base_url + "/api/";

// export const videoUrl = "https://34.69.20.189/admin/clip/";

export const apiUrl = {
  delete_user_account:api_url + "index.php?action=49", // delete user account.  

};

function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const api = async (method, url, body) => {
  try {
    let sess = await AsyncStorage.getItem("session");
    // let formData = new FormData(); // Currently empty
    // console.log(formData)
    const user = store.getState().user.user[0];

    if (body) {
      if (body.session || body.sc_session_id) {
        body.sc_session_id = body.sc_session_id || sess;
      }

     
      // let formBody = [];
      // for (let property in body) {
      //   let encodedKey = encodeURIComponent(property);
      //   let encodedValue = encodeURIComponent(body[property]);
      //   formBody.push(encodedKey + "=" + encodedValue);
      // }
      // formBody = formBody.join("&");

      var requestOptions = {
        headers: {
          "Content-Type": "application/json",
        },
        method,
        body: formBody,
        redirect: "follow",
      };
    }
    if (method === "GET" && body) {
      console.log("Hey stop sending request with body on GET");
      body = undefined;
    }

    const contentDetect = async (response) => {
      let text; //use this because of already read issues
      try {
        text = await response.text(); // Parse it as text
        const data = JSON.parse(text); // Try to parse it as json
        return data;
      } catch (err) {
        // console.log(err.message, "content detect api")
        return text;
      }
    };

    const res = await fetch(url, requestOptions);

    const response = await contentDetect(res);
    // console.log(response)

    if (typeof response === "object" && response !== null) {
      let val =
        response.sc_resp_code === "SC2" || response.sc_resp_code === "SC9";
      if (val) {
        throw new Error(response.sc_resp_desc);
      }

      if (response[0]) {
        if (
          response[0].sc_resp_code === "SC10" &&
          response[0].sc_resp_desc === "SESSION EXPIRED"
        ) {
          //cancel all pending requests

          store.dispatch(
            signOut({
              success: true,
            })
          );
          if (Platform.OS == "android") {
          ToastAndroid.showWithGravityAndOffset(
            response[0].sc_resp_desc,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
            
          );
          }
          else{
            Alert.alert(" Error ", response[0].sc_resp_desc)
          }  

          // createApi({
          //   baseQuery: (a, api) => {
          //     api.dispatch(signOut({
          //       success: true
          //     }))
          //   }
          // })
        }
        if (response[0].sc_resp_code === "SC10") {
          throw new Error(response[0].sc_resp_desc);
        }
      }
    }

    return response;
  } catch (error) {
    const iEm = [
      "Internet Connection Failed",
      "Connection Problem",
      "Glitch!.. Refused To Connect",
      "Whoa!.. Error In Connection!",
    ];
    if (error.message === "Network request failed") {
      if (Platform.OS == "android") {
      ToastAndroid.showWithGravity(
        iEm[Math.floor(Math.random() * iEm.length)],
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      throw new Error(error.message);
    }
    if (Platform.OS == "android") {
      //ur android code here
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }

    else{
      Alert.alert(" Error", iEm[Math.floor(Math.random() * iEm.length)])
    }
  }
    

    console.log(error, "error from api");
    throw new Error(error.message);
  }
};


export const Loader = () => {
  return (
    <View>
      {/* <ActivityIndicator size="large" /> */}

      <Image
        source={require("../assets/loader/loader1.gif")}
        style={{
          width: gstyles.screenHeight / 20,
          height: gstyles.screenHeight / 30,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export const Affect = ({ load, cref, effect }) => {
  // console.log(cref)


    if (load) {
      return (
        <View
          style={{
            position: "absolute",
            flex: 1,
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            elevation: 3,
          }}
        >
          <Loader />
        </View>
      );
    }
    if (cref) {
      if (effect) {
        effect.message = Capitalize(effect.message ? effect.message : "");
        if (effect.error === "") effect.error = null;

        if (!effect.error) {
          cref.setNativeProps({
            text: effect.message,
            style: {
              color: "green",
              fontFamily: "montaga1",
              alignSelf: "center",
            },
          });
        } else {
          cref.setNativeProps({
            text: effect.message,
            style: { color: "red" },
          });
        }
      } else {
        cref.setNativeProps({ text: null });
      }
    } else {
      // console.log("No ref")
    }
    return null;
  
};

export const Prompt = (ask) => {
  const prompts = new Promise((res) => {
    Alert.alert(
      "Confirm",
      ask,
      [
        {
          text: "Cancel",
          onPress: () => res(false),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => res(true),
          style: "ok",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => false,
      }
    );
  });
  return prompts;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginBottom: 1000,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});