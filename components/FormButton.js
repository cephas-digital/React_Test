import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';

import { COLORS, FONTS, icons, SIZES } from '../Constants';



const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function FormButton({
  labelText = '',
  handleOnPress = null,
  style,
  isPrimary = true,
  ...more
}) {
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
      <Text
        style={{
          textAlign: 'center',
          alignSelf: 'center',
          fontSize: screenWidth * 0.05,
          color: isPrimary ? COLORS.white : COLORS.secondary
        }}>
        {labelText}
      </Text>
    </TouchableOpacity>
  );
}
