import {View, Text} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import AccountHome from '../AccountScreen/AccountHome';

const Stack = createStackNavigator();

export default function AccountStack() {
  return ( 
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AccountScreen" component={AccountHome} />
    </Stack.Navigator>
  );
}
