import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, SIZES } from '../../Constants';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';

export default function Login() {
  return (
    <View style={styles.container}>
    <View style={styles.header1}>
      <View style={styles.header}>
        <Image
          source={icons.logo}
          style={styles.Image}
        />
        <Text style={{ ...styles.basket, ...FONTS.h1 }}>basket</Text>
      </View>

      <View style={styles.login}>

        <Text style={{ ...FONTS.body1, color: COLORS.black }}>Log into your Account</Text>
        <Text style={{ ...FONTS.h3, ...styles.text1  }}>
          Enter your email and password to access your account or create an account</Text>
      </View>

      <View style = {styles.inputView}>
        <Input placeholder={'Email'} source={icons.Bell}/>
        <Input placeholder={'Password'} />

      </View>

      <View style={{marginHorizontal: SIZES.base}}>
        <Text style={{...FONTS.h3, textAlign: 'left', }}>Remember me</Text>
      </View>
        
        <View style={{marginVertical: SIZES.padding, marginHorizontal: SIZES.base*3}}>
          <FormButton labelText='Login'/>
        </View>


        <View style={styles.forgotPassword}>
          <Text style={styles.pass}>Forgot Password?</Text>
          <Text style={styles.cont}>Or Contine with --</Text>
        </View>

        <View style={styles.social}>
         <View>
          <FormButton labelText='Facebook' isPrimary={false}/>
         </View>

         <View>
         <FormButton labelText='Google' isPrimary={false}/>

         </View>

           
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

  },
  header1:{
   marginHorizontal: SIZES.base
  },
  header: {
    marginHorizontal: SIZES.base,
    alignItems: 'center',
    marginVertical: SIZES.base,
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
    ...FONTS.h3
  },
  cont: {
    marginTop: SIZES.padding*1.2,
    ...FONTS.h4
  },
  social: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between'
  }
})
