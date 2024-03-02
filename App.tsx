import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Contact} from './src/Types/Contact';
import ContactComponent from './src/Components/ContactComponents';
import {faker} from '@faker-js/faker';
import MainScreen from './src/Screens/MainScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <MainScreen />
    </SafeAreaView>
  );
}

export default App;
