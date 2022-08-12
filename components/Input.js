import { View, Text, StyleSheet, TextInput, Image, Dimensions } from 'react-native'
import React, { useState } from 'react';
import { COLORS, FONTS, icons, SIZES } from '../Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default function Input({
    secureTextEntry,
    label,
   IconName,
    error,
    password,
    placeholder,
    onFocus = () => { },
    ...props
}) {
console.log("this is icon name",IconName);
    const [hidePassword, setHidePassword] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    console.log(hidePassword);
    // const [secureTextEn, setSecureTextEntry] = useState(secureTextEntry)
    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={style.label}>{label}</Text>
            <View
                style={[
                    style.inputContainer,
                    {
                        borderColor: isFocused
                                ? COLORS.black
                                : COLORS.primary,
                        alignItems: 'center',
                    },
                ]}>
                <Image
                    source={IconName}
                    style={{height: 20, width: 20, marginRight: 10 }}

                /> 
                <TextInput
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={hidePassword}
                    style={{ color: COLORS.darkBlue, flex: 1,...FONTS.h2 }}
                    {...props}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    
                    
                />
                {password && (
                   < TouchableOpacity 
                   onPress={()=> setHidePassword(!hidePassword)}
                   >
                    <Image
                       
                       source={hidePassword? icons.eyeoff: icons.eye}
                       style={{ color: COLORS.primary, height:20, width: 20}}
                   />
                   </TouchableOpacity>
                  
                )}
            </View>
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