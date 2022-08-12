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
  Dimensions
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { store } from "../redux/store";
import { signIn, signOut } from "../redux/ActionCreators";

export const base_url = "https://niishcloud.com/task-api";

export const api_url = base_url + "/api/task/v1/";

// export const videoUrl = "https://34.69.20.189/admin/clip/";

export const apiUrl = {
  user_login:api_url + "login", // SignInUrl.  

};


export const api = async (method, url, body) => {
  try {
    
   
    // const user = store.getState().user.user[0];

    if (body) {
      // if (body.session || body.sc_session_id) {
      //   body.sc_session_id = body.sc_session_id || sess;
      // }

     
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
        body: body,
        // redirect: "follow",
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
console.log("request option", requestOptions);
    const response = await contentDetect(res);
    // console.log(response)
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

const gstyles={
  screenWidth :Dimensions.get('window').width,
  screenHeight : Dimensions.get('window').height,
}
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

