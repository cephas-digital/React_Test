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

// Screens
import Login from '../LoginScreens/Login';
// import SignUp from './././SignUp';
// import IntroSlider from '../LoginScreens/IntroSlider';
// import Introduction from '../LoginScreens/Introduction';

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
        // initialRouteName="IntroSlider"
        initialRouteName="Login"
        options={{
          headerShown: false,
        }}>
        {/* <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="HomeScreen"
          component={MainContainer}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: true, headerTitle: 'Log in'}}
        />
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: true, headerTitle: 'Create Account'}}
        /> */}

        {/* <Stack.Screen
          name="IntroSlider"
          component={IntroSlider}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </View>
  );
}

export default LoginStack;

// import {View, Text} from 'react-native';
// import React from 'react';

// export default function LoginStack() {
//   return (
//     <View>
//       <Text style={{color: '#5700AB', fontSize: 25, fontWeight: 'bold'}}>
//         LoginStack
//       </Text>
//     </View>
//   );
// }
