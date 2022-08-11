import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SIZES, COLORS, FONTS, icons, images} from '../../Constants';

export default function Introduction({navigation}) {
  return (
    <ImageBackground
      source={icons.bg3}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          // flex: 1,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: SIZES.base * 18,
            height: SIZES.base * 6,
            bottom: SIZES.base * 15,
          }}
          source={icons.basketLogo}
        />
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.base * 3,
            bottom: SIZES.base * 7,
          }}>
          Welcome to
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.base * 5,
            bottom: SIZES.base * 4,
          }}>
          basket online store
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.base * 2,
            bottom: SIZES.base * 3,
            letterSpacing: SIZES.base * 0.12,
            lineHeight: SIZES.base * 3,
          }}>
          basket is the no1 online store for {'\n'}   both new and used products.
        </Text>
        <Image
          style={{
            width: SIZES.base * 33,
            height: SIZES.base * 33,
          }}
          source={icons.familyLogo}
        />
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            width: SIZES.padding * 10,
            height: SIZES.base * 5,
            borderRadius: SIZES.base,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: SIZES.base * 5,
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: COLORS.white, ...FONTS.body3, fontWeight: 'bold'}}>
              GET STARTED
            </Text>
            <Image
              style={{
                width: SIZES.base * 4,
                height: SIZES.base * 2,
                left: SIZES.base * 5,
              }}
              source={icons.arrowright}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
