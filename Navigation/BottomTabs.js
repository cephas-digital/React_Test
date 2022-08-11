import {View, Text, Dimensions} from 'react-native';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../Screens/HomeScreen/HomeStack';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import SavedStack from '../Screens/SavedScreen/SavedStack';
import AccountStack from '../Screens/AccountScreen/AccountStack';
import CartStack from '../Screens/CartScreen/CartStack';

const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <View
      style={{
        width,
        height,
      }}>
      <Tab.Navigator
        initialRouteName={HomeStack}
        tabBarOptions={{
          activeTintColor: '#FF8137',
          inactiveTintColor: 'gray',
          labelStyle: {
            paddingBottom: 10,
            fontSize: 10,
            // height: 50,
          },
          style: {
            padding: 10,
            height: 50,
          },
        }}
        screenOptions={({route}) => ({})}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            // tabBarIcon: ({color, size, focused}) => (
            //   <Ionicons name="home" size={30} color={color} />
            // ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Saved',
            // tabBarIcon: ({color, size, focused}) => (
            //   <Ionicons name="ios-layers-outline" size={30} color={color} />
            // ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Account',
            // tabBarIcon: ({color, size}) => (
            //   <Ionicons
            //     name="ios-document-attach-outline"
            //     size={30}
            //     color={color}
            //   />
            // ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Cart',
            // tabBarIcon: ({color, size}) => (
            //   <Ionicons
            //     name="ios-chatbox-ellipses-outline"
            //     size={30}
            //     color={color}
            //   />
            // ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
