<<<<<<< HEAD
import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {COLORS, icons} from '../Constants';
import {Icon} from '@rneui/themed';

export default function Input({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        {/* <Icon
                    name={iconName}
                    style={{ color: COLORS, fontSize: 22, marginRight: 10 }}
                /> */}
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: COLORS.darkBlue, flex: 1}}
          {...props}
        />
        {/* {password && (
                   <Icon
=======
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react';
import { COLORS, FONTS, icons, SIZES } from '../Constants';


export default function Input({
    label,
    source,
    error,
    password,
    placeholder,
    onFocus = () => { },
    ...props
}) {

    const [hidePassword, setHidePassword] = useState(password);
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={style.label}>{label}</Text>
            <View
                style={[
                    style.inputContainer,
                    {
                        borderColor: error
                            ? COLORS.red
                            : isFocused
                                ? COLORS.darkBlue
                                : COLORS.light,
                        alignItems: 'center',
                    },
                ]}>
                <Image
                    Source={source}
                    style={{ color: COLORS.primary, marginRight: 10 }}
                /> 
                <TextInput
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={hidePassword}
                    style={{ color: COLORS.darkBlue, flex: 1,fontSize: 20 }}
                    {...props}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    
                />
                {password && (
                   <Image
                   
>>>>>>> e7378adeb7dab03ce6b09ada156c0faacb4ff3b8
                        onPress={() => setHidePassword(!hidePassword)}
                        source={hidePassword? icons.Bell: icons.logo}
                        style={{ color: COLORS.primary}}
                    />
<<<<<<< HEAD
                )} */}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});
=======
                )}
            </View>
            {error && (
                <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
                    {error}
                </Text>
            )}
        </View>
    )
}

const style = StyleSheet.create({
    label: {
        // marginVertical: 5,
        fontSize: 14,
        color: COLORS.grey,
    },
    inputContainer: {
        height: 50,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primary,
        fontSize: FONTS.h1,
    
        
    },
})
>>>>>>> e7378adeb7dab03ce6b09ada156c0faacb4ff3b8
