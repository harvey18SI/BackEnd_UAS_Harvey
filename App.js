import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Layout1 from './components/Layout1';
import Layout2 from './components/Layout2';
import Layout3 from './components/Layout3';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Layout1"
      screenOptions={{
    headerShown: false
  }}
      >
        <Stack.Screen name="Layout1" component={Layout1} />
        <Stack.Screen name="Layout2" component={Layout2} />
        <Stack.Screen name="Layout3" component={Layout3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
