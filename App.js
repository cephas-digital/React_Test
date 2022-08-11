import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './Navigation/BottomTabs';
<<<<<<< HEAD
import IntroSlider from './Screens/AuthScreens/IntroSlider';
import LoginStack from './Screens/AuthScreens/LoginStack';
=======
import LoginStack from './Screens/AuthScreens/LoginStack'
>>>>>>> 3f0ad21fbc3ef595e041d89c61aacefd94be13c8

const {width, height} = Dimensions.get('window');

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
};

const Stack = createStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View
      style={{
        width,
        height,
      }}>
      <NavigationContainer>
<<<<<<< HEAD
        {/* <Stack.Navigator initialRouteName="AuthStack">
=======
         <Stack.Navigator initialRouteName="LoginStack">
>>>>>>> 3f0ad21fbc3ef595e041d89c61aacefd94be13c8
          <Stack.Screen
            name="Home"
            component={BottomTabs}
            options={{
              title: null,
              headerShown: false,
              headerStyle: {},
            }}
          />
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{
              title: null,
              headerShown: false,
              headerStyle: {},
            }}
          />
        </Stack.Navigator> 

        {/* <BottomTabs /> */}
<<<<<<< HEAD
        {/* <IntroSlider /> */}
        {/* <LoginStack /> */}
=======
>>>>>>> 3f0ad21fbc3ef595e041d89c61aacefd94be13c8
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
