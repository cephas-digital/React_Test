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

import IntroSlider from './Screens/AuthScreens/IntroSlider';
import LoginStack from './Screens/AuthScreens/LoginStack';



import { api, apiUrl } from "./Components/shared";
const {width, height} = Dimensions.get('window');



const Stack = createStackNavigator();

const AppStack= () => {


 

  return (
    <View
      style={{
        width,
        height,
      }}>
      <NavigationContainer>
         {/* <Stack.Navigator initialRouteName="LoginStack"> */}

          <Stack.Navigator initialRouteName="LoginStack">
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

        {/* <LoginStack /> */}

        {/* <IntroSlider /> */}

        {/* </Stack.Navigator>   */}

        {/* <BottomTabs /> */}
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AppStack;
