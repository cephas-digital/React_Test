import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, SIZES } from '../../Constants';
// import Input from '../../components/Input';

export default function Login() {
  return (
    <View style={styles.container}>
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

      <View>
        <Input/>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
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
  }
})
