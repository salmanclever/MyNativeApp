import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import ColorScreen from './src/screens/ColorScreens';

import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ColorScreen" component={ColorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
