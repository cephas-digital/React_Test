import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {SIZES, COLORS, FONTS, icons, images} from '../../Constants';

export default function Introduction() {
  return (
    <ImageBackground
      source={icons.bg3}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: SIZES.base * 5,
            height: SIZES.base * 5,
          }}
          source={icons.basketLogo}
        />
      </View>
    </ImageBackground>
  );
}
