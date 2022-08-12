import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Platform, Alert } from 'react-native';
import React, {useState} from 'react';
import { signIn } from "../../redux/ActionCreators";
import { COLORS, FONTS, SIZES } from '../../Constants';
import Input from '../../Components/Input';
import FormButton from '../../Components/FormButton';
import icons from '../../Constants/icons.js';
import {useDispatch} from 'react-redux';
import { Affect, api, apiUrl, Loader, Prompt } from "../../Components/shared";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckBox, Icon } from "@rneui/themed";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function Login({navigation}) {
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');
 const [loader, setLoader] =useState(false)
 const [ischecked, setIsChecked] = useState(false);
 const [modalPrompt, setModalPrompt] = useState(false)


 const handleeyeChange = () => {
  setImage(!img);
  setEye(!eye);
};
const keyboardVerticalOffset = Platform.OS === "ios" ? -20 : -20;

const handleSubmit = async () => {
  let bodyData = {
    email: email,
    password: password, 
  }
  let body = JSON.stringify(bodyData)
  console.log(body);
if(email!="" && password!=""){

  try {
  
    setLoader(true);
    console.log("postUrl",apiUrl.user_login );
    const resp = await api("POST",apiUrl.user_login, body);

    console.log("this is resp", resp);
 
  Alert.alert(
    "Authentication",
    resp.message,
    [
      {
        text: "test Design",
        onPress: () => navigation.navigate("Home"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {},
        style: "ok",
      },
    ],
    {
      cancelable: true,
      onDismiss: () => false,
    }
  );
  // Alert.alert("Authentication", resp.message)
 
    // await AsyncStorage.setItem("session", resp.token); //this should be above the res

    dispatch(
      signIn({
        success: true,
        user: resp,
        session: resp.token || "",
      })
    );

   
    setLoader(false);
    // topN.navigate("Bottom", {
    //   user: res
    // })
if(resp.status==="success"){
  navigation.navigate('Home')
 
}



   
  } catch (error) {
   
    setLoader(false);

    console.warn(error.message);
  }
}
else{
  setLoader(false)
  Alert.alert("Authentication", "Please Supply Your Credentials")
}

};

 const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container}>
    <View style={styles.header1}>
      <View style={styles.header}>
      <Image
          style={{
            width: SIZES.base * 18,
            height: SIZES.base * 6,
            // bottom: SIZES.base * 15,
            
          }}
          source={icons.basketLogo}
        />
      </View>

       {/* Header */}
      <View style={styles.login}>
        <Text style={{ ...FONTS.body1, color: COLORS.black }}>Log into your Account</Text>
        <Text style={{ ...FONTS.h3, ...styles.text1 }}>
          Enter your email and password
          </Text>
          <Text style={{ ...FONTS.h3, ...styles.text1 }}>
          to access your account or create
          </Text>
          <Text style={{ ...FONTS.h3, ...styles.text1 }}>
          an account
          </Text>
      </View>

     {/* Inputs */}
      <View style = {styles.inputView}>
        <View style={{}}>
      
        <Input 
        placeholder={'davidobi@gmail.com'} 
        value={email}
        onChangeText={mail => setEmail(mail)}
        keyboardType={'email-address'}
        IconName={icons.email}/>
        </View>

        <View style={styles.password}>
        <Input
         value={password}
         onChangeText={pass => setPassword(pass)}
         placeholder={'Password'} 
         secureTextEntry = {true}
         IconName={icons.lock}
         password
         />
   
        </View>

      </View>

      <View style={{marginHorizontal: SIZES.base, flexDirection: 'row'}}>
        <Image source={icons.rectangle} style={{height: 16, width: 16}}/>
      

        <Text style={{...FONTS.h3, textAlign: 'left',marginLeft: 10 }}>Remember me</Text>
      </View>
        
        <View style={{marginVertical: SIZES.padding, marginHorizontal: SIZES.base*3}}>
          
          <FormButton labelText='LOGIN' handleOnPress={handleSubmit}
        apiLoader = {loader}
          />
        </View>


        <View style={styles.forgotPassword}>
        <TouchableOpacity>
        <Text style={styles.pass}>Forgot Password?</Text>
        </TouchableOpacity>
          <Text style={styles.cont}>Or Contine with --</Text>
        </View>

        <View style={styles.social}>
         <View style={{paddingHorizontal: 10}}>
          <FormButton labelText='Facebook' isPrimary={false} style={{paddingHorizontal: SIZES.padding*1.2}}
            ImageName={icons.facebook}
            socialIcon
            
          />
         </View>

         <View style={{paddingHorizontal: 10}}>
         <FormButton labelText='Google' isPrimary={false} style={{paddingHorizontal: SIZES.padding*1.2}}
          ImageName={icons.google}
          socialIcon
         />
         </View>
         </View>

         <View style={styles.acctView}>
          <Text style={styles.acct}>Don't have an account? </Text>
          <TouchableOpacity>
          <Text style={styles.signUp}>Sign Up </Text>
          </TouchableOpacity>

         </View>

           
       
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

  },
  header1:{
   marginHorizontal: SIZES.padding
  },
  header: {
    marginHorizontal: SIZES.base,
    alignItems: 'center',
    marginVertical: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Image: {
    height: 50,
    width: 50
  },
  basket: {
    marginLeft: SIZES.base,

  },
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.base * 4
  },
  text1: {
    color: COLORS.gray, 
    marginTop: SIZES.base, 
    textAlign: 'center'
  },
  inputView: {
    marginHorizontal: SIZES.base,
    
    
  },
  forgotPassword: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  pass: {
    color: 'red',
    ...FONTS.h3,
    textDecorationLine: 'underline'
  },
  cont: {
    marginTop: SIZES.padding*1.2,
    ...FONTS.h4
  },
  social: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginVertical: SIZES.padding
  },
  acctView: {
    flexDirection: 'row',
    marginVertical: SIZES.padding,
    justifyContent: 'space-between'
  },
  acct: {
    color: COLORS.gray,
    ...FONTS.h3,
    paddingLeft: SIZES.padding,
    textAlign: 'center'
  },
  signUp: {
    color: COLORS.primary,
    ...FONTS.h3,
    paddingRight: SIZES.padding*2,
    textAlign: 'center'

  },

  password:{
    marginTop: -30
  },

  
})