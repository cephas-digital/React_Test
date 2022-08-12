import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';
import { Loader } from './shared'

import { COLORS, FONTS, icons, SIZES } from '../Constants';
import { useState } from 'react';
import { facebook } from '../Constants/icons';



const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function FormButton({
  apiLoader,
  labelText = '',
  handleOnPress = null,
  style,
  isPrimary = true,
  ImageName,
  socialIcon,
  ...more
}) {
const [socail, setSocial] = useState(socialIcon)

  return (
    <TouchableOpacity
      style={{
        paddingVertical: screenHeight * 0.015,
        backgroundColor: isPrimary ? COLORS.secondary : COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        borderRadius: 8,
        ...style,
      }}
      onPress={handleOnPress}
      {...more}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      {
        socialIcon &&
        <Image source={ImageName} style={{height: 25, width: 25,}}/>}
      <Text
        style={{
          textAlign: 'center',
          alignSelf: 'center',
          ...FONTS.h3,
          paddingLeft: SIZES.base,
          // fontSize: screenWidth * 0.05,
          color: isPrimary ? COLORS.white : COLORS.secondary
        }}>
          {apiLoader?<Loader/>:labelText}
        
      </Text>
      </View>
    </TouchableOpacity>
  );
}