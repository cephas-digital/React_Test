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
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: 120,
            height: 120,
          }}
          // source={require('../../assets/icons/')}
        />
        <Text
          style={{
            color: '#55287F',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          RUBIES TECHNOLOGY
        </Text>
        <TouchableOpacity style={{backgroundColor: '#55287F'}} onPress={onDone}>
          {/* <Image style={styles.next} source={{}} /> */}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <Introduction navigation={navigation} />
      ) : (
        <AppIntroSlider
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
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    title: 'Welocme to Rubies',
    // image: images.Intro1,
    // img: icons.next,
  },
  // {
  //   key: 's2',
  //   title: 'Make payment online',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam adipiscing elit ut aliquam',
  //   // image: images.Intro2,
  //   // img: icons.next,
  // },
  // {
  //   key: 's3',
  //   title: 'Achieve Target',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam adipiscing elit ut aliquam',
  // },
];

const styles = StyleSheet.create({});
