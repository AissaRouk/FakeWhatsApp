import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './src/Screens/MainScreen';
import ContactScreen from './src/Screens/ContactScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
