import {View, Text, ScrollView} from 'react-native';
import ContactComponent from '../Components/ContactComponents';
import {useState, useEffect} from 'react';
import {Contact} from '../Types/Contact';
import createRandomUser from '../Utils/createRandomUser';

export default function MainScreen() {
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
    <>
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
    </>
  );
}
