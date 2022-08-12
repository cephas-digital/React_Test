import * as React from 'react';
import {
  View,
  Button,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AccountHome from '../AccountScreen/AccountHome';
import BottomTabs from '../../Navigation/BottomTabs';

import IntroSlider from './IntroSlider';
import Introduction from './Introduction';
import Login from './Login';

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();

function LoginStack() {
  return (
    <View
      style={{
        width,
        height,
      }}>
      <Stack.Navigator
        initialRouteName="IntroSlider"
        // initialRouteName="Login"
        options={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false, headerTitle: 'Log in'}}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false, headerTitle: 'Log in'}}
        />

        <Stack.Screen
          name="IntroSlider"
          component={IntroSlider}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
}

export default LoginStack;
