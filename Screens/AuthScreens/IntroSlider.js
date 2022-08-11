import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import {SIZES, COLORS, FONTS, icons, images} from '../../Constants';
import Introduction from './Introduction';

const App = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <ImageBackground
        source={icons.bg2}
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
              width: SIZES.base * 18,
              height: SIZES.base * 18,
            }}
            source={item.image}
          />
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.text}>{item.text1}</Text>
          <Text style={styles.text}>{item.text2}</Text>
          <TouchableOpacity
            style={{backgroundColor: '#55287F'}}
            onPress={onDone}>
            {/* <Image style={styles.next} source={{}} /> */}
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: COLORS.primary,
            fontSize: SIZES.base * 4,
            fontWeight: 'bold',
            marginBottom: SIZES.base * 8,
            // justifyContent: 'center',
            alignSelf: 'center',
            ...FONTS.body2,
            letterSpacing: 2,
          }}>
          Basket Online Marketplace
        </Text>
      </ImageBackground>
    );
  };

  return (
    <>
      {showRealApp ? (
        <Introduction navigation={navigation} />
      ) : (
        <AppIntroSlider
          scrollIndicatorInsets={false}
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const slides = [
  {
    key: 's1',
    text: 'Start Shopping.',
    text1: 'Stay Happy',
    text2: 'Anytime.',
    image: icons.logo,
    // img: icons.next,
  },
  // {
  //   key: 's2',
  //   text: 'Make payment online',
  //   text1: 'Stay Happy.',
  //   text2: 'Anytime.',
  //   image: icons.Logo1,
  //   // img: icons.next,
  // },
  // {
  //   key: 's3',
  //   title: 'Achieve Target',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam adipiscing elit ut aliquam',
  // },
];

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontSize: SIZES.base * 4,
    fontWeight: 'bold',
    marginTop: 20,
    // ...FONTS.body1,
    fontFamily: 'rasa',
  },
});
