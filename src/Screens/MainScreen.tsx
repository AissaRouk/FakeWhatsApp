import {View, Text, ScrollView} from 'react-native';
import ContactComponent from '../Components/ContactComponents';
import {useState, useEffect} from 'react';
import {Contact} from '../Types/Contact';
import createRandomUser from '../Utils/createRandomUser';
import HeaderComponent from '../Components/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import {whiteColor} from '../Utils/genericStyles';
import auth from '@react-native-firebase/auth';

export default function MainScreen({navigation}: any) {
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
      <HeaderComponent>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
          Messages
        </Text>
        <Icon
          name="log-out-outline"
          color={whiteColor}
          size={30}
          style={{marginLeft: 30}}
          onPress={() => auth().signOut()}
        />
      </HeaderComponent>
      <ScrollView>
        {contacts.map(item => (
          <ContactComponent
            key={item.id}
            contact={item}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </>
  );
}
