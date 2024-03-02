/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Contact} from './src/Types/Contact';
import ContactComponent from './src/Components/ContactComponents';
import {faker} from '@faker-js/faker';

function createRandomUser(): Contact {
  return {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    picture: faker.image.urlLoremFlickr({category: 'people'}),
  };
}

function App(): React.JSX.Element {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(prevContacts => {
      const updatedContacts = [];
      for (var i = 0; i < 20; i++) {
        const user: Contact = createRandomUser();
        updatedContacts.push(user);
      }
      return [...prevContacts, ...updatedContacts];
    });
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'green',
          paddingVertical: 20,
          paddingLeft: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
          Messages{' '}
        </Text>
      </View>
      <ScrollView>
        {contacts.map(item => (
          <ContactComponent
            id={item.id}
            key={item.id}
            name={item.name}
            picture={item.picture}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
