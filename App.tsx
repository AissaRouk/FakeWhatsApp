/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function ContactComponent(): React.JSX.Element {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingLeft: 15,
      }}>
      <Image
        source={require('./src/assets/images/blankProfilePic.png')}
        style={{width: 50, height: 50, borderRadius: 20}} // Specify width and height
      />
      <Text style={{marginLeft: 10, color: 'black', fontSize: 18}}>
        User Name
      </Text>
    </TouchableOpacity>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'green',
          paddingVertical: 20,
          paddingLeft: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
          Messages
        </Text>
      </View>
      <ScrollView>
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
