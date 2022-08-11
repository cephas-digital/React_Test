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
// import MainContainer from './navigation/MainContainer';
// import {createStackNavigator} from '@react-navigation/stack';
// import LoginStack from './navigation/LoginScreens/LoginStack';
import BottomTabs from './Navigation/BottomTabs';

const {width, height} = Dimensions.get('window');

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
};

// const Stack = createStackNavigator();

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
        {/* <Stack.Navigator initialRouteName="LoginStack">
          <Stack.Screen
            name="Home"
            component={MainContainer}
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
        </Stack.Navigator> */}

        <BottomTabs />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
